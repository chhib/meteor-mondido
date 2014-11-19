Package.describe({
  summary: "Mondido payments integration",
  name: 'chhib:mondido',
  git: 'https://github.com/chhib/meteor-mondido.git',
  version: "0.1.1"
});

function configurePackage(api) {
  api.versionsFrom('METEOR@1.0');

  api.use('jquery', 'client');
  api.use('meteorhacks:inject-initial', ['client', 'server']);

  api.addFiles('server/mondido.js', 'server');
}

Package.onUse(function(api) {
  configurePackage(api);
  api.export('Mondido', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('chhib:mondido');
  api.addFiles('tests/server.js', 'server');
  api.addFiles('tests/client.js', 'client');
});
