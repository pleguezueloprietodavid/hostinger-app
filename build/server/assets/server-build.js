import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { PassThrough } from 'node:stream';
import { createReadableStreamFromReadable } from '@react-router/node';
import { ServerRouter, UNSAFE_withErrorBoundaryProps, UNSAFE_withComponentProps, Outlet, useNavigate, useLocation, Meta, Links, ScrollRestoration, Scripts, useRouteError, useAsyncError } from 'react-router';
import { isbot } from 'isbot';
import { renderToPipeableStream } from 'react-dom/server';
import { forwardRef, useEffect, createElement, useRef, useState, Component, useCallback } from 'react';
import { useButton } from '@react-aria/button';
import { toPng } from 'html-to-image';
import { f as fetchWithHeaders } from './index-BQZPJpxn.js';
import { SessionProvider } from '@hono/auth-js/react';
import { serializeError } from 'serialize-error';
import { toast, Toaster } from 'sonner';
import { create } from 'zustand';
import { useIdleTimer } from 'react-idle-timer';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import _JSXStyle from 'styled-jsx/style.js';
import { ShieldCheck, Send, Star } from 'lucide-react';
import fg from 'fast-glob';
import 'node:async_hooks';
import 'node:console';
import '@auth/core';
import '@auth/core/providers/credentials';
import '@hono/auth-js';
import '@neondatabase/serverless';
import 'argon2';
import 'hono';
import 'hono/context-storage';
import 'hono/cors';
import 'hono/proxy';
import 'hono/body-limit';
import 'hono/request-id';
import 'hono/factory';
import '@hono/node-server';
import '@hono/node-server/serve-static';
import 'hono/logger';
import 'ws';
import '@auth/core/jwt';
import 'node:fs/promises';
import 'node:path';
import 'node:url';

const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}

const entryServer = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: 'Module' }));

const JSX_RENDER_ID_ATTRIBUTE_NAME = "data-render-id";
function buildGridPlaceholder(w, h) {
  const size = Math.max(w, h);
  const svg = `
    <svg width="${size}" height="${size}" viewBox="0 0 895 895" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="895" height="895" fill="#E9E7E7"/>
<g>
<line x1="447.505" y1="-23" x2="447.505" y2="901" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="447.505" x2="5.66443" y2="447.505" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="278.068" x2="5.66443" y2="278.068" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="57.1505" x2="5.66443" y2="57.1504" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="61.8051" y1="883.671" x2="61.8051" y2="6.10572e-05" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="282.495" y1="907" x2="282.495" y2="-30" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="611.495" y1="907" x2="611.495" y2="-30" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="832.185" y1="883.671" x2="832.185" y2="6.10572e-05" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="827.53" x2="5.66443" y2="827.53" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="606.613" x2="5.66443" y2="606.612" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="4.3568" y1="4.6428" x2="889.357" y2="888.643" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="-0.3568" y1="894.643" x2="894.643" y2="0.642772" stroke="#C0C0C0" stroke-width="1.00975"/>
<circle cx="447.5" cy="441.5" r="163.995" stroke="#C0C0C0" stroke-width="1.00975"/>
<circle cx="447.911" cy="447.911" r="237.407" stroke="#C0C0C0" stroke-width="1.00975"/>
<circle cx="448" cy="442" r="384.495" stroke="#C0C0C0" stroke-width="1.00975"/>
</g>
</svg>
`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
function useOptionalRef(ref) {
  const fallbackRef = useRef(null);
  if (ref && "instance" in ref) return fallbackRef;
  return ref ?? fallbackRef;
}
const CreatePolymorphicComponent = /* @__PURE__ */ forwardRef(
  // @ts-ignore
  function CreatePolymorphicComponentRender({
    as,
    children,
    renderId,
    onError,
    ...rest
  }, forwardedRef) {
    const props = as === "img" ? {
      ...rest,
      // keep the original type of onError for <img>
      onError: (e) => {
        if (typeof onError === "function") onError(e);
        const img = e.currentTarget;
        const {
          width,
          height
        } = img.getBoundingClientRect();
        img.dataset.hasFallback = "1";
        img.onerror = null;
        img.src = buildGridPlaceholder(Math.round(width) || 128, Math.round(height) || 128);
        img.style.objectFit = "cover";
      }
    } : rest;
    const ref = useOptionalRef(forwardedRef);
    useEffect(() => {
      const el = ref && "current" in ref ? ref.current : null;
      if (!el) return;
      if (as !== "img") {
        const placeholder = () => {
          const {
            width,
            height
          } = el.getBoundingClientRect();
          return buildGridPlaceholder(Math.round(width) || 128, Math.round(height) || 128);
        };
        const applyBgFallback = () => {
          el.dataset.hasFallback = "1";
          el.style.backgroundImage = `url("${placeholder()}")`;
          el.style.backgroundSize = "cover";
        };
        const probeBg = () => {
          const bg = getComputedStyle(el).backgroundImage;
          const match = /url\(["']?(.+?)["']?\)/.exec(bg);
          const src = match?.[1];
          if (!src) return;
          const probe = new Image();
          probe.onerror = applyBgFallback;
          probe.src = src;
        };
        probeBg();
        const ro2 = new ResizeObserver(([entry]) => {
          if (!el.dataset.hasFallback) return;
          const {
            width,
            height
          } = entry.contentRect;
          el.style.backgroundImage = `url("${buildGridPlaceholder(Math.round(width) || 128, Math.round(height) || 128)}")`;
        });
        ro2.observe(el);
        const mo = new MutationObserver(probeBg);
        mo.observe(el, {
          attributes: true,
          attributeFilter: ["style", "class"]
        });
        return () => {
          ro2.disconnect();
          mo.disconnect();
        };
      }
      if (!el.dataset.hasFallback) return;
      const ro = new ResizeObserver(([entry]) => {
        const {
          width,
          height
        } = entry.contentRect;
        el.src = buildGridPlaceholder(Math.round(width) || 128, Math.round(height) || 128);
      });
      ro.observe(el);
      return () => ro.disconnect();
    }, [as, ref]);
    return /* @__PURE__ */ createElement(as, Object.assign({}, props, {
      ref,
      ...renderId ? {
        [JSX_RENDER_ID_ATTRIBUTE_NAME]: renderId
      } : void 0
    }), children);
  }
);

function LoadFonts() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=block" }) });
}

const useSandboxStore = create((set, get) => ({
  status: "idle",
  isGenerating: false,
  hasError: false,
  setStatus: (status) => set({
    status,
    isGenerating: status === "codegen-started" || status === "codegen-generating",
    hasError: status === "codegen-error"
  }),
  startCodeGen: () => get().setStatus("codegen-started"),
  setCodeGenGenerating: () => get().setStatus("codegen-generating"),
  completeCodeGen: () => get().setStatus("codegen-complete"),
  errorCodeGen: () => get().setStatus("codegen-error"),
  stopCodeGen: () => get().setStatus("codegen-stopped"),
  resetToIdle: () => get().setStatus("idle")
}));

function HotReloadIndicator() {
  const {
    status: sandboxStatus
  } = useSandboxStore();
  useEffect(() => {
    return;
  }, []);
  useEffect(() => {
    const toastStyle = {
      padding: "16px",
      background: "#18191B",
      border: "1px solid #2C2D2F",
      color: "white",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      width: "var(--width)",
      fontSize: "13px",
      display: "flex",
      alignItems: "center",
      gap: "6px"
    };
    switch (sandboxStatus) {
      case "codegen-started":
      case "codegen-generating":
        toast.custom(() => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          style: {
            ...toastStyle,
            padding: "10px"
          },
          renderId: "render-6105b8e8",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            src: "https://www.createanything.com/images/anything-logo-loading-state-white.gif",
            alt: "loading",
            className: "w-8 h-8",
            renderId: "render-d00cb46e",
            as: "img"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            renderId: "render-1e261863",
            as: "span",
            children: "Updating"
          })]
        }), {
          id: "sandbox-codegen",
          duration: 3e3
        });
        break;
      case "codegen-complete":
        toast.custom(() => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          style: toastStyle,
          renderId: "render-b638eac1",
          as: "div",
          children: [/* @__PURE__ */ jsxs("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
            children: [/* @__PURE__ */ jsx("title", {
              children: "Success"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              fillRule: "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
              clipRule: "evenodd",
              renderId: "render-87127a30",
              as: "path"
            })]
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            renderId: "render-ba555c43",
            as: "span",
            children: "Updated successfully"
          })]
        }), {
          id: "sandbox-codegen",
          duration: 3e3
        });
        break;
      case "codegen-error":
        toast.custom(() => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          style: toastStyle,
          renderId: "render-e1753286",
          as: "div",
          children: [/* @__PURE__ */ jsxs("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            height: "20",
            width: "20",
            children: [/* @__PURE__ */ jsx("title", {
              children: "Error"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              fillRule: "evenodd",
              d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
              clipRule: "evenodd",
              renderId: "render-1b24c519",
              as: "path"
            })]
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            renderId: "render-21f1de77",
            as: "span",
            children: "Update failed"
          })]
        }), {
          id: "sandbox-codegen",
          duration: 5e3
        });
        break;
    }
    return () => {
    };
  }, [sandboxStatus]);
  return null;
}

function useDevServerHeartbeat() {
  useIdleTimer({
    throttle: 6e4 * 3,
    timeout: 6e4,
    onAction: () => {
      fetch("/", {
        method: "GET"
      }).catch((error) => {
      });
    }
  });
}

const links = () => [];
if (globalThis.window && globalThis.window !== void 0) {
  globalThis.window.fetch = fetchWithHeaders;
}
const LoadFontsSSR = LoadFonts ;
function SharedErrorBoundary({
  isOpen,
  children
}) {
  return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
    className: `fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`,
    renderId: "render-d7817a3b",
    as: "div",
    children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "bg-[#18191B] text-[#F2F2F2] rounded-lg p-4 max-w-md w-full mx-4 shadow-lg",
      renderId: "render-4a549103",
      as: "div",
      children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "flex items-start gap-3",
        renderId: "render-2c8fa43a",
        as: "div",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "flex-shrink-0",
          renderId: "render-e1a424b0",
          as: "div",
          children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "w-8 h-8 bg-[#F2F2F2] rounded-full flex items-center justify-center",
            renderId: "render-1f175282",
            as: "div",
            children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-black text-[1.125rem] leading-none",
              renderId: "render-2d011751",
              as: "span",
              children: "!"
            })
          })
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "flex flex-col gap-2 flex-1",
          renderId: "render-62da22cd",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "flex flex-col gap-1",
            renderId: "render-944f60bd",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "font-light text-[#F2F2F2] text-sm",
              renderId: "render-54910a3e",
              as: "p",
              children: "App Error Detected"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-[#959697] text-sm font-light",
              renderId: "render-60f9351b",
              as: "p",
              children: "It looks like an error occurred while trying to use your app."
            })]
          }), children]
        })]
      })
    })
  });
}
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  return /* @__PURE__ */ jsx(SharedErrorBoundary, {
    isOpen: true
  });
});
function InternalErrorBoundary({
  error: errorArg
}) {
  const routeError = useRouteError();
  const asyncError = useAsyncError();
  const error = errorArg ?? asyncError ?? routeError;
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const animateTimer = setTimeout(() => setIsOpen(true), 100);
    return () => clearTimeout(animateTimer);
  }, []);
  const {
    buttonProps: showLogsButtonProps
  } = useButton({
    onPress: useCallback(() => {
      window.parent.postMessage({
        type: "sandbox:web:show-logs"
      }, "*");
    }, [])
  }, useRef(null));
  const {
    buttonProps: fixButtonProps
  } = useButton({
    onPress: useCallback(() => {
      window.parent.postMessage({
        type: "sandbox:web:fix",
        error: serializeError(error)
      }, "*");
      setIsOpen(false);
    }, [error]),
    isDisabled: !error
  }, useRef(null));
  const {
    buttonProps: copyButtonProps
  } = useButton({
    onPress: useCallback(() => {
      navigator.clipboard.writeText(JSON.stringify(serializeError(error)));
    }, [error])
  }, useRef(null));
  function isInIframe() {
    try {
      return window.parent !== window;
    } catch {
      return true;
    }
  }
  return /* @__PURE__ */ jsx(SharedErrorBoundary, {
    isOpen,
    children: isInIframe() ? /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "flex gap-2",
      renderId: "render-163b86e2",
      as: "div",
      children: [!!error && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "flex flex-row items-center justify-center gap-[4px] outline-none transition-colors rounded-[8px] border-[1px] bg-[#f9f9f9] hover:bg-[#dbdbdb] active:bg-[#c4c4c4] border-[#c4c4c4] text-[#18191B] text-sm px-[8px] py-[4px] cursor-pointer",
        type: "button",
        ...fixButtonProps,
        renderId: "render-db491387",
        as: "button",
        children: "Try to fix"
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "flex flex-row items-center justify-center gap-[4px] outline-none transition-colors rounded-[8px] border-[1px] bg-[#2C2D2F] hover:bg-[#414243] active:bg-[#555658] border-[#414243] text-white text-sm px-[8px] py-[4px]",
        type: "button",
        ...showLogsButtonProps,
        renderId: "render-899b0148",
        as: "button",
        children: "Show logs"
      })]
    }) : /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "flex flex-row items-center justify-center gap-[4px] outline-none transition-colors rounded-[8px] border-[1px] bg-[#2C2D2F] hover:bg-[#414243] active:bg-[#555658] border-[#414243] text-white text-sm px-[8px] py-[4px] w-fit",
      type: "button",
      ...copyButtonProps,
      renderId: "render-c6e321d2",
      as: "button",
      children: "Copy error"
    })
  });
}
class ErrorBoundaryWrapper extends Component {
  state = {
    hasError: false,
    error: null
  };
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error, info) {
    console.error(error, info);
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsx(InternalErrorBoundary, {
        error: this.state.error,
        params: {}
      });
    }
    return this.props.children;
  }
}
function LoaderWrapper({
  loader
}) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: loader()
  });
}
const ClientOnly = ({
  loader
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return /* @__PURE__ */ jsx(ErrorBoundaryWrapper, {
    children: /* @__PURE__ */ jsx(LoaderWrapper, {
      loader
    })
  });
};
function useHmrConnection() {
  const [connected, setConnected] = useState(() => false);
  useEffect(() => {
    return;
  }, []);
  return connected;
}
const healthyResponseType = "sandbox:web:healthcheck:response";
const useHandshakeParent = () => {
  const isHmrConnected = useHmrConnection();
  useEffect(() => {
    const healthyResponse = {
      type: healthyResponseType,
      healthy: isHmrConnected
    };
    const handleMessage = (event) => {
      if (event.data.type === "sandbox:web:healthcheck") {
        window.parent.postMessage(healthyResponse, "*");
      }
    };
    window.addEventListener("message", handleMessage);
    window.parent.postMessage(healthyResponse, "*");
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [isHmrConnected]);
};
const useCodeGen = () => {
  const {
    startCodeGen,
    setCodeGenGenerating,
    completeCodeGen,
    errorCodeGen,
    stopCodeGen
  } = useSandboxStore();
  useEffect(() => {
    const handleMessage = (event) => {
      const {
        type
      } = event.data;
      switch (type) {
        case "sandbox:web:codegen:started":
          startCodeGen();
          break;
        case "sandbox:web:codegen:generating":
          setCodeGenGenerating();
          break;
        case "sandbox:web:codegen:complete":
          completeCodeGen();
          break;
        case "sandbox:web:codegen:error":
          errorCodeGen();
          break;
        case "sandbox:web:codegen:stopped":
          stopCodeGen();
          break;
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [startCodeGen, setCodeGenGenerating, completeCodeGen, errorCodeGen, stopCodeGen]);
};
const useRefresh = () => {
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === "sandbox:web:refresh:request") {
        setTimeout(() => {
          window.location.reload();
        }, 1e3);
        window.parent.postMessage({
          type: "sandbox:web:refresh:complete"
        }, "*");
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
};
const waitForScreenshotReady = async () => {
  const images = Array.from(document.images);
  await Promise.all([
    // make sure custom fonts are loaded
    "fonts" in document ? document.fonts.ready : Promise.resolve(),
    ...images.map((img) => new Promise((resolve) => {
      img.crossOrigin = "anonymous";
      if (img.complete) {
        resolve(true);
        return;
      }
      img.onload = () => resolve(true);
      img.onerror = () => resolve(true);
    }))
  ]);
  await new Promise((resolve) => setTimeout(resolve, 250));
};
const useHandleScreenshotRequest = () => {
  useEffect(() => {
    const handleMessage = async (event) => {
      if (event.data.type === "sandbox:web:screenshot:request") {
        try {
          await waitForScreenshotReady();
          const width = window.innerWidth;
          const aspectRatio = 16 / 9;
          const height = Math.floor(width / aspectRatio);
          const dataUrl = await toPng(document.body, {
            cacheBust: true,
            skipFonts: false,
            width,
            height,
            style: {
              // force snapshot sizing
              width: `${width}px`,
              height: `${height}px`,
              margin: "0"
            }
          });
          window.parent.postMessage({
            type: "sandbox:web:screenshot:response",
            dataUrl
          }, "*");
        } catch (error) {
          window.parent.postMessage({
            type: "sandbox:web:screenshot:error",
            error: error instanceof Error ? error.message : String(error)
          }, "*");
        }
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
};
function Layout({
  children
}) {
  useHandshakeParent();
  useCodeGen();
  useRefresh();
  useHandleScreenshotRequest();
  useDevServerHeartbeat();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location?.pathname;
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === "sandbox:navigation") {
        navigate(event.data.pathname);
      }
    };
    window.addEventListener("message", handleMessage);
    window.parent.postMessage({
      type: "sandbox:web:ready"
    }, "*");
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [navigate]);
  useEffect(() => {
    if (pathname) {
      window.parent.postMessage({
        type: "sandbox:web:navigation",
        pathname
      }, "*");
    }
  }, [pathname]);
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {}), /* @__PURE__ */ jsx("script", {
        type: "module",
        src: "/src/__create/dev-error-overlay.js"
      }), /* @__PURE__ */ jsx("link", {
        rel: "icon",
        href: "/src/__create/favicon.png"
      }), LoadFontsSSR ? /* @__PURE__ */ jsx(LoadFontsSSR, {}) : null]
    }), /* @__PURE__ */ jsxs("body", {
      children: [/* @__PURE__ */ jsx(ClientOnly, {
        loader: () => children
      }), /* @__PURE__ */ jsx(HotReloadIndicator, {}), /* @__PURE__ */ jsx(Toaster, {
        position: "bottom-right"
      }), /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {}), /* @__PURE__ */ jsx("script", {
        src: "https://kit.fontawesome.com/2c15cc0cc7.js",
        crossOrigin: "anonymous",
        async: true
      })]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(SessionProvider, {
    children: /* @__PURE__ */ jsx(Outlet, {})
  });
});

const route0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ClientOnly,
  ErrorBoundary,
  Layout,
  default: root,
  links,
  useHandleScreenshotRequest,
  useHmrConnection
}, Symbol.toStringTag, { value: 'Module' }));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1e3 * 60 * 5,
      // 5 minutes
      cacheTime: 1e3 * 60 * 30,
      // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false
    }
  }
});
function RootLayout({
  children
}) {
  return /* @__PURE__ */ jsx(QueryClientProvider, {
    client: queryClient,
    children
  });
}

function PuntaClick() {
  const [activeSection, setActiveSection] = useState("transporte");
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const excursiones = [{
    nombre: "Tour a Isla Saona: Piscina Natural, barra libre y comida con transporte incluido",
    descripcion: "Descubre la joya del Caribe en una experiencia exclusiva. Navega en catamarán privado con barra libre, relájate en playas de arena blanca virgen y disfruta de las famosas piscinas naturales con estrellas de mar.",
    imagen: "/images/excursions/saona.png"
  }, {
    nombre: "Adventure Buggies: Ruta Selvática & Playa Macao",
    descripcion: "Adrenalina pura conduciendo tu propio buggy a través de senderos tropicales. Explora cuevas indígenas, sumérgete en manantiales ocultos y termina la aventura en la espectacular Playa Macao.",
    imagen: "/images/excursions/buggy.png"
  }, {
    nombre: "Catamarán Bávaro (Party Boat): Snorkel en Arrecife, barra libre y fiesta caribeña con transporte incluido",
    descripcion: "La combinación perfecta de relax y diversión. Explora vibrantes arrecifes de coral, nada con peces tropicales y disfruta de una fiesta a bordo con bebidas premium bajo el sol del Caribe.",
    imagen: "/images/excursions/catamaran-party-boat.png"
  }, {
    nombre: "Scape Park en Cap Cana: Aventura Natural",
    descripcion: "Un parque ecológico de clase mundial. Lánzate en tirolesas sobre el bosque, explora cavernas antiguas y refréscate en el mundialmente famoso Hoyo Azul, un cenote de aguas turquesas indescriptibles.",
    imagen: "/images/scape-park.jpg"
  }, {
    nombre: "Coco Bongo: El Show Nocturno Definitivo",
    descripcion: "Más que una discoteca, un espectáculo de talla mundial. Acróbatas, tributos musicales, luces y una energía inigualable te esperan en la noche más legendaria de Punta Cana.",
    imagen: "/images/coco-bongo.jpg"
  }, {
    nombre: "Monkeyland: Encuentro con Monos y Plantación de cacao con transporte incluido",
    descripcion: "Sumérgete en su divertido mundo mientras admiras el paisaje montañoso. No olvides visitar la plantación de café y cacao para degustar los exquisitos sabores locales.",
    imagen: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800&h=600&fit=crop"
  }, {
    nombre: "Samaná: Avistamiento de ballenas y tour a Cayo Levantado desde Punta Cana. Recogida en el hotel incluida",
    descripcion: "Observa ballenas jorobadas en libertad, una opción fantástica para los amantes de la naturaleza, con parada en Cayo Levantado (Isla Bacardí).",
    imagen: "/images/excursions/samana-ballenas.jpg"
  }, {
    nombre: "City Tour en Santo Domingo: Una Visita Histórica y Cultural con Comida y Transporte incluido",
    descripcion: "Conoce la historia de República Dominicana. Visita los lugares más representativos de Santo Domingo y disfruta de una comida tradicional.",
    imagen: "/images/excursions/city-tour-santo-domingo.jpg"
  }, {
    nombre: "Tour a Isla Catalina: Piscina natural, Snorkel, comida y transporte incluido",
    descripcion: "Visita la impresionante Isla Catalina, donde podrás relajarte en un ambiente tranquilo y disfrutar de un delicioso buffet con barra libre de bebidas.",
    imagen: "/images/excursions/isla-catalina.jpg"
  }, {
    nombre: "Pesca de Altura",
    descripcion: "Como pescador, experimentarás la técnica de pesca trolling, con cañas listas y hoyos de seguridad, esperando a que un pez muerda el anzuelo. Enfrentarás especies como el pez dorado, barracuda, marlín blanco, marlín azul y muchas otras. Como observador, podrás acompañar a tus amigos o familiares que pescarán y disfrutar de la impresionante vista del océano Atlántico.",
    imagen: "/images/excursions/pesca-de-altura.jpg"
  }, {
    nombre: "Ruta a Caballo",
    descripcion: "Participa en un paseo encantador y disfruta de una agradable experiencia de cabalgar en un entorno fascinante, donde descubrirás las maravillas naturales de Punta Cana.",
    imagen: "/images/excursions/ruta-a-caballo.jpg"
  }];
  const toursPersonalizados = [{
    nombre: "Restaurante Capitán Cook",
    descripcion: "Restaurante de mariscos reconocido, ideal para disfrutar de pescado y marisco fresco frente al mar, en un ambiente relajado y frecuentado por locales.",
    imagen: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=800&auto=format&fit=crop"
  }, {
    nombre: "Restaurante Noah",
    descripcion: "Restaurante moderno en Punta Cana que fusiona cocina internacional y caribeña, con platos creativos y un ambiente elegante muy valorado por locales y visitantes.",
    imagen: "/images/tours/noah-restaurant-v2.jpg"
  }, {
    nombre: "Playa Escondida y Virgen",
    descripcion: "Visita una playa escondida y virgen, lejos de las multitudes, donde podrás disfrutar del Caribe en su estado más natural y exclusivo.",
    imagen: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=800&auto=format&fit=crop"
  }, {
    nombre: "Restaurante Casa Galicia",
    descripcion: "Cocina española auténtica en Punta Cana, con especialidades como pulpo a la gallega y jamón ibérico, en un ambiente tradicional frecuentado por locales.",
    imagen: "/images/tours/casa-galicia-v2.jpg"
  }];
  const testimonios = [{
    nombre: "María González",
    ubicacion: "Madrid, España",
    comentario: "Increíble experiencia en Isla Saona. El proceso de reserva por WhatsApp fue súper fácil y el servicio excelente. ¡Totalmente recomendado!",
    avatar: "https://i.pravatar.cc/150?img=5"
  }, {
    nombre: "Carlos Ramírez",
    ubicacion: "Buenos Aires, Argentina",
    comentario: "El transporte desde el aeropuerto fue puntual y cómodo. La facilidad de 'reserva ahora, paga después' nos dio mucha tranquilidad.",
    avatar: "https://i.pravatar.cc/150?img=12"
  }, {
    nombre: "Ana Silva",
    ubicacion: "Ciudad de México, México",
    comentario: "Hicimos el tour de Buggies VIP y fue espectacular. PuntaClick nos ayudó con todo, respuesta rápida por WhatsApp. ¡Volveremos!",
    avatar: "https://i.pravatar.cc/150?img=9"
  }, {
    nombre: "Roberto Fernández",
    ubicacion: "Barcelona, España",
    comentario: "Coco Bongo fue la mejor noche de nuestras vacaciones. Gracias a PuntaClick por la gestión rápida y sin complicaciones.",
    avatar: "https://i.pravatar.cc/150?img=13"
  }, {
    nombre: "Laura Medina",
    ubicacion: "Bogotá, Colombia",
    comentario: "Monkeyland con mi familia fue una experiencia única. El trato personalizado por WhatsApp hizo todo más fácil. 100% recomendado.",
    avatar: "https://i.pravatar.cc/150?img=10"
  }, {
    nombre: "Diego Torres",
    ubicacion: "Lima, Perú",
    comentario: "Excelente servicio de principio a fin. La excursión a Santo Domingo fue educativa y divertida. PuntaClick es muy profesional.",
    avatar: "https://i.pravatar.cc/150?img=14"
  }];
  const handleTransporteReserva = () => {
    const mensaje = `Hola, quiero reservar un transporte en Punta Cana. Origen: ${origen || "[Por definir]"} – Destino: ${destino || "[Por definir]"}. Reserva ahora, paga después.`;
    const url = `https://wa.me/18493972241?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };
  const handleExcursionReserva = (nombreExcursion) => {
    const mensaje = `Hola, quiero información y reservar la excursión ${nombreExcursion}. Reserva ahora, paga después.`;
    const url = `https://wa.me/18493972241?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };
  const handleTourPersonalizadoReserva = (nombreTour) => {
    const mensaje = `Hola, me interesa el tour personalizado: ${nombreTour}. Quisiera más detalles.`;
    const url = `https://wa.me/18493972241?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    className: "jsx-2811380329 min-h-screen bg-gradient-to-b from-[#E8F4F8] to-white font-inter",
    renderId: "render-bd22d3ba",
    as: "div",
    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "jsx-2811380329 bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm",
      renderId: "render-222e13a8",
      as: "header",
      children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "jsx-2811380329 max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6",
        renderId: "render-cf84eb0a",
        as: "div",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-2811380329 flex flex-col sm:flex-row items-center justify-between gap-4",
          renderId: "render-46be3773",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-2811380329 flex items-center gap-3",
            renderId: "render-9582e3a0",
            as: "div",
            children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              src: "https://ucarecdn.com/206a00a3-7688-49c2-ae37-136884eebe2b/-/format/auto/",
              alt: "PuntaClick Logo",
              className: "jsx-2811380329 h-20 sm:h-24 w-auto",
              renderId: "render-e867b0f9",
              as: "img"
            })
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2811380329 group flex items-center gap-3 bg-white border border-[#E0F7FA] shadow-[0_2px_15px_-3px_rgba(0,188,212,0.15)] px-6 py-2.5 rounded-full hover:shadow-[0_4px_20px_-4px_rgba(0,188,212,0.2)] transition-all duration-300 backdrop-blur-sm",
            renderId: "render-5de7f4d6",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2811380329 bg-[#E0F7FA] p-1.5 rounded-full group-hover:bg-[#B2EBF2] transition-colors",
              renderId: "render-f95a70f8",
              as: "div",
              children: /* @__PURE__ */ jsx(ShieldCheck, {
                className: "h-4 w-4 text-[#00BCD4]",
                strokeWidth: 2.5
              })
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "jsx-2811380329 text-gray-700 font-medium text-sm sm:text-base tracking-wide",
              renderId: "render-e4593dac",
              as: "p",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "jsx-2811380329 font-bold text-[#0097A7]",
                renderId: "render-cb312859",
                as: "span",
                children: "Reserva ahora"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "jsx-2811380329 mx-1.5 text-gray-300",
                renderId: "render-18ac0899",
                as: "span",
                children: "|"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "jsx-2811380329 text-gray-500",
                renderId: "render-b2e22f4a",
                as: "span",
                children: "Paga después"
              })]
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "jsx-2811380329 relative w-full h-[350px] sm:h-[450px] lg:h-[550px] overflow-hidden",
      renderId: "render-8998f9df",
      as: "div",
      children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "jsx-2811380329 absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10",
        renderId: "render-4b4d6ab6",
        as: "div"
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        src: "/images/hero-banner.png",
        alt: "Punta Cana Luxury Beach",
        className: "jsx-2811380329 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-[20s] ease-linear",
        renderId: "render-97400342",
        as: "img"
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "jsx-2811380329 absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 mt-8",
        renderId: "render-a48f17f1",
        as: "div",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-2811380329 bg-white/10 backdrop-blur-sm p-6 sm:p-10 rounded-2xl border border-white/20 shadow-2xl max-w-3xl animate-fade-in-up",
          renderId: "render-0823a231",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-2811380329 text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-tight",
            renderId: "render-5b170abe",
            as: "h1",
            children: "Vive Punta Cana"
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2811380329 text-lg sm:text-xl text-white/95 font-medium drop-shadow-md leading-relaxed",
            renderId: "render-2f9f21b7",
            as: "p",
            children: ["Transporte VIP y las mejores excursiones en un solo lugar.", /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2811380329 hidden sm:block",
              renderId: "render-828276e2",
              as: "br"
            }), "Tu aventura de lujo comienza aquí."]
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "jsx-2811380329 relative z-20 -mt-16 sm:-mt-24 pb-8 sm:pb-12",
      renderId: "render-556e8ac8",
      as: "nav",
      children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "jsx-2811380329 max-w-7xl mx-auto px-4 sm:px-6",
        renderId: "render-f7c1954d",
        as: "div",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-2811380329 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto",
          renderId: "render-ecb00a1a",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            onClick: () => setActiveSection("transporte"),
            className: `jsx-2811380329 group relative h-48 sm:h-64 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 shadow-xl ${activeSection === "transporte" ? "ring-4 ring-[#00BCD4] ring-offset-4 ring-offset-white transform scale-[1.02]" : "hover:scale-[1.02] hover:shadow-2xl opacity-90 hover:opacity-100"}`,
            renderId: "render-eb4081e3",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2811380329 absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10",
              renderId: "render-005e667e",
              as: "div"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              src: "/images/transport-card.png",
              alt: "Transporte Privado",
              className: "jsx-2811380329 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
              renderId: "render-e02b0850",
              as: "img"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2811380329 absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-8",
              renderId: "render-cacd2ebd",
              as: "div",
              children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "jsx-2811380329 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300",
                renderId: "render-1d20ce01",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "jsx-2811380329 text-2xl sm:text-3xl font-bold text-white mb-2 shadow-sm",
                  renderId: "render-ae28477e",
                  as: "h3",
                  children: "Traslados VIP"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: `jsx-2811380329 mt-2 px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white font-semibold text-sm transition-all duration-300 ${activeSection === "transporte" ? "bg-[#00BCD4] border-transparent" : "group-hover:bg-white group-hover:text-black"}`,
                  renderId: "render-aab33793",
                  as: "button",
                  children: "Reservar ahora"
                })]
              })
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            onClick: () => setActiveSection("excursiones"),
            className: `jsx-2811380329 group relative h-48 sm:h-64 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 shadow-xl ${activeSection === "excursiones" ? "ring-4 ring-[#00BCD4] ring-offset-4 ring-offset-white transform scale-[1.02]" : "hover:scale-[1.02] hover:shadow-2xl opacity-90 hover:opacity-100"}`,
            renderId: "render-9c3c73a6",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2811380329 absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10",
              renderId: "render-502d3a6a",
              as: "div"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              src: "/images/excursion-card.png",
              alt: "Excursiones Tours",
              className: "jsx-2811380329 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
              renderId: "render-e20dd58e",
              as: "img"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2811380329 absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-8",
              renderId: "render-e6060f78",
              as: "div",
              children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "jsx-2811380329 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300",
                renderId: "render-c4bdcfa2",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "jsx-2811380329 text-2xl sm:text-3xl font-bold text-white mb-2 shadow-sm",
                  renderId: "render-60170c44",
                  as: "h3",
                  children: "Excursiones"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: `jsx-2811380329 mt-2 px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white font-semibold text-sm transition-all duration-300 ${activeSection === "excursiones" ? "bg-[#00BCD4] border-transparent" : "group-hover:bg-white group-hover:text-black"}`,
                  renderId: "render-86558437",
                  as: "button",
                  children: "Ver aventuras"
                })]
              })
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "jsx-2811380329 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12",
      renderId: "render-5eb26e24",
      as: "main",
      children: [activeSection === "transporte" && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "jsx-2811380329 max-w-2xl mx-auto",
        renderId: "render-07d10401",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-2811380329 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden",
          renderId: "render-3f9f9edf",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2811380329 bg-gradient-to-r from-[#00BCD4] to-[#0097A7] px-6 py-5",
            renderId: "render-9fc198e7",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2811380329 text-xl sm:text-2xl font-bold text-white",
              renderId: "render-5fd668fb",
              as: "h2",
              children: "Reserva tu Transporte"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2811380329 text-white/90 text-sm mt-1",
              renderId: "render-cbcb302b",
              as: "p",
              children: "Completa los datos y te contactamos por WhatsApp"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2811380329 p-6 sm:p-8 space-y-6",
            renderId: "render-582757a5",
            as: "div",
            children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "jsx-2811380329",
              renderId: "render-b6338f54",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "jsx-2811380329 block text-sm font-semibold text-gray-700 mb-2",
                renderId: "render-555a0df1",
                as: "label",
                children: "Origen"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                type: "text",
                value: origen,
                onChange: (e) => setOrigen(e.target.value),
                placeholder: "Ej: Aeropuerto de Punta Cana",
                className: "jsx-2811380329 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCD4] focus:border-transparent text-gray-700 text-base",
                renderId: "render-964a45d3",
                as: "input"
              })]
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "jsx-2811380329",
              renderId: "render-787dc433",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "jsx-2811380329 block text-sm font-semibold text-gray-700 mb-2",
                renderId: "render-3df1c9b7",
                as: "label",
                children: "Destino"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                type: "text",
                value: destino,
                onChange: (e) => setDestino(e.target.value),
                placeholder: "Ej: Hotel Barceló Bávaro",
                className: "jsx-2811380329 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCD4] focus:border-transparent text-gray-700 text-base",
                renderId: "render-28d6be04",
                as: "input"
              })]
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              onClick: handleTransporteReserva,
              className: "jsx-2811380329 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-4 px-6 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3 text-base sm:text-lg",
              renderId: "render-8fe5f815",
              as: "button",
              children: [/* @__PURE__ */ jsx(Send, {
                className: "h-5 w-5"
              }), "Reservar por WhatsApp"]
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2811380329 text-xs text-gray-500 text-center",
              renderId: "render-dbd75af1",
              as: "p",
              children: "Te enviaremos un mensaje automático a WhatsApp con tu solicitud"
            })]
          })]
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "jsx-2811380329 mt-8 sm:mt-12",
          renderId: "render-5a6f9c85",
          as: "div",
          children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2811380329 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6",
            renderId: "render-f2cf7cbb",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2811380329 traslado-img traslado-img-3 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow",
              renderId: "render-33315d6a",
              as: "div",
              children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                src: "https://ucarecdn.com/e9974edc-af86-494d-af97-3b33de480c90/-/format/auto/",
                alt: "Transporte premium PuntaClick",
                className: "jsx-2811380329 w-full h-64 object-cover",
                renderId: "render-c3c190f6",
                as: "img"
              })
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2811380329 traslado-img traslado-img-1 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow",
              renderId: "render-b16c50e9",
              as: "div",
              children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                src: "/images/transport/transport-1.jpg",
                alt: "Transporte Privado Interior",
                className: "jsx-2811380329 w-full h-64 object-cover",
                renderId: "render-038615a4",
                as: "img"
              })
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2811380329 traslado-img traslado-img-2 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow",
              renderId: "render-1f99cfc6",
              as: "div",
              children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                src: "/images/transport/transport-2.jpg",
                alt: "Chofer Profesional",
                className: "jsx-2811380329 w-full h-64 object-cover",
                renderId: "render-e201e18a",
                as: "img"
              })
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2811380329 traslado-img traslado-img-1 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow",
              renderId: "render-8693ab22",
              as: "div",
              children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                src: "/images/transport/transport-4.jpg",
                alt: "Familia en Transporte",
                className: "jsx-2811380329 w-full h-64 object-cover",
                renderId: "render-05dfa16b",
                as: "img"
              })
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2811380329 traslado-img traslado-img-2 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow",
              renderId: "render-1e25da24",
              as: "div",
              children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                src: "/images/transport/transport-5.jpg",
                alt: "Servicio de Equipaje",
                className: "jsx-2811380329 w-full h-64 object-cover",
                renderId: "render-f4013684",
                as: "img"
              })
            })]
          })
        })]
      }), activeSection === "excursiones" && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "jsx-2811380329",
        renderId: "render-ac7d415f",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-2811380329 text-center mb-8",
          renderId: "render-1e4154b4",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-2811380329 text-2xl sm:text-3xl font-bold text-gray-800 mb-2",
            renderId: "render-a71b907e",
            as: "h2",
            children: "Descubre Nuestras Excursiones"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-2811380329 text-gray-600",
            renderId: "render-1206c743",
            as: "p",
            children: "Las mejores experiencias en Punta Cana"
          })]
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "jsx-2811380329 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
          renderId: "render-a1c66a8a",
          as: "div",
          children: excursiones.map((excursion, index) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2811380329 bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all",
            renderId: "render-5d2f0286",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2811380329 relative h-48 overflow-hidden bg-gray-100",
              renderId: "render-87e87a8d",
              as: "div",
              children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                src: excursion.imagen,
                alt: excursion.nombre,
                className: "jsx-2811380329 w-full h-full object-cover hover:scale-105 transition-transform duration-300",
                renderId: "render-e910ea0a",
                as: "img"
              })
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "jsx-2811380329 p-5",
              renderId: "render-8acb752f",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "jsx-2811380329 text-base font-bold text-gray-800 mb-2 leading-snug min-h-[48px]",
                renderId: "render-1fa81a13",
                as: "h3",
                children: excursion.nombre
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "jsx-2811380329 text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3",
                renderId: "render-cb47a3ac",
                as: "p",
                children: excursion.descripcion
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                onClick: () => handleExcursionReserva(excursion.nombre),
                className: "jsx-2811380329 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 text-sm",
                renderId: "render-9b1aab40",
                as: "button",
                children: [/* @__PURE__ */ jsx(Send, {
                  className: "h-4 w-4"
                }), "Reservar por WhatsApp"]
              })]
            })]
          }, index))
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "jsx-2811380329 mt-12 bg-gradient-to-br from-[#E0F7FA] to-[#E1F5FE] rounded-xl p-8 border border-[#B2EBF2] shadow-sm",
          renderId: "render-c7b8cd0a",
          as: "div",
          children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2811380329 max-w-3xl mx-auto text-center space-y-4",
            renderId: "render-3236c29f",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2811380329 text-gray-800 font-medium",
              renderId: "render-298883c4",
              as: "p",
              children: "Todas nuestras excursiones incluyen transporte."
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2811380329 text-gray-700",
              renderId: "render-e21c8275",
              as: "p",
              children: "La información adicional de cada experiencia está disponible al hacer clic en el botón de reserva por WhatsApp, donde podrás consultar cualquier detalle sin compromiso."
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2811380329 text-gray-800 font-semibold",
              renderId: "render-6bba17c2",
              as: "p",
              children: "Las excursiones se reservan primero y se pagan después."
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2811380329 text-gray-700 italic",
              renderId: "render-c2d24d89",
              as: "p",
              children: '"Nuestro objetivo es cuidar al turista y hacer que se sienta como en casa mientras disfruta del Caribe."'
            })]
          })
        })]
      })]
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "jsx-2811380329 relative w-full py-20 overflow-hidden",
      renderId: "render-d5348647",
      as: "section",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "jsx-2811380329 absolute inset-0 z-0",
        renderId: "render-2004cf91",
        as: "div",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1920&auto=format&fit=crop",
          alt: "Experiencia Gastronómica Exclusiva",
          className: "jsx-2811380329 w-full h-full object-cover opacity-15 filter blur-[1px]",
          renderId: "render-d1ae7d3b",
          as: "img"
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "jsx-2811380329 absolute inset-0 bg-gradient-to-r from-white/90 via-[#E0F7FA]/40 to-white/90",
          renderId: "render-5a1a542e",
          as: "div"
        })]
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "jsx-2811380329 relative z-10 max-w-7xl mx-auto px-4 sm:px-6",
        renderId: "render-d00d6c50",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-2811380329 text-center max-w-3xl mx-auto mb-12",
          renderId: "render-f1065b12",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-2811380329 inline-block mb-4 px-4 py-1.5 rounded-full border border-[#00BCD4]/20 bg-white/60 backdrop-blur-sm text-[#00838F] text-sm font-medium italic tracking-wide shadow-sm",
            renderId: "render-67e7c4d5",
            as: "span",
            children: "Solo con PuntaClick"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-2811380329 text-3xl sm:text-4xl font-bold text-gray-800 mb-3",
            renderId: "render-cbc91fe3",
            as: "h2",
            children: "Tours Personalizados"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-2811380329 text-xl text-gray-600",
            renderId: "render-e3c9cab5",
            as: "p",
            children: "Pensado para quienes quieren ir más allá de lo turístico."
          })]
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "jsx-2811380329 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",
          renderId: "render-cc8ffaa4",
          as: "div",
          children: toursPersonalizados.map((tour, index) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2811380329 bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all",
            renderId: "render-d2518029",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2811380329 relative h-48 overflow-hidden bg-gray-100",
              renderId: "render-39b31604",
              as: "div",
              children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                src: tour.imagen,
                alt: tour.nombre,
                className: "jsx-2811380329 w-full h-full object-cover hover:scale-105 transition-transform duration-300",
                renderId: "render-6dae1d11",
                as: "img"
              })
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "jsx-2811380329 p-5",
              renderId: "render-f43545aa",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "jsx-2811380329 text-base font-bold text-gray-800 mb-2 leading-snug min-h-[48px]",
                renderId: "render-69af90e8",
                as: "h3",
                children: tour.nombre
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "jsx-2811380329 text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3",
                renderId: "render-7a884a05",
                as: "p",
                children: tour.descripcion
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                onClick: () => handleTourPersonalizadoReserva(tour.nombre),
                className: "jsx-2811380329 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 text-sm",
                renderId: "render-035dafb3",
                as: "button",
                children: [/* @__PURE__ */ jsx(Send, {
                  className: "h-4 w-4"
                }), "Reservar por WhatsApp"]
              })]
            })]
          }, index))
        })]
      })]
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "jsx-2811380329 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16",
      renderId: "render-f281352f",
      as: "section",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "jsx-2811380329 text-center mb-10",
        renderId: "render-87ed7e71",
        as: "div",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "jsx-2811380329 text-2xl sm:text-3xl font-bold text-gray-800 mb-2",
          renderId: "render-f4e3215d",
          as: "h2",
          children: "Lo Que Dicen Nuestros Clientes"
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "jsx-2811380329 text-gray-600",
          renderId: "render-ab7330e8",
          as: "p",
          children: "Experiencias reales de turistas satisfechos"
        })]
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "jsx-2811380329 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        renderId: "render-d414ab24",
        as: "div",
        children: testimonios.map((testimonio, index) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-2811380329 bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all",
          renderId: "render-95efae74",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2811380329 flex items-center gap-3 mb-4",
            renderId: "render-fa7e564d",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              src: testimonio.avatar,
              alt: testimonio.nombre,
              className: "jsx-2811380329 w-12 h-12 rounded-full object-cover",
              renderId: "render-3fb49e16",
              as: "img"
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "jsx-2811380329",
              renderId: "render-1b0a8db1",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "jsx-2811380329 font-semibold text-gray-800 text-sm",
                renderId: "render-1f8a19da",
                as: "h4",
                children: testimonio.nombre
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "jsx-2811380329 text-xs text-gray-500",
                renderId: "render-48dc5006",
                as: "p",
                children: testimonio.ubicacion
              })]
            })]
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-2811380329 flex gap-1 mb-3",
            renderId: "render-6cf08ed3",
            as: "div",
            children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, {
              className: "h-4 w-4 fill-[#FFB800] text-[#FFB800]"
            }, i))
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2811380329 text-sm text-gray-600 leading-relaxed",
            renderId: "render-209b9115",
            as: "p",
            children: ['"', testimonio.comentario, '"']
          })]
        }, index))
      })]
    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "jsx-2811380329 bg-white border-t border-gray-200 mt-16",
      renderId: "render-82fd58b3",
      as: "footer",
      children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "jsx-2811380329 max-w-7xl mx-auto px-4 sm:px-6 py-8 relative",
        renderId: "render-7ed572e3",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-2811380329 text-center",
          renderId: "render-bfb9b487",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            src: "https://ucarecdn.com/0c7c4d46-4b67-4994-9207-06fef5af9fee/-/format/auto/",
            alt: "PuntaClick Logo",
            className: "jsx-2811380329 h-16 sm:h-20 w-auto mx-auto mb-4",
            renderId: "render-01a96ca4",
            as: "img"
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2811380329 text-gray-600 text-sm",
            renderId: "render-0dceca3b",
            as: "p",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2811380329 font-semibold text-gray-800",
              renderId: "render-c21b218c",
              as: "span",
              children: "PuntaClick"
            }), " - Tu guía de turismo en Punta Cana"]
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-2811380329 text-gray-500 text-xs mt-2",
            renderId: "render-6c598c36",
            as: "p",
            children: "Todas las reservas se gestionan a través de WhatsApp"
          })]
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-2811380329 flex items-center justify-center gap-6 mt-6",
          renderId: "render-a6bf07dd",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            href: "https://www.instagram.com/feyluxx?igsh=MTR5c3Npenl1eHhwag%3D%3D&utm_source=qr",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Instagram",
            className: "jsx-2811380329 text-gray-400 hover:text-[#00BCD4] transition-colors duration-300",
            renderId: "render-22a0289b",
            as: "a",
            children: /* @__PURE__ */ jsxs("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "22",
              height: "22",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "jsx-2811380329",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                width: "20",
                height: "20",
                x: "2",
                y: "2",
                rx: "5",
                ry: "5",
                className: "jsx-2811380329",
                renderId: "render-eff64515",
                as: "rect"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
                className: "jsx-2811380329",
                renderId: "render-edb94d0d",
                as: "path"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                x1: "17.5",
                x2: "17.51",
                y1: "6.5",
                y2: "6.5",
                className: "jsx-2811380329",
                renderId: "render-9ae778b4",
                as: "line"
              })]
            })
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            href: "https://www.tiktok.com/@feyluxx?_r=1&_t=ZN-92pNhiAb8qc",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "TikTok",
            className: "jsx-2811380329 text-gray-400 hover:text-[#00BCD4] transition-colors duration-300",
            renderId: "render-90dd3ef2",
            as: "a",
            children: /* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "22",
              height: "22",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "jsx-2811380329",
              children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                d: "M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5",
                className: "jsx-2811380329",
                renderId: "render-063cee25",
                as: "path"
              })
            })
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            href: "https://www.facebook.com/share/17bVorY7WA/?mibextid=wwXIfr",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Facebook",
            className: "jsx-2811380329 text-gray-400 hover:text-[#00BCD4] transition-colors duration-300",
            renderId: "render-bf3c3f7b",
            as: "a",
            children: /* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "22",
              height: "22",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "jsx-2811380329",
              children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                className: "jsx-2811380329",
                renderId: "render-c7866789",
                as: "path"
              })
            })
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            href: "https://wa.me/18493972241",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "WhatsApp",
            className: "jsx-2811380329 text-gray-400 hover:text-[#00BCD4] transition-colors duration-300",
            renderId: "render-ca6de160",
            as: "a",
            children: /* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "22",
              height: "22",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "jsx-2811380329",
              children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
                className: "jsx-2811380329",
                renderId: "render-691ff684",
                as: "path"
              })
            })
          })]
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "jsx-2811380329 mt-8 sm:mt-0 sm:absolute sm:right-6 sm:bottom-1/2 sm:translate-y-1/2 flex justify-center sm:justify-end",
          renderId: "render-10ccbfce",
          as: "div",
          children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            src: "/images/tripadvisor-badge.png",
            alt: "TripAdvisor Travelers' Choice 2025",
            className: "jsx-2811380329 h-24 w-auto opacity-90 transition-all hover:scale-105",
            renderId: "render-0ba5818c",
            as: "img"
          })
        })]
      })
    }), /* @__PURE__ */ jsx(_JSXStyle, {
      id: "2811380329",
      children: ["@-webkit-keyframes fadeInUp{from{opacity:0;-webkit-transform:translateY(20px) scale(0.98);-ms-transform:translateY(20px) scale(0.98);transform:translateY(20px) scale(0.98);}to{opacity:1;-webkit-transform:translateY(0) scale(1);-ms-transform:translateY(0) scale(1);transform:translateY(0) scale(1);}}", "@keyframes fadeInUp{from{opacity:0;-webkit-transform:translateY(20px) scale(0.98);-ms-transform:translateY(20px) scale(0.98);transform:translateY(20px) scale(0.98);}to{opacity:1;-webkit-transform:translateY(0) scale(1);-ms-transform:translateY(0) scale(1);transform:translateY(0) scale(1);}}", ".traslado-img{-webkit-animation:fadeInUp 0.6s ease-out forwards;animation:fadeInUp 0.6s ease-out forwards;opacity:0;}", ".traslado-img-1{-webkit-animation-delay:0.1s;animation-delay:0.1s;}", ".traslado-img-2{-webkit-animation-delay:0.2s;animation-delay:0.2s;}", ".traslado-img-3{-webkit-animation-delay:0.3s;animation-delay:0.3s;}", ".traslado-img img{-webkit-transition:-webkit-transform 0.3s ease;-webkit-transition:transform 0.3s ease;transition:transform 0.3s ease;}", ".traslado-img:hover img{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}"]
    })]
  });
}

const page = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(PuntaClick, {
      ...props
    })
  });
});

const route1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page
}, Symbol.toStringTag, { value: 'Module' }));

async function loader({
  params
}) {
  const matches = await fg("src/**/page.{js,jsx,ts,tsx}");
  return {
    path: `/${params["*"]}`,
    pages: matches.sort((a, b) => a.length - b.length).map(match => {
      const url = match.replace("src/app", "").replace(/\/page\.(js|jsx|ts|tsx)$/, "") || "/";
      const path = url.replaceAll("[", "").replaceAll("]", "");
      const displayPath = path === "/" ? "Homepage" : path;
      return {
        url,
        path: displayPath
      };
    })
  };
}
const notFound = UNSAFE_withComponentProps(function CreateDefaultNotFoundPage({
  loaderData
}) {
  const [siteMap, setSitemap] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof window !== "undefined" && window.parent && window.parent !== window) {
      const handler = event => {
        if (event.data.type === "sandbox:sitemap") {
          window.removeEventListener("message", handler);
          setSitemap(event.data.sitemap);
        }
      };
      window.parent.postMessage({
        type: "sandbox:sitemap"
      }, "*");
      window.addEventListener("message", handler);
      return () => {
        window.removeEventListener("message", handler);
      };
    }
  }, []);
  const missingPath = loaderData.path.replace(/^\//, "");
  const existingRoutes = loaderData.pages.map(page => ({
    path: page.path,
    url: page.url
  }));
  const handleBack = () => {
    navigate("/");
  };
  const handleSearch = value => {
    if (!siteMap) {
      const path = `/${value}`;
      navigate(path);
    } else {
      navigate(value);
    }
  };
  const handleCreatePage = useCallback(() => {
    window.parent.postMessage({
      type: "sandbox:web:create",
      path: missingPath,
      view: "web"
    }, "*");
  }, [missingPath]);
  return /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
    className: "flex sm:w-full w-screen sm:min-w-[850px] flex-col",
    renderId: "render-5e287df4",
    as: "div",
    children: [/* @__PURE__ */jsxs(CreatePolymorphicComponent, {
      className: "flex w-full items-center gap-2 p-5",
      renderId: "render-06f40933",
      as: "div",
      children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
        type: "button",
        onClick: handleBack,
        className: "flex items-center justify-center w-10 h-10 rounded-md",
        renderId: "render-a6aa199d",
        as: "button",
        children: /* @__PURE__ */jsxs("svg", {
          width: "18",
          height: "18",
          viewBox: "0 0 18 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-label": "Back",
          role: "img",
          children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
            d: "M8.5957 2.65435L2.25005 9L8.5957 15.3457",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            renderId: "render-1a422de8",
            as: "path"
          }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
            d: "M2.25007 9L15.75 9",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            renderId: "render-dcbb9411",
            as: "path"
          })]
        })
      }), /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
        className: "flex flex-row divide-x divide-gray-200 rounded-[8px] h-8 w-[300px] border border-gray-200 bg-gray-50 text-gray-500",
        renderId: "render-1211e65a",
        as: "div",
        children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
          className: "flex items-center px-[14px] py-[5px]",
          renderId: "render-8d81f2b7",
          as: "div",
          children: /* @__PURE__ */jsx(CreatePolymorphicComponent, {
            renderId: "render-ae95a04c",
            as: "span",
            children: "/"
          })
        }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
          className: "flex items-center min-w-0",
          renderId: "render-44e74134",
          as: "div",
          children: /* @__PURE__ */jsx(CreatePolymorphicComponent, {
            className: "border-0 bg-transparent px-3 py-2 focus:outline-none truncate max-w-[300px]",
            style: {
              minWidth: 0
            },
            title: missingPath,
            renderId: "render-33f7a843",
            as: "p",
            children: missingPath
          })
        })]
      })]
    }), /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
      className: "flex flex-grow flex-col items-center justify-center pt-[100px] text-center gap-[20px]",
      renderId: "render-fe15c8db",
      as: "div",
      children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
        className: "text-4xl font-medium text-gray-900 px-2",
        renderId: "render-6d5de4dc",
        as: "h1",
        children: "Uh-oh! This page doesn't exist (yet)."
      }), /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
        className: "pt-4 pb-12 px-2 text-gray-500",
        renderId: "render-b3c8278d",
        as: "p",
        children: ['Looks like "', /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
          className: "font-bold",
          renderId: "render-ac4b63e7",
          as: "span",
          children: ["/", missingPath]
        }), `" isn't part of your project. But no worries, you've got options!`]
      }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
        className: "px-[20px] w-full",
        renderId: "render-eb5147ad",
        as: "div",
        children: /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
          className: "flex flex-row justify-center items-center w-full max-w-[800px] mx-auto border border-gray-200 rounded-lg p-[20px] mb-[40px] gap-[20px]",
          renderId: "render-8bb72593",
          as: "div",
          children: [/* @__PURE__ */jsxs(CreatePolymorphicComponent, {
            className: "flex flex-col gap-[5px] items-start self-start w-1/2",
            renderId: "render-7566e20f",
            as: "div",
            children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
              className: "text-sm text-black text-left",
              renderId: "render-db2f353f",
              as: "p",
              children: "Build it from scratch"
            }), /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
              className: "text-sm text-gray-500 text-left",
              renderId: "render-0f462e84",
              as: "p",
              children: ['Create a new page to live at "', /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
                renderId: "render-89eae11f",
                as: "span",
                children: ["/", missingPath]
              }), '"']
            })]
          }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
            className: "flex flex-row items-center justify-end w-1/2",
            renderId: "render-2ffdcbbb",
            as: "div",
            children: /* @__PURE__ */jsx(CreatePolymorphicComponent, {
              type: "button",
              className: "bg-black text-white px-[10px] py-[5px] rounded-md",
              onClick: () => handleCreatePage(),
              renderId: "render-38daaca5",
              as: "button",
              children: "Create Page"
            })
          })]
        })
      }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
        className: "pb-20 lg:pb-[80px]",
        renderId: "render-b47b6904",
        as: "div",
        children: /* @__PURE__ */jsx(CreatePolymorphicComponent, {
          className: "flex items-center text-gray-500",
          renderId: "render-a2386920",
          as: "p",
          children: "Check out all your project's routes here ↓"
        })
      }), siteMap ? /* @__PURE__ */jsx(CreatePolymorphicComponent, {
        className: "flex flex-col justify-center items-center w-full px-[50px]",
        renderId: "render-8881eaf6",
        as: "div",
        children: /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
          className: "flex flex-col justify-between items-center w-full max-w-[600px] gap-[10px]",
          renderId: "render-8bb37888",
          as: "div",
          children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
            className: "text-sm text-gray-300 pb-[10px] self-start p-4",
            renderId: "render-9535fd08",
            as: "p",
            children: "PAGES"
          }), siteMap.webPages?.map(route => /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
            type: "button",
            onClick: () => handleSearch(route.cleanRoute || ""),
            className: "flex flex-row justify-between text-center items-center p-4 rounded-lg bg-white shadow-sm w-full hover:bg-gray-50",
            renderId: "render-6cc0bac0",
            as: "button",
            children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
              className: "font-medium text-gray-900",
              renderId: "render-7d971b4f",
              as: "h3",
              children: route.name
            }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
              className: "text-sm text-gray-400",
              renderId: "render-3b473100",
              as: "p",
              children: route.cleanRoute
            })]
          }, route.id))]
        })
      }) : /* @__PURE__ */jsx(CreatePolymorphicComponent, {
        className: "flex flex-wrap gap-3 w-full max-w-[80rem] mx-auto pb-5 px-2",
        renderId: "render-a05d8473",
        as: "div",
        children: existingRoutes.map(route => /* @__PURE__ */jsx(CreatePolymorphicComponent, {
          className: "flex flex-col flex-grow basis-full sm:basis-[calc(50%-0.375rem)] xl:basis-[calc(33.333%-0.5rem)]",
          renderId: "render-4921721f",
          as: "div",
          children: /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
            className: "w-full flex-1 flex flex-col items-center ",
            renderId: "render-f7462416",
            as: "div",
            children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
              className: "relative w-full max-w-[350px] h-48 sm:h-56 lg:h-64 overflow-hidden rounded-[8px] border border-comeback-gray-75 transition-all group-hover:shadow-md",
              renderId: "render-27a4a69e",
              as: "div",
              children: /* @__PURE__ */jsx(CreatePolymorphicComponent, {
                type: "button",
                onClick: () => handleSearch(route.url.replace(/^\//, "")),
                className: "h-full w-full rounded-[8px] bg-gray-50 bg-cover",
                renderId: "render-6585b409",
                as: "button"
              })
            }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
              className: "pt-3 text-left text-gray-500 w-full max-w-[350px]",
              renderId: "render-b2518392",
              as: "p",
              children: route.path
            })]
          })
        }, route.path))
      })]
    })]
  });
});

const route2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: notFound,
  loader
}, Symbol.toStringTag, { value: 'Module' }));

const serverManifest = {'entry':{'module':'/assets/entry.client-ChzRRzwQ.js','imports':['/assets/chunk-JMJ3UQ3L-DZE9hlBU.js','/assets/index-BIVOGMjC.js'],'css':[]},'routes':{'root':{'id':'root','parentId':undefined,'path':'','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':true,'module':'/assets/root-DuwAcfr1.js','imports':['/assets/chunk-JMJ3UQ3L-DZE9hlBU.js','/assets/index-BIVOGMjC.js','/assets/PolymorphicComponent-CcgnNXPT.js'],'css':['/assets/root-_pIybygs.css'],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'page':{'id':'page','parentId':'root','path':undefined,'index':true,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-CS_qa4e8.js','imports':['/assets/PolymorphicComponent-CcgnNXPT.js','/assets/chunk-JMJ3UQ3L-DZE9hlBU.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'__create/not-found':{'id':'__create/not-found','parentId':'root','path':'*?','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':true,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/not-found-CgcIAdBH.js','imports':['/assets/PolymorphicComponent-CcgnNXPT.js','/assets/chunk-JMJ3UQ3L-DZE9hlBU.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined}},'url':'/assets/manifest-db5dce7b.js','version':'db5dce7b','sri':undefined};

const assetsBuildDirectory = "build\\client";
      const basename = "/";
      const future = {"unstable_optimizeDeps":false,"unstable_subResourceIntegrity":false,"v8_middleware":false,"v8_splitRouteModules":false,"v8_viteEnvironmentApi":false};
      const ssr = true;
      const isSpaMode = false;
      const prerender = ["/*?"];
      const routeDiscovery = {"mode":"lazy","manifestPath":"/__manifest"};
      const publicPath = "/";
      const entry = { module: entryServer };
      const routes = {
        "root": {
          id: "root",
          parentId: undefined,
          path: "",
          index: undefined,
          caseSensitive: undefined,
          module: route0
        },
  "page": {
          id: "page",
          parentId: "root",
          path: undefined,
          index: true,
          caseSensitive: undefined,
          module: route1
        },
  "__create/not-found": {
          id: "__create/not-found",
          parentId: "root",
          path: "*?",
          index: undefined,
          caseSensitive: undefined,
          module: route2
        }
      };

export { serverManifest as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
