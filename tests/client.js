
Tinytest.add('chhib:mondido - Mondido options are pushed to client', function (test) {  
  test.equal(typeof __meteor_runtime_config__.mondido, 'object');
  test.equal(typeof __meteor_runtime_config__.mondido.merchant_id, 'number');
});

Tinytest.addAsync('chhib:mondido - Mondido attached to jQuery', function (test, onComplete) {  
  Meteor.setTimeout(function () {
    test.equal(typeof $().mondido, 'function');
    onComplete();
  }, 1000);
});