/**
 * Wrapper helps break paragraphs out of grid to allow for floats (Figure with type img--text--wrap)
 *
 * @module components/slices/FloatWrapper
 * @see module:components/slices/Figure
 * @component FloatWrapper
 * @class FloatWrapper
 */
export default class FloatWrapper {
  /**
   * Render FloatWrapper component
   *
   * @param {string} content - HTML content this will wrap around
   * @returns {string} HTML string
   * @memberof FloatWrapper
   */
  render(content = '') {
    return `<div class="p grid__body-to-right--gt900">${content}</div>`;
  }
}
