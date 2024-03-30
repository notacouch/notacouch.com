// import { fn } from '@storybook/test';
import HeaderNav from '../_src/components/global/HeaderNav';
// import { Subtitle } from '@storybook/blocks';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

/**
 * Currently does not have any particular consideration for a future search input or mobile (since it should all fit).
 *
 * A11y: Tab to Skip to Content link.
 */
export default {
  title: 'Global/HeaderNav',
  tags: ['autodocs'],
  component: HeaderNav,
  decorators: [
    (Story) =>
      `<div style="background-color: var(--background-color-gradient-top); padding-bottom: var(--gutter-width);">${Story()}</div>`,
  ],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return new HeaderNav().render(args?.currentPageUrl);
  },
  argTypes: {
    currentPageUrl: {
      // control: { type: "text" },
      control: 'text',
      description:
        'If the URL matches the link (/work/ or /blog/), the link should have `aria-current=page` and text links should become underlined.',
      table: {
        type: 'string',
      },
    },
  },
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  //   label: { control: 'text' },
  //   onClick: { action: 'onClick' },
  //   primary: { control: 'boolean' },
  //   size: {
  //     control: { type: 'select' },
  //     options: ['small', 'medium', 'large'],
  //   },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
  parameters: {
    componentSubtitle: 'Goes on the top of every page.',
  },
};

/**
 * `url === '/'`: Logo should have `aria-current="page"`
 */
export const Home = {
  args: {
    currentPageUrl: '/',
  },
};

/**
 * `url === '/work/'`: Work link should be underlined and have `aria-current="page"`
 */
export const OnWork = {
  args: {
    currentPageUrl: '/work/',
  },
};

/**
 * `url === '/blog/'`: Blog link should be underlined have `aria-current="page"`
 */
export const OnBlog = {
  args: {
    currentPageUrl: '/blog/',
  },
};

/**
 * In any other page, none of the links should have `aria-current="page"`
 */
export const NonNavPage = {};
