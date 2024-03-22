import HomeHeroTitle from '../toppings/HomeHeroTitle.js';
import HomeHeroSubtitle from '../toppings/HomeHeroSubtitle.js';

/**
 * Home Hero component
 *
 * Only on the homepage for now.
 *
 * @module components/slices/HomeHero
 * @component HomeHero
 * @class HomeHero
 */
export default class HomeHero {
  /**
   * Render Home Hero
   *
   * @param {string} title - content to put in Home Hero Title
   * @param {string} [subtitle=''] - content to put in Home Hero Subtitle
   * @returns {string} HTML string
   * @memberof HomeHero
   */
  render(title, subtitle = '') {
    const titleHtml = new HomeHeroTitle().render(title);
    const subtitleHtml = subtitle ? new HomeHeroSubtitle().render(subtitle) : '';

    return `
  <section class="home-hero grid grid__subgrid--hr">
    ${titleHtml}
    ${subtitleHtml}
  </section>
    `;
  }
}
