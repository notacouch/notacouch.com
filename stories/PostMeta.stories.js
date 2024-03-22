import PostMeta from '../_src/components/slices/PostMeta';

/**
 * A post's metadata so to speak. For use in [Post Preview](../?path=/docs/slices-post-preview--docs) and Post's header.
 */
export default {
  title: 'Slices/Post Meta',
  tags: ['autodocs'],
  component: PostMeta,

  /**
   * See PostMeta component for param details
   */
  render: ({
    metaPrefix,
    publishedDatetime,
    publishedDate,
    topicContent,
    readTime = '',
    modifiedDatetime = '',
    modifiedDate = '',
    ...args
  }) => {
    return new PostMeta().render(
      metaPrefix,
      publishedDatetime,
      publishedDate,
      topicContent,
      readTime,
      modifiedDatetime,
      modifiedDate,
    );
  },
  argTypes: {
    // publishedDatetime: {
    //   table: {
    //     type: 'date',
    //   },
    // },
    metaPrefix: {
      description: "Either 'post-preview' or 'hero' (which is for Posts).",
    },
    topicContent: {
      description: 'List of comma-delimited links, keep link text lowercase.',
    },
    readTime: {
      description: 'How long it would take to read the content. Only visible in Post header.',
    },
    modifiedDatetime: {
      description: 'Same as modifiedDate but a stamp for <time> tag. Only visible in Post header.',
    },
    modifiedDate: {
      description: 'When was this post last edited? Only visible in Post header.',
    },
  },
  // parameters: {
  //   componentSubtitle: '...',
  // },
};

/**
 * Note the modifiedDate is omitted, readTime isn't expected here but would display if provided.
 */
export const postPreviewVersion = {
  decorators: [
    (Story) => `
<section class="grid">
  <article class="post-preview grid__default--lt900 grid__body--gt900">
    ${Story()}
  </article>
</section>
`,
  ],
  args: {
    metaPrefix: 'post-preview',
    publishedDatetime: '2024-03-21',
    publishedDate: '3.21.2024',
    topicContent: `
      <a href="/topics/accessibility/">accessibility</a>, <a href="/topics/css/">css</a>
    `,
    readTime: '',
    modifiedDatetime: '',
    modifiedDate: 'Today',
  },
};

/**
 * Note the markup changes, if moving to React it would need to be wrapped in a Fragment as there are 2 root tags.
 */
export const postHeaderVersion = {
  decorators: [
    (Story) => `
<article class="post grid">
  ${Story()}
</article>
`,
  ],
  args: {
    metaPrefix: 'hero',
    publishedDatetime: '2024-02-21',
    publishedDate: '2.21.2024',
    topicContent: `
      <a href="/topics/frontend/">frontend</a>, <a href="/topics/javascript/">javascript</a>
    `,
    readTime: '12&nbsp;minutes',
    modifiedDatetime: '2024-03-21',
    modifiedDate: '3.21.2024',
  },
};
