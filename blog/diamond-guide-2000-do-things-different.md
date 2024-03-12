---
title: Diamond-Guide.com (2000), do things different
tags: ["Frontend", "Work", "Brainlink"]
date: 2024-02-16 12:00:00Z
modified: 2024-03-05 12:00:00Z
subtitle: Table-based layout, frontend development for Brainlink&rsquo;s full service design and development for e-commerce site.
---

<figure
  class="figure figure--img figure--img--before-after figure--img--before grid__left-right grid__left-right--left grid__figure"
>
  <img
    class="figure__img"
    src="/blog-images/diamond-guide-before-brainlink-crop.png"
    alt="Screenshots of Diamond-Guide.com in the year 2000 before Brainlink's work"
  />
  <figcaption>Diamond-Guide.com (2000) before Brainlink</figcaption>
</figure>
<figure
  class="figure figure--img figure--img--before-after figure--img--after grid__left-right grid__left-right--right grid__figure"
>
  <img
    class="figure__img"
    src="/blog-images/diamond-guide-after-brainlink-crop.png"
    alt="Screenshot of Diamond-Guide.com in the year 2000 with Brainlink's design"
  />
  <figcaption><a href="https://web.archive.org/web/20001109143500/http://www.diamond-guide.com/">Diamond-Guide.com (2000) after Brainlink</a></figcaption>
</figure>

This was our team's largest project to date. Diamond-Guide.com was a massive website, the client really tried to hold their users' hands in their shopping experience by providing ample information on jewelry. They had literal books of imagery for us and wanted pretty much their entire website to be images.

- Diamonds? Images.
- Jewelry? Images.
- Menu?? Images!
- Body text?1! IMAGES!

<!-- TODO: animated image of slapping images on either the site or the sun -->

## Layout in the year 2000

Back then, how did one code the frontend for a site that had enough images to block out the light of the sun? That's right. In the dark (i.e. table-based layouts). With knives (i.e. Adobe Photoshop slice tool).

<!-- TODO: pic of photoshop slice tool -->

Our designers got to work with materials provided to them. They'd pass me full comps and I'd slice them up in Photoshop based on how I&rsquo;d lay them out. For the unfamiliar, layout via CSS was not really a thing. To achieve positioning, you created tables with rows all for the purpose of sizing columns to your needs and nested tables as much as needed. To achieve additional precision, you used spacer GIFs, 1&times;1 pixel transparent GIFs, which you could size exactly how you wanted via `width` and `height` attributes to push things around or otherwise occupy empty space:

<hr class="grid__row-reset" />

<figure class="figure figure--img figure--img--body grid__figure">
  <img
    src="/blog-images/diamond-guide-inspect-element.png"
    alt="Screenshot of inspecting Diamond-Guide.com 2000's menu"
    class="figure__img figure--img--body__img"
  />
  <figcaption>Sample table-based layout starting with the menu.</figcaption>
</figure>

<aside class="tangent">
  By the way, there were no devtools back then, not even Firebug.
</aside>

<figure class="figure figure--code grid__full">

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

</figure>

## Scrolling news ticker

<!-- TODO: Figma up a wireframe -->

What I'm unable to share is the first JavaScript challenge I was tasked with, they wanted a news ticker scrolling on the top right of certain pages. I hadn't done anything like this before, and there were no such scripts on Dynamic Drive, a site where one would find dHTML or dynamic HTML scripts (which is what we called fancy manipulation of the DOM back then). My approach to it was positioning a container div absolutely, specifiying its `clip: rect(...)` path, set its `overflow: hidden;`, each piece of content was in its own tag, I would continually shift the positioning of each piece until it was almost full circle, at the point I would duplicate the contents, append the duplicate to the end, continue scrolling until the duplicate's left position was at the start, remove the original contents, and repeat _ad infinitum_. I'm curious how I'd approach this today, but I'll save that for another post.

## In conclusion, keep things new by doing things different

This project was intense. So much so, I remember my boss Paul once asked, "What's wrong, Abed? Diamond Guide keeping you up at night?" To which I replied, "No. Diablo II." But it may very well have been Diamond Guide!

So why share all this?

- This is the only table-based work I was able to reference.
- It was real, this stuff really used to happen.
- Achieving pixel perfect, cross-browser, cross-platform compatible design was a thing even back when table-based layout was the methodology of the time.
- What we were taught made anything novel less challenging.

Our employer, <a href="https://www.linkedin.com/in/rajgoel/">Raj Goel</a>, made it part of the Brainlink way to never do the same thing twice. After getting ramped up yes you should have libraries, clips of code, etc. handy, but we would try to do things differently with every project. This principle has stuck with me ever since. To this day I continue to bake learning and trying new things into my work.
