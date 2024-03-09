import eleventyAutoCacheBuster from "eleventy-auto-cache-buster";
import eleventyPluginTOC from "@thedigitalman/eleventy-plugin-toc-a11y";
import markdownIt from "markdown-it";
import markdownItNamedHeadings from "markdown-it-named-headings";



export default function(eleventyConfig) {

  // Manage JS expectations in Liquid
  // @url https://www.11ty.dev/docs/languages/liquid/#javascript-truthiness-in-liquid
  eleventyConfig.setLiquidOptions({
    jsTruthy: true
  });

  // Default layout
  eleventyConfig.addGlobalData("layout", "_index.liquid");
  
  // Pass through assets
  const assets = [
    "styles.css",
    "notacouch-icon.png",
    "notacouch-icon-256.png",
    "blog-images"
  ];
  assets.forEach(function passAsset(asset) {
    eleventyConfig.addPassthroughCopy(asset);
  });
  // eleventyConfig.addPassthroughCopy("styles.css");
  
  // @url https://www.11ty.dev/docs/collections/#advanced-custom-filtering-and-sorting
  // @url https://github.com/11ty/eleventy/issues/927#issuecomment-627703544
  eleventyConfig.addCollection("tagList", function(collectionApi) {
    let tags = [];
    let tagSet = new Set();
    collectionApi.getAll().forEach(function processPostTags(post) {
      if (!post.data.tags) {
        return;
      }
      post.data.tags.forEach(function populateTagSet(tag) {
        if (tag !== "all") {
          tagSet.add(tag);
        }
      })
    });
    tags = Array.from(tagSet).sort();
    return tags;
  });

  // markdown-it-anchor did not work well for me
  // @url https://www.npmjs.com/package/@thedigitalman/eleventy-plugin-toc-a11y#step-2-configuration
  // tried this instead:
  // @url https://github.com/11ty/eleventy/issues/812#issuecomment-1278714780
  // Markdown settings, apply `id`s to headers
  eleventyConfig.setLibrary( 'md',
    markdownIt({ 
      html: true,
      breaks: true,
      // linkify: true,
      typographer: true
    }).use( markdownItNamedHeadings )
  );

  eleventyConfig.addPlugin(eleventyAutoCacheBuster);
  eleventyConfig.addPlugin(eleventyPluginTOC, {
    wrapperClass: "toc",
    headingClass: "toc__header",
    headingText: "Table of Contents",
    listClass: "toc__ol"
  });

}