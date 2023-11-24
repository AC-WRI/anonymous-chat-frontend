import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'sshkrk',

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
