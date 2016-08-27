# panto-transformer-sass
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Coverage Status][coveralls-image]][coveralls-url]

Sass transformer for panto.

```js
panto.loadTransformer('sass');

panto.$('**/*.sass').sass({
    sassOptions: {
        outputStyle: 'compressed'
    }
});
```

## options
 - sassOptions: Object, see [sass options](https://github.com/sass/node-sass#options)

[npm-url]: https://npmjs.org/package/panto-transformer-sass
[downloads-image]: http://img.shields.io/npm/dm/panto-transformer-sass.svg
[npm-image]: http://img.shields.io/npm/v/panto-transformer-sass.svg
[travis-url]: https://travis-ci.org/pantojs/panto-transformer-sass
[travis-image]: http://img.shields.io/travis/pantojs/panto-transformer-sass.svg
[david-dm-url]:https://david-dm.org/pantojs/panto-transformer-sass
[david-dm-image]:https://david-dm.org/pantojs/panto-transformer-sass.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/panto-transformer-sass#type=dev
[david-dm-dev-image]:https://david-dm.org/pantojs/panto-transformer-sass/dev-status.svg
[coveralls-image]:https://coveralls.io/repos/github/pantojs/panto-transformer-sass/badge.svg?branch=master
[coveralls-url]:https://coveralls.io/github/pantojs/panto-transformer-sass?branch=master
