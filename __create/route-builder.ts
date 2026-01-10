import { Hono } from 'hono';
import type { Handler } from 'hono/types';
import updatedFetch from '../src/__create/fetch';

const API_BASENAME = '/api';
const api = new Hono();

if (globalThis.fetch) {
  globalThis.fetch = updatedFetch;
}

// Changed to use import.meta.glob for both extraction and bundling support in Vercel
const routeModules = import.meta.glob('../src/app/api/**/route.js', { eager: true });

// Helper function to transform glob path to Hono route path
function getHonoPath(filePath: string): { name: string; pattern: string }[] {
  // Normalize path
  const normalized = filePath.replace(/\\/g, '/');

  // Extract relative part after /api/
  const parts = normalized.split('/api/');
  if (parts.length < 2) return [];

  const relativePath = parts[1]; // e.g., "users/[id]/route.js"
  const segments = relativePath.split('/').slice(0, -1); // Remove 'route.js'

  if (segments.length === 0) {
    return [{ name: 'root', pattern: '' }];
  }

  const transformedParts = segments.map((segment) => {
    const match = segment.match(/^\[(\.{3})?([^\]]+)\]$/);
    if (match) {
      const [_, dots, param] = match;
      return dots === '...'
        ? { name: param, pattern: `:${param}{.+}` }
        : { name: param, pattern: `:${param}` };
    }
    return { name: segment, pattern: segment };
  });
  return transformedParts;
}

// Import and register all routes
async function registerRoutes() {
  const routePaths = Object.keys(routeModules).sort((a, b) => b.length - a.length);

  // Clear existing routes
  api.routes = [];

  for (const routePath of routePaths) {
    try {
      const route = routeModules[routePath] as any;
      const methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];

      for (const method of methods) {
        try {
          if (route[method]) {
            const parts = getHonoPath(routePath);
            const honoPath = `/${parts.map(({ pattern }) => pattern).join('/')}`;

            const handler: Handler = async (c) => {
              const params = c.req.param();
              return await route[method](c.req.raw, { params });
            };

            const methodLowercase = method.toLowerCase();
            switch (methodLowercase) {
              case 'get': api.get(honoPath, handler); break;
              case 'post': api.post(honoPath, handler); break;
              case 'put': api.put(honoPath, handler); break;
              case 'delete': api.delete(honoPath, handler); break;
              case 'patch': api.patch(honoPath, handler); break;
              default: console.warn(`Unsupported method: ${method}`); break;
            }
          }
        } catch (error) {
          console.error(`Error registering route ${routePath} for method ${method}:`, error);
        }
      }
    } catch (error) {
      console.error(`Error processing route module ${routePath}:`, error);
    }
  }
}

// Initial route registration
await registerRoutes();

export { api, API_BASENAME };
