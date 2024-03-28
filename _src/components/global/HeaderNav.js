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
      <li id="main-nav__skip-to-content-li"><a class="skip-to-link" href="#content" id="main-nav__skip-to-content">Skip to Content</a></li>${links}<li><a href="/storybook/"><span class="sr-only">Storybook</span><svg class="main-nav__storybook-icon" width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.042.616a.704.704 0 00-.66.729L1.816 12.9c.014.367.306.66.672.677l9.395.422h.032a.704.704 0 00.704-.703V.704c0-.015 0-.03-.002-.044a.704.704 0 00-.746-.659l-.773.049.057 1.615a.105.105 0 01-.17.086l-.52-.41-.617.468a.105.105 0 01-.168-.088L9.746.134 2.042.616zm8.003 4.747c-.247.192-2.092.324-2.092.05.04-1.045-.429-1.091-.689-1.091-.247 0-.662.075-.662.634 0 .57.607.893 1.32 1.27 1.014.538 2.24 1.188 2.24 2.823 0 1.568-1.273 2.433-2.898 2.433-1.676 0-3.141-.678-2.976-3.03.065-.275 2.197-.21 2.197 0-.026.971.195 1.256.753 1.256.43 0 .624-.236.624-.634 0-.602-.633-.958-1.361-1.367-.987-.554-2.148-1.205-2.148-2.7 0-1.494 1.027-2.489 2.86-2.489 1.832 0 2.832.98 2.832 2.845z" fill="currentColor"></path></svg></a></a></li>
      </ul>
    </nav>
    `;
  }
}
