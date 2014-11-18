Package.describe({
  summary: "Mondido payments integration",
  name: 'chhib:mondido',
  git: 'https://github.com/chhib/meteor-mondido.git',
  version: "0.1.0"
});

Package.onUse(function(api) {
  configurePackage(api);
  api.export('Mondido', 'server');
});

Package.onTest(function(api) {
  // configurePackage(api);
  api.use('tinytest');
  api.use('chhib:mondido');
  api.addFiles('tests/client.js', 'client');
  api.addFiles('tests/server.js', 'server');
});

function configurePackage(api) {
  api.versionsFrom('METEOR@1.0');
  api.use('underscore', 'server');
  api.use('templating', 'client');
  api.use('jquery', 'client');
  api.addFiles('client/includes.js', 'client');
  api.addFiles('server/mondido.js', 'server');
}