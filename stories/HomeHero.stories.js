// import { fn } from '@storybook/test';
import HomeHero from '../_src/components/slices/HomeHero';
import HomeHeroTitle from '../_src/components/toppings/HomeHeroTitle';
import HomeHeroSubtitle from '../_src/components/toppings/HomeHeroSubtitle';

/**
 * Toppings: Home Hero Title and Home Hero Subtitle
 *
 * <code>.grid__subgrid--hr</code> provides a bottom border that aligns with the grid.
 */
export default {
  title: 'Slices/Home Hero',
  tags: ['autodocs'],
  component: HomeHero,
  decorators: [
    (Story) =>
      `<div style="background-color: var(--background-color-gradient-top);">${Story()}</div>`,
  ],
  render: ({ title, subtitle = '', ...args }) => {
    return new HomeHero().render(title, subtitle);
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Home Hero Title HTML',
      table: {
        type: 'string',
      },
    },
    subtitle: {
      control: 'text',
      description: 'Home Hero Subtitle HTML',
      table: {
        type: 'string',
      },
    },
  },
  parameters: {
    componentSubtitle: 'What the homepage deserves and also really needs right now.',
  },
};

/**
 * The subtitle has an undocumented, inline definition list with <code>scroll-snap</code> you can take advantage of.
 *
 * No worries about the wrapping div (<code>&lt;div&gt;&lt;dt&gt;...&lt;/dt&gt;&lt;dd&gt;...&lt;/dd&gt;&lt;/div&gt;</code>), it's an actual thing.
 */
export const DefinitionListWithScrollSnap = {
  args: {
    title: 'Hi. My name is Friendly Developer.<br>I would ask your name but there is no input.',
    subtitle: `<p>Definitive list with scroll-snap:</p>
    <dl tabindex="0">
      <div>
        <dt><strong>Emphatic</strong> thing #1:</dt><dd> General Knowledge says this is well-defined.</dd>
      </div>
      <div>
        <dt><strong>Also emphatic</strong> thing #2:</dt><dd> Captain Obvious agrees this is also well-defined.</dd>
      </div>
    </dl>
    `,
  },
};

/**
 * The title takes up the width of the body grid, use the subtitle measure as a gauge for when to use `<br>`s to sustain its display effect, otherwise it will read like text.
 */
export const muchTitle = {
  args: {
    title: 'If old McDonald had a farm, which came first, the chicken, the cow, or the wool?',
    subtitle:
      '<p>Is this making you hungry? I start fasting in like 1.5 hours, I am like pre-hungry already.</p>',
  },
};

/**
 * The title is display content, control it manually with `<br>`s for effect rather than with CSS.
 */
export const suchTitle = {
  args: {
    title: 'If old McDonald had a farm, which came first:<br>the chicken, the cow, or the wool?',
    subtitle:
      '<p>Okay, that <code>&lt;br&gt;</code> was traumatically effective. Definitely hungry now for sure.</p>',
  },
};
