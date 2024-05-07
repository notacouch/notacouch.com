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

    const ariaCurrent = 'aria-current="page"';
    const homeLinkAttrs = currentPageUrl === '/' ? ariaCurrent + ' href="/"' : 'href="/"';
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
      let linkAttrs = `href="${linkConfig.url}"`;
      if (onPage) {
        linkAttrs += ' ' + ariaCurrent;
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
      <li id="main-nav__skip-to-content-li"><a class="skip-to-link" href="#content" id="main-nav__skip-to-content">Skip to Content</a></li>${links}<li><a href="/storybook/"><span class="sr-only">Storybook</span><svg class="main-nav__storybook-icon" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="52" height="64" version="1.1" viewBox="0 0 52 64"><title>icon-storybook-monochrome</title><defs><path id="path-1" d="M1.94279175,57.1309472 L0.0022554267,5.95476663 C-0.0618328758,4.26461814 1.24754196,2.83223697 2.95307926,2.72673418 L46.9330824,0.00617628491 C48.6691159,-0.10121296 50.1644074,1.2046298 50.2729096,2.92285771 C50.2769973,2.98759391 50.2790429,3.05244063 50.2790429,3.11730315 L50.2790429,58.8828028 C50.2790429,60.6043831 48.8689636,62 47.1295431,62 C47.0824212,62 47.0353056,61.9989534 46.9882313,61.9968606 L4.94876437,60.1280997 C3.31149338,60.0553189 2.00425692,58.751918 1.94279175,57.1309472 Z"/></defs><g id="icon-storybook-monochrome" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="icon" transform="translate(1.000000, 1.000000)"><path id="Combined-Shape" fill="currentColor" fill-rule="nonzero" d="M50.2729096,2.92285771 C50.2769973,2.98759391 50.2790429,3.05244063 50.2790429,3.11730315 L50.2790429,58.8828028 C50.2790429,60.6043831 48.8689636,62 47.1295431,62 C47.0824212,62 47.0353056,61.9989534 46.9882313,61.9968606 L4.94876437,60.1280997 C3.31149338,60.0553189 2.00425692,58.751918 1.94279175,57.1309472 L0.0022554267,5.95476663 C-0.0618328758,4.26461814 1.24754196,2.83223697 2.95307926,2.72673418 L37.427,0.594 L37.1272753,7.62078766 C37.1238721,7.70179664 37.1419373,7.78178731 37.179031,7.85305525 L37.2223772,7.92113026 C37.3791917,8.12573637 37.6738999,8.16578288 37.880626,8.0105767 L37.880626,8.0105767 L40.6382617,5.94019678 L42.9673936,7.75618537 C43.0546693,7.82423279 43.1634862,7.85946584 43.2745216,7.85562813 C43.5338374,7.84666553 43.7367132,7.6313391 43.7276576,7.37468316 L43.7276576,7.37468316 L43.467,0.22 L46.9330824,0.00617628491 C48.6691159,-0.10121296 50.1644074,1.2046298 50.2729096,2.92285771 Z"/><mask id="mask-2" fill="#fff"><use xlink:href="#path-1"/></mask><path id="S" fill="#FFF" fill-rule="nonzero" d="M29.4029796,23.368648 C29.4029796,24.58142 37.6567008,24.00017 38.7646901,23.1482813 C38.7646901,14.8895929 34.2873503,10.5497821 26.0885852,10.5497821 C17.88982,10.5497821 13.2961856,14.9571143 13.2961856,21.5681161 C13.2961856,33.0822778 28.9959487,33.3026444 28.9959487,39.5830962 C28.9959487,41.3460299 28.1237396,42.3927719 26.2048797,42.3927719 C23.7045471,42.3927719 22.7160434,41.1289316 22.832338,36.8317805 C22.832338,35.8995698 13.2961856,35.6089448 13.0054493,36.8317805 C12.2651161,47.2453073 18.8201763,50.248968 26.3211742,50.248968 C33.5895831,50.248968 39.2880157,46.4144645 39.2880157,39.4729126 C39.2880157,27.132376 23.3556634,27.4629261 23.3556634,21.3477494 C23.3556634,18.8686237 25.2163761,18.5380737 26.3211742,18.5380737 C27.4841196,18.5380737 29.5774214,18.7409467 29.4029796,23.368648 Z" mask="url(#mask-2)"/><path id="bookmark" fill="#FFF" fill-rule="nonzero" d="M37.1272753,7.62078766 L37.4276823,0.591583333 L43.4674595,0.218291667 L43.7276576,7.37468316 C43.7367132,7.6313391 43.5338374,7.84666553 43.2745216,7.85562813 C43.1634862,7.85946584 43.0546693,7.82423279 42.9673936,7.75618537 L40.6382617,5.94019678 L37.880626,8.0105767 C37.6738999,8.16578288 37.3791917,8.12573637 37.2223772,7.92113026 C37.1563661,7.83500129 37.1227378,7.72879963 37.1272753,7.62078766 Z" mask="url(#mask-2)"/></g></g></svg></a></li>
      </ul>
    </nav>
    `;
  }
}
