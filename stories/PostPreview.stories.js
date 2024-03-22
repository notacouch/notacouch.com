import PostPreview from '../_src/components/slices/PostPreview';

/**
 * Snippets of a post including a linked title, brief description, publish date, and linked list of topics.
 *
 * This pulls in the [Post Meta](../?path=/docs/slices-post-meta--docs) component.
 */
export default {
  title: 'Slices/Post Preview',
  tags: ['autodocs'],
  component: PostPreview,
  decorators: [
    (Story) => `
<section class="grid">
  ${Story()}
</section>
`,
  ],

  /**
   * See PostPreview component for param details
   */
  render: ({
    titleLink,
    titleText,
    subtitle = '',
    publishedDatetime,
    publishedDate,
    topicContent,
    ...args
  }) => {
    return new PostPreview().render(
      titleLink,
      titleText,
      subtitle,
      publishedDatetime,
      publishedDate,
      topicContent,
    );
  },
  argTypes: {
    // publishedDatetime: {
    //   table: {
    //     type: 'date',
    //   },
    // },
    topicContent: {
      description: 'List of comma-delimited links, keep link text lowercase.',
    },
  },
  // parameters: {
  //   componentSubtitle: '...',
  // },
};

/**
 * These usually go in a list of post previews like on the homepage's "Latest posts" or under /blog/ or /topics/*
 */
export const singlePostPreview = {
  args: {
    titleLink: '/',
    titleText: 'My first post ever on this site',
    subtitle: 'I write. A lot.',
    publishedDatetime: '2024-03-21',
    publishedDate: '3.21.2024',
    topicContent: `
      <a href="/topics/accessibility">accessibility</a>, <a href="/topics/css">css</a>
    `,
  },
};
