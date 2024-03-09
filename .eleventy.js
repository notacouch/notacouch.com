import eleventyAutoCacheBuster from "eleventy-auto-cache-buster";
import eleventyPluginTOC from "@thedigitalman/eleventy-plugin-toc-a11y";


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

  eleventyConfig.addPlugin(eleventyAutoCacheBuster);
  eleventyConfig.addPlugin(eleventyPluginTOC, {
    wrapperClass: "toc",
    headingClass: "toc__header",
    headingText: "Table of Contents",
    listClass: "toc__ol"
  });
//   <nav class="toc" aria-labelledby="toc">
//   <h2 class="toc__header" id="toc">Table of Contents</h2>
//   <ol class="toc__ol">
//     <li><a href="#layout-2000">Layout in the year 2000</a></li>
//     <li><a href="#scrolling-news-ticker">Scrolling News Ticker</a></li>
//     <li><a href="#conclusion">In conclusion, keep things new</a></li>
//   </ol>
// </nav>
}