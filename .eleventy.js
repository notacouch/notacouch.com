import eleventyAutoCacheBuster from 'eleventy-auto-cache-buster';
import eleventyPluginTOC from '@thedigitalman/eleventy-plugin-toc-a11y';
import eleventyTimeToRead from 'eleventy-plugin-time-to-read';
import markdownIt from 'markdown-it';
import markdownItNamedHeadings from 'markdown-it-named-headings';
import markdownItAttrs from 'markdown-it-attrs';

// Components
import HeaderNav from './_src/components/global/HeaderNav.js';
import HomeHero from './_src/components/slices/HomeHero.js';
import PostPreview from './_src/components/slices/PostPreview.js';
import PostMeta from './_src/components/slices/PostMeta.js';
import Figure from './_src/components/slices/Figure.js';
import FloatWrapper from './_src/components/slices/FloatWrapper.js';
import TangentCeiling from './_src/components/toppings/TangentCeiling.js';
import Footer from './_src/components/global/Footer.js';

// TODO: shift to Prettier ESLint at some point
// TODO: inclusive language linter https://github.com/11ty/eleventy-plugin-inclusive-language
// TODO: jsdoc comments for components are not working out, try jsdoc -> json -> transform to argTypes
// try jsdoc -> json schema but it's extremely verbose. jsdoc ignores anything starting with _ so _src/* doesn't work even from command line
// npx jsdoc -X testjsdoc.js > testJsonDoc.json
// start here for above: https://stackoverflow.com/a/24421552/781824

// const componentShortcodeMap = new Map();
// componentShortcodeMap.set('HeaderNav', { args: ["currentPageUrl"] });
// componentShortcodeMap.set('Footer', {});

export default function (eleventyConfig) {
  const simpleShortcodeFn = function generateShortcodeFn(component) {
    return function () {
      return new component().render();
    };
  };
  const simpleComponents = new Map();

  function componentRender(component, args) {
    return new component().render(...args);
  }

  simpleComponents.set('Footer', { component: Footer });

  // TODO: discuss this with 11ty in discord/github
  // Watch components (doesn't seem to work)
  eleventyConfig.addWatchTarget('./_src/**/*.js');

  // Manage JS expectations in Liquid
  // @url https://www.11ty.dev/docs/languages/liquid/#javascript-truthiness-in-liquid
  eleventyConfig.setLiquidOptions({
    jsTruthy: true,
  });

  // Default layout
  eleventyConfig.addGlobalData('layout', '_index.liquid');

  // Pass through assets
  const assets = [
    'styles.css',
    'notacouch-icon.png',
    'notacouch-icon-256.png',
    'blog-images',
    'tangibles',
    'storybook',
  ];
  assets.forEach(function passAsset(asset) {
    eleventyConfig.addPassthroughCopy(asset);
  });
  // eleventyConfig.addPassthroughCopy("styles.css");

  // @url https://www.11ty.dev/docs/collections/#advanced-custom-filtering-and-sorting
  // @url https://github.com/11ty/eleventy/issues/927#issuecomment-627703544
  eleventyConfig.addCollection('tagList', function (collectionApi) {
    let tags = [];
    let tagSet = new Set();
    collectionApi.getAll().forEach(function processPostTags(post) {
      if (!post.data.tags) {
        return;
      }
      post.data.tags.forEach(function populateTagSet(tag) {
        if (tag !== 'all') {
          tagSet.add(tag);
        }
      });
    });
    tags = Array.from(tagSet).sort();
    return tags;
  });

  // markdown-it-anchor did not work well for me
  // @url https://www.npmjs.com/package/@thedigitalman/eleventy-plugin-toc-a11y#step-2-configuration
  // tried this instead:
  // @url https://github.com/11ty/eleventy/issues/812#issuecomment-1278714780
  // Markdown settings, apply `id`s to headers
  eleventyConfig.setLibrary(
    'md',
    markdownIt({
      html: true,
      breaks: true,
      // linkify: true,
      typographer: true,
    })
      .use(markdownItNamedHeadings)
      .use(markdownItAttrs),
  );

  eleventyConfig.addPlugin(eleventyAutoCacheBuster);
  eleventyConfig.addPlugin(eleventyPluginTOC, {
    wrapperClass: 'toc',
    headingClass: 'toc__header',
    headingText: 'Table of Contents',
    listClass: 'toc__ol',
  });
  eleventyConfig.addPlugin(eleventyTimeToRead, {
    // Unexpected: makes read time shorter than the default 1,000 characters...
    // speed: "200 words per minute"
  });

  eleventyConfig.addShortcode('HeaderNav', function HeaderNavShortcode(currentPageUrl) {
    return componentRender(HeaderNav, arguments);
  });

  eleventyConfig.addShortcode('HomeHero', function HomeHeroShortcode(title, subtitle = '') {
    return componentRender(HomeHero, arguments);
  });

  eleventyConfig.addShortcode(
    'PostPreview',
    function PostPreviewShortcode(
      titleLink,
      titleText,
      subtitle = '',
      publishedDatetime,
      publishedDate,
      topicContent,
    ) {
      return componentRender(PostPreview, arguments);
    },
  );

  eleventyConfig.addShortcode(
    'PostMeta',
    function PostMetaShortcode(
      metaPrefix,
      publishedDatetime,
      publishedDate,
      topicContent,
      readTime = '',
      modifiedDatetime = '',
      modifiedDate = '',
    ) {
      return componentRender(PostMeta, arguments);
    },
  );

  eleventyConfig.addShortcode('TangentCeiling', function TangentCeilingShortcode(variant = '') {
    return componentRender(TangentCeiling, arguments);
  });

  eleventyConfig.addPairedShortcode(
    'Figure',
    function figurePairedShortcode(content = '', type, imageSrc = '', imageAlt = '', caption = '') {
      return componentRender(Figure, arguments);
    },
  );

  eleventyConfig.addPairedShortcode(
    'FloatWrapper',
    function floatWrapperPairedShortcode(content = '') {
      return componentRender(FloatWrapper, arguments);
    },
  );

  simpleComponents.forEach(function simpleComponentShortcodify(componentConfig, componentName) {
    if (!componentConfig.pair) {
      // console.log('cname? ', componentName, simpleShortcodeFn(componentConfig.component).toString())
      eleventyConfig.addShortcode(componentName, simpleShortcodeFn(componentConfig.component));
    } else {
      // @TODO: pair shortcode
      // eleventyConfig.addShortcode(componentName, simpleShortcodeFn(componentConfig.component));
    }
  });

  // componentShortcodeMap.keys().forEach(function shortCodify(componentName) {
  //   const componentFnConfig = componentShortcodeMap.get(componentName);
  //   const shortCodeFn = function() {
  //     if (componentFnConfig.args) {
  //       return function (...componentFnConfig.args) {

  //       }
  //     }
  //   }
  //   if (!componentFnConfig.shortCodePair) {
  //     eleventyConfig.addShortcode(componentName, function(currentPageUrl) {
  //       return (new HeaderNav()).render(currentPageUrl);
  //     });
  //   }
  // })
}
