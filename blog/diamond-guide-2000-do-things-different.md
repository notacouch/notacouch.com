---
title: Diamond-Guide.com (2000) - do things different
tags: ["Frontend", "Work", "Brainlink"]
date: 2024-02-16 12:00:00Z
# modified: 2024-03-21 12:00:00Z
subtitle: Frontend development for image-heavy, large e-commerce site.
---

{% Figure "img--grid--before", "/blog-images/brainlink/diamond-guide/diamond-guide-before-brainlink-crop.png", "Screenshot of Diamond-Guide.com in the year 2000 before Brainlink's work", "Diamond-Guide.com (2000) before Brainlink" %}{% endFigure %}{% Figure "img--grid--after", "/blog-images/brainlink/diamond-guide/diamond-guide-after-brainlink-crop.png", "Screenshot of Diamond-Guide.com in the year 2000 before Brainlink's work", '<a href="https://web.archive.org/web/20001109143500/http://www.diamond-guide.com/">Diamond-Guide.com (2000) after Brainlink</a>' %}{% endFigure %}

In my time at Brainlink, this was our team's largest project to date. Diamond-Guide.com was a massive website, the client really tried to hold their users' hands in their shopping experience by providing ample information on jewelry. They had literal books of imagery for us and wanted pretty much their entire website to be images.

- Diamonds? Images.
- Jewelry? Images.
- Menu?? Images!
- Body text?1! IMAGES!

<!-- TODO: animated image of slapping images on either the site or the sun -->

## Layout in the year 2000

{% FloatWrapper %}

{% Figure "img--wrap--right", "/blog-images/brainlink/diamond-guide/diamond-guide-slice-tool-sample.png", "Screenshot of using Adobe Photoshop's slice tool for Diamond Guide", "A look at Adobe Photoshop&rsquo;s slice tool." %}{% endFigure %}

<!-- <figure class="figure figure--img figure--img--text-wrap">
  <a href="/blog-images/brainlink/diamond-guide/diamond-guide-slice-tool-sample.png"><img
    src="/blog-images/brainlink/diamond-guide/diamond-guide-slice-tool-sample.png"
    alt="Screenshot of using Adobe Photoshop's slice tool for Diamond Guide"
    class="figure__img"
  /></a>
  <figcaption>A look at Adobe Photoshop&rsquo;s slice tool.</figcaption>
</figure> -->

Back then, how did one code the frontend for a site that had enough images to block out the light of the sun? That's right. In the dark (i.e. table-based layouts). With knives (i.e. Adobe Photoshop slice tool).

Our designers got to work with materials provided to them. They'd pass me full comps and I'd slice them up in Photoshop based on how I&rsquo;d lay them out. For the unfamiliar, layout via CSS was not really a thing. To achieve positioning, you created tables with rows all for the purpose of sizing columns to your needs and nested tables as much as needed. To achieve additional precision, you used spacer GIFs, 1&times;1 pixel transparent GIFs, which you could size exactly how you wanted via `width` and `height` attributes to push things around or otherwise occupy empty space:

{% endFloatWrapper %}

{% TangentCeiling %}

{% Figure "img--grid--body", "/blog-images/brainlink/diamond-guide/diamond-guide-inspect-element.png", "Screenshot of inspecting Diamond-Guide.com 2000's menu", "Sample table-based layout starting with the menu." %}{% endFigure %}

<aside class="tangent">
  By the way, there were no devtools back then, not even Firebug.
</aside>

{% Figure "code--grid--full" %}

```html {.code .code--full .grid__full__extended-body}
      <tr>
                              <!-- See nested <table> in the table cell below -->
              <td colspan="2"><table border="0" width="740" cellspacing="0" cellpadding="0">
                              <tr align="left">
                                      <td><a href="./Diamond_Education/about.html"><img src="/images/top_aboutus.gif" alt="" border="0"></a></td>
              <td width="15"><img src="/images/blank.gif ALT=" " width="15" height="1"></td>
                                      <td><a href="services.html"><img src="/images/top_policiesandservices.gif" alt="" width="98" height="20" border="0"></a></td>

                                      <!--  Pair table-based layout with blank.gif for achieving pixel perfect precision -->
              <td width="15"><img src="/images/blank.gif ALT=" " width="15" height="1"></td>
                                      <td><img src="/images/top_8003209670.gif" alt="" width="75" height="20"></td>
              <td width="15"><img src="/images/blank.gif ALT=" " width="15" height="1"></td>
                                      <td><a href="mailto:sales@diamond-guide.com"><img src="/images/top_emailus.gif" alt="" width="54" height="20" border="0"></a></td>
              <td width="15"><img src="/images/blank.gif ALT=" " width="15" height="1"></td>
                                      <td><a href="glossary-1.html"><img src="/images/top_glossary.gif" alt="" width="48" height="20" border="0"></a></td>
              <td width="15"><img src="/images/blank.gif ALT=" " width="15" height="1"></td>
                                      <td><a href="/testimonials.html"><img src="/images/top_testimonials.gif" alt="" border="0"></a></td>
              <td width="15"><img src="/images/blank.gif ALT=" " width="15" height="1"></td>
                                      <td><a href="http://www.gembeat.com/cgi-bin/gembeat/ord/basket"><img src="/images/top_shoppingcart.gif" alt="" width="74" height="20" border="0"></a></td>
              <td width="15"><img src="/images/blank.gif ALT=" " width="15" height="1"></td>
                                      <td><a href="Diamond_Education"><img src="/images/top_learningcenter.gif" alt="" width="81" height="20" border="0"></a></td>

                              </tr>
                              </table>
              </td>
      </tr>

```

{% endFigure %}

### Image maps

Another technique you probably don't see much anymore are [image maps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map). For comps such as some navigational menus that didn't require layout work, instead of slicing them up into individual images, links, and laying them out in tables, you could use one whole image and define rectangular areas to serve as links with actual `href`s:

{% Figure "img--grid--body", "/blog-images/brainlink/diamond-guide/diamond-guide-image-map.png", "Screenshot of inspecting Diamond-Guide.com 2000's image map navigation", '<a href="https://web.archive.org/web/20010425223234/http://www.diamond-guide.com/Diamond_Education/">Sample page in Diamond-Guide.com whose menu used image maps</a>.' %}{% endFigure %}

## Scrolling news ticker

{% Figure "img--grid--full", "/blog-images/brainlink/diamond-guide/news-ticker-sketch-psd.png", "Sketch of the logic behind the news ticker", "Thought process behind the ticker." %}{% endFigure %}

{% TangentCeiling "tangent" %}

What I'm unable to share is the first JavaScript (JS) challenge I was tasked with. The client wanted a news ticker scrolling on the top right of certain pages. I hadn't done anything like this before, [marquee](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee) did not have universal support, and there were no such scripts on Dynamic Drive, a site where one would find dynamic HTML or dHTML scripts (which is what we called manipulation of the DOM back then). My approach to it was absolutely positioning a mask container div. If I recall correctly, to hide contents beyond its visible area just `overflow: hidden;` and a fixed `width` would not suffice. The visible area was defined by providing rectangular pixel coordinates of how far from the top, to the right, toward the bottom, and from the left in `clip: rect(...)`. (Yep. Yeah.) I put scrolling content into its own container and via JS cloned this container so the scrolling could repeat smoothly. These containers were continually shifted left until the clone was at the start of the mask, then the original content container was moved to the end, and repeat _ad infinitum_. I'm curious how I'd approach this today, but I'll save that for another post. {.grid__body--gt900}

<aside class="tangent">Wow, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/clip">clip</a> has been deprecated for some time. It&rsquo;s still completely supported, though.</aside>

## Stay up to speed by doing things different

This project was intense. So much so, I remember my boss Paul once asked, "What's wrong, Abed? Diamond Guide keeping you up at night?" To which I replied, "No. Diablo II." But it may very well have been Diamond Guide!

So why share all this?

- Achieving pixel perfect, cross-browser, cross-platform design was a thing even back when table-based layout was the methodology of the time. This was the only such work I was able to reference.
- There's something poetic about using content from 2000 to get acquainted with layout in 2024.
- 2 things that stuck with us for life.
  1) We didn't realize at the time, but doing unprecedented things is exactly how we'd spend our careers.
  2) If there _was_ a precedent, here's what we were taught:

Our boss, <a href="https://www.linkedin.com/in/rajgoel/">Raj Goel</a>, made it part of the Brainlink way to never do the same thing twice. After getting ramped up yes you should have libraries, clips of code, etc. handy, but we would try to do things differently in every project. To this day I continue to bake learning and trying new things into my work.
