/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-08-27[23:23:37]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const Transformer = require('panto-transformer');
const sass = require('node-sass');

class SassTransformer extends Transformer {
    _transform(file) {
        return new Promise(resolve => {
            var result = sass.renderSync(panto._.extend(this.options.sassOptions, {
                data: file.content,
                file: panto.file.locate(file.filename)
            }));

            resolve(panto._.extend(file, {
                content: result.css.toString()
            }));
        });
    }
    isTorrential() {
        return false;
    }
}

module.exports = SassTransformer;
