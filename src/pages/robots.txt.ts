import type { APIRoute } from 'astro';
import { SITE } from '../consts';

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL(SITE.url)).toString().replace(/\/$/, '');
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap-index.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
