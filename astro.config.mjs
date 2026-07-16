import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

const adminIndexRedirect = {
  name: 'northern-lines-admin-index-redirect',
  configureServer(server) {
    server.middlewares.use((request, response, next) => {
      const pathname = request.url?.split('?')[0];

      if (pathname === '/admin' || pathname === '/admin/') {
        response.statusCode = 302;
        response.setHeader('Location', '/admin/index.html');
        response.end();
        return;
      }

      next();
    });
  }
};

export default defineConfig({
  site: 'https://www.beblog.de',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/404/')
    })
  ],
  vite: {
    plugins: [adminIndexRedirect]
  }
});
