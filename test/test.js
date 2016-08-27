/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-08-27[23:23:37]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const assert = require('assert');
const panto = require('panto');
const SassTransformer = require('../');

describe('panto-transformer-sass', () => {
    describe('#transform', () => {
        it('should parse sass', done => {
            new SassTransformer({
                sassOptions: {
                    outputStyle: 'compressed'
                }
            }).transform({
                filename: 'a.sass',
                content: `
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
                `
            }).then(file => {
                assert.deepEqual(file.content,
                    'body{font:100% Helvetica,sans-serif;color:#333}\n');
            }).then(() => done()).catch(e => console.error(e));
        });
    });
});
