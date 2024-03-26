/**
 * Global HeaderNav component
 *
 * It's the global nav. It goes everywhere, really fast.
 *
 * @module components/global/HeaderNav
 * @component HeaderNav
 * @class HeaderNav
 */
export default class HeaderNav {
  // async render kills storybook, so no dynamic imports

  /**
   * Render Global Nav HTML
   *
   * @param {string} [currentPageUrl=''] - used for matching /, /work/, /blog/, for aria-current vs href attributes
   * @returns {string} HTML string
   * @memberof HeaderNav
   */
  render(currentPageUrl = '') {
    // TODO: dynamic import .main-nav css, or not, see above

    // const blogUrl = '/blog/';
    // const onBlog = (currentPageUrl && currentPageUrl === blogUrl);
    // let blogLinkAttrs = '';
    // if (onBlog) {
    //   blogLinkAttrs = 'aria-current="page"';
    // } else {
    //   blogLinkAttrs = `href="${blogUrl}"`;
    // }

    const ariaCurrent = 'aria-current="page"';
    const homeLinkAttrs = currentPageUrl === '/' ? ariaCurrent : 'href="/"';
    let links = '';

    [
      {
        key: 'Work',
        url: '/work/',
      },
      {
        key: 'Blog',
        url: '/blog/',
      },
    ].forEach(function createLinks(linkConfig) {
      const onPage = currentPageUrl && currentPageUrl === linkConfig.url;
      let linkAttrs = '';
      if (onPage) {
        linkAttrs = ariaCurrent;
      } else {
        linkAttrs = `href="${linkConfig.url}"`;
      }
      links += `<li><a ${linkAttrs}>${linkConfig.key}</a></li>`;
    });

    // VoiceOver is not propogating focus for links, but does so for buttons.
    // But then there's no blur event to manage so can't rehide.
    // <button class="skip-to-link" href="#content" id="main-nav__skip-to-content">Skip to Content</button>

    return `
    <nav class="grid main-nav" aria-labelledby="main-nav-label">
      <span class="sr-only grid__start" id="main-nav-label"
        >Main navigation:</span
      >
      <a ${homeLinkAttrs} class="main-nav__home grid__body-left"
        ><img
          src="/notacouch-icon-256.png"
          alt="logo: letter n with an embedded letter a for 'notacouch, abed'"
          class="n-for-notacouch"
      /></a>
      <ul class="main-nav__list grid__end-body-right-more" role="list">
      <li id="main-nav__skip-to-content-li"><a class="skip-to-link" href="#content" id="main-nav__skip-to-content">Skip to Content</a></li>${links}
      </ul>
    </nav>
    `;
  }
}
