---
title: Poly.edu (2004) - the power of semantic markup
tags: ["Frontend", "Work", "Poly"]
date: 2024-03-09 12:00:00Z
modified: 2024-03-10 09:25:00Z
subtitle: Semantic markup and CSS for 4th gen browsers was a technical feat the university was not ready for.
---

## Context

This was an era when semantic markup required actual evangelism. Below may give a partial glimpse as to why. `<table>`s were doing the job, afterall, so why swim upstream?

In my early days on the Poly Webteam, I had to really prove my stripes before I could take on any challenging work. They wanted to maintain, not improve; having gotten the message I plowed through a lot of maintenance on existing sites and newsletters whose code could have possibly dated back to the 90&rsquo;s. After months of keeping `<table>` and `<font>` tags alive, I was finally given the choice of what I wanted to work on.

## Why the homepage?

I picked the homepage for a number of reasons.

- The codebase was split between IE and Netscape, user agent sniffing was done on the backend to determine which browser-specific template partials to serve. Neither the backend methodology nor the browser-specific-served files were perfect.
- There were memory leaks between ColdFusion and Oracle which was a source of frequent insstability.
- It was the default page on all machines on campus.
- Had the most traffic by far.
- The strangest design and most challenging to lift and shift from old code to semantic markup.
- The university was divided, not even the Computer Science nor Computer Engineering departments which each had their own sites saw any merit in semantic markup.

Revamping the homepage was _the_ way for me to make _the most impact_ on the university.

## The work

<figure class="figure figure--img figure--img--body grid__figure grid__body-left-to-right-more">
  <a href="/blog-images/poly.edu-semantic-markup-cropped-optimized.png"><img
    src="/blog-images/poly.edu-semantic-markup-cropped-optimized.png"
    alt="Screenshot of inspecting poly.edu May 2004's menu"
    class="figure__img figure--img--body__img"
  /></a>
  <figcaption>Inspecting <a href="https://web.archive.org/web/20040519161813/http://www.poly.edu/">poly.edu (2004)</a>, the comments reveal frontend challenges. Also note accessible links like "Skip Navigation".</figcaption>
</figure>

<!-- TODO: comment on accessible links, testing with js/css off -->

Though I was allowed to work on the homepage, I was _not_ allowed to make any changes to its design. The look had to remain exactly the same, pixel perfect. As intimated by the screenshot above, it was not as easy as simply throwing links in unordered list items. Netscape 4 applied list item styles to its bullets, using CSS to position an anchor would kill its functionality. As for Windows IE4, you _couldn&rsquo;t_ position anchor tags. So each anchor had to be wrapped in a `<div>`. The fun didn&rsquo;t stop there. There were more browsers to cater to.

<hr class="grid__row-reset" />

<figure class="figure figure--img figure--img--body grid__figure">
  <a href="/blog-images/poly.edu-all.css-cropped-optimized.png"><img
    src="/blog-images/poly.edu-all.css-cropped-optimized.png"
    alt="Screenshot of poly.edu's new all.css, shows helpful comments for future maintainers"
    class="figure__img figure--img--body__img"
  /></a>
  <figcaption>&ldquo;Pixel Perfect&rdquo;, reads the opening comment of the new <a href="https://web.archive.org/web/20040806043029/http://www.poly.edu/all.css">all.css</a>. Its comments were documentation for future maintainers.</figcaption>
</figure>

<aside class="tangent">Mozilla Firefox was Firebird! <em>I</em> don&rsquo;t even remember that.</aside>

To accommodate other browsers in other platforms including Mac IE5 required the use of CSS hacks. There's a myriad of odd behaviors when it came to parsing comments and characters between them. Getting the right combination of targeted browser hacks and ordering of CSS declarations was also key to getting all the browsers to play well together.

## The impact? This is the way... of the future

<!-- TODO: revise -->

I'm not sure if you can find the previous version of this homepage using the Wayback Machine. The user agent sniffing solution somehow caused redirecting to ww*2*.poly.edu for such bots. This revamped homepage deprecated the source splitting, redirects, and reduced the load of transfer via less markup, smaller stylesheet, optimized images for web, and worked around the memory leaks for both ColdFusion and Oracle. The first person these results made very, very happy was our sys admin. We saved tons of bandwidth both in our intranet and what was being served publicly. Last but not least the page loaded consistently faster and had less jank on menu hovers. Being a pivotal snapshot in the Wayback Machine is proof in the pudding of the impact the code change had.

As great as all that was, the real impact was about the future. While another tech university was literally writing web standards, we remained far behind. This primordial proof of concept of semantic markup and CSS set a very strong precedent for the university. This immediately gave my opinions weight enough to be utilized for research and a behind-the-scenes voice in board meetings about the direction of their web presence in coming years. Evangelism went against the grain, an employer once circled around me when I was alone in the office, "You better be right about this [CSS], Abed. You better be right." I stayed my course, which I like to think helped the divided departments ultimately unite under a single, modern <a>poly.edu</a>.
