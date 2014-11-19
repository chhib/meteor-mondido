Tinytest.add('chhib:mondido - Can configure Mondido', function (test) {

  test.equal(typeof Mondido.configure, 'function');

  Mondido.configure({
    merchant_id: 1
  });
  
  test.equal(Mondido.options.merchant_id, 1);
});
