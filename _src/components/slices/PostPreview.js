import PostMeta from './PostMeta.js';

/**
 * Post Preview component
 *
 * Used in post listings
 *
 * @module components/slices/PostPreview
 * @component PostPreview
 * @class PostPreview
 */
export default class PostPreview {
  /**
   * Render PostPreview
   *
   * @param {string} titleLink - URL for post
   * @param {string} titleText - Title text
   * @param {string} [subtitle=''] - Subtitle text
   * @param {string} publishedDatetime - Expects %Y-%m-%d format for <time> tag
   * @param {string} publishedDate - Expects "%-m.%-d.%Y format for display
   * @param {string} topicContent - Comma-delimited <a> tags
   * @returns {string} HTML string
   * @memberof PostPreview
   */
  render(titleLink, titleText, subtitle = '', publishedDatetime, publishedDate, topicContent) {
    const subtitleHtml = subtitle ? `<p>${subtitle}</p>` : '';
    const metaHtml = new PostMeta().render(
      'post-preview',
      publishedDatetime,
      publishedDate,
      topicContent,
    );

    return `
  <article class="post-preview grid__default--lt900 grid__body--gt900">
    <header class="post-preview__title">
      <a href="${titleLink}"
        >${titleText}</a
      >
    </header>
    ${subtitleHtml}
    ${metaHtml}
  </article>
    `;
  }
}
