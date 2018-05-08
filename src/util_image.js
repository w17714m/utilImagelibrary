

const Compress = require('compress.js');
var $ = require('jquery');
const compress = new Compress();
/**
 * UtilImage
 * @param {string} idNameElementOrigin
 * @param {string} idNameElementOrigin
 * @return {string} idNameElementTarget
 */
function Util_Image(idNameElementOrigin, idNameElementTarget, callBackt) {
    this.origin = idNameElementOrigin;
    this.target = idNameElementTarget;
    this.callBackt = callBackt;
}

/**
 * convertImage70Percent
 * @return {void} 
 */
Util_Image.prototype.convertImage70Percent = function () {
    self = this;
    try {
        $('#' + this.origin).on('change', function (evt) {

            try {
                const files = [];
                files.push(evt.target.files[0]);
                console.log(files);
                compress.compress(files, {
                    size: 4,
                    quality: .70
                }).then(function (results) {
                    console.log('ingreso a la funcion');
                    const preview = document.getElementById(self.target);
                    const output = results[0];
                    const file = Compress.convertBase64ToFile(output.data, output.ext);
                    preview.src = output.prefix + output.data;
                    self.callBackt(preview);
                }.bind(self));
            } catch (e) {
                alert(e);
            }


        });
    } catch (e) {
        console.log('se generó un error', e);
        alert('ERROR CATCH');
    }


}



/**
 * convertImage90Percent
 * @return {void} 
 */
Util_Image.prototype.convertImage90Percent = function () {
    self = this;
    try {
        $('#' + this.origin).on('change', function (evt) {

            try {
                const files = [];
                files.push(evt.target.files[0]);
                console.log(files);
                compress.compress(files, {
                    size: 4,
                    quality: .90
                }).then(function (results) {
                    console.log('ingreso a la funcion');
                    const preview = document.getElementById(self.target);
                    const output = results[0];
                    const file = Compress.convertBase64ToFile(output.data, output.ext);
                    preview.src = output.prefix + output.data;
                    self.callBackt(preview);
                }.bind(self));
            } catch (e) {
                alert(e);
            }


        });
    } catch (e) {
        console.log('se generó un error', e);
        alert('ERROR CATCH');
    }
}
/**
 * convertImage95Percent
 * @return {void} 
 */
Util_Image.prototype.convertImage95Percent = function () {
    self = this;
    try {
        $('#' + this.origin).on('change', function (evt) {

            try {
                const files = [];
                files.push(evt.target.files[0]);
                console.log(files);
                compress.compress(files, {
                    size: 4,
                    quality: .95
                }).then(function (results) {
                    console.log('ingreso a la funcion');
                    const preview = document.getElementById(self.target);
                    const output = results[0];
                    const file = Compress.convertBase64ToFile(output.data, output.ext);
                    preview.src = output.prefix + output.data;
                    self.callBackt(preview);
                }.bind(self));
            } catch (e) {
                alert(e);
            }


        });
    } catch (e) {
        console.log('se generó un error', e);
        alert('ERROR CATCH');
    }
}




module.exports.util = Util_Image;
