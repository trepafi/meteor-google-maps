Package.describe({
  name: 'trepafi:google-maps',
  summary: 'Integrating Google Maps with Meteor  ',
  version: '0.1.0',
  git: 'https://github.com/trepafi/meteor-google-maps.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use("jquery", 'client');
  api.use("mizzao:build-fetcher@0.2.0", 'client');
  api.addFiles('google-maps.fetch.json', 'client');
});
