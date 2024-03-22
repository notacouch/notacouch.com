/**
 * Home Hero Subtitle component
 *
 * @module components/toppings/HomeHeroSubtitle
 * @see module:components/slices/HomeHero
 * @component HomeHeroSubtitle
 * @class HomeHeroSubtitle
 */
export default class HomeHeroSubtitle {
  /**
   * Render Home Hero Subtitle
   *
   * @param {string} subtitle - content to put in Home Hero SubTitle
   * @returns {string} HTML string
   * @memberof HomeHeroSubtitle
   */
  render(subtitle) {
    return `
    <div class="home-hero__sub-title">
    ${subtitle}
    </div>
    `;
  }
}
