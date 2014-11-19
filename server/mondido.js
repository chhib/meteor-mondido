Mondido = {
  options: null
};

Mondido.configure = function (options) {
  this.options = options;
  this._injectScript();
};

Mondido._injectScript = function () {
  var src = 'https://mondido.com/v1/mondido.js?merchant_id=' + this.options.merchant_id;
  var script = '<script type="text/javascript" src="' + src + '"></script>';
  var endOfHead = /<\/head>/;
  var prependedMondido = script + '</head>';

  Inject.rawModHtml('head_mondido', function (html) {
    return html.replace(endOfHead, prependedMondido);
  });
}