// Notes on CSS import:
// phosphor-icons are all in, we would get the whole ph-fill and ph-light weights

/**
 * Global Footer component
 *
 * It's the global footer. The bottom side of every page.
 *
 * @module components/global/Footer
 * @class Footer
 */
export default class Footer {
  /**
   * Render component HTML string
   *
   * @returns {string} HTML as a string
   * @memberof Footer
   */
  render() {
    return `
    <footer class="main-footer grid">
      <span
        class="main-footer__copy main-footer__text grid__body-start--lt1250 grid__space-start--gt1250 grid__body-left--gt1500"
        >&copy; 2024 Abed&nbsp;Islam</span
      >
      <span
        class="main-footer__built main-footer__text grid__body-start--gt1250 grid__mid-body--lt1250"
        >Built on <a href="https://11ty.dev/">11ty</a> with
        <!--<s>♥️</s>-->
        <span class="sr-only">mechanical keyboard</span
        ><span class="ph-light ph-gear" title="mechanical"></span
        ><span class="ph-light ph-keyboard" title="keyboard"></span> in&nbsp;NYC
      </span>
      <nav
        class="main-footer__social-media grid__mid-body-to-body-right-more--gt1250 grid__end-body-right-more--lt1250"
        aria-labelledby="social-media-header"
      >
        <span class="sr-only" id="social-media-header"
          >Social media links: </span
        ><a href="https://www.linkedin.com/in/notacouch"
          ><span class="sr-only">LinkedIn</span
          ><span class="ph-fill ph-linkedin-logo"></span
        ></a>
        <a href="https://twitter.com/notacouch"
          ><span class="sr-only">X (formerly Twitter)</span
          ><span class="ph-fill ph-twitter-logo"></span
        ></a>
        <a href="https://github.com/notacouch"
          ><span class="sr-only">GitHub</span
          ><span class="ph-fill ph-github-logo"></span
        ></a>
        <a href="https://bitly.com/notacouch-stackoverflow"
          ><span class="sr-only">Stack Overflow</span
          ><span class="ph-light ph-stack-overflow-logo"></span
        ></a>
        <a href="https://codepen.io/notacouch/pens/public"
          ><span class="sr-only">CodePen</span
          ><span class="ph-light ph-codepen-logo"></span
        ></a>
      </nav>
    </footer>
`;
  }
}
