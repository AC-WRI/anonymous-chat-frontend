import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'xh3o7n',

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
