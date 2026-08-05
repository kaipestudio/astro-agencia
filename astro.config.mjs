import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import sveltia from 'astro-loader-sveltia-cms';

export default defineConfig({
  site: 'https://kaipestudio.com',
  integrations: [
    sitemap(),
    sveltia({
      route: '/admin',
      config: {
        backend: {
          name: 'github',
          repo: 'kaipestudio/astro-agencia',
          branch: 'main',
        },
        media_folder: 'public/images/uploads',
        public_folder: '/images/uploads',
        collections: [
          {
            name: 'servicos',
            label: 'Serviços',
            folder: 'src/content/servicos',
            create: true,
            fields: [
              { label: 'Título', name: 'title', widget: 'string' },
              { label: 'Descrição', name: 'description', widget: 'text' },
              { label: 'Ícone', name: 'icon', widget: 'string', required: false },
              { label: 'Ordem', name: 'order', widget: 'number', default: 0 },
            ],
          },
          {
            name: 'posts',
            label: 'Blog Posts',
            folder: 'src/content/posts',
            create: true,
            fields: [
              { label: 'Título', name: 'title', widget: 'string' },
              { label: 'Data', name: 'date', widget: 'datetime' },
              { label: 'Conteúdo', name: 'body', widget: 'markdown' },
            ],
          },
        ],
      },
    }),
  ],
  output: 'static',
});