/**
 * Figure component
 *
 * Embed an image, video, or code snippet with caption
 *
 * @module components/slices/Figure
 * @component Figure
 * @class Figure
 */
export default class Figure {
  /**
   * Render Figure HTML, code and video tags must be added manually
   * @param {string} [content=''] - <pre><code></code></pre>, <video> tags or other content
   * @param {string} type - img--grid--before, img--grid--after, img--wrap--right, img--grid--body, image--grid--full,
   * @param {string} [imageSrc=''] - img src if using an img
   * @param {string} [imageAlt=''] - alt text for img
   * @param {string} [caption=''] - content for <figcaption>
   * @returns {string} HTML string
   */
  render(content = '', type, imageSrc = '', imageAlt = '', caption = '') {
    const captionHtml = caption ? `<figcaption>${caption}</figcaption>` : '';
    let imageHtml = '';
    let figureClasses = '';
    let imageClasses = '';

    switch (type) {
      case 'img--grid--before':
        figureClasses =
          'figure--img figure--img--before-after figure--img--before grid__left-right grid__left-right--left grid__figure';
        break;
      case 'img--grid--after':
        figureClasses =
          'figure--img figure--img--before-after figure--img--after grid__left-right grid__left-right--right grid__figure';
        break;
      case 'img--wrap--right':
        figureClasses = 'figure--img figure--img--text-wrap';
        break;
      case 'img--grid--body':
        figureClasses = 'figure--img figure--img--body grid__figure';
        imageClasses = 'figure--img--body__img';
        break;
      case 'img--grid--full':
        figureClasses = 'figure--img figure--img--body grid__figure grid__body-left-to-right-more';
        imageClasses = 'figure--img--body__img';
        break;
      case 'code--grid--body-more':
        // extend passed the paragraph length
        figureClasses = 'figure--code grid__body-to-right-more';
        // codeClasses = ```js {.code .code--full}"
        break;
      case 'code--grid--full':
        // super wide
        figureClasses = 'figure--code grid__full';
        // codeClasses = ```html {.code .code--full .grid__full__extended-body}"
        break;
      default:
        break;
    }
    if (imageSrc && imageAlt) {
      imageHtml = `<a href="${imageSrc}"><img class="figure__img ${imageClasses}" src="${imageSrc}" alt="${imageAlt}"></a>`;
    }

    return `<figure class="figure ${figureClasses}">${imageHtml}${content}${captionHtml}</figure>`;
  }
}

/*
before/after:

<figure
  class="figure figure--img figure--img--before-after figure--img--before grid__left-right grid__left-right--left grid__figure"
>
  <a href="/blog-images/brainlink/diamond-guide/diamond-guide-before-brainlink-crop.png"><img
    class="figure__img"
    src="/blog-images/brainlink/diamond-guide/diamond-guide-before-brainlink-crop.png"
    alt="Screenshots of Diamond-Guide.com in the year 2000 before Brainlink's work"
  /></a>
  <figcaption>Diamond-Guide.com (2000) before Brainlink</figcaption>
</figure>
<figure
  class="figure figure--img figure--img--before-after figure--img--after grid__left-right grid__left-right--right grid__figure"
>
  <a href="/blog-images/brainlink/diamond-guide/diamond-guide-after-brainlink-crop.png"><img
    class="figure__img"
    src="/blog-images/brainlink/diamond-guide/diamond-guide-after-brainlink-crop.png"
    alt="Screenshot of Diamond-Guide.com in the year 2000 with Brainlink's design"
  /></a>
  <figcaption><a href="https://web.archive.org/web/20001109143500/http://www.diamond-guide.com/">Diamond-Guide.com (2000) after Brainlink</a></figcaption>
</figure>

float-right text wrap:
<figure class="figure figure--img figure--img--text-wrap">
  <a href="/blog-images/brainlink/diamond-guide/diamond-guide-slice-tool-sample.png"><img
    src="/blog-images/brainlink/diamond-guide/diamond-guide-slice-tool-sample.png"
    alt="Screenshot of using Adobe Photoshop's slice tool for Diamond Guide"
    class="figure__img"
  /></a>
  <figcaption>A look at Adobe Photoshop&rsquo;s slice tool.</figcaption>
</figure>

image with grid body:
<figure class="figure figure--img figure--img--body grid__figure">
  <img
    src="/blog-images/brainlink/diamond-guide/diamond-guide-inspect-element.png"
    alt="Screenshot of inspecting Diamond-Guide.com 2000's menu"
    class="figure__img figure--img--body__img"
  />
  <figcaption>Sample table-based layout starting with the menu.</figcaption>
</figure>

image super wide in grid:
<figure class="figure figure--img figure--img--body grid__figure grid__body-left-to-right-more">
  <a href="/blog-images/brainlink/diamond-guide/news-ticker-sketch-psd.png"><img
    src="/blog-images/brainlink/diamond-guide/news-ticker-sketch-psd.png"
    alt="Sketch of the logic behind the news ticker"
    class="figure__img figure--img--body__img"
  /></a>
  <figcaption>Thought process behind the ticker.</figcaption>
</figure>

video super wide in grid (so far):
<figure class="figure figure--img figure--img--body grid__figure grid__body-left-to-right-more">
  <video id="tillett-lighting-prototype-demo" controls class="figure__img figure--img--body__img" width="1280" style="aspect-ratio: 4 / 3" poster="/blog-images/fusionlab/tillett/tillett-lighting-poster-optimized.png">
    <source src="/blog-images/fusionlab/tillett/tillett-lighting.mp4" type="video/mp4">
    <track kind="captions" srclang="en" label="English" src="/blog-images/fusionlab/tillett/tillett-lighting-en.vtt" default>
  </video>
  <figcaption>Image color transition with sprites (<span class="media-timestamp" data-media-id="tillett-lighting-prototype-demo" data-timestamp="4">4-8s</span>), clean up of layout (<span class="media-timestamp" data-media-id="tillett-lighting-prototype-demo" data-timestamp="20">20-31s</span>), float-based layout &mdash; review effect of overflow on float wrapper (<span class="media-timestamp" data-media-id="tillett-lighting-prototype-demo" data-timestamp="35">35-55s</span>)</figcaption>
</figure>
*/
