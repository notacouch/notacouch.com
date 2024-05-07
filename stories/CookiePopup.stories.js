/**
 * Cookie preferences popup
 *
 * The buttons are similar because there is not a right or wrong decision here, asides from thumbs up/down, we do not want to influence the user’s decision in any particular way.
 *
 * The `<details>` tag starts with the `[inert]` attribute which is styled to hide the banner. If there is no `sitePrefs` cookie, the `[inert]` attribute is removed, revealing the banner.
 *
 * The actual cookie-related JS is n/a w/ Storybook at this time.
 *
 * There are no post action status messages, e.g. toasts for the banner's nor Cookie Policy page buttons.
 *
 * TODO: Consider if this is a disclaimer popup in general
 *
 * TODO: Story w/ ability to actually affect cookies to play with banner in the real
 */
export default {
  title: 'Slices/Cookie Popup',
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return `<div style="min-height: 300px;"></div>
      ${Story()}
      `;
    },
  ],
  render: () => {
    return `
<details class="cookie-banner" open id="cookie-banner" tabindex="0">
  <summary class="cookie-banner__summary" id="cookie-banner__summary" tabindex="0"><span class="cookie-banner__summary__post-marker summary__post-marker"></span>This site uses cookies.<!--<button id="cookie-banner__close" class="destyle-button"><span class="sr-only">Decline and close cookie banner</span><span class="ph-light ph-x-circle"></span></button>--></summary>
  <div class="cookie-banner__content" tabindex="0">
    <p>Cookies are small text files stored on your device. If you accept, I&rsquo;ll use cookies solely for analysis of website traffic. Declining still results in one cookie being used so we can remember your preference. To learn more, see <a href="#">Cookie Policy</a>.</p>
    <p><button class="button button-pair" id="cookie-banner__accept"><span class="ph-light ph-thumbs-up"></span> Accept</button> <button class="button button-pair" id="cookie-banner__decline"><span class="ph-fill ph-thumbs-down"></span> Decline</button></p>
  </div>
</details>
`;
  },
  // argTypes: {
  // },
  // parameters: {
  //   componentSubtitle: '...',
  // },
};

export const cookiePopupOpen = {
  args: {},
};
