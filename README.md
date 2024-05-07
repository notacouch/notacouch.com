<a href="https://github.com/storybooks/storybook" target="_blank"><img src="https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg"></a>

# notacouch.com (2024)

This site is an 11ty 3 + Storybook 8 (HTML + Vite) project. The Vite portion is not really leveraged at this time.

## Getting Started

To get started, once you've pulled down the project:

```bash
npm install
```

Since 11ty 3 supports ESM out of the box, components are shared by both systems under `_src`. Editing them in either place if both dev servers are running should update them in both.

## Storybook

To run Storybook as a server locally:

```bash
npm run storybook
```

To build Storybook for 11ty to pass through, in your project's root directory run the following:

```bash
npm run build-storybook
```

This should generate a `/storybook/` folder. You&rsquo;ll want to do this first as 11ty is set up to ignore `/storybook/` but will pass it through at the onset.

## 11ty

**Building CSS is needed for 11ty**, Storybook is fine on its own.

### 11ty CSS

The CSS is bundled and minified via Lightning CSS, to watch the CSS for changes and bundle/minify live, run:

```bash
npm run watch-css
```

To just build the CSS at once, run:

```bash
npm run build-css
```

### 11ty local server

To run 11ty as a local dev server with hot reloading:

```bash
npx @11ty/eleventy --serve
```

This should generate a `/_site/` folder for you to publish the site, including storybook passed through.

_Note:_ Most images under `/blog-images/` are _not_ checked in, so you will see broken images unless you download them from notacouch.com/blog-images/ directly. (I didn&rsquo;t opt for Git-LFS as my host does not support it.)

Editing files in non-ignored directories should cause 11ty to regenerate the static site within the default `_site` directory. However, there does seem to be an issue with the component `.js` files under `_src`.

### Build 11ty site

To run 11ty just to build once:

```bash
npx @11ty/eleventy
```

## TODOs

- Opengraph
- Report to 11ty team: `--serve` not refreshing component js even with dynamic import (it rewrites but existing source is cached)
- Work content
- Then work page
- Consent for Google Analytics:
  - disable their third party `ar_debug` cookie
  - Accessible toast messages for consent actions
- Search
- Dark mode
- Web Mentions or similar
- Go greener. +CDN for assets (but image plugin? without Git LFG?). Question marks.

### Unused CSS

Tried to get purgecss working, having issues with ESM compatibility even directly in node.

Then tried uncss, but it takes out too many of the styles, not worth the effort.

Will have to shelf CSS clean up for now and revisit later.
