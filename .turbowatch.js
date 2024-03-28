import { defineConfig } from 'turbowatch';
import path from 'node:path';

// Credit:
// @url https://frontendmasters.com/blog/fine-ill-use-a-super-basic-css-processing-setup/

export default defineConfig({
  project: path.resolve(__dirname, '_src/styles/'),
  triggers: [
    {
      expression: ['match', '*.css', 'basename'],
      name: 'build',
      onChange: async ({ spawn }) => {
        await spawn`npx lightningcss --minify --bundle "./_src/styles/base.css" -o ./styles/base.min.css`;
        await spawn`npx lightningcss --minify "./_src/styles/styles.css" -o ./styles/styles.min.css`;
      },
    },
  ],
});
