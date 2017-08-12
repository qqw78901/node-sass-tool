/**
 * Created by zuowenqi on 2017/8/8 0008.
 */
var syntax = require('postcss-scss');
module.exports = {
    "use": [
        "autoprefixer",
        "postcss-import",
        "postcss-simple-vars",
        "postcss-extend",
        "postcss-nested",
        "postcss-mixins"
    ],
    "syntax": syntax,
    "local-plugins": true,
    "watch": true,
    "input": "./css/diy_common.scss",
    "output": "../diy_common.css",
    "autoprefixer": { "browsers": "> 5%" },
    "postcss-define-function": {
        silent: true
    }
};