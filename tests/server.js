Tinytest.add('chhib:mondido - Can configure Mondido', function (test) {

  test.equal(typeof Mondido.configure, 'function');

  Mondido.configure({
    merchant_id: 123
  });
  
  test.equal(Mondido.options.merchant_id, 123);
  test.equal(__meteor_runtime_config__.mondido.merchant_id, 123);
});
