// import { defineConfig } from 'vite'

// export default defineConfig({
//   server: {
//     watch: {
//       ignored: ['**/_site/**']
//     }
//   },
//   build: {
//     rollupOptions: {
//       external:['/_site/*']
//     }
//   }
// })

const eleventyPublishDir = '_site/';
const eleventyPublishDirGlob = eleventyPublishDir + '**';
export default {
  // not sure if this will work
  optimizeDeps: {
    exclude: [eleventyPublishDir],
  },
  server: {
    watch: {
      ignored: [eleventyPublishDirGlob] // did not work as expected
    }
  },
  build: {
    // not sure if these will work
    rollupOptions: {
      external: [eleventyPublishDirGlob],
      watch: {
        exclude: [eleventyPublishDirGlob]
      }
    }
  }
}