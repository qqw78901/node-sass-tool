const fileFrom = "./css/input.scss";
const fileTo = "./css/output.css";
let autoprofixerConfig = {
    browsers: ["last 2 versions", ">5%", "Android >= 4.0"]
};
module.exports = { fileFrom, fileTo, autoprofixerConfig };
/*      fs.writeFile("../output.css", result.css, function (err) {
 if (!err) {
 //file written on disk
 } else {
 }
 });*/
/*   fs.readFile('src/app.css', (err, css) => {

 });*/