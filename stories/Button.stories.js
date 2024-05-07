/**
 * Button
 *
 */
export default {
  title: 'Toppings/Button',
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return `<div style="min-height: 30px;"></div>
      <span style="display: inline-block; width: 30px;"></span>${Story()}
      <div style="min-height: 30px;"></div>
      `;
    },
  ],
  render: () => {
    return `<button class="button">Accept</button>`;
  },
  // argTypes: {
  // },
  // parameters: {
  //   componentSubtitle: '...',
  // },
};

export const basicButton = {
  args: {},
};

/**
 * Look ma, no background image!
 *
 * TODO: Button states?
 */
export const accessibilityFixture = {
  render: () => {
    return `<button class="button button--a11y-fixture">Accept</button>`;
  },
};
