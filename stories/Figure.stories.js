import Figure from '../_src/components/slices/Figure';
import FloatWrapper from '../_src/components/slices/FloatWrapper';

/**
 * Figure wrappers in all their layout and embed variations.
 *
 * For video and code tags: provide their full HTML via `content`.
 *
 * For videos: mimic img classes seen here.
 */
export default {
  title: 'Slices/Figure',
  tags: ['autodocs'],
  component: Figure,
  decorators: [
    (Story) => `
<article class="post grid" style="background-color: var(--background-color-gradient-bottom);">
  ${Story()}
</article>
`,
  ],

  /**
   * See Figure component for param details
   */
  render: ({ content = '', type, imageSrc = '', imageAlt = '', caption = '', ...args }) => {
    return new Figure().render(content, type, imageSrc, imageAlt, caption);
  },
  argTypes: {
    // publishedDatetime: {
    //   table: {
    //     type: 'date',
    //   },
    // },
    // topicContent: {
    //   description: 'List of comma-delimited links, keep link text lowercase.',
    // },
  },
  // parameters: {
  //   componentSubtitle: '...',
  // },
};

/**
 * Basic usage for images.
 *
 * `type: 'img--grid--body'`
 */
export const imageInGridBody = {
  decorators: [
    (Story) => `
  ${Story()}
  <p>Our designers got to work with materials provided to them. They'd pass me full comps and I'd slice them up in Photoshop based on how I&rsquo;d lay them out. For the unfamiliar, layout via CSS was not really a thing. To achieve positioning, you created tables with rows all for the purpose of sizing columns to your needs and nested tables as much as needed.</p>
`,
  ],
  args: {
    type: 'img--grid--body',
    imageSrc: '/blog-images/brainlink/diamond-guide/diamond-guide-inspect-element.png',
    imageAlt: 'Screenshot of inspecting Diamond-Guide.com',
    caption: 'Sample table-based layout starting with the menu.',
    content: '',
  },
};

/**
 * Juxtapose before/after images. Uses grid and juts out to the left of textual content.
 *
 * Please note the images' dimensions ought to be the same.
 *
 * Before image Figure: `type: 'img--grid--before'`
 *
 * After image Figure: `type: 'img--grid--after'`
 */
export const imageBeforeAfter = {
  decorators: [
    (Story) => `
  ${Story()}
  <p>In my time at Brainlink, this was our team's largest project to date. Diamond-Guide.com was a massive website, the client really tried to hold their users' hands in their shopping experience by providing ample information on jewelry. They had literal books of imagery for us and wanted pretty much their entire website to be images.</p>
`,
  ],
  args: {
    before: {
      type: 'img--grid--before',
      imageSrc: '/blog-images/brainlink/diamond-guide/diamond-guide-before-brainlink-crop.png',
      imageAlt: `Screenshots of Diamond-Guide.com in the year 2000 before Brainlink's work`,
      caption: 'Diamond-Guide.com (2000) before Brainlink',
    },
    after: {
      type: 'img--grid--after',
      imageSrc: '/blog-images/brainlink/diamond-guide/diamond-guide-after-brainlink-crop.png',
      imageAlt: `Screenshot of Diamond-Guide.com in the year 2000 with Brainlink's design`,
      caption:
        '<a href="https://web.archive.org/web/20001109143500/http://www.diamond-guide.com/">Diamond-Guide.com (2000) after Brainlink</a>',
    },
  },
  render: (args) => {
    let beforeHtml = '';
    let afterHtml = '';
    {
      let { content = '', type, imageSrc = '', imageAlt = '', caption = '' } = args.before;
      beforeHtml = new Figure().render(content, type, imageSrc, imageAlt, caption);
    }
    {
      let { content = '', type, imageSrc = '', imageAlt = '', caption = '' } = args.after;
      afterHtml = new Figure().render(content, type, imageSrc, imageAlt, caption);
    }
    return beforeHtml + afterHtml;
  },
};

/**
 * Wrap around the right of text content. Note this requires a special wrapper.
 *
 * `type: 'img--wrap--right'`
 */
export const imageWrapRight = {
  decorators: [
    (Story) => `
    ${Story()}
    <p>Back then, how did one code the frontend for a site that had enough images to block out the light of the sun? That's right. In the dark (i.e. table-based layouts). With knives (i.e. Adobe Photoshop slice tool).</p>
    <p>Our designers got to work with materials provided to them. They'd pass me full comps and I'd slice them up in Photoshop based on how I&rsquo;d lay them out. For the unfamiliar, layout via CSS was not really a thing. To achieve positioning, you created tables with rows all for the purpose of sizing columns to your needs and nested tables as much as needed. To achieve additional precision, you used spacer GIFs, 1&times;1 pixel transparent GIFs, which you could size exactly how you wanted via width and height attributes to push things around or otherwise occupy empty space.</p>
`,
    (Story) => new FloatWrapper().render(Story()),
  ],
  args: {
    type: 'img--wrap--right',
    imageSrc: '/blog-images/brainlink/diamond-guide/diamond-guide-slice-tool-sample.png',
    imageAlt: `Screenshot of using Adobe Photoshop's slice tool for Diamond Guide`,
    caption: 'A look at Adobe Photoshop&rsquo;s slice tool.',
  },
};

/**
 * Super wide image.
 *
 * `type: 'img--grid--full'`
 */
export const wideImageInGrid = {
  decorators: [
    (Story) => `
  ${Story()}
  <p>What I'm unable to share is the first JavaScript (JS) challenge I was tasked with. The client wanted a news ticker scrolling on the top right of certain pages. I hadn't done anything like this before, [marquee](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee) did not have universal support, and there were no such scripts on Dynamic Drive, a site where one would find dynamic HTML or dHTML scripts (which is what we called manipulation of the DOM back then). My approach to it was absolutely positioning a mask container div. </p>
`,
  ],
  args: {
    type: 'img--grid--full',
    imageSrc: '/blog-images/brainlink/diamond-guide/news-ticker-sketch-psd.png',
    imageAlt: `Sketch of the thought process behind the news ticker`,
    caption: 'Thought process behind the news ticker.',
  },
};

/**
 * Basic code snippet, add these classes on the code tag: `code code--full`.
 *
 * `type: 'code--grid--body-more'`
 */
export const codeInGrid = {
  decorators: [
    (Story) => `
  ${Story()}
  <p>This is the paragraph that comes after the code tag just to give you an idea of the size the code snippet is occupying if it helps which I hope it does.</p>
`,
  ],
  args: {
    type: 'code--grid--body-more',
    content: `<pre><code class="code code--full language-html" tabindex="0">
      &lt;tr&gt;
                              &lt;!-- See nested &lt;table&gt; in the table cell below --&gt;
              &lt;td colspan="2"&gt;&lt;table border="0" width="740" cellspacing="0" cellpadding="0"&gt;
                              &lt;tr align="left"&gt;
                                      &lt;td&gt;&lt;a href="./Diamond_Education/about.html"&gt;&lt;img src="/images/top_aboutus.gif" alt="" border="0"&gt;&lt;/a&gt;&lt;/td&gt;
              &lt;td width="15"&gt;&lt;img src="/images/blank.gif ALT=" " width="15" height="1"&gt;&lt;/td&gt;
                                      &lt;td&gt;&lt;a href="services.html"&gt;&lt;img src="/images/top_policiesandservices.gif" alt="" width="98" height="20" border="0"&gt;&lt;/a&gt;&lt;/td&gt;

                                      &lt;!--  Pair table-based layout with blank.gif for achieving pixel perfect precision --&gt;
              &lt;td width="15"&gt;&lt;img src="/images/blank.gif ALT=" " width="15" height="1"&gt;&lt;/td&gt;
                                      &lt;td&gt;&lt;img src="/images/top_8003209670.gif" alt="" width="75" height="20"&gt;&lt;/td&gt;
              &lt;td width="15"&gt;&lt;img src="/images/blank.gif ALT=" " width="15" height="1"&gt;&lt;/td&gt;
                                      &lt;td&gt;&lt;a href="mailto:sales@diamond-guide.com"&gt;&lt;img src="/images/top_emailus.gif" alt="" width="54" height="20" border="0"&gt;&lt;/a&gt;&lt;/td&gt;
              &lt;td width="15"&gt;&lt;img src="/images/blank.gif ALT=" " width="15" height="1"&gt;&lt;/td&gt;
                                      &lt;td&gt;&lt;a href="glossary-1.html"&gt;&lt;img src="/images/top_glossary.gif" alt="" width="48" height="20" border="0"&gt;&lt;/a&gt;&lt;/td&gt;
              &lt;td width="15"&gt;&lt;img src="/images/blank.gif ALT=" " width="15" height="1"&gt;&lt;/td&gt;
                                      &lt;td&gt;&lt;a href="/testimonials.html"&gt;&lt;img src="/images/top_testimonials.gif" alt="" border="0"&gt;&lt;/a&gt;&lt;/td&gt;
              &lt;td width="15"&gt;&lt;img src="/images/blank.gif ALT=" " width="15" height="1"&gt;&lt;/td&gt;
                                      &lt;td&gt;&lt;a href="http://www.gembeat.com/cgi-bin/gembeat/ord/basket"&gt;&lt;img src="/images/top_shoppingcart.gif" alt="" width="74" height="20" border="0"&gt;&lt;/a&gt;&lt;/td&gt;
              &lt;td width="15"&gt;&lt;img src="/images/blank.gif ALT=" " width="15" height="1"&gt;&lt;/td&gt;
                                      &lt;td&gt;&lt;a href="Diamond_Education"&gt;&lt;img src="/images/top_learningcenter.gif" alt="" width="81" height="20" border="0"&gt;&lt;/a&gt;&lt;/td&gt;

                              &lt;/tr&gt;
                              &lt;/table&gt;
              &lt;/td&gt;
      &lt;/tr&gt;
</code></pre>`,
    caption: 'Code.',
  },
};

// TODO: figcaption doesn't sit well here

/**
 * Super wide code snippet, add these classes on the code tag: `code code--full grid__full__extended-body`.
 *
 * `type: 'code--grid--full'`
 */
export const wideCodeInGrid = {
  decorators: [
    (Story) => `
  ${Story()}
  <p>This is the paragraph that comes after the code tag just to give you an idea of the size the code snippet is occupying if it helps which I hope it does.</p>
`,
  ],
  args: {
    type: 'code--grid--full',
    content: `<pre><code class="code code--full grid__full__extended-body language-html" tabindex="0">
      &lt;tr&gt;
                              &lt;!-- See nested &lt;table&gt; in the table cell below --&gt;
              &lt;td colspan="2"&gt;&lt;table border="0" width="740" cellspacing="0" cellpadding="0"&gt;
                              &lt;tr align="left"&gt;
                                      &lt;td&gt;&lt;a href="./Diamond_Education/about.html"&gt;&lt;img src="/images/top_aboutus.gif" alt="" border="0"&gt;&lt;/a&gt;&lt;/td&gt;
              &lt;td width="15"&gt;&lt;img src="/images/blank.gif ALT=" " width="15" height="1"&gt;&lt;/td&gt;
                                      &lt;td&gt;&lt;a href="services.html"&gt;&lt;img src="/images/top_policiesandservices.gif" alt="" width="98" height="20" border="0"&gt;&lt;/a&gt;&lt;/td&gt;

                                      &lt;!--  Pair table-based layout with blank.gif for achieving pixel perfect precision --&gt;
              &lt;td width="15"&gt;&lt;img src="/images/blank.gif ALT=" " width="15" height="1"&gt;&lt;/td&gt;
                                      &lt;td&gt;&lt;img src="/images/top_8003209670.gif" alt="" width="75" height="20"&gt;&lt;/td&gt;
              &lt;td width="15"&gt;&lt;img src="/images/blank.gif ALT=" " width="15" height="1"&gt;&lt;/td&gt;
                                      &lt;td&gt;&lt;a href="mailto:sales@diamond-guide.com"&gt;&lt;img src="/images/top_emailus.gif" alt="" width="54" height="20" border="0"&gt;&lt;/a&gt;&lt;/td&gt;
              &lt;td width="15"&gt;&lt;img src="/images/blank.gif ALT=" " width="15" height="1"&gt;&lt;/td&gt;
                                      &lt;td&gt;&lt;a href="glossary-1.html"&gt;&lt;img src="/images/top_glossary.gif" alt="" width="48" height="20" border="0"&gt;&lt;/a&gt;&lt;/td&gt;
              &lt;td width="15"&gt;&lt;img src="/images/blank.gif ALT=" " width="15" height="1"&gt;&lt;/td&gt;
                                      &lt;td&gt;&lt;a href="/testimonials.html"&gt;&lt;img src="/images/top_testimonials.gif" alt="" border="0"&gt;&lt;/a&gt;&lt;/td&gt;
              &lt;td width="15"&gt;&lt;img src="/images/blank.gif ALT=" " width="15" height="1"&gt;&lt;/td&gt;
                                      &lt;td&gt;&lt;a href="http://www.gembeat.com/cgi-bin/gembeat/ord/basket"&gt;&lt;img src="/images/top_shoppingcart.gif" alt="" width="74" height="20" border="0"&gt;&lt;/a&gt;&lt;/td&gt;
              &lt;td width="15"&gt;&lt;img src="/images/blank.gif ALT=" " width="15" height="1"&gt;&lt;/td&gt;
                                      &lt;td&gt;&lt;a href="Diamond_Education"&gt;&lt;img src="/images/top_learningcenter.gif" alt="" width="81" height="20" border="0"&gt;&lt;/a&gt;&lt;/td&gt;

                              &lt;/tr&gt;
                              &lt;/table&gt;
              &lt;/td&gt;
      &lt;/tr&gt;
</code></pre>`,
    caption: 'Code.',
  },
};
