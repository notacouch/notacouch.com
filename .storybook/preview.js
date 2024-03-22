/** @type { import('@storybook/html').Preview } */
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
// import 'anysort';

import '../node_modules/normalize.css/normalize.css';
import '../styles.css';
import '@phosphor-icons/web/light';
import '@phosphor-icons/web/fill';
import 'highlight.js/styles/github.min.css';

// Using ES6 import syntax
import hljs from 'highlight.js/lib/core';
import hljsJavascript from 'highlight.js/lib/languages/javascript';
import hljsHtml from 'highlight.js/lib/languages/xml';
import hljsCss from 'highlight.js/lib/languages/css';

// Then register the languages you need
hljs.registerLanguage('javascript', hljsJavascript);
hljs.registerLanguage('html', hljsHtml);

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('figure code').forEach((el) => {
    hljs.highlightElement(el);
  });
});

const notacouchViewports = {
  gt900: {
    name: '>900',
    styles: {
      width: '900px',
      height: '700px',
    },
    type: 'desktop',
  },
  gt1250: {
    name: '>1250',
    styles: {
      width: '1251px',
      height: '700px',
    },
    type: 'desktop',
  },
  gt1500: {
    name: '>1500',
    styles: {
      width: '1503px',
      height: '700px',
    },
    type: 'desktop',
  },
  gt1920: {
    name: '>1920',
    styles: {
      width: '1921px',
      height: '700px',
    },
    type: 'desktop',
  },
};

// Would get error in storySort below, storyOrder is not defined
// @url https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#v7-style-story-sort
// "storySort must be a self-contained function that does not reference external variables."
// const storyOrder = [
//   'Design/Typography',
//   'Design/Colors',
//   'Design/Grid',
//   'Design/Atomic Design: Slices & Toppings',
// ];

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      // Further configure Table of Contents:
      // @url https://storybook.js.org/docs/writing-docs/autodocs#configure-the-table-of-contents
      toc: true,
      // Can't configure further for MDX :(
      // @url https://storybook.js.org/docs/writing-docs/autodocs#with-mdx-1
      // toc: {
      //   disable: false,
      //   ignoreSelector: '',
      //   headingSelector: 'h1, h2, h3, h4, h5, h6',
      // },
    },

    // Remove padding around body
    // @url https://github.com/storybookjs/storybook/issues/12109#issuecomment-676489119
    layout: 'fullscreen',

    options: {
      // 8.0.4 upgrade fixed for dev server but not build.
      // Posted here: @url https://github.com/storybookjs/storybook/issues/6327#issuecomment-2015765093
      // Nothing works
      // storySort: {
      //   method: 'custom',
      //   order: ['Slices', 'Design'],
      // },
      // This does not sort
      // storySort: (previous, next) => {
      //   // .title returns the title as seen in Meta tag, e.g. Design/Colors
      //   console.log('previous: ', previous.title, 'next: ', next.title);
      //   console.log('previous id: ', previous.id, 'next id: ', next.id);
      //   const storyOrder = [
      //     'Design/Typography',
      //     'Design/Colors',
      //     'Design/Grid',
      //     'Design/Atomic Design: Slices & Toppings',
      //   ];
      //   const previousPosition = storyOrder.indexOf(previous.title);
      //   const nextPosition = storyOrder.indexOf(next.title);
      //   console.log('previous position? ', previousPosition, ' nextPosition? ', nextPosition);
      //   return nextPosition > -1 ? nextPosition : storyOrder.length + 1;
      // },
      // None of these work at all for production
      // docs @url https://storybook.js.org/docs/api/parameters#optionsstorysort
      storySort: {
        method: 'custom',
        // order: ['Design/Typography', ['Colors', 'Grid', '*'], '*'],
        order: ['Design', ['Typography', 'Grid', 'Colors', 'Atomic Design: Slices & Toppings']],
        // order: ['Slices/Figure', 'Design', '*'],
      },
      // Credit
      // // @url https://github.com/storybookjs/storybook/issues/6327#issuecomment-664900197
      // storySort: (previous, next) => {
      //   // const [previousStory, previousMeta] = previous;
      //   // const [nextStory, nextMeta] = next;
      //   // this did not work either, "anysort is not defined", it's 5 years old, cjs
      //   // Addendum:
      //   // @url https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#v7-style-story-sort
      //   // "storySort must be a self-contained function that does not reference external variables."
      //   return anysort(previous.title, next.title, ['Design/Typography', '**']);
      // },
    },

    // @url https://storybook.js.org/docs/essentials/viewport
    viewport: {
      viewports: {
        // ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
        ...notacouchViewports,
      },
    },
  },
};

export default preview;
