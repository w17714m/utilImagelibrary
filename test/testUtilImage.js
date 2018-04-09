'use strict';

var expect = require('chai').expect;
var Util = require('../src/index');
const cherio = require('../node_modules/cheerio/index');

describe('#testImage', function() {
    it('should convert image', function() {
        var result = numFormatter(1);
        expect(result).to.equal('1');
    });
});