---
title: Poly.edu (2004) - the power of semantic markup
tags: ["Accessibility", "Frontend", "Work", "Poly"]
date: 2024-03-09 12:00:00Z
# modified: 2024-03-13 19:25:00Z
subtitle: Using semantic markup and CSS for the wild, wild... 4th gen browsers as catalysts for change.
---

## Context

This was an era when semantic markup required actual evangelism. Below may give a partial glimpse as to why. Even if semantic markup and CSS were the "right" way of doing things, if `<table>`s were doing the job, why swim upstream?

<hr class="grid__row-reset" />

In my early days on the Poly Webteam, I had to really prove my stripes before I could take on work of my choosing. Afterall, there was enough work to go around just to maintain sites and newsletters. I bided my time keeping `<table>` and `<font>` tags alive in codebases probably dated back to the 90&rsquo;s without scratching the itch of making things better. Eventually, I was finally given reign over 1 personal project.{.grid__body-gt900}

<aside class="tangent">Poly, short for Polytechnic University, is now known as <a href="https://engineering.nyu.edu/">NYU Tandon</a>, NYU&rsquo;s school of engineering.</aside>

## Why the homepage?

I picked the homepage for a number of reasons.

- There were actually 2 separate pages with entirely different code, 1 for IE and 1 for Netscape. User agent sniffing was done on the backend (ColdFusion) to determine which page to serve. There were issues in all 3.
- There were memory leaks between ColdFusion and Oracle which was a source of frequent instability.
- It was the default page on all machines on campus.
- Had the most traffic by far.
- It had the strangest design and posed the most challenge to lift and shift from old code to semantic markup.
- The university was divided, e.g. the Computer Science and Computer Engineering departments had their own sites, neither with semantic markup. This _could_ be the catalyst for change both socially and technically.

Revamping the homepage was _the_ way for me to make _the most impact_ on the university: immediately, long term, and laterally.

## The work

<figure class="figure figure--img figure--img--body grid__figure grid__body-left-to-right-more">
  <a href="/blog-images/poly/homepage/poly.edu-semantic-markup-cropped-optimized.png"><img
    src="/blog-images/poly/homepage/poly.edu-semantic-markup-cropped-optimized.png"
    alt="Screenshot of inspecting poly.edu May 2004's menu"
    class="figure__img figure--img--body__img"
  /></a>
  <figcaption>Inspecting <a href="https://web.archive.org/web/20040519161813/http://www.poly.edu/">poly.edu (2004)</a>, the comments reveal frontend challenges. Note accessible links like &ldquo;Skip Navigation&rdquo; and &ldquo;related links&rdquo; cover when neither JavaScript nor stylesheets are available.</figcaption>
</figure>

Though I was allowed to work on the homepage, I was _not_ allowed to make any changes to its design. The look and behavior had to remain exactly the same, pixel perfect. As intimated by the screenshot above, it was not as easy as simply throwing links in unordered list items. Netscape 4 applied list item styles to its bullets, using CSS to position an anchor would kill its functionality. As for Windows IE4, you _couldn&rsquo;t_ position anchor tags. So each anchor had to be wrapped in a `<div>`. The fun didn&rsquo;t stop there.

<hr class="grid__row-reset" />

<figure class="figure figure--img figure--img--body grid__figure">
  <a href="/blog-images/poly/homepage/poly.edu-all.css-cropped-optimized.png"><img
    src="/blog-images/poly/homepage/poly.edu-all.css-cropped-optimized.png"
    alt="Screenshot of poly.edu's new all.css, shows helpful comments for future maintainers"
    class="figure__img figure--img--body__img"
  /></a>
  <figcaption>&ldquo;Pixel Perfect&rdquo;, reads the opening comment of the new <a href="https://web.archive.org/web/20040806043029/http://www.poly.edu/all.css">all.css</a>. Its comments were documentation for future maintainers.</figcaption>
</figure>

<aside class="tangent">Mozilla Firefox was Firebird! <em>I</em> don&rsquo;t even remember that.</aside>

To accommodate other browsers in other platforms including Mac IE5 required the use of CSS hacks. There's a myriad of odd behaviors when it came to parsing comments and characters between them. Getting the right combination of targeted browser hacks and ordering of CSS declarations was key in juggling varying styles to keep up the same look across the board. My revamp of the homepage also:

- deprecated the browser splitting & redirects,
- reduced download size via less markup, only 1 stylesheet, optimized images for the web,
- and eliminated the memory leaks.

## Immediate impact

<hr class="grid__row-reset" />

Being a pivotal snapshot in the Wayback Machine (WM) is proof in the pudding of the impact this update had. My work resulted in the homepage:{.grid__body--gt900}

- accidentally improving SEO by playing better with search engine bots and just the superiority of semantic markup,
- saving tons of bandwidth both publicly and in our intranet,
- loading consistently faster with less jank on menu hovers,
- and making our sys admin Cynthia very, very happy.
{.grid__body--gt900}

<aside class="tangent grid__row-span-2">This design can&rsquo;t be found in the WM before my update, its bot was historically redirected away from www to ww<em>2</em>.poly.edu.</aside>

### The real impact

While the immediate effects were great, the _real_ impact was about the future of Poly. We were set to continue remaining eons behind while another tech university was literally writing web standards. This proof of concept set a very strong precedent. It gave my opinions weight, going forward I was utilized for research and as a behind-the-scenes voice in board meetings about the direction for their web presence.

Evangelism for doing things right continued to go against the grain. I still vividly recall once whilst alone in the Webteam office, a higher echelon visited to circle around me and repeat, "You better be right about this [CSS], Abed. You better be right." I stayed my course, which I like to think helped the divided departments ultimately unite under a single, modern <a>poly.edu</a>. The more we did things right, the better we were for it.
