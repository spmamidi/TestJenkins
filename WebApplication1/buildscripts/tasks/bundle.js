var gulp = require('gulp');
var bundle = require('aurelia-bundler').bundle;

var config = {
    force: true,
    baseURL: '.',                   // baseURL of the application
    configPath: './config.js',      // config.js file. Must be within `baseURL`
    bundles: {
        "dist/app-build": {
            includes: [
              '[*]',
              '*.html!text',
              '*.css!text',
            ],
            options: {
                inject: true,
                minify: true
            }
        },
        "dist/vendor-build": {
            includes: [
              "aurelia-framework",
              "aurelia-bootstrapper",
              "aurelia-fetch-client",
              "aurelia-router",
              "aurelia-animator-css",
              "aurelia-templating-binding",
              "aurelia-templating-resources",
              "aurelia-templating-router",
              "aurelia-loader-default",
              "aurelia-history-browser",
              "aurelia-logging-console",
              "bootstrap",
              "bootstrap/css/bootstrap.css!text"
            ],
            options: {
                inject: true,
                minify: true
            }
        }
    }
};

gulp.task('bundle', function () {
    return bundle(config);
});