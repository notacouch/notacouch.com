// import toppings: publish date, modified date, topics

/**
 * Post Meta component
 *
 * Contains the meta details about the post, for use in Post Preview or Post
 *
 * @module components/slices/PostMeta
 * @see components/slices/PostPreview
 * @component PostMeta
 * @class PostMeta
 */
export default class PostMeta {
  /**
   * Render Post Meta
   *
   * @param {string} metaPrefix - either 'post-preview' or 'hero' (hero is actually post...)
   * @param {string} publishedDatetime - Expects %Y-%m-%d format for <time> tag
   * @param {string} publishedDate - Expects "%-m.%-d.%Y format for display
   * @param {string} topicContent - Comma-delimited <a> tags
   * @param {string} [readTime=''] - Read time statement e.g. "5 minutes"
   * @param {string} [modifiedDatetime=''] - Expects %Y-%m-%d format for <time> tag
   * @param {string} [modifiedDate=''] - Expects "%-m.%-d.%Y format for display
   * @returns {string} HTML string
   * @memberof PostMeta
   */
  render(
    metaPrefix,
    publishedDatetime,
    publishedDate,
    topicContent,
    readTime = '',
    modifiedDatetime = '',
    modifiedDate = '',
  ) {
    // meta prefix: post-preview, hero
    let moreClasses = '';
    let colon = '';
    let br = '&nbsp;';
    let metaTag = 'span';
    let modifiedDateHtml = '';
    let readTimeHtml = '';
    let topicsHtml = '';
    let topicsClasses = '';

    if (metaPrefix === 'hero') {
      moreClasses = 'grid__body-start';
      colon = ': ';
      br = '<br>';
      metaTag = 'div';
      topicsClasses = `${metaPrefix}__meta __meta`;
    }

    if (modifiedDate && modifiedDatetime) {
      modifiedDateHtml = `
      <${metaTag} class="${metaPrefix}__published__modified __published__modified">
        <span class="sr-only">Last modified${colon}</span
        ><span class="ph-fill ph-note-pencil" title="Modified"></span>${br}<time datetime="${modifiedDatetime}">${modifiedDate}</time>
      </${metaTag}>
      `;
    }

    if (readTime) {
      readTimeHtml = `
      <${metaTag} class="${metaPrefix}__read-time __read-time">
        <span class="sr-only">Approximate read time${colon}</span
        ><span
          class="ph-light ph-clock-countdown"
          title="Approximate read time"
        ></span
        >${br}<span class="${metaPrefix}__read-time">${readTime}</span>
      </${metaTag}>
      `;
    }

    // meta portion is if in post, also this goes outside if in post
    topicsHtml = `
      <${metaTag} class="${metaPrefix}__tags __tags ${topicsClasses}">
        <span class="sr-only">Topics${colon}</span
        ><span class="ph-light ph-folders" title="Topics"></span>${br}${topicContent}
      </${metaTag}>
      `;

    return `
    <div
      class="${metaPrefix}__published ${metaPrefix}__meta __published __meta ${moreClasses}"
    >
      <${metaTag}
        class="${metaPrefix}__published__published __published__published"
      >
        <span class="sr-only">Published${colon}</span
        ><span class="ph-light ph-book" title="Published"></span>${br}<time datetime="${publishedDatetime}">${publishedDate}</time>
      </${metaTag}>
      ${modifiedDateHtml}
      ${readTimeHtml}
      ${metaPrefix !== 'hero' ? topicsHtml : ''}
    </div>
    ${metaPrefix === 'hero' ? topicsHtml : ''}
    `;
  }
}
