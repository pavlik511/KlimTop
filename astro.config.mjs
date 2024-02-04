import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  experimental: {
    viewTransitions: true,
    clientPrerender: true,
    optimizeHoistedScript: true,
    contentCollectionCache: true
  },
  integrations: [tailwind(), compress(), react()],
  renderers: [
    // ...
    '@astrojs/renderer-react'
  ]
});