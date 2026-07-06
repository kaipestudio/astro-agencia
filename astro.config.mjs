import { defineConfig } from 'astro/config';
import sveltia from 'astro-loader-sveltia-cms';
import tailwind from '@astrojs/tailwind'; // ← Adicione esta linha

export default defineConfig({
  integrations: [
    tailwind(), // ← Adicione esta linha (antes do sveltia)
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