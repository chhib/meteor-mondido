Meteor.startup(function () {
  if (__meteor_runtime_config__.mondido && __meteor_runtime_config__.mondido.merchant_id) {
    var src = 'https://mondido.com/v1/mondido.js?merchant_id=' + __meteor_runtime_config__.mondido.merchant_id;
    $.getScript(src, function (error, result) {
      if (error) {
        console.log('Mondido could not fetch with merchant_id ' + __meteor_runtime_config__.mondido.merchant_id + ' and got the following error:');
      }
    });
  }
});