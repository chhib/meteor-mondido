__meteor_runtime_config__.mondido = {};

Mondido = {
  options: null
};

Mondido.configure = function (options) {
  this.options = options;
  this._setOnClient('merchant_id', options.merchant_id);
};

Mondido._setOnClient = function(key, value) {
  __meteor_runtime_config__.mondido[key] = value;
};
