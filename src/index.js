
const utilImg = require('./util_image.js').util;
const utilGrayScale = require('./util_img_compresor').ImgCompressor;
const lector = require('./ocrad');
var store = require('store');


var library = {
    utilImage : function(origen,objetivo){
        
        return new utilImg(origen,objetivo,this.utilGrayScale);    
    },
    utilGrayScale: function(imgId){
        var compressorSettings = {
            mimeType : 'image/jpg',
            mode : 'strict',
            threshold : 190,
            speed : 'low'
        };
        var vT = new utilGrayScale();
        
        vT.run(imgId.src, compressorSettings, function(src){
            imgId.onload = function(){
                lector(imgId, function(text){
                    store.set('rec', text);
                    // var t = document.createElement('span');
                    // t.innerHTML = text;
                    // document.body.appendChild(t);
                })
            }
            imgId.src = src;
        });
        

    },
    ocra:function(){
        alert('test');
    }
    

}

window.utilWjcq = library;

module.exports = library;


