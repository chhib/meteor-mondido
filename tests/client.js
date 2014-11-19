Tinytest.addAsync('chhib:mondido - Mondido attached to jQuery', function (test, onComplete) {  
  Meteor.setTimeout(function () {
    test.equal(typeof $().mondido, 'function');
    onComplete();
  }, 2000);
});