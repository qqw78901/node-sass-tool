/**
 * Created by zuowenqi on 2017/8/9 0009.
 */
const scssOpt = require("./scss.config");
const autoprofixerConfig = scssOpt.autoprofixerConfig;
let fs = require("fs");
let sass = require('node-sass');
let autoprefixer = require('autoprefixer');
let postcss = require('postcss');
let moment = require('moment');
moment.locale('zh-cn');
StartNodeSass();

fs.watch(scssOpt.fileFrom, (eventType, filename) => {
    // console.log(`事件类型是: ${eventType}`);
    if (filename) {
        // console.log(`提供的文件名: ${filename}`);
        StartNodeSass();
    } else {
        // console.log('未提供文件名');
    }
});

function StartNodeSass() {
    sass.render({
        file: scssOpt.fileFrom,
        watch: true,
        outputStyle: "expanded"
    }, function(err, result) {
        if (!err) {
            // No errors during the compilation, write this result on the disk
            SCSSCallBack(result.css);
        } else {
            console.log("*******************error**********************");
            console.log(err);
            console.log("****** /error when handle node-sass***********");
        }
    });
}

function SCSSCallBack(css) {
    postcss([autoprefixer(autoprofixerConfig)])
        .process(css)
        .then(respon => {
            fs.writeFile(scssOpt.fileTo, respon.css, err => {
                if (!err) {
                    console.log("complete Scss to css edit By Zuo on " + moment().format('LLL'));
                }
            });
        });
}