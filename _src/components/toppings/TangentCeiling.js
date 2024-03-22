/**
 * TangentCeiling component
 *
 * Keeps aside.tangent from gravitating higher than predictable
 *
 * @module components/toppings/TangentCeiling
 * @component TangentCeiling
 * @class TangentCeiling
 */
export default class TangentCeiling {
  /**
   * Render TangentCeiling component
   *
   * @param {string} [variant=''] - Usually not needed, so far just has 'tangent' variant for certain situations
   * @returns {string} HTML string
   * @memberof TangentCeiling
   */
  render(variant = '') {
    let classes = '';
    switch (variant) {
      case 'tangent':
        classes = 'grid__row-reset--tangent';
        break;
      default:
        break;
    }
    return `<hr class="grid__row-reset ${classes}">`;
  }
}
