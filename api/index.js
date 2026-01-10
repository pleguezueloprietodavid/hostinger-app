import { handle } from 'hono/vercel';
import server from '../build/server/index.js';

export const config = {
    runtime: 'nodejs'
};

export default handle(server);
