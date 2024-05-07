---
title: Cookie Policy
permalink: "/cookie-policy/"
eleventyExcludeFromCollections: true
---

<article class="grid post">

# Cookie Policy

## About cookies

Cookies are small text files stored on your device. They are used by websites so there is some information that can persist as you go from web page of theirs to the next.

## What is notacouch.com using cookies for?

If you accept, I&rsquo;ll use cookies solely for analysis of website traffic. Your information will not be sold or anything like that. Declining still results in one cookie being used so we can remember your preference.

## How can I manage my preferences?

Use the buttons below to manage your preferences.

<p><button class="button button-pair" id="cookie-policy__accept"><span class="ph-light ph-thumbs-up"></span> Accept Cookies</button> <button class="button button-pair" id="cookie-policy__decline"><span class="ph-fill ph-thumbs-down"></span> Decline Cookies</button></p>

</article>

<script>
  const consentAcceptBtn = document.getElementById('cookie-banner__accept');
  const consentDeclineBtn = document.getElementById('cookie-banner__decline');
  document.getElementById('cookie-policy__accept').addEventListener('click', () => {
    consentAcceptBtn.click();
  });
  document.getElementById('cookie-policy__decline').addEventListener('click', () => {
    consentDeclineBtn.click();
  });
</script>
