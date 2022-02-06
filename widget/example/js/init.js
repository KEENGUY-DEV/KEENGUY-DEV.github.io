function ready(callback) {
  // in case the document is already rendered
  if (document.readyState != "loading") callback();
  // modern browsers
  else if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", callback);
  // IE <= 8
  else
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState == "complete") callback();
    });
}

const loadScript = (url) =>
  new Promise((resolve) => {
    const script = document.createElement("script");
    script.addEventListener("load", () => {
      resolve();
    });

    script.src = url;

    document.body.append(script);
  });

function include_css(url) {
  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = url;
  document.getElementsByTagName("head")[0].appendChild(css);
}

var url_string = document.currentScript.src;
var url = new URL(url_string);
console.log(url);
var site = url.searchParams.get("site");
if (!site) {
  var site = url.host;
}
var bstype = url.searchParams.get("bstype");
console.log(url_string);
ready(function () {
  let div = document.createElement("div");
  div.id = "bookpay_root";
  document.body.appendChild(div);

  include_css("css/widget.css");
  loadScript("https://unpkg.com/react@17/umd/react.production.min.js").then(
    () => {
      loadScript(
        "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"
      ).then(() => {
        loadScript(`js/widget.js?site=${site}&bstype=${bstype}`);
      });
    }
  );
});
