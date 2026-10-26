import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [{
    name: 'static-output',
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: '.nojekyll', source: '' });
    },
  }],
});
