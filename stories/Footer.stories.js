// import { fn } from '@storybook/test';
import Footer from '../_src/components/global/Footer';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

/**
 * This goes on the bottom of every page, literally, even if the main content is not enough to occupy the viewport.
 *
 * About the "Built ... with * * in NYC": I used to see this trend of "Built with ♥️ in NYC" and always wanted to jump on the bandwagon. When I looked into it, I couldn't trace the trend to anything but GitHub's embed message. When discouraged, do what Chandler does.
 */
export default {
  title: 'Global/Footer',
  tags: ['autodocs'],
  component: Footer,
  render: () => {
    return new Footer().render();
  },
  parameters: {
    componentSubtitle: 'The foot of the matter.',
  },
};

export const GlobalFooter = {};
