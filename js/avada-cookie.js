(function() {
  const BASE_URL = `https://cdn.shopify.com/extensions/505ce933-6eff-47ee-a32f-dee5ae134593/0.0.0/assets`;
  // const BASE_URL = `https://avada-cookie-bar-staging.web.app/scripttag`;
  // const BASE_URL = `https://avada-cookie-bar-staging-2.web.app/scripttag`;
  const scriptElement = document.createElement('script');
  scriptElement.type = 'text/javascript';
  scriptElement.async = !0;
  scriptElement.src = BASE_URL + `/avada-cookies-bar-main.min.js?v=${new Date().getTime()}`;
  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(scriptElement, firstScript);
})();
