// TODO: Now can afford to add environments so we can at least remove console.log in prod
// TODO: introduce build activity for compressing js file

const cookieApproval = 'approved';
const cookieDenial = 'denied';

// blast from the past. anyone remember this site?
// credit:
// @url http://www.quirksmode.org/js/cookies.html
// "namespace" these functions as anyone could have rolled their own
function notacouch_createCookie(name, value, days) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toGMTString();
  }
  document.cookie = name + '=' + value + expires + '; path=/';
}

function notacouch_readCookie(name) {
  const nameEQ = name + '=';
  let cookieValue = false;
  // Modernized code
  // @url https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#example_5_check_a_cookie_existence
  document.cookie.split('; ').some((cookie) => {
    console.log('cookie: ', cookie);
    if (cookie.startsWith(name)) {
      cookieValue = cookie.substring(nameEQ.length, cookie.length);
      return true;
    }
  });
  return cookieValue;
}

function notacouch_eraseCookie(name) {
  notacouch_createCookie(name, '', -1);
}

document.addEventListener('DOMContentLoaded', function consentStuff(event) {
  const sitePrefs = notacouch_readCookie('sitePrefs');
  const consentBanner = document.getElementById('cookie-banner');
  const consentAcceptBtn = document.getElementById('cookie-banner__accept');
  const consentDeclineBtn = document.getElementById('cookie-banner__decline');

  // let's stay on the passive side instead of aggressive
  let previouslyPopped = true;

  window.dataLayer = window.dataLayer || [];

  if (!sitePrefs) {
    // console.log('no sitePrefs cookie found, can afford to pop up cookie banner');
    previouslyPopped = false;
    gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    });
  } else {
    // console.log('gtag status?', gtag);
    if (sitePrefs === cookieApproval) {
      gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
  }
  if (!previouslyPopped) {
    consentBanner.removeAttribute('inert');
  }
  consentAcceptBtn.addEventListener(
    'click',
    actAndCloseBanner(function accept(event) {
      // console.log('clicked banner accept btn');
      // TODO: set cookie setting to deny if n/a
      cookiesApprove();
    }),
  );
  consentDeclineBtn.addEventListener(
    'click',
    actAndCloseBanner(function decline(event) {
      // console.log('clicked banner decline btn');
      // TODO: set cookie setting to deny if n/a
      // const sitePrefs = notacouch_readCookie('sitePrefs');
      // if (!sitePrefs) {
      //   cookiesDeny();
      // }
      cookiesDeny();
    }),
  );

  function gtag() {
    dataLayer.push(arguments);
  }

  function actAndCloseBanner(actFn) {
    return function () {
      if (typeof actFn === 'function') {
        actFn();
      }
      consentBanner.setAttribute('inert', true);
    };
  }

  function cookiesApprove() {
    notacouch_createCookie('sitePrefs', cookieApproval, 90);
    gtag('consent', 'update', {
      analytics_storage: 'granted',
    });
  }

  function cookiesDeny() {
    notacouch_createCookie('sitePrefs', cookieDenial, 90);
    gtag('consent', 'update', {
      analytics_storage: 'denied',
    });
  }

  function cookiesRemove() {
    notacouch_eraseCookie('sitePrefs');
  }
});
