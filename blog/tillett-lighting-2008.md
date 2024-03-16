---
title: Tillett Lighting (2008)
tags: ["Frontend", "CSS", "JavaScript", "Work", "fusionlab"]
date: 2024-03-15 12:00:00Z
subtitle: "Cleaned up frontend while migrating to a CMS: use of image sprites and float-based layout."
---

## Background

[fusionlab's](https://www.fusionlab.com/) client, [Tillett Lighting](https://www.tillettlighting.com/), wanted to manage their own content. So my task was to get them set up with ExpressionEngine and ensure content was easy for them to manage. While that portion was successful, what I'll write about here are some of the remnants of having been given some creative liberty to spruce up the frontend in the process.

Reviewing their site, I found there were minor inconsistencies in layout between the different sections of the site. When living in the "pixel perfect" world, there's no pixel too minor. Those things bother me.

I happened to find Tillett Lighting's work inspiring. It awakened in me paying attention to lighting wherever I am, so I wanted to give them at least some subtle "lighting" effects.

## High fidelity markup prototype

I found a backup of the markup's prototype, you can [see the code on GitHub](https://github.com/notacouch/notacouch.com/tree/88cd58c569d4167b13b57598c4519b99547731c4/tangibles/fusionlab/tillett/markup-prototype) and [view the prototype here](/tangibles/fusionlab/tillett/markup-prototype/). The links on the right underlay the other pages and how they would align with the new grid, click the "fade full" link to hide the overlaying homepage, "no fade" to return it, and "no background graphic" to hide other pages (if any were clicked).

<figure class="figure figure--img figure--img--body grid__figure grid__body-left-to-right-more">
  <video id="tillett-lighting-prototype-demo" controls class="figure__img figure--img--body__img" width="1280" style="aspect-ratio: 4 / 3" poster="/blog-images/fusionlab/tillett/tillett-lighting-poster-optimized.png">
    <source src="/blog-images/fusionlab/tillett/tillett-lighting.mp4" type="video/mp4">
    <track kind="captions" srclang="en" label="English" src="/blog-images/fusionlab/tillett/tillett-lighting-en.vtt" default>
  </video>
  <figcaption>Image color transition with sprites (<span class="media-timestamp" data-media-id="tillett-lighting-prototype-demo" data-timestamp="4">4-8s</span>), clean up of layout (<span class="media-timestamp" data-media-id="tillett-lighting-prototype-demo" data-timestamp="20">20-31s</span>), float-based layout &mdash; review effect of overflow on float wrapper (<span class="media-timestamp" data-media-id="tillett-lighting-prototype-demo" data-timestamp="35">35-55s</span>)</figcaption>
</figure>

### Float-based layouts

On X (formerly Twitter), recently someone asked about CSS that people may not know about or use these days. As a matter of convenience, I figured I'd use this past project as an opportunity to mention float-based layouts for the first time on this site (as opposed to trying to dig up a project before 2008). Around <span class="media-timestamp" data-media-id="tillett-lighting-prototype-demo" data-timestamp="44">44 seconds</span> into the clip above, you can see the `#misc` and `#copy` sibling `<div>`s use `float: left;` which allows them to stack horizontally so to speak. One of the things people may not remember is when we were first using floats for layout, we struggled with how to get the parent container to wrap around its children floats. One day, someone stumbled upon `overflow: hidden;` in the spec and that became viral. You can see from <span class="media-timestamp" data-media-id="tillett-lighting-prototype-demo" data-timestamp="53">53-55 seconds</span> in, when I toggle `#body`'s `overflow: hidden;` off, its `height` becomes `0`! With the advent of CSS grid and flexbox, we may no longer have to struggle with achieving layout through floats and instead use floats for what they were intended, like I do with the image sprite GIF below.

<div class="p grid__body-to-right--gt900">

### Image color transition with JavaScript and image sprites

<figure class="figure figure--img figure--img--text-wrap">
  <a href="/tangibles/fusionlab/tillett/markup-prototype/images/navigation/profile-home.gif"><img
    src="/tangibles/fusionlab/tillett/markup-prototype/images/navigation/profile-home.gif"
    alt="Actual GIF used on the site, repeats the same navigation term 'Profile' 3 times with different colors"
    class="figure__img"
  /></a>
  <figcaption>Image sprite of the "Profile" link.</figcaption>
</figure>

The subtle effect I wanted to give them is lighting up the menu on hover (around <span class="media-timestamp" data-media-id="tillett-lighting-prototype-demo" data-timestamp="4">4-8s</span> in the clip above). Neither web fonts nor CSS transitions were a thing yet, so how do we consistently change the color of an image? For me this was a novel use of CSS image sprites. An image sprite as seen on the right is where a single image file contains the various imagery you need and you use CSS to determine the visible area of the image. The link itself referred to the first Profile instance, its list item is dynamically given a background with another instance by shifting the background image upwards. Then JavaScript is used to change the `opacity` over time. Though we're "fading out" the link's image, the effect is as if we're transitioning the _color_ of the link.

</div>

In terms of JavaScript I was a big fan of MooTools over jQuery, it just felt so much more empowering. I used MooTools to grab the image, set it as the link's list item's background, and fade it in/out without having to manage the `opacity`'s value:

<figure class="figure figure--code grid__body-to-right-more">

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

</figure>