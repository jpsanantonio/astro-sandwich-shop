import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import solid from '@astrojs/solid-js';
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-sandwich-shop-jpsanantonio.netlify.app',
  output: 'hybrid',
  experimental: {
    hybridOutput: true
  },
  integrations: [react({
    include: ['src/components/add-to-cart.tsx']
  }), solid({
    include: ['src/components/cart.tsx']
  })],
  adapter: netlify()
});