---
title: Contact
permalink: "/contact/"
eleventyExcludeFromCollections: true
---

<article class="grid">

<h1>Contact</h1>

Hit me up in one of the possible ways:

<div class="post">

-
{#contact-placeholder}

</div>

</article>

<script>(async function() {
        const links = await( await fetch(`/api/contact`)).json();
        let linksHTML = '';
        links.forEach((link) => {
          linksHTML += `<li><a href="${link.url}">${link.text}</a></li>`;
        });
        document.querySelector('#contact-placeholder').innerHTML = linksHTML;
    }());</script>
