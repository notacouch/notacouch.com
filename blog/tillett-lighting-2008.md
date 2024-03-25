---
title: Tillett Lighting (2008)
tags: ["Frontend", "CSS", "JavaScript", "Work", "fusionlab"]
date: 2024-03-15 12:00:00Z
subtitle: "Cleaned up frontend while migrating to a CMS: use of image sprites, MooTools, and float-based layout."
---

## Background

[fusionlab's](https://www.fusionlab.com/) client, [Tillett Lighting](https://www.tillettlighting.com/), wanted to manage their own content for what was previously a static site. So my task was to get them set up with ExpressionEngine and ensure content was easy for them to manage. That portion was straight forward and successful, what I wanted to write about here are some of the remnants of having been given some creative liberty to spruce up the frontend in the process.

Reviewing their site, I found there were minor inconsistencies in layout between the different sections of the site. When living in the "pixel perfect" world, there's no pixel too minor. Those things bother me.

I happened to find Tillett Lighting's work inspiring. It awakened in me paying attention to lighting wherever I am, so I wanted to give them at least some subtle "lighting" effects.

## High fidelity prototype

I found a backup of the markup's prototype, you can [see the code on GitHub](https://github.com/notacouch/notacouch.com/tree/88cd58c569d4167b13b57598c4519b99547731c4/tangibles/fusionlab/tillett/markup-prototype) and [view the prototype here](/tangibles/fusionlab/tillett/markup-prototype/). The links on the right underlay the other pages and how they would align with the new grid, click the "fade full" link to hide the overlaying homepage, "no fade" to return it, and "no background graphic" to hide other pages (if any were clicked).

{% Figure "img--grid--full", "", "", 'Image color transition with sprites (<span class="media-timestamp" data-media-id="tillett-lighting-prototype-demo" data-timestamp="4">4-8s</span>), clean up of layout (<span class="media-timestamp" data-media-id="tillett-lighting-prototype-demo" data-timestamp="20">20-31s</span>), float-based layout &mdash; review effect of overflow on float wrapper (<span class="media-timestamp" data-media-id="tillett-lighting-prototype-demo" data-timestamp="35">35-55s</span>).' %}
  <video id="tillett-lighting-prototype-demo" controls class="figure__img figure--img--body__img" width="1280" style="aspect-ratio: 4 / 3" poster="/blog-images/fusionlab/tillett/tillett-lighting-poster-optimized.png">
    <source src="/blog-images/fusionlab/tillett/tillett-lighting.mp4" type="video/mp4">
    <track kind="captions" srclang="en" label="English" src="/blog-images/fusionlab/tillett/tillett-lighting-en.vtt" default>
  </video>
{% endFigure %}

### Something forgotten about float-based layouts

On X (formerly Twitter), recently someone asked about CSS that people may not know about or use these days. As a matter of convenience, I figured I'd use this past project as an opportunity to mention float-based layouts for the first time on this site (as opposed to trying to dig up a project before 2008). Around <span class="media-timestamp" data-media-id="tillett-lighting-prototype-demo" data-timestamp="44">44 seconds</span> into the clip above, you can see the `#misc` and `#copy` sibling `<div>`s use `float: left;` which allows them to break out of normal flow to stack horizontally so to speak.

I mention all that because one of the things people may not remember is when we were first using floats for layout, we struggled with how to get the parent container to wrap around its children floats. One day, someone stumbled upon `overflow: hidden;` in the spec, it turned out browsers were implementing that correctly, and that discovery became viral. You can see from <span class="media-timestamp" data-media-id="tillett-lighting-prototype-demo" data-timestamp="53">53-55 seconds</span> in, when I toggle `#body`'s `overflow: hidden;` off, its `height` becomes `0`! With the advent of CSS grid and flexbox, we may no longer have to struggle with achieving layout through floats and instead use floats for what they were intended, like I do with the image sprite GIF below.

{% FloatWrapper %}

### Image color transition with JavaScript and image sprites

{% Figure "img--wrap--right", "/tangibles/fusionlab/tillett/markup-prototype/images/navigation/profile-home.gif", "Actual GIF used on the site, repeats the same navigation term 'Profile' 3 times with different colors", 'Image sprite of the "Profile" link.' %}{% endFigure %}

The subtle effect I wanted to give them is lighting up the menu on hover (around <span class="media-timestamp" data-media-id="tillett-lighting-prototype-demo" data-timestamp="4">4-8s</span> in the clip above). Neither web fonts nor CSS transitions were a thing yet, so how do we consistently change the color of an image? For me this was a novel use of CSS image sprites. An image sprite as seen on the right is where a single image file contains the various imagery you need and you use CSS to determine the visible area of the image. The link itself referred to the first Profile instance, its list item is dynamically given a background with another instance by shifting the background image upwards. Then JavaScript is used to change the `opacity` over time. Though we're "fading out" the link's image, the effect is as if we're transitioning the _color_ of the link.

{% endFloatWrapper %}

In terms of JavaScript I was a big fan of MooTools over jQuery, it just felt so much more empowering. I used MooTools to grab the image, set it as the link's list item's background, and fade it in/out without having to manage the `opacity`'s value:

{% Figure "code--grid--body-more" %}

```js {.code .code--full}
    function fadeImgToLiBg(el){
        var a = el.getElement('a');
        var i = a.getElement('img');
        i.store('enter_duration', this.enter_duration);
        i.store('leave_duration', this.leave_duration);
        el.setStyle('background', 'url('+i.get('src')+') '+this.x+' '+this.y+' no-repeat');
        el.addEvent('mouseenter', function(){
            this.set('tween', this.retrieve('enter_duration'));
            this.fade('out');
        }.bind(i));
        el.addEvent('mouseleave', function(){
            this.set('tween', this.retrieve('leave_duration'));
            this.fade('in');
        }.bind(i));
    }
    primary_nav_settings = new Hash({
        'x': 0,
        'y': '-69px',
        'enter_duration': {'duration': 'short'},
        'leave_duration': {'duration': 'normal'}
    });
    home_projects_settings = new Hash(primary_nav_settings).set('y','0');

    $$('#navigation > ul > li').each(fadeImgToLiBg.bind(primary_nav_settings));
```

{% endFigure %}

## Tangent on MooTools

Back then we did not have native [`Function.bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) nor a way to iterate objects such as [`Object.entries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) and `Array`'s [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach). But MooTools provided a way to do all of these between their [Hash class](https://mootools.net/more/docs/1.6.0/Types/Hash), `Function.bind`, and `Array.each` methods. I could iterate over selected elements, bind that function's `this` context to the settings Hash so they were all pulling from the same place, and set their mouse _events_ for their list items while keeping the event's _effects_ bound to their anchors. It wasn't the kind of code you'd see with those opting for jQuery at the time (not trying to rank on jQuery, it remains an incredible project). (Well, you probably wouldn't see this kind of code anywhere else for that matter, the [Brainlink mantra stuck](/blog/diamond-guide-2000-do-things-different#stay-up-to-speed-by-doing-things-different), so when noone is looking and you're iterating through prototype after prototype, why not explore different design patterns while keeping code clean?)

MooTools was awesome. It's sad to have seen it die out over time. It seems it lost out in popularity. There's a lot to be learned not just from its concepts, methods, and code, but for what it takes to maintain Open Source Software socially, technically, and financially over time. Can ongoing contribution and maintenance be subsidized by passion alone? At least it's good to know that [some of its contributors would take much of what they learned to help with React](https://www.freecodecamp.org/news/between-the-wires-an-interview-with-mootools-contributors-33d764957575/).

## Creative agencies

To end on a brighter note. One of the things that's great about frontend-focused work is being given creative liberties. You get to try out things you've been itching to try out, whether from a performance, animation, style, programming, templating, or even architectural perspective. I really enjoyed about agency kind of work, being inspired by the designers and clients you worked with, and letting that manifest back in code. This smaller part of the project wasn't even a main point, but it's what's most memorable to me after customer satisfaction.
