import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    csrf: {
      checkOrigin: false,
      }
  },
  alias: {
    $routes: path.resolve('./src/routes'),
    $lib: path.resolve('./src/lib')
  }
};
export default config;