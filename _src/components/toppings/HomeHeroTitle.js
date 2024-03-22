/**
 * Home Hero Title component
 *
 * Though this takes up the width of the full body, use `<br>`s reasonably.
 *
 * @module components/toppings/HomeHeroTitle
 * @see module:components/slices/HomeHero
 * @component HomeHeroTitle
 * @class HomeHeroTitle
 */
export default class HomeHeroTitle {
  /**
   * Render Home Hero Title
   *
   * @param {string} title - Title text
   * @returns {string} - HTML string
   * @memberof HomeHeroTitle
   */
  render(title) {
    return `
    <h1 class="home-hero__title">
      ${title}
    </h1>
    `;
  }
}
