(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('@angular/forms'), require('rxjs'), require('ngx-bootstrap/component-loader'), require('rxjs/operators'), require('@angular/common'), require('ngx-bootstrap/positioning')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/typeahead', ['exports', '@angular/core', 'ngx-bootstrap/utils', '@angular/forms', 'rxjs', 'ngx-bootstrap/component-loader', 'rxjs/operators', '@angular/common', 'ngx-bootstrap/positioning'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].typeahead = {}),global.ng.core,global.utils,global.ng.forms,global.rxjs,global.componentLoader,global.rxjs.operators,global.ng.common,global.positioning));
}(this, (function (exports,core,utils,forms,rxjs,componentLoader,operators,common,positioning) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /* tslint:disable */
    var /** @type {?} */ latinMap = {
        'Á': 'A',
        'Ă': 'A',
        'Ắ': 'A',
        'Ặ': 'A',
        'Ằ': 'A',
        'Ẳ': 'A',
        'Ẵ': 'A',
        'Ǎ': 'A',
        'Â': 'A',
        'Ấ': 'A',
        'Ậ': 'A',
        'Ầ': 'A',
        'Ẩ': 'A',
        'Ẫ': 'A',
        'Ä': 'A',
        'Ǟ': 'A',
        'Ȧ': 'A',
        'Ǡ': 'A',
        'Ạ': 'A',
        'Ȁ': 'A',
        'À': 'A',
        'Ả': 'A',
        'Ȃ': 'A',
        'Ā': 'A',
        'Ą': 'A',
        'Å': 'A',
        'Ǻ': 'A',
        'Ḁ': 'A',
        'Ⱥ': 'A',
        'Ã': 'A',
        'Ꜳ': 'AA',
        'Æ': 'AE',
        'Ǽ': 'AE',
        'Ǣ': 'AE',
        'Ꜵ': 'AO',
        'Ꜷ': 'AU',
        'Ꜹ': 'AV',
        'Ꜻ': 'AV',
        'Ꜽ': 'AY',
        'Ḃ': 'B',
        'Ḅ': 'B',
        'Ɓ': 'B',
        'Ḇ': 'B',
        'Ƀ': 'B',
        'Ƃ': 'B',
        'Ć': 'C',
        'Č': 'C',
        'Ç': 'C',
        'Ḉ': 'C',
        'Ĉ': 'C',
        'Ċ': 'C',
        'Ƈ': 'C',
        'Ȼ': 'C',
        'Ď': 'D',
        'Ḑ': 'D',
        'Ḓ': 'D',
        'Ḋ': 'D',
        'Ḍ': 'D',
        'Ɗ': 'D',
        'Ḏ': 'D',
        'ǲ': 'D',
        'ǅ': 'D',
        'Đ': 'D',
        'Ƌ': 'D',
        'Ǳ': 'DZ',
        'Ǆ': 'DZ',
        'É': 'E',
        'Ĕ': 'E',
        'Ě': 'E',
        'Ȩ': 'E',
        'Ḝ': 'E',
        'Ê': 'E',
        'Ế': 'E',
        'Ệ': 'E',
        'Ề': 'E',
        'Ể': 'E',
        'Ễ': 'E',
        'Ḙ': 'E',
        'Ë': 'E',
        'Ė': 'E',
        'Ẹ': 'E',
        'Ȅ': 'E',
        'È': 'E',
        'Ẻ': 'E',
        'Ȇ': 'E',
        'Ē': 'E',
        'Ḗ': 'E',
        'Ḕ': 'E',
        'Ę': 'E',
        'Ɇ': 'E',
        'Ẽ': 'E',
        'Ḛ': 'E',
        'Ꝫ': 'ET',
        'Ḟ': 'F',
        'Ƒ': 'F',
        'Ǵ': 'G',
        'Ğ': 'G',
        'Ǧ': 'G',
        'Ģ': 'G',
        'Ĝ': 'G',
        'Ġ': 'G',
        'Ɠ': 'G',
        'Ḡ': 'G',
        'Ǥ': 'G',
        'Ḫ': 'H',
        'Ȟ': 'H',
        'Ḩ': 'H',
        'Ĥ': 'H',
        'Ⱨ': 'H',
        'Ḧ': 'H',
        'Ḣ': 'H',
        'Ḥ': 'H',
        'Ħ': 'H',
        'Í': 'I',
        'Ĭ': 'I',
        'Ǐ': 'I',
        'Î': 'I',
        'Ï': 'I',
        'Ḯ': 'I',
        'İ': 'I',
        'Ị': 'I',
        'Ȉ': 'I',
        'Ì': 'I',
        'Ỉ': 'I',
        'Ȋ': 'I',
        'Ī': 'I',
        'Į': 'I',
        'Ɨ': 'I',
        'Ĩ': 'I',
        'Ḭ': 'I',
        'Ꝺ': 'D',
        'Ꝼ': 'F',
        'Ᵹ': 'G',
        'Ꞃ': 'R',
        'Ꞅ': 'S',
        'Ꞇ': 'T',
        'Ꝭ': 'IS',
        'Ĵ': 'J',
        'Ɉ': 'J',
        'Ḱ': 'K',
        'Ǩ': 'K',
        'Ķ': 'K',
        'Ⱪ': 'K',
        'Ꝃ': 'K',
        'Ḳ': 'K',
        'Ƙ': 'K',
        'Ḵ': 'K',
        'Ꝁ': 'K',
        'Ꝅ': 'K',
        'Ĺ': 'L',
        'Ƚ': 'L',
        'Ľ': 'L',
        'Ļ': 'L',
        'Ḽ': 'L',
        'Ḷ': 'L',
        'Ḹ': 'L',
        'Ⱡ': 'L',
        'Ꝉ': 'L',
        'Ḻ': 'L',
        'Ŀ': 'L',
        'Ɫ': 'L',
        'ǈ': 'L',
        'Ł': 'L',
        'Ǉ': 'LJ',
        'Ḿ': 'M',
        'Ṁ': 'M',
        'Ṃ': 'M',
        'Ɱ': 'M',
        'Ń': 'N',
        'Ň': 'N',
        'Ņ': 'N',
        'Ṋ': 'N',
        'Ṅ': 'N',
        'Ṇ': 'N',
        'Ǹ': 'N',
        'Ɲ': 'N',
        'Ṉ': 'N',
        'Ƞ': 'N',
        'ǋ': 'N',
        'Ñ': 'N',
        'Ǌ': 'NJ',
        'Ó': 'O',
        'Ŏ': 'O',
        'Ǒ': 'O',
        'Ô': 'O',
        'Ố': 'O',
        'Ộ': 'O',
        'Ồ': 'O',
        'Ổ': 'O',
        'Ỗ': 'O',
        'Ö': 'O',
        'Ȫ': 'O',
        'Ȯ': 'O',
        'Ȱ': 'O',
        'Ọ': 'O',
        'Ő': 'O',
        'Ȍ': 'O',
        'Ò': 'O',
        'Ỏ': 'O',
        'Ơ': 'O',
        'Ớ': 'O',
        'Ợ': 'O',
        'Ờ': 'O',
        'Ở': 'O',
        'Ỡ': 'O',
        'Ȏ': 'O',
        'Ꝋ': 'O',
        'Ꝍ': 'O',
        'Ō': 'O',
        'Ṓ': 'O',
        'Ṑ': 'O',
        'Ɵ': 'O',
        'Ǫ': 'O',
        'Ǭ': 'O',
        'Ø': 'O',
        'Ǿ': 'O',
        'Õ': 'O',
        'Ṍ': 'O',
        'Ṏ': 'O',
        'Ȭ': 'O',
        'Ƣ': 'OI',
        'Ꝏ': 'OO',
        'Ɛ': 'E',
        'Ɔ': 'O',
        'Ȣ': 'OU',
        'Ṕ': 'P',
        'Ṗ': 'P',
        'Ꝓ': 'P',
        'Ƥ': 'P',
        'Ꝕ': 'P',
        'Ᵽ': 'P',
        'Ꝑ': 'P',
        'Ꝙ': 'Q',
        'Ꝗ': 'Q',
        'Ŕ': 'R',
        'Ř': 'R',
        'Ŗ': 'R',
        'Ṙ': 'R',
        'Ṛ': 'R',
        'Ṝ': 'R',
        'Ȑ': 'R',
        'Ȓ': 'R',
        'Ṟ': 'R',
        'Ɍ': 'R',
        'Ɽ': 'R',
        'Ꜿ': 'C',
        'Ǝ': 'E',
        'Ś': 'S',
        'Ṥ': 'S',
        'Š': 'S',
        'Ṧ': 'S',
        'Ş': 'S',
        'Ŝ': 'S',
        'Ș': 'S',
        'Ṡ': 'S',
        'Ṣ': 'S',
        'Ṩ': 'S',
        'Ť': 'T',
        'Ţ': 'T',
        'Ṱ': 'T',
        'Ț': 'T',
        'Ⱦ': 'T',
        'Ṫ': 'T',
        'Ṭ': 'T',
        'Ƭ': 'T',
        'Ṯ': 'T',
        'Ʈ': 'T',
        'Ŧ': 'T',
        'Ɐ': 'A',
        'Ꞁ': 'L',
        'Ɯ': 'M',
        'Ʌ': 'V',
        'Ꜩ': 'TZ',
        'Ú': 'U',
        'Ŭ': 'U',
        'Ǔ': 'U',
        'Û': 'U',
        'Ṷ': 'U',
        'Ü': 'U',
        'Ǘ': 'U',
        'Ǚ': 'U',
        'Ǜ': 'U',
        'Ǖ': 'U',
        'Ṳ': 'U',
        'Ụ': 'U',
        'Ű': 'U',
        'Ȕ': 'U',
        'Ù': 'U',
        'Ủ': 'U',
        'Ư': 'U',
        'Ứ': 'U',
        'Ự': 'U',
        'Ừ': 'U',
        'Ử': 'U',
        'Ữ': 'U',
        'Ȗ': 'U',
        'Ū': 'U',
        'Ṻ': 'U',
        'Ų': 'U',
        'Ů': 'U',
        'Ũ': 'U',
        'Ṹ': 'U',
        'Ṵ': 'U',
        'Ꝟ': 'V',
        'Ṿ': 'V',
        'Ʋ': 'V',
        'Ṽ': 'V',
        'Ꝡ': 'VY',
        'Ẃ': 'W',
        'Ŵ': 'W',
        'Ẅ': 'W',
        'Ẇ': 'W',
        'Ẉ': 'W',
        'Ẁ': 'W',
        'Ⱳ': 'W',
        'Ẍ': 'X',
        'Ẋ': 'X',
        'Ý': 'Y',
        'Ŷ': 'Y',
        'Ÿ': 'Y',
        'Ẏ': 'Y',
        'Ỵ': 'Y',
        'Ỳ': 'Y',
        'Ƴ': 'Y',
        'Ỷ': 'Y',
        'Ỿ': 'Y',
        'Ȳ': 'Y',
        'Ɏ': 'Y',
        'Ỹ': 'Y',
        'Ź': 'Z',
        'Ž': 'Z',
        'Ẑ': 'Z',
        'Ⱬ': 'Z',
        'Ż': 'Z',
        'Ẓ': 'Z',
        'Ȥ': 'Z',
        'Ẕ': 'Z',
        'Ƶ': 'Z',
        'Ĳ': 'IJ',
        'Œ': 'OE',
        'ᴀ': 'A',
        'ᴁ': 'AE',
        'ʙ': 'B',
        'ᴃ': 'B',
        'ᴄ': 'C',
        'ᴅ': 'D',
        'ᴇ': 'E',
        'ꜰ': 'F',
        'ɢ': 'G',
        'ʛ': 'G',
        'ʜ': 'H',
        'ɪ': 'I',
        'ʁ': 'R',
        'ᴊ': 'J',
        'ᴋ': 'K',
        'ʟ': 'L',
        'ᴌ': 'L',
        'ᴍ': 'M',
        'ɴ': 'N',
        'ᴏ': 'O',
        'ɶ': 'OE',
        'ᴐ': 'O',
        'ᴕ': 'OU',
        'ᴘ': 'P',
        'ʀ': 'R',
        'ᴎ': 'N',
        'ᴙ': 'R',
        'ꜱ': 'S',
        'ᴛ': 'T',
        'ⱻ': 'E',
        'ᴚ': 'R',
        'ᴜ': 'U',
        'ᴠ': 'V',
        'ᴡ': 'W',
        'ʏ': 'Y',
        'ᴢ': 'Z',
        'á': 'a',
        'ă': 'a',
        'ắ': 'a',
        'ặ': 'a',
        'ằ': 'a',
        'ẳ': 'a',
        'ẵ': 'a',
        'ǎ': 'a',
        'â': 'a',
        'ấ': 'a',
        'ậ': 'a',
        'ầ': 'a',
        'ẩ': 'a',
        'ẫ': 'a',
        'ä': 'a',
        'ǟ': 'a',
        'ȧ': 'a',
        'ǡ': 'a',
        'ạ': 'a',
        'ȁ': 'a',
        'à': 'a',
        'ả': 'a',
        'ȃ': 'a',
        'ā': 'a',
        'ą': 'a',
        'ᶏ': 'a',
        'ẚ': 'a',
        'å': 'a',
        'ǻ': 'a',
        'ḁ': 'a',
        'ⱥ': 'a',
        'ã': 'a',
        'ꜳ': 'aa',
        'æ': 'ae',
        'ǽ': 'ae',
        'ǣ': 'ae',
        'ꜵ': 'ao',
        'ꜷ': 'au',
        'ꜹ': 'av',
        'ꜻ': 'av',
        'ꜽ': 'ay',
        'ḃ': 'b',
        'ḅ': 'b',
        'ɓ': 'b',
        'ḇ': 'b',
        'ᵬ': 'b',
        'ᶀ': 'b',
        'ƀ': 'b',
        'ƃ': 'b',
        'ɵ': 'o',
        'ć': 'c',
        'č': 'c',
        'ç': 'c',
        'ḉ': 'c',
        'ĉ': 'c',
        'ɕ': 'c',
        'ċ': 'c',
        'ƈ': 'c',
        'ȼ': 'c',
        'ď': 'd',
        'ḑ': 'd',
        'ḓ': 'd',
        'ȡ': 'd',
        'ḋ': 'd',
        'ḍ': 'd',
        'ɗ': 'd',
        'ᶑ': 'd',
        'ḏ': 'd',
        'ᵭ': 'd',
        'ᶁ': 'd',
        'đ': 'd',
        'ɖ': 'd',
        'ƌ': 'd',
        'ı': 'i',
        'ȷ': 'j',
        'ɟ': 'j',
        'ʄ': 'j',
        'ǳ': 'dz',
        'ǆ': 'dz',
        'é': 'e',
        'ĕ': 'e',
        'ě': 'e',
        'ȩ': 'e',
        'ḝ': 'e',
        'ê': 'e',
        'ế': 'e',
        'ệ': 'e',
        'ề': 'e',
        'ể': 'e',
        'ễ': 'e',
        'ḙ': 'e',
        'ë': 'e',
        'ė': 'e',
        'ẹ': 'e',
        'ȅ': 'e',
        'è': 'e',
        'ẻ': 'e',
        'ȇ': 'e',
        'ē': 'e',
        'ḗ': 'e',
        'ḕ': 'e',
        'ⱸ': 'e',
        'ę': 'e',
        'ᶒ': 'e',
        'ɇ': 'e',
        'ẽ': 'e',
        'ḛ': 'e',
        'ꝫ': 'et',
        'ḟ': 'f',
        'ƒ': 'f',
        'ᵮ': 'f',
        'ᶂ': 'f',
        'ǵ': 'g',
        'ğ': 'g',
        'ǧ': 'g',
        'ģ': 'g',
        'ĝ': 'g',
        'ġ': 'g',
        'ɠ': 'g',
        'ḡ': 'g',
        'ᶃ': 'g',
        'ǥ': 'g',
        'ḫ': 'h',
        'ȟ': 'h',
        'ḩ': 'h',
        'ĥ': 'h',
        'ⱨ': 'h',
        'ḧ': 'h',
        'ḣ': 'h',
        'ḥ': 'h',
        'ɦ': 'h',
        'ẖ': 'h',
        'ħ': 'h',
        'ƕ': 'hv',
        'í': 'i',
        'ĭ': 'i',
        'ǐ': 'i',
        'î': 'i',
        'ï': 'i',
        'ḯ': 'i',
        'ị': 'i',
        'ȉ': 'i',
        'ì': 'i',
        'ỉ': 'i',
        'ȋ': 'i',
        'ī': 'i',
        'į': 'i',
        'ᶖ': 'i',
        'ɨ': 'i',
        'ĩ': 'i',
        'ḭ': 'i',
        'ꝺ': 'd',
        'ꝼ': 'f',
        'ᵹ': 'g',
        'ꞃ': 'r',
        'ꞅ': 's',
        'ꞇ': 't',
        'ꝭ': 'is',
        'ǰ': 'j',
        'ĵ': 'j',
        'ʝ': 'j',
        'ɉ': 'j',
        'ḱ': 'k',
        'ǩ': 'k',
        'ķ': 'k',
        'ⱪ': 'k',
        'ꝃ': 'k',
        'ḳ': 'k',
        'ƙ': 'k',
        'ḵ': 'k',
        'ᶄ': 'k',
        'ꝁ': 'k',
        'ꝅ': 'k',
        'ĺ': 'l',
        'ƚ': 'l',
        'ɬ': 'l',
        'ľ': 'l',
        'ļ': 'l',
        'ḽ': 'l',
        'ȴ': 'l',
        'ḷ': 'l',
        'ḹ': 'l',
        'ⱡ': 'l',
        'ꝉ': 'l',
        'ḻ': 'l',
        'ŀ': 'l',
        'ɫ': 'l',
        'ᶅ': 'l',
        'ɭ': 'l',
        'ł': 'l',
        'ǉ': 'lj',
        'ſ': 's',
        'ẜ': 's',
        'ẛ': 's',
        'ẝ': 's',
        'ḿ': 'm',
        'ṁ': 'm',
        'ṃ': 'm',
        'ɱ': 'm',
        'ᵯ': 'm',
        'ᶆ': 'm',
        'ń': 'n',
        'ň': 'n',
        'ņ': 'n',
        'ṋ': 'n',
        'ȵ': 'n',
        'ṅ': 'n',
        'ṇ': 'n',
        'ǹ': 'n',
        'ɲ': 'n',
        'ṉ': 'n',
        'ƞ': 'n',
        'ᵰ': 'n',
        'ᶇ': 'n',
        'ɳ': 'n',
        'ñ': 'n',
        'ǌ': 'nj',
        'ó': 'o',
        'ŏ': 'o',
        'ǒ': 'o',
        'ô': 'o',
        'ố': 'o',
        'ộ': 'o',
        'ồ': 'o',
        'ổ': 'o',
        'ỗ': 'o',
        'ö': 'o',
        'ȫ': 'o',
        'ȯ': 'o',
        'ȱ': 'o',
        'ọ': 'o',
        'ő': 'o',
        'ȍ': 'o',
        'ò': 'o',
        'ỏ': 'o',
        'ơ': 'o',
        'ớ': 'o',
        'ợ': 'o',
        'ờ': 'o',
        'ở': 'o',
        'ỡ': 'o',
        'ȏ': 'o',
        'ꝋ': 'o',
        'ꝍ': 'o',
        'ⱺ': 'o',
        'ō': 'o',
        'ṓ': 'o',
        'ṑ': 'o',
        'ǫ': 'o',
        'ǭ': 'o',
        'ø': 'o',
        'ǿ': 'o',
        'õ': 'o',
        'ṍ': 'o',
        'ṏ': 'o',
        'ȭ': 'o',
        'ƣ': 'oi',
        'ꝏ': 'oo',
        'ɛ': 'e',
        'ᶓ': 'e',
        'ɔ': 'o',
        'ᶗ': 'o',
        'ȣ': 'ou',
        'ṕ': 'p',
        'ṗ': 'p',
        'ꝓ': 'p',
        'ƥ': 'p',
        'ᵱ': 'p',
        'ᶈ': 'p',
        'ꝕ': 'p',
        'ᵽ': 'p',
        'ꝑ': 'p',
        'ꝙ': 'q',
        'ʠ': 'q',
        'ɋ': 'q',
        'ꝗ': 'q',
        'ŕ': 'r',
        'ř': 'r',
        'ŗ': 'r',
        'ṙ': 'r',
        'ṛ': 'r',
        'ṝ': 'r',
        'ȑ': 'r',
        'ɾ': 'r',
        'ᵳ': 'r',
        'ȓ': 'r',
        'ṟ': 'r',
        'ɼ': 'r',
        'ᵲ': 'r',
        'ᶉ': 'r',
        'ɍ': 'r',
        'ɽ': 'r',
        'ↄ': 'c',
        'ꜿ': 'c',
        'ɘ': 'e',
        'ɿ': 'r',
        'ś': 's',
        'ṥ': 's',
        'š': 's',
        'ṧ': 's',
        'ş': 's',
        'ŝ': 's',
        'ș': 's',
        'ṡ': 's',
        'ṣ': 's',
        'ṩ': 's',
        'ʂ': 's',
        'ᵴ': 's',
        'ᶊ': 's',
        'ȿ': 's',
        'ɡ': 'g',
        'ᴑ': 'o',
        'ᴓ': 'o',
        'ᴝ': 'u',
        'ť': 't',
        'ţ': 't',
        'ṱ': 't',
        'ț': 't',
        'ȶ': 't',
        'ẗ': 't',
        'ⱦ': 't',
        'ṫ': 't',
        'ṭ': 't',
        'ƭ': 't',
        'ṯ': 't',
        'ᵵ': 't',
        'ƫ': 't',
        'ʈ': 't',
        'ŧ': 't',
        'ᵺ': 'th',
        'ɐ': 'a',
        'ᴂ': 'ae',
        'ǝ': 'e',
        'ᵷ': 'g',
        'ɥ': 'h',
        'ʮ': 'h',
        'ʯ': 'h',
        'ᴉ': 'i',
        'ʞ': 'k',
        'ꞁ': 'l',
        'ɯ': 'm',
        'ɰ': 'm',
        'ᴔ': 'oe',
        'ɹ': 'r',
        'ɻ': 'r',
        'ɺ': 'r',
        'ⱹ': 'r',
        'ʇ': 't',
        'ʌ': 'v',
        'ʍ': 'w',
        'ʎ': 'y',
        'ꜩ': 'tz',
        'ú': 'u',
        'ŭ': 'u',
        'ǔ': 'u',
        'û': 'u',
        'ṷ': 'u',
        'ü': 'u',
        'ǘ': 'u',
        'ǚ': 'u',
        'ǜ': 'u',
        'ǖ': 'u',
        'ṳ': 'u',
        'ụ': 'u',
        'ű': 'u',
        'ȕ': 'u',
        'ù': 'u',
        'ủ': 'u',
        'ư': 'u',
        'ứ': 'u',
        'ự': 'u',
        'ừ': 'u',
        'ử': 'u',
        'ữ': 'u',
        'ȗ': 'u',
        'ū': 'u',
        'ṻ': 'u',
        'ų': 'u',
        'ᶙ': 'u',
        'ů': 'u',
        'ũ': 'u',
        'ṹ': 'u',
        'ṵ': 'u',
        'ᵫ': 'ue',
        'ꝸ': 'um',
        'ⱴ': 'v',
        'ꝟ': 'v',
        'ṿ': 'v',
        'ʋ': 'v',
        'ᶌ': 'v',
        'ⱱ': 'v',
        'ṽ': 'v',
        'ꝡ': 'vy',
        'ẃ': 'w',
        'ŵ': 'w',
        'ẅ': 'w',
        'ẇ': 'w',
        'ẉ': 'w',
        'ẁ': 'w',
        'ⱳ': 'w',
        'ẘ': 'w',
        'ẍ': 'x',
        'ẋ': 'x',
        'ᶍ': 'x',
        'ý': 'y',
        'ŷ': 'y',
        'ÿ': 'y',
        'ẏ': 'y',
        'ỵ': 'y',
        'ỳ': 'y',
        'ƴ': 'y',
        'ỷ': 'y',
        'ỿ': 'y',
        'ȳ': 'y',
        'ẙ': 'y',
        'ɏ': 'y',
        'ỹ': 'y',
        'ź': 'z',
        'ž': 'z',
        'ẑ': 'z',
        'ʑ': 'z',
        'ⱬ': 'z',
        'ż': 'z',
        'ẓ': 'z',
        'ȥ': 'z',
        'ẕ': 'z',
        'ᵶ': 'z',
        'ᶎ': 'z',
        'ʐ': 'z',
        'ƶ': 'z',
        'ɀ': 'z',
        'ﬀ': 'ff',
        'ﬃ': 'ffi',
        'ﬄ': 'ffl',
        'ﬁ': 'fi',
        'ﬂ': 'fl',
        'ĳ': 'ij',
        'œ': 'oe',
        'ﬆ': 'st',
        'ₐ': 'a',
        'ₑ': 'e',
        'ᵢ': 'i',
        'ⱼ': 'j',
        'ₒ': 'o',
        'ᵣ': 'r',
        'ᵤ': 'u',
        'ᵥ': 'v',
        'ₓ': 'x'
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TypeaheadOptions = (function () {
        function TypeaheadOptions(options) {
            Object.assign(this, options);
        }
        return TypeaheadOptions;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TypeaheadMatch = (function () {
        // tslint:disable-next-line:no-any
        function TypeaheadMatch(item, value, header) {
            if (value === void 0) {
                value = item;
            }
            if (header === void 0) {
                header = false;
            }
            this.item = item;
            this.value = value;
            this.header = header;
        }
        /**
         * @return {?}
         */
        TypeaheadMatch.prototype.isHeader = /**
         * @return {?}
         */
            function () {
                return this.header;
            };
        /**
         * @return {?}
         */
        TypeaheadMatch.prototype.toString = /**
         * @return {?}
         */
            function () {
                return this.value;
            };
        return TypeaheadMatch;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} str
     * @return {?}
     */
    function latinize(str) {
        if (!str) {
            return '';
        }
        return str.replace(/[^A-Za-z0-9\[\] ]/g, function (a) {
            return latinMap[a] || a;
        });
    }
    /**
     * @param {?} queryToEscape
     * @return {?}
     */
    function escapeRegexp(queryToEscape) {
        // Regex: capture the whole query string and replace it with the string
        // that will be used to match the results, for example if the capture is
        // 'a' the result will be \a
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }
    /**
     * @param {?} str
     * @param {?=} wordRegexDelimiters
     * @param {?=} phraseRegexDelimiters
     * @return {?}
     */
    function tokenize(str, wordRegexDelimiters, phraseRegexDelimiters) {
        if (wordRegexDelimiters === void 0) {
            wordRegexDelimiters = ' ';
        }
        if (phraseRegexDelimiters === void 0) {
            phraseRegexDelimiters = '';
        }
        /* tslint:enable */
        var /** @type {?} */ regexStr = "(?:[" + phraseRegexDelimiters + "])([^" + phraseRegexDelimiters + "]+)" +
            ("(?:[" + phraseRegexDelimiters + "])|([^" + wordRegexDelimiters + "]+)");
        var /** @type {?} */ preTokenized = str.split(new RegExp(regexStr, 'g'));
        var /** @type {?} */ result = [];
        var /** @type {?} */ preTokenizedLength = preTokenized.length;
        var /** @type {?} */ token;
        var /** @type {?} */ replacePhraseDelimiters = new RegExp("[" + phraseRegexDelimiters + "]+", 'g');
        for (var /** @type {?} */ i = 0; i < preTokenizedLength; i += 1) {
            token = preTokenized[i];
            if (token && token.length && token !== wordRegexDelimiters) {
                result.push(token.replace(replacePhraseDelimiters, ''));
            }
        }
        return result;
    }
    /**
     * @param {?} object
     * @param {?} option
     * @return {?}
     */
    function getValueFromObject(object, option) {
        if (!option || typeof object !== 'object') {
            return object.toString();
        }
        if (option.endsWith('()')) {
            var /** @type {?} */ functionName = option.slice(0, option.length - 2);
            return object[functionName]().toString();
        }
        var /** @type {?} */ properties = option
            .replace(/\[(\w+)\]/g, '.$1')
            .replace(/^\./, '');
        var /** @type {?} */ propertiesArray = properties.split('.');
        try {
            for (var propertiesArray_1 = __values(propertiesArray), propertiesArray_1_1 = propertiesArray_1.next(); !propertiesArray_1_1.done; propertiesArray_1_1 = propertiesArray_1.next()) {
                var property = propertiesArray_1_1.value;
                if (property in object) {
                    // tslint:disable-next-line
                    object = object[property];
                }
            }
        }
        catch (e_1_1) {
            e_1 = { error: e_1_1 };
        }
        finally {
            try {
                if (propertiesArray_1_1 && !propertiesArray_1_1.done && (_a = propertiesArray_1.return))
                    _a.call(propertiesArray_1);
            }
            finally {
                if (e_1)
                    throw e_1.error;
            }
        }
        if (!object) {
            return '';
        }
        return object.toString();
        var e_1, _a;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TypeaheadContainerComponent = (function () {
        function TypeaheadContainerComponent(element, renderer) {
            this.renderer = renderer;
            this.isFocused = false;
            this._matches = [];
            this.isScrolledIntoView = function (elem) {
                var /** @type {?} */ containerViewTop = this.ulElement.nativeElement.scrollTop;
                var /** @type {?} */ containerViewBottom = containerViewTop + Number(this.ulElement.nativeElement.offsetHeight);
                var /** @type {?} */ elemTop = elem.offsetTop;
                var /** @type {?} */ elemBottom = elemTop + elem.offsetHeight;
                return ((elemBottom <= containerViewBottom) && (elemTop >= containerViewTop));
            };
            this.element = element;
        }
        Object.defineProperty(TypeaheadContainerComponent.prototype, "isBs4", {
            get: /**
             * @return {?}
             */ function () {
                return !utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "active", {
            get: /**
             * @return {?}
             */ function () {
                return this._active;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "matches", {
            get: /**
             * @return {?}
             */ function () {
                return this._matches;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                var _this = this;
                this._matches = value;
                this.needScrollbar = this.typeaheadScrollable && this.typeaheadOptionsInScrollableView < this.matches.length;
                if (this.typeaheadScrollable) {
                    setTimeout(function () {
                        _this.setScrollableMode();
                    });
                }
                if (this._matches.length > 0) {
                    this._active = this._matches[0];
                    if (this._active.isHeader()) {
                        this.nextActiveMatch();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "optionsListTemplate", {
            // tslint:disable-next-line:no-any
            get: /**
             * @return {?}
             */ function () {
                return this.parent ? this.parent.optionsListTemplate : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadScrollable", {
            get: /**
             * @return {?}
             */ function () {
                return this.parent ? this.parent.typeaheadScrollable : false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadOptionsInScrollableView", {
            get: /**
             * @return {?}
             */ function () {
                return this.parent ? this.parent.typeaheadOptionsInScrollableView : 5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "itemTemplate", {
            // tslint:disable-next-line:no-any
            get: /**
             * @return {?}
             */ function () {
                return this.parent ? this.parent.typeaheadItemTemplate : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.selectActiveMatch = /**
         * @return {?}
         */
            function () {
                this.selectMatch(this._active);
            };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.prevActiveMatch = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ index = this.matches.indexOf(this._active);
                this._active = this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1];
                if (this._active.isHeader()) {
                    this.prevActiveMatch();
                }
                if (this.typeaheadScrollable) {
                    this.scrollPrevious(index);
                }
            };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.nextActiveMatch = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ index = this.matches.indexOf(this._active);
                this._active = this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1];
                if (this._active.isHeader()) {
                    this.nextActiveMatch();
                }
                if (this.typeaheadScrollable) {
                    this.scrollNext(index);
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.selectActive = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.isFocused = true;
                this._active = value;
            };
        /**
         * @param {?} match
         * @param {?} query
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.highlight = /**
         * @param {?} match
         * @param {?} query
         * @return {?}
         */
            function (match, query) {
                var /** @type {?} */ itemStr = match.value;
                var /** @type {?} */ itemStrHelper = (this.parent && this.parent.typeaheadLatinize
                    ? latinize(itemStr)
                    : itemStr).toLowerCase();
                var /** @type {?} */ startIdx;
                var /** @type {?} */ tokenLen;
                // Replaces the capture string with the same string inside of a "strong" tag
                if (typeof query === 'object') {
                    var /** @type {?} */ queryLen = query.length;
                    for (var /** @type {?} */ i = 0; i < queryLen; i += 1) {
                        // query[i] is already latinized and lower case
                        startIdx = itemStrHelper.indexOf(query[i]);
                        tokenLen = query[i].length;
                        if (startIdx >= 0 && tokenLen > 0) {
                            itemStr =
                                itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) + "</strong>" +
                                    ("" + itemStr.substring(startIdx + tokenLen));
                            itemStrHelper =
                                itemStrHelper.substring(0, startIdx) + "        " + ' '.repeat(tokenLen) + "         " +
                                    ("" + itemStrHelper.substring(startIdx + tokenLen));
                        }
                    }
                }
                else if (query) {
                    // query is already latinized and lower case
                    startIdx = itemStrHelper.indexOf(query);
                    tokenLen = query.length;
                    if (startIdx >= 0 && tokenLen > 0) {
                        itemStr =
                            itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) + "</strong>" +
                                ("" + itemStr.substring(startIdx + tokenLen));
                    }
                }
                return itemStr;
            };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.focusLost = /**
         * @return {?}
         */
            function () {
                this.isFocused = false;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.isActive = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return this._active === value;
            };
        /**
         * @param {?} value
         * @param {?=} e
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.selectMatch = /**
         * @param {?} value
         * @param {?=} e
         * @return {?}
         */
            function (value, e) {
                var _this = this;
                if (e === void 0) {
                    e = void 0;
                }
                if (e) {
                    e.stopPropagation();
                    e.preventDefault();
                }
                this.parent.changeModel(value);
                setTimeout(function () { return _this.parent.typeaheadOnSelect.emit(value); }, 0);
                return false;
            };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.setScrollableMode = /**
         * @return {?}
         */
            function () {
                if (!this.ulElement) {
                    this.ulElement = this.element;
                }
                if (this.liElements.first) {
                    var /** @type {?} */ ulStyles = utils.Utils.getStyles(this.ulElement.nativeElement);
                    var /** @type {?} */ liStyles = utils.Utils.getStyles(this.liElements.first.nativeElement);
                    var /** @type {?} */ ulPaddingBottom = parseFloat((ulStyles['padding-bottom'] ? ulStyles['padding-bottom'] : '')
                        .replace('px', ''));
                    var /** @type {?} */ ulPaddingTop = parseFloat((ulStyles['padding-top'] ? ulStyles['padding-top'] : '0')
                        .replace('px', ''));
                    var /** @type {?} */ optionHeight = parseFloat((liStyles.height ? liStyles.height : '0')
                        .replace('px', ''));
                    var /** @type {?} */ height = this.typeaheadOptionsInScrollableView * optionHeight;
                    this.guiHeight = height + ulPaddingTop + ulPaddingBottom + "px";
                }
                this.renderer.setStyle(this.element.nativeElement, 'visibility', 'visible');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.scrollPrevious = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (index === 0) {
                    this.scrollToBottom();
                    return;
                }
                if (this.liElements) {
                    var /** @type {?} */ liElement = this.liElements.toArray()[index - 1];
                    if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                        this.ulElement.nativeElement.scrollTop = liElement.nativeElement.offsetTop;
                    }
                }
            };
        /**
         * @param {?} index
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.scrollNext = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (index + 1 > this.matches.length - 1) {
                    this.scrollToTop();
                    return;
                }
                if (this.liElements) {
                    var /** @type {?} */ liElement = this.liElements.toArray()[index + 1];
                    if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                        this.ulElement.nativeElement.scrollTop =
                            liElement.nativeElement.offsetTop -
                                Number(this.ulElement.nativeElement.offsetHeight) +
                                Number(liElement.nativeElement.offsetHeight);
                    }
                }
            };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.scrollToBottom = /**
         * @return {?}
         */
            function () {
                this.ulElement.nativeElement.scrollTop = this.ulElement.nativeElement.scrollHeight;
            };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.scrollToTop = /**
         * @return {?}
         */
            function () {
                this.ulElement.nativeElement.scrollTop = 0;
            };
        TypeaheadContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'typeahead-container',
                        // tslint:disable-next-line
                        template: "<!-- inject options list template -->\n<ng-template [ngTemplateOutlet]=\"optionsListTemplate || (isBs4 ? bs4Template : bs3Template)\"\n             [ngTemplateOutletContext]=\"{matches:matches, itemTemplate:itemTemplate, query:query}\"></ng-template>\n\n<!-- default options item template -->\n<ng-template #bsItemTemplate let-match=\"match\" let-query=\"query\"><span [innerHtml]=\"highlight(match, query)\"></span>\n</ng-template>\n\n<!-- Bootstrap 3 options list template -->\n<ng-template #bs3Template>\n  <ul class=\"dropdown-menu\"\n      #ulElement\n      [style.overflow-y]=\"needScrollbar ? 'scroll': 'auto'\"\n      [style.height]=\"needScrollbar ? guiHeight: 'auto'\">\n    <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n      <li #liElements *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</li>\n      <li #liElements *ngIf=\"!match.isHeader()\" [class.active]=\"isActive(match)\" (mouseenter)=\"selectActive(match)\">\n        <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\">\n          <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\n                       [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\n        </a>\n      </li>\n    </ng-template>\n  </ul>\n</ng-template>\n\n<!-- Bootstrap 4 options list template -->\n<ng-template #bs4Template>\n  <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n    <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</h6>\n    <ng-template [ngIf]=\"!match.isHeader()\">\n      <button #liElements\n              class=\"dropdown-item\"\n              (click)=\"selectMatch(match, $event)\"\n              (mouseenter)=\"selectActive(match)\"\n              [class.active]=\"isActive(match)\">\n        <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\n                     [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\n      </button>\n    </ng-template>\n  </ng-template>\n</ng-template>\n",
                        host: {
                            class: 'dropdown open',
                            '[class.dropdown-menu]': 'isBs4',
                            '[style.overflow-y]': "isBs4 && needScrollbar ? 'scroll': 'visible'",
                            '[style.height]': "isBs4 && needScrollbar ? guiHeight: 'auto'",
                            '[style.visibility]': "typeaheadScrollable ? 'hidden' : 'visible'",
                            '[class.dropup]': 'dropup',
                            style: 'position: absolute;display: block;'
                        }
                    }] }
        ];
        /** @nocollapse */
        TypeaheadContainerComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer2, },
            ];
        };
        TypeaheadContainerComponent.propDecorators = {
            "ulElement": [{ type: core.ViewChild, args: ['ulElement',] },],
            "liElements": [{ type: core.ViewChildren, args: ['liElements',] },],
            "focusLost": [{ type: core.HostListener, args: ['mouseleave',] }, { type: core.HostListener, args: ['blur',] },],
        };
        return TypeaheadContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Default values provider for typeahead
     */
    var TypeaheadConfig = (function () {
        function TypeaheadConfig() {
            /**
             * used to hide results on blur
             */
            this.hideResultsOnBlur = true;
        }
        TypeaheadConfig.decorators = [
            { type: core.Injectable }
        ];
        return TypeaheadConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TypeaheadDirective = (function () {
        function TypeaheadDirective(ngControl, element, viewContainerRef, renderer, config, cis, changeDetection) {
            this.ngControl = ngControl;
            this.element = element;
            this.renderer = renderer;
            this.changeDetection = changeDetection;
            /**
             * minimal no of characters that needs to be entered before
             * typeahead kicks-in. When set to 0, typeahead shows on focus with full
             * list of options (limited as normal by typeaheadOptionsLimit)
             */
            this.typeaheadMinLength = void 0;
            /**
             * should be used only in case of typeahead attribute is array.
             * If true - loading of options will be async, otherwise - sync.
             * true make sense if options array is large.
             */
            this.typeaheadAsync = void 0;
            /**
             * match latin symbols.
             * If true the word súper would match super and vice versa.
             */
            this.typeaheadLatinize = true;
            /**
             * Can be use to search words by inserting a single white space between each characters
             *  for example 'C a l i f o r n i a' will match 'California'.
             */
            this.typeaheadSingleWords = true;
            /**
             * should be used only in case typeaheadSingleWords attribute is true.
             * Sets the word delimiter to break words. Defaults to space.
             */
            this.typeaheadWordDelimiters = ' ';
            /**
             * should be used only in case typeaheadSingleWords attribute is true.
             * Sets the word delimiter to match exact phrase.
             * Defaults to simple and double quotes.
             */
            this.typeaheadPhraseDelimiters = '\'"';
            /**
             * specifies if typeahead is scrollable
             */
            this.typeaheadScrollable = false;
            /**
             * specifies number of options to show in scroll view
             */
            this.typeaheadOptionsInScrollableView = 5;
            /**
             * fired when 'busy' state of this component was changed,
             * fired on async mode only, returns boolean
             */
            this.typeaheadLoading = new core.EventEmitter();
            /**
             * fired on every key event and returns true
             * in case of matches are not detected
             */
            this.typeaheadNoResults = new core.EventEmitter();
            /**
             * fired when option was selected, return object with data of this option
             */
            this.typeaheadOnSelect = new core.EventEmitter();
            /**
             * fired when blur event occurres. returns the active item
             */
            this.typeaheadOnBlur = new core.EventEmitter();
            /**
             * This attribute indicates that the dropdown should be opened upwards
             */
            this.dropup = false;
            this.isTypeaheadOptionsListActive = false;
            // tslint:disable-next-line:no-any
            this.keyUpEventEmitter = new core.EventEmitter();
            this.placement = 'bottom-left';
            this._subscriptions = [];
            this._typeahead = cis.createLoader(element, viewContainerRef, renderer)
                .provide({ provide: TypeaheadConfig, useValue: config });
            Object.assign(this, { typeaheadHideResultsOnBlur: config.hideResultsOnBlur });
        }
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
                this.typeaheadMinLength =
                    this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
                this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
                // async should be false in case of array
                if (this.typeaheadAsync === undefined &&
                    !(rxjs.isObservable(this.typeahead))) {
                    this.typeaheadAsync = false;
                }
                if (rxjs.isObservable(this.typeahead)) {
                    this.typeaheadAsync = true;
                }
                if (this.typeaheadAsync) {
                    this.asyncActions();
                }
                else {
                    this.syncActions();
                }
            };
        /**
         * @param {?} e
         * @return {?}
         */
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        TypeaheadDirective.prototype.onInput = /**
         * @param {?} e
         * @return {?}
         */
            // tslint:disable-next-line:no-any
            function (e) {
                // For `<input>`s, use the `value` property. For others that don't have a
                // `value` (such as `<span contenteditable="true">`), use either
                // `textContent` or `innerText` (depending on which one is supported, i.e.
                // Firefox or IE).
                var /** @type {?} */ value = e.target.value !== undefined
                    ? e.target.value
                    : e.target.textContent !== undefined
                        ? e.target.textContent
                        : e.target.innerText;
                if (value != null && value.trim().length >= this.typeaheadMinLength) {
                    this.typeaheadLoading.emit(true);
                    this.keyUpEventEmitter.emit(e.target.value);
                }
                else {
                    this.typeaheadLoading.emit(false);
                    this.typeaheadNoResults.emit(false);
                    this.hide();
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TypeaheadDirective.prototype.onChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this._container) {
                    // esc
                    /* tslint:disable-next-line: deprecation */
                    if (event.keyCode === 27 || event.key === 'Escape') {
                        this.hide();
                        return;
                    }
                    // up
                    /* tslint:disable-next-line: deprecation */
                    if (event.keyCode === 38 || event.key === 'ArrowUp') {
                        this._container.prevActiveMatch();
                        return;
                    }
                    // down
                    /* tslint:disable-next-line: deprecation */
                    if (event.keyCode === 40 || event.key === 'ArrowDown') {
                        this._container.nextActiveMatch();
                        return;
                    }
                    // enter, tab
                    /* tslint:disable-next-line: deprecation */
                    if (event.keyCode === 13 || event.key === 'Enter') {
                        this._container.selectActiveMatch();
                        return;
                    }
                }
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.onFocus = /**
         * @return {?}
         */
            function () {
                if (this.typeaheadMinLength === 0) {
                    this.typeaheadLoading.emit(true);
                    this.keyUpEventEmitter.emit(this.element.nativeElement.value || '');
                }
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.onBlur = /**
         * @return {?}
         */
            function () {
                if (this._container && !this._container.isFocused) {
                    this.typeaheadOnBlur.emit(this._container.active);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TypeaheadDirective.prototype.onKeydown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                // no container - no problems
                if (!this._container) {
                    return;
                }
                // if an item is visible - prevent form submission
                /* tslint:disable-next-line: deprecation */
                if (event.keyCode === 13 || event.key === 'Enter') {
                    event.preventDefault();
                    return;
                }
                // if an item is visible - don't change focus
                /* tslint:disable-next-line: deprecation */
                if (event.keyCode === 9 || event.key === 'Tab') {
                    event.preventDefault();
                    this._container.selectActiveMatch();
                    return;
                }
            };
        /**
         * @param {?} match
         * @return {?}
         */
        TypeaheadDirective.prototype.changeModel = /**
         * @param {?} match
         * @return {?}
         */
            function (match) {
                var /** @type {?} */ valueStr = match.value;
                this.ngControl.viewToModelUpdate(valueStr);
                (this.ngControl.control).setValue(valueStr);
                this.changeDetection.markForCheck();
                this.hide();
            };
        Object.defineProperty(TypeaheadDirective.prototype, "matches", {
            get: /**
             * @return {?}
             */ function () {
                return this._matches;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.show = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._typeahead
                    .attach(TypeaheadContainerComponent)
                    .to(this.container)
                    .position({ attachment: (this.dropup ? 'top' : 'bottom') + " left" })
                    .show({
                    typeaheadRef: this,
                    placement: this.placement,
                    animation: false,
                    dropup: this.dropup
                });
                this._outsideClickListener = this.renderer.listen('document', 'click', function (e) {
                    if (_this.typeaheadMinLength === 0 && _this.element.nativeElement.contains(e.target)) {
                        return undefined;
                    }
                    if (!_this.typeaheadHideResultsOnBlur || _this.element.nativeElement.contains(e.target)) {
                        return undefined;
                    }
                    _this.onOutsideClick();
                });
                this._container = this._typeahead.instance;
                this._container.parent = this;
                // This improves the speed as it won't have to be done for each list item
                var /** @type {?} */ normalizedQuery = (this.typeaheadLatinize
                    ? latinize(this.ngControl.control.value)
                    : this.ngControl.control.value)
                    .toString()
                    .toLowerCase();
                this._container.query = this.typeaheadSingleWords
                    ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                    : normalizedQuery;
                this._container.matches = this._matches;
                this.element.nativeElement.focus();
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.hide = /**
         * @return {?}
         */
            function () {
                if (this._typeahead.isShown) {
                    this._typeahead.hide();
                    this._outsideClickListener();
                    this._container = null;
                }
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.onOutsideClick = /**
         * @return {?}
         */
            function () {
                if (this._container && !this._container.isFocused) {
                    this.hide();
                }
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                try {
                    // clean up subscriptions
                    for (var _a = __values(this._subscriptions), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var sub = _b.value;
                        sub.unsubscribe();
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                this._typeahead.dispose();
                var e_1, _c;
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.asyncActions = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._subscriptions.push(this.keyUpEventEmitter
                    .pipe(operators.debounceTime(this.typeaheadWaitMs), operators.switchMap(function () { return _this.typeahead; }))
                    .subscribe(function (matches) {
                    _this.finalizeAsyncCall(matches);
                }));
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.syncActions = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._subscriptions.push(this.keyUpEventEmitter
                    .pipe(operators.debounceTime(this.typeaheadWaitMs), operators.mergeMap(function (value) {
                    var /** @type {?} */ normalizedQuery = _this.normalizeQuery(value);
                    return rxjs.from(_this.typeahead)
                        .pipe(operators.filter(function (option) {
                        return (option &&
                            _this.testMatch(_this.normalizeOption(option), normalizedQuery));
                    }), operators.toArray());
                }))
                    .subscribe(function (matches) {
                    _this.finalizeAsyncCall(matches);
                }));
            };
        // tslint:disable-next-line:no-any
        /**
         * @param {?} option
         * @return {?}
         */
        TypeaheadDirective.prototype.normalizeOption = /**
         * @param {?} option
         * @return {?}
         */
            function (option) {
                var /** @type {?} */ optionValue = getValueFromObject(option, this.typeaheadOptionField);
                var /** @type {?} */ normalizedOption = this.typeaheadLatinize
                    ? latinize(optionValue)
                    : optionValue;
                return normalizedOption.toLowerCase();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TypeaheadDirective.prototype.normalizeQuery = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                // If singleWords, break model here to not be doing extra work on each
                // iteration
                var /** @type {?} */ normalizedQuery = (this.typeaheadLatinize
                    ? latinize(value)
                    : value)
                    .toString()
                    .toLowerCase();
                normalizedQuery = this.typeaheadSingleWords
                    ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                    : normalizedQuery;
                return normalizedQuery;
            };
        /**
         * @param {?} match
         * @param {?} test
         * @return {?}
         */
        TypeaheadDirective.prototype.testMatch = /**
         * @param {?} match
         * @param {?} test
         * @return {?}
         */
            function (match, test) {
                var /** @type {?} */ spaceLength;
                if (typeof test === 'object') {
                    spaceLength = test.length;
                    for (var /** @type {?} */ i = 0; i < spaceLength; i += 1) {
                        if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                            return false;
                        }
                    }
                    return true;
                }
                return match.indexOf(test) >= 0;
            };
        /**
         * @param {?} matches
         * @return {?}
         */
        TypeaheadDirective.prototype.finalizeAsyncCall = /**
         * @param {?} matches
         * @return {?}
         */
            function (matches) {
                this.prepareMatches(matches || []);
                this.typeaheadLoading.emit(false);
                this.typeaheadNoResults.emit(!this.hasMatches());
                if (!this.hasMatches()) {
                    this.hide();
                    return;
                }
                if (this._container) {
                    // fix: remove usage of ngControl internals
                    var /** @type {?} */ _controlValue = (this.typeaheadLatinize
                        ? latinize(this.ngControl.control.value)
                        : this.ngControl.control.value) || '';
                    // This improves the speed as it won't have to be done for each list item
                    var /** @type {?} */ normalizedQuery = _controlValue.toString().toLowerCase();
                    this._container.query = this.typeaheadSingleWords
                        ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                        : normalizedQuery;
                    this._container.matches = this._matches;
                }
                else {
                    this.show();
                }
            };
        /**
         * @param {?} options
         * @return {?}
         */
        TypeaheadDirective.prototype.prepareMatches = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                var _this = this;
                var /** @type {?} */ limited = options.slice(0, this.typeaheadOptionsLimit);
                if (this.typeaheadGroupField) {
                    var /** @type {?} */ matches_1 = [];
                    // extract all group names
                    var /** @type {?} */ groups = limited
                        .map(function (option) {
                        return getValueFromObject(option, _this.typeaheadGroupField);
                    })
                        .filter(function (v, i, a) { return a.indexOf(v) === i; });
                    groups.forEach(function (group) {
                        // add group header to array of matches
                        // add group header to array of matches
                        matches_1.push(new TypeaheadMatch(group, group, true));
                        // add each item of group to array of matches
                        // add each item of group to array of matches
                        matches_1 = matches_1.concat(limited
                            .filter(
                        // tslint:disable-next-line:no-any
                        // tslint:disable-next-line:no-any
                        function (option) {
                            return getValueFromObject(option, _this.typeaheadGroupField) === group;
                        })
                            .map(
                        // tslint:disable-next-line:no-any
                        // tslint:disable-next-line:no-any
                        function (option) {
                            return new TypeaheadMatch(option, getValueFromObject(option, _this.typeaheadOptionField));
                        }));
                    });
                    this._matches = matches_1;
                }
                else {
                    this._matches = limited.map(
                    // tslint:disable-next-line:no-any
                    // tslint:disable-next-line:no-any
                    function (option) {
                        return new TypeaheadMatch(option, getValueFromObject(option, _this.typeaheadOptionField));
                    });
                }
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.hasMatches = /**
         * @return {?}
         */
            function () {
                return this._matches.length > 0;
            };
        TypeaheadDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[typeahead]', exportAs: 'bs-typeahead' },] }
        ];
        /** @nocollapse */
        TypeaheadDirective.ctorParameters = function () {
            return [
                { type: forms.NgControl, },
                { type: core.ElementRef, },
                { type: core.ViewContainerRef, },
                { type: core.Renderer2, },
                { type: TypeaheadConfig, },
                { type: componentLoader.ComponentLoaderFactory, },
                { type: core.ChangeDetectorRef, },
            ];
        };
        TypeaheadDirective.propDecorators = {
            "typeahead": [{ type: core.Input },],
            "typeaheadMinLength": [{ type: core.Input },],
            "typeaheadWaitMs": [{ type: core.Input },],
            "typeaheadOptionsLimit": [{ type: core.Input },],
            "typeaheadOptionField": [{ type: core.Input },],
            "typeaheadGroupField": [{ type: core.Input },],
            "typeaheadAsync": [{ type: core.Input },],
            "typeaheadLatinize": [{ type: core.Input },],
            "typeaheadSingleWords": [{ type: core.Input },],
            "typeaheadWordDelimiters": [{ type: core.Input },],
            "typeaheadPhraseDelimiters": [{ type: core.Input },],
            "typeaheadItemTemplate": [{ type: core.Input },],
            "optionsListTemplate": [{ type: core.Input },],
            "typeaheadScrollable": [{ type: core.Input },],
            "typeaheadOptionsInScrollableView": [{ type: core.Input },],
            "typeaheadHideResultsOnBlur": [{ type: core.Input },],
            "typeaheadLoading": [{ type: core.Output },],
            "typeaheadNoResults": [{ type: core.Output },],
            "typeaheadOnSelect": [{ type: core.Output },],
            "typeaheadOnBlur": [{ type: core.Output },],
            "container": [{ type: core.Input },],
            "dropup": [{ type: core.Input },],
            "onInput": [{ type: core.HostListener, args: ['input', ['$event'],] },],
            "onChange": [{ type: core.HostListener, args: ['keyup', ['$event'],] },],
            "onFocus": [{ type: core.HostListener, args: ['click',] }, { type: core.HostListener, args: ['focus',] },],
            "onBlur": [{ type: core.HostListener, args: ['blur',] },],
            "onKeydown": [{ type: core.HostListener, args: ['keydown', ['$event'],] },],
        };
        return TypeaheadDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TypeaheadModule = (function () {
        function TypeaheadModule() {
        }
        /**
         * @return {?}
         */
        TypeaheadModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: TypeaheadModule,
                    providers: [componentLoader.ComponentLoaderFactory, positioning.PositioningService, TypeaheadConfig]
                };
            };
        TypeaheadModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TypeaheadContainerComponent, TypeaheadDirective],
                        exports: [TypeaheadContainerComponent, TypeaheadDirective],
                        entryComponents: [TypeaheadContainerComponent]
                    },] }
        ];
        return TypeaheadModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.latinMap = latinMap;
    exports.TypeaheadOptions = TypeaheadOptions;
    exports.TypeaheadMatch = TypeaheadMatch;
    exports.escapeRegexp = escapeRegexp;
    exports.getValueFromObject = getValueFromObject;
    exports.tokenize = tokenize;
    exports.latinize = latinize;
    exports.TypeaheadContainerComponent = TypeaheadContainerComponent;
    exports.TypeaheadDirective = TypeaheadDirective;
    exports.TypeaheadModule = TypeaheadModule;
    exports.TypeaheadConfig = TypeaheadConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10eXBlYWhlYWQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC9sYXRpbi1tYXAudHMiLCJuZzovL25neC1ib290c3RyYXAvdHlwZWFoZWFkL3R5cGVhaGVhZC1vcHRpb25zLmNsYXNzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC90eXBlYWhlYWQtbWF0Y2guY2xhc3MudHMiLCJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC90eXBlYWhlYWQtdXRpbHMudHMiLCJuZzovL25neC1ib290c3RyYXAvdHlwZWFoZWFkL3R5cGVhaGVhZC1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC90eXBlYWhlYWQuY29uZmlnLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC90eXBlYWhlYWQuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC90eXBlYWhlYWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG5leHBvcnQgY29uc3QgbGF0aW5NYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gICAgJ8ODwoEnOiAnQScsXG4gICAgJ8OEwoInOiAnQScsXG4gICAgJ8OhwrrCric6ICdBJyxcbiAgICAnw6HCusK2JzogJ0EnLFxuICAgICfDocK6wrAnOiAnQScsXG4gICAgJ8OhwrrCsic6ICdBJyxcbiAgICAnw6HCusK0JzogJ0EnLFxuICAgICfDh8KNJzogJ0EnLFxuICAgICfDg8KCJzogJ0EnLFxuICAgICfDocK6wqQnOiAnQScsXG4gICAgJ8OhwrrCrCc6ICdBJyxcbiAgICAnw6HCusKmJzogJ0EnLFxuICAgICfDocK6wqgnOiAnQScsXG4gICAgJ8OhwrrCqic6ICdBJyxcbiAgICAnw4PChCc6ICdBJyxcbiAgICAnw4fCnic6ICdBJyxcbiAgICAnw4jCpic6ICdBJyxcbiAgICAnw4fCoCc6ICdBJyxcbiAgICAnw6HCusKgJzogJ0EnLFxuICAgICfDiMKAJzogJ0EnLFxuICAgICfDg8KAJzogJ0EnLFxuICAgICfDocK6wqInOiAnQScsXG4gICAgJ8OIwoInOiAnQScsXG4gICAgJ8OEwoAnOiAnQScsXG4gICAgJ8OEwoQnOiAnQScsXG4gICAgJ8ODwoUnOiAnQScsXG4gICAgJ8OHwronOiAnQScsXG4gICAgJ8OhwrjCgCc6ICdBJyxcbiAgICAnw4jCuic6ICdBJyxcbiAgICAnw4PCgyc6ICdBJyxcbiAgICAnw6rCnMKyJzogJ0FBJyxcbiAgICAnw4PChic6ICdBRScsXG4gICAgJ8OHwrwnOiAnQUUnLFxuICAgICfDh8KiJzogJ0FFJyxcbiAgICAnw6rCnMK0JzogJ0FPJyxcbiAgICAnw6rCnMK2JzogJ0FVJyxcbiAgICAnw6rCnMK4JzogJ0FWJyxcbiAgICAnw6rCnMK6JzogJ0FWJyxcbiAgICAnw6rCnMK8JzogJ0FZJyxcbiAgICAnw6HCuMKCJzogJ0InLFxuICAgICfDocK4woQnOiAnQicsXG4gICAgJ8OGwoEnOiAnQicsXG4gICAgJ8OhwrjChic6ICdCJyxcbiAgICAnw4nCgyc6ICdCJyxcbiAgICAnw4bCgic6ICdCJyxcbiAgICAnw4TChic6ICdDJyxcbiAgICAnw4TCjCc6ICdDJyxcbiAgICAnw4PChyc6ICdDJyxcbiAgICAnw6HCuMKIJzogJ0MnLFxuICAgICfDhMKIJzogJ0MnLFxuICAgICfDhMKKJzogJ0MnLFxuICAgICfDhsKHJzogJ0MnLFxuICAgICfDiMK7JzogJ0MnLFxuICAgICfDhMKOJzogJ0QnLFxuICAgICfDocK4wpAnOiAnRCcsXG4gICAgJ8OhwrjCkic6ICdEJyxcbiAgICAnw6HCuMKKJzogJ0QnLFxuICAgICfDocK4wownOiAnRCcsXG4gICAgJ8OGwoonOiAnRCcsXG4gICAgJ8OhwrjCjic6ICdEJyxcbiAgICAnw4fCsic6ICdEJyxcbiAgICAnw4fChSc6ICdEJyxcbiAgICAnw4TCkCc6ICdEJyxcbiAgICAnw4bCiyc6ICdEJyxcbiAgICAnw4fCsSc6ICdEWicsXG4gICAgJ8OHwoQnOiAnRFonLFxuICAgICfDg8KJJzogJ0UnLFxuICAgICfDhMKUJzogJ0UnLFxuICAgICfDhMKaJzogJ0UnLFxuICAgICfDiMKoJzogJ0UnLFxuICAgICfDocK4wpwnOiAnRScsXG4gICAgJ8ODwoonOiAnRScsXG4gICAgJ8OhwrrCvic6ICdFJyxcbiAgICAnw6HCu8KGJzogJ0UnLFxuICAgICfDocK7woAnOiAnRScsXG4gICAgJ8OhwrvCgic6ICdFJyxcbiAgICAnw6HCu8KEJzogJ0UnLFxuICAgICfDocK4wpgnOiAnRScsXG4gICAgJ8ODwosnOiAnRScsXG4gICAgJ8OEwpYnOiAnRScsXG4gICAgJ8OhwrrCuCc6ICdFJyxcbiAgICAnw4jChCc6ICdFJyxcbiAgICAnw4PCiCc6ICdFJyxcbiAgICAnw6HCusK6JzogJ0UnLFxuICAgICfDiMKGJzogJ0UnLFxuICAgICfDhMKSJzogJ0UnLFxuICAgICfDocK4wpYnOiAnRScsXG4gICAgJ8OhwrjClCc6ICdFJyxcbiAgICAnw4TCmCc6ICdFJyxcbiAgICAnw4nChic6ICdFJyxcbiAgICAnw6HCusK8JzogJ0UnLFxuICAgICfDocK4wponOiAnRScsXG4gICAgJ8Oqwp3Cqic6ICdFVCcsXG4gICAgJ8OhwrjCnic6ICdGJyxcbiAgICAnw4bCkSc6ICdGJyxcbiAgICAnw4fCtCc6ICdHJyxcbiAgICAnw4TCnic6ICdHJyxcbiAgICAnw4fCpic6ICdHJyxcbiAgICAnw4TCoic6ICdHJyxcbiAgICAnw4TCnCc6ICdHJyxcbiAgICAnw4TCoCc6ICdHJyxcbiAgICAnw4bCkyc6ICdHJyxcbiAgICAnw6HCuMKgJzogJ0cnLFxuICAgICfDh8KkJzogJ0cnLFxuICAgICfDocK4wqonOiAnSCcsXG4gICAgJ8OIwp4nOiAnSCcsXG4gICAgJ8OhwrjCqCc6ICdIJyxcbiAgICAnw4TCpCc6ICdIJyxcbiAgICAnw6LCscKnJzogJ0gnLFxuICAgICfDocK4wqYnOiAnSCcsXG4gICAgJ8OhwrjCoic6ICdIJyxcbiAgICAnw6HCuMKkJzogJ0gnLFxuICAgICfDhMKmJzogJ0gnLFxuICAgICfDg8KNJzogJ0knLFxuICAgICfDhMKsJzogJ0knLFxuICAgICfDh8KPJzogJ0knLFxuICAgICfDg8KOJzogJ0knLFxuICAgICfDg8KPJzogJ0knLFxuICAgICfDocK4wq4nOiAnSScsXG4gICAgJ8OEwrAnOiAnSScsXG4gICAgJ8OhwrvCiic6ICdJJyxcbiAgICAnw4jCiCc6ICdJJyxcbiAgICAnw4PCjCc6ICdJJyxcbiAgICAnw6HCu8KIJzogJ0knLFxuICAgICfDiMKKJzogJ0knLFxuICAgICfDhMKqJzogJ0knLFxuICAgICfDhMKuJzogJ0knLFxuICAgICfDhsKXJzogJ0knLFxuICAgICfDhMKoJzogJ0knLFxuICAgICfDocK4wqwnOiAnSScsXG4gICAgJ8Oqwp3CuSc6ICdEJyxcbiAgICAnw6rCncK7JzogJ0YnLFxuICAgICfDqsKdwr0nOiAnRycsXG4gICAgJ8Oqwp7Cgic6ICdSJyxcbiAgICAnw6rCnsKEJzogJ1MnLFxuICAgICfDqsKewoYnOiAnVCcsXG4gICAgJ8Oqwp3CrCc6ICdJUycsXG4gICAgJ8OEwrQnOiAnSicsXG4gICAgJ8OJwognOiAnSicsXG4gICAgJ8OhwrjCsCc6ICdLJyxcbiAgICAnw4fCqCc6ICdLJyxcbiAgICAnw4TCtic6ICdLJyxcbiAgICAnw6LCscKpJzogJ0snLFxuICAgICfDqsKdwoInOiAnSycsXG4gICAgJ8OhwrjCsic6ICdLJyxcbiAgICAnw4bCmCc6ICdLJyxcbiAgICAnw6HCuMK0JzogJ0snLFxuICAgICfDqsKdwoAnOiAnSycsXG4gICAgJ8Oqwp3ChCc6ICdLJyxcbiAgICAnw4TCuSc6ICdMJyxcbiAgICAnw4jCvSc6ICdMJyxcbiAgICAnw4TCvSc6ICdMJyxcbiAgICAnw4TCuyc6ICdMJyxcbiAgICAnw6HCuMK8JzogJ0wnLFxuICAgICfDocK4wrYnOiAnTCcsXG4gICAgJ8OhwrjCuCc6ICdMJyxcbiAgICAnw6LCscKgJzogJ0wnLFxuICAgICfDqsKdwognOiAnTCcsXG4gICAgJ8OhwrjCuic6ICdMJyxcbiAgICAnw4TCvyc6ICdMJyxcbiAgICAnw6LCscKiJzogJ0wnLFxuICAgICfDh8KIJzogJ0wnLFxuICAgICfDhcKBJzogJ0wnLFxuICAgICfDh8KHJzogJ0xKJyxcbiAgICAnw6HCuMK+JzogJ00nLFxuICAgICfDocK5woAnOiAnTScsXG4gICAgJ8OhwrnCgic6ICdNJyxcbiAgICAnw6LCscKuJzogJ00nLFxuICAgICfDhcKDJzogJ04nLFxuICAgICfDhcKHJzogJ04nLFxuICAgICfDhcKFJzogJ04nLFxuICAgICfDocK5woonOiAnTicsXG4gICAgJ8OhwrnChCc6ICdOJyxcbiAgICAnw6HCucKGJzogJ04nLFxuICAgICfDh8K4JzogJ04nLFxuICAgICfDhsKdJzogJ04nLFxuICAgICfDocK5wognOiAnTicsXG4gICAgJ8OIwqAnOiAnTicsXG4gICAgJ8OHwosnOiAnTicsXG4gICAgJ8ODwpEnOiAnTicsXG4gICAgJ8OHwoonOiAnTkonLFxuICAgICfDg8KTJzogJ08nLFxuICAgICfDhcKOJzogJ08nLFxuICAgICfDh8KRJzogJ08nLFxuICAgICfDg8KUJzogJ08nLFxuICAgICfDocK7wpAnOiAnTycsXG4gICAgJ8OhwrvCmCc6ICdPJyxcbiAgICAnw6HCu8KSJzogJ08nLFxuICAgICfDocK7wpQnOiAnTycsXG4gICAgJ8OhwrvClic6ICdPJyxcbiAgICAnw4PClic6ICdPJyxcbiAgICAnw4jCqic6ICdPJyxcbiAgICAnw4jCric6ICdPJyxcbiAgICAnw4jCsCc6ICdPJyxcbiAgICAnw6HCu8KMJzogJ08nLFxuICAgICfDhcKQJzogJ08nLFxuICAgICfDiMKMJzogJ08nLFxuICAgICfDg8KSJzogJ08nLFxuICAgICfDocK7wo4nOiAnTycsXG4gICAgJ8OGwqAnOiAnTycsXG4gICAgJ8OhwrvCmic6ICdPJyxcbiAgICAnw6HCu8KiJzogJ08nLFxuICAgICfDocK7wpwnOiAnTycsXG4gICAgJ8OhwrvCnic6ICdPJyxcbiAgICAnw6HCu8KgJzogJ08nLFxuICAgICfDiMKOJzogJ08nLFxuICAgICfDqsKdwoonOiAnTycsXG4gICAgJ8Oqwp3CjCc6ICdPJyxcbiAgICAnw4XCjCc6ICdPJyxcbiAgICAnw6HCucKSJzogJ08nLFxuICAgICfDocK5wpAnOiAnTycsXG4gICAgJ8OGwp8nOiAnTycsXG4gICAgJ8OHwqonOiAnTycsXG4gICAgJ8OHwqwnOiAnTycsXG4gICAgJ8ODwpgnOiAnTycsXG4gICAgJ8OHwr4nOiAnTycsXG4gICAgJ8ODwpUnOiAnTycsXG4gICAgJ8OhwrnCjCc6ICdPJyxcbiAgICAnw6HCucKOJzogJ08nLFxuICAgICfDiMKsJzogJ08nLFxuICAgICfDhsKiJzogJ09JJyxcbiAgICAnw6rCncKOJzogJ09PJyxcbiAgICAnw4bCkCc6ICdFJyxcbiAgICAnw4bChic6ICdPJyxcbiAgICAnw4jCoic6ICdPVScsXG4gICAgJ8OhwrnClCc6ICdQJyxcbiAgICAnw6HCucKWJzogJ1AnLFxuICAgICfDqsKdwpInOiAnUCcsXG4gICAgJ8OGwqQnOiAnUCcsXG4gICAgJ8Oqwp3ClCc6ICdQJyxcbiAgICAnw6LCscKjJzogJ1AnLFxuICAgICfDqsKdwpAnOiAnUCcsXG4gICAgJ8Oqwp3CmCc6ICdRJyxcbiAgICAnw6rCncKWJzogJ1EnLFxuICAgICfDhcKUJzogJ1InLFxuICAgICfDhcKYJzogJ1InLFxuICAgICfDhcKWJzogJ1InLFxuICAgICfDocK5wpgnOiAnUicsXG4gICAgJ8OhwrnCmic6ICdSJyxcbiAgICAnw6HCucKcJzogJ1InLFxuICAgICfDiMKQJzogJ1InLFxuICAgICfDiMKSJzogJ1InLFxuICAgICfDocK5wp4nOiAnUicsXG4gICAgJ8OJwownOiAnUicsXG4gICAgJ8OiwrHCpCc6ICdSJyxcbiAgICAnw6rCnMK+JzogJ0MnLFxuICAgICfDhsKOJzogJ0UnLFxuICAgICfDhcKaJzogJ1MnLFxuICAgICfDocK5wqQnOiAnUycsXG4gICAgJ8OFwqAnOiAnUycsXG4gICAgJ8OhwrnCpic6ICdTJyxcbiAgICAnw4XCnic6ICdTJyxcbiAgICAnw4XCnCc6ICdTJyxcbiAgICAnw4jCmCc6ICdTJyxcbiAgICAnw6HCucKgJzogJ1MnLFxuICAgICfDocK5wqInOiAnUycsXG4gICAgJ8OhwrnCqCc6ICdTJyxcbiAgICAnw4XCpCc6ICdUJyxcbiAgICAnw4XCoic6ICdUJyxcbiAgICAnw6HCucKwJzogJ1QnLFxuICAgICfDiMKaJzogJ1QnLFxuICAgICfDiMK+JzogJ1QnLFxuICAgICfDocK5wqonOiAnVCcsXG4gICAgJ8OhwrnCrCc6ICdUJyxcbiAgICAnw4bCrCc6ICdUJyxcbiAgICAnw6HCucKuJzogJ1QnLFxuICAgICfDhsKuJzogJ1QnLFxuICAgICfDhcKmJzogJ1QnLFxuICAgICfDosKxwq8nOiAnQScsXG4gICAgJ8Oqwp7CgCc6ICdMJyxcbiAgICAnw4bCnCc6ICdNJyxcbiAgICAnw4nChSc6ICdWJyxcbiAgICAnw6rCnMKoJzogJ1RaJyxcbiAgICAnw4PCmic6ICdVJyxcbiAgICAnw4XCrCc6ICdVJyxcbiAgICAnw4fCkyc6ICdVJyxcbiAgICAnw4PCmyc6ICdVJyxcbiAgICAnw6HCucK2JzogJ1UnLFxuICAgICfDg8KcJzogJ1UnLFxuICAgICfDh8KXJzogJ1UnLFxuICAgICfDh8KZJzogJ1UnLFxuICAgICfDh8KbJzogJ1UnLFxuICAgICfDh8KVJzogJ1UnLFxuICAgICfDocK5wrInOiAnVScsXG4gICAgJ8OhwrvCpCc6ICdVJyxcbiAgICAnw4XCsCc6ICdVJyxcbiAgICAnw4jClCc6ICdVJyxcbiAgICAnw4PCmSc6ICdVJyxcbiAgICAnw6HCu8KmJzogJ1UnLFxuICAgICfDhsKvJzogJ1UnLFxuICAgICfDocK7wqgnOiAnVScsXG4gICAgJ8OhwrvCsCc6ICdVJyxcbiAgICAnw6HCu8KqJzogJ1UnLFxuICAgICfDocK7wqwnOiAnVScsXG4gICAgJ8OhwrvCric6ICdVJyxcbiAgICAnw4jClic6ICdVJyxcbiAgICAnw4XCqic6ICdVJyxcbiAgICAnw6HCucK6JzogJ1UnLFxuICAgICfDhcKyJzogJ1UnLFxuICAgICfDhcKuJzogJ1UnLFxuICAgICfDhcKoJzogJ1UnLFxuICAgICfDocK5wrgnOiAnVScsXG4gICAgJ8OhwrnCtCc6ICdVJyxcbiAgICAnw6rCncKeJzogJ1YnLFxuICAgICfDocK5wr4nOiAnVicsXG4gICAgJ8OGwrInOiAnVicsXG4gICAgJ8OhwrnCvCc6ICdWJyxcbiAgICAnw6rCncKgJzogJ1ZZJyxcbiAgICAnw6HCusKCJzogJ1cnLFxuICAgICfDhcK0JzogJ1cnLFxuICAgICfDocK6woQnOiAnVycsXG4gICAgJ8OhwrrChic6ICdXJyxcbiAgICAnw6HCusKIJzogJ1cnLFxuICAgICfDocK6woAnOiAnVycsXG4gICAgJ8OiwrHCsic6ICdXJyxcbiAgICAnw6HCusKMJzogJ1gnLFxuICAgICfDocK6woonOiAnWCcsXG4gICAgJ8ODwp0nOiAnWScsXG4gICAgJ8OFwrYnOiAnWScsXG4gICAgJ8OFwrgnOiAnWScsXG4gICAgJ8OhwrrCjic6ICdZJyxcbiAgICAnw6HCu8K0JzogJ1knLFxuICAgICfDocK7wrInOiAnWScsXG4gICAgJ8OGwrMnOiAnWScsXG4gICAgJ8OhwrvCtic6ICdZJyxcbiAgICAnw6HCu8K+JzogJ1knLFxuICAgICfDiMKyJzogJ1knLFxuICAgICfDicKOJzogJ1knLFxuICAgICfDocK7wrgnOiAnWScsXG4gICAgJ8OFwrknOiAnWicsXG4gICAgJ8OFwr0nOiAnWicsXG4gICAgJ8OhwrrCkCc6ICdaJyxcbiAgICAnw6LCscKrJzogJ1onLFxuICAgICfDhcK7JzogJ1onLFxuICAgICfDocK6wpInOiAnWicsXG4gICAgJ8OIwqQnOiAnWicsXG4gICAgJ8OhwrrClCc6ICdaJyxcbiAgICAnw4bCtSc6ICdaJyxcbiAgICAnw4TCsic6ICdJSicsXG4gICAgJ8OFwpInOiAnT0UnLFxuICAgICfDocK0woAnOiAnQScsXG4gICAgJ8OhwrTCgSc6ICdBRScsXG4gICAgJ8OKwpknOiAnQicsXG4gICAgJ8OhwrTCgyc6ICdCJyxcbiAgICAnw6HCtMKEJzogJ0MnLFxuICAgICfDocK0woUnOiAnRCcsXG4gICAgJ8OhwrTChyc6ICdFJyxcbiAgICAnw6rCnMKwJzogJ0YnLFxuICAgICfDicKiJzogJ0cnLFxuICAgICfDisKbJzogJ0cnLFxuICAgICfDisKcJzogJ0gnLFxuICAgICfDicKqJzogJ0knLFxuICAgICfDisKBJzogJ1InLFxuICAgICfDocK0woonOiAnSicsXG4gICAgJ8OhwrTCiyc6ICdLJyxcbiAgICAnw4rCnyc6ICdMJyxcbiAgICAnw6HCtMKMJzogJ0wnLFxuICAgICfDocK0wo0nOiAnTScsXG4gICAgJ8OJwrQnOiAnTicsXG4gICAgJ8OhwrTCjyc6ICdPJyxcbiAgICAnw4nCtic6ICdPRScsXG4gICAgJ8OhwrTCkCc6ICdPJyxcbiAgICAnw6HCtMKVJzogJ09VJyxcbiAgICAnw6HCtMKYJzogJ1AnLFxuICAgICfDisKAJzogJ1InLFxuICAgICfDocK0wo4nOiAnTicsXG4gICAgJ8OhwrTCmSc6ICdSJyxcbiAgICAnw6rCnMKxJzogJ1MnLFxuICAgICfDocK0wpsnOiAnVCcsXG4gICAgJ8OiwrHCuyc6ICdFJyxcbiAgICAnw6HCtMKaJzogJ1InLFxuICAgICfDocK0wpwnOiAnVScsXG4gICAgJ8OhwrTCoCc6ICdWJyxcbiAgICAnw6HCtMKhJzogJ1cnLFxuICAgICfDisKPJzogJ1knLFxuICAgICfDocK0wqInOiAnWicsXG4gICAgJ8ODwqEnOiAnYScsXG4gICAgJ8OEwoMnOiAnYScsXG4gICAgJ8OhwrrCryc6ICdhJyxcbiAgICAnw6HCusK3JzogJ2EnLFxuICAgICfDocK6wrEnOiAnYScsXG4gICAgJ8OhwrrCsyc6ICdhJyxcbiAgICAnw6HCusK1JzogJ2EnLFxuICAgICfDh8KOJzogJ2EnLFxuICAgICfDg8KiJzogJ2EnLFxuICAgICfDocK6wqUnOiAnYScsXG4gICAgJ8OhwrrCrSc6ICdhJyxcbiAgICAnw6HCusKnJzogJ2EnLFxuICAgICfDocK6wqknOiAnYScsXG4gICAgJ8OhwrrCqyc6ICdhJyxcbiAgICAnw4PCpCc6ICdhJyxcbiAgICAnw4fCnyc6ICdhJyxcbiAgICAnw4jCpyc6ICdhJyxcbiAgICAnw4fCoSc6ICdhJyxcbiAgICAnw6HCusKhJzogJ2EnLFxuICAgICfDiMKBJzogJ2EnLFxuICAgICfDg8KgJzogJ2EnLFxuICAgICfDocK6wqMnOiAnYScsXG4gICAgJ8OIwoMnOiAnYScsXG4gICAgJ8OEwoEnOiAnYScsXG4gICAgJ8OEwoUnOiAnYScsXG4gICAgJ8OhwrbCjyc6ICdhJyxcbiAgICAnw6HCusKaJzogJ2EnLFxuICAgICfDg8KlJzogJ2EnLFxuICAgICfDh8K7JzogJ2EnLFxuICAgICfDocK4woEnOiAnYScsXG4gICAgJ8OiwrHCpSc6ICdhJyxcbiAgICAnw4PCoyc6ICdhJyxcbiAgICAnw6rCnMKzJzogJ2FhJyxcbiAgICAnw4PCpic6ICdhZScsXG4gICAgJ8OHwr0nOiAnYWUnLFxuICAgICfDh8KjJzogJ2FlJyxcbiAgICAnw6rCnMK1JzogJ2FvJyxcbiAgICAnw6rCnMK3JzogJ2F1JyxcbiAgICAnw6rCnMK5JzogJ2F2JyxcbiAgICAnw6rCnMK7JzogJ2F2JyxcbiAgICAnw6rCnMK9JzogJ2F5JyxcbiAgICAnw6HCuMKDJzogJ2InLFxuICAgICfDocK4woUnOiAnYicsXG4gICAgJ8OJwpMnOiAnYicsXG4gICAgJ8OhwrjChyc6ICdiJyxcbiAgICAnw6HCtcKsJzogJ2InLFxuICAgICfDocK2woAnOiAnYicsXG4gICAgJ8OGwoAnOiAnYicsXG4gICAgJ8OGwoMnOiAnYicsXG4gICAgJ8OJwrUnOiAnbycsXG4gICAgJ8OEwocnOiAnYycsXG4gICAgJ8OEwo0nOiAnYycsXG4gICAgJ8ODwqcnOiAnYycsXG4gICAgJ8OhwrjCiSc6ICdjJyxcbiAgICAnw4TCiSc6ICdjJyxcbiAgICAnw4nClSc6ICdjJyxcbiAgICAnw4TCiyc6ICdjJyxcbiAgICAnw4bCiCc6ICdjJyxcbiAgICAnw4jCvCc6ICdjJyxcbiAgICAnw4TCjyc6ICdkJyxcbiAgICAnw6HCuMKRJzogJ2QnLFxuICAgICfDocK4wpMnOiAnZCcsXG4gICAgJ8OIwqEnOiAnZCcsXG4gICAgJ8OhwrjCiyc6ICdkJyxcbiAgICAnw6HCuMKNJzogJ2QnLFxuICAgICfDicKXJzogJ2QnLFxuICAgICfDocK2wpEnOiAnZCcsXG4gICAgJ8OhwrjCjyc6ICdkJyxcbiAgICAnw6HCtcKtJzogJ2QnLFxuICAgICfDocK2woEnOiAnZCcsXG4gICAgJ8OEwpEnOiAnZCcsXG4gICAgJ8OJwpYnOiAnZCcsXG4gICAgJ8OGwownOiAnZCcsXG4gICAgJ8OEwrEnOiAnaScsXG4gICAgJ8OIwrcnOiAnaicsXG4gICAgJ8OJwp8nOiAnaicsXG4gICAgJ8OKwoQnOiAnaicsXG4gICAgJ8OHwrMnOiAnZHonLFxuICAgICfDh8KGJzogJ2R6JyxcbiAgICAnw4PCqSc6ICdlJyxcbiAgICAnw4TClSc6ICdlJyxcbiAgICAnw4TCmyc6ICdlJyxcbiAgICAnw4jCqSc6ICdlJyxcbiAgICAnw6HCuMKdJzogJ2UnLFxuICAgICfDg8KqJzogJ2UnLFxuICAgICfDocK6wr8nOiAnZScsXG4gICAgJ8OhwrvChyc6ICdlJyxcbiAgICAnw6HCu8KBJzogJ2UnLFxuICAgICfDocK7woMnOiAnZScsXG4gICAgJ8OhwrvChSc6ICdlJyxcbiAgICAnw6HCuMKZJzogJ2UnLFxuICAgICfDg8KrJzogJ2UnLFxuICAgICfDhMKXJzogJ2UnLFxuICAgICfDocK6wrknOiAnZScsXG4gICAgJ8OIwoUnOiAnZScsXG4gICAgJ8ODwqgnOiAnZScsXG4gICAgJ8OhwrrCuyc6ICdlJyxcbiAgICAnw4jChyc6ICdlJyxcbiAgICAnw4TCkyc6ICdlJyxcbiAgICAnw6HCuMKXJzogJ2UnLFxuICAgICfDocK4wpUnOiAnZScsXG4gICAgJ8OiwrHCuCc6ICdlJyxcbiAgICAnw4TCmSc6ICdlJyxcbiAgICAnw6HCtsKSJzogJ2UnLFxuICAgICfDicKHJzogJ2UnLFxuICAgICfDocK6wr0nOiAnZScsXG4gICAgJ8OhwrjCmyc6ICdlJyxcbiAgICAnw6rCncKrJzogJ2V0JyxcbiAgICAnw6HCuMKfJzogJ2YnLFxuICAgICfDhsKSJzogJ2YnLFxuICAgICfDocK1wq4nOiAnZicsXG4gICAgJ8OhwrbCgic6ICdmJyxcbiAgICAnw4fCtSc6ICdnJyxcbiAgICAnw4TCnyc6ICdnJyxcbiAgICAnw4fCpyc6ICdnJyxcbiAgICAnw4TCoyc6ICdnJyxcbiAgICAnw4TCnSc6ICdnJyxcbiAgICAnw4TCoSc6ICdnJyxcbiAgICAnw4nCoCc6ICdnJyxcbiAgICAnw6HCuMKhJzogJ2cnLFxuICAgICfDocK2woMnOiAnZycsXG4gICAgJ8OHwqUnOiAnZycsXG4gICAgJ8OhwrjCqyc6ICdoJyxcbiAgICAnw4jCnyc6ICdoJyxcbiAgICAnw6HCuMKpJzogJ2gnLFxuICAgICfDhMKlJzogJ2gnLFxuICAgICfDosKxwqgnOiAnaCcsXG4gICAgJ8OhwrjCpyc6ICdoJyxcbiAgICAnw6HCuMKjJzogJ2gnLFxuICAgICfDocK4wqUnOiAnaCcsXG4gICAgJ8OJwqYnOiAnaCcsXG4gICAgJ8OhwrrClic6ICdoJyxcbiAgICAnw4TCpyc6ICdoJyxcbiAgICAnw4bClSc6ICdodicsXG4gICAgJ8ODwq0nOiAnaScsXG4gICAgJ8OEwq0nOiAnaScsXG4gICAgJ8OHwpAnOiAnaScsXG4gICAgJ8ODwq4nOiAnaScsXG4gICAgJ8ODwq8nOiAnaScsXG4gICAgJ8OhwrjCryc6ICdpJyxcbiAgICAnw6HCu8KLJzogJ2knLFxuICAgICfDiMKJJzogJ2knLFxuICAgICfDg8KsJzogJ2knLFxuICAgICfDocK7woknOiAnaScsXG4gICAgJ8OIwosnOiAnaScsXG4gICAgJ8OEwqsnOiAnaScsXG4gICAgJ8OEwq8nOiAnaScsXG4gICAgJ8OhwrbClic6ICdpJyxcbiAgICAnw4nCqCc6ICdpJyxcbiAgICAnw4TCqSc6ICdpJyxcbiAgICAnw6HCuMKtJzogJ2knLFxuICAgICfDqsKdwronOiAnZCcsXG4gICAgJ8Oqwp3CvCc6ICdmJyxcbiAgICAnw6HCtcK5JzogJ2cnLFxuICAgICfDqsKewoMnOiAncicsXG4gICAgJ8Oqwp7ChSc6ICdzJyxcbiAgICAnw6rCnsKHJzogJ3QnLFxuICAgICfDqsKdwq0nOiAnaXMnLFxuICAgICfDh8KwJzogJ2onLFxuICAgICfDhMK1JzogJ2onLFxuICAgICfDisKdJzogJ2onLFxuICAgICfDicKJJzogJ2onLFxuICAgICfDocK4wrEnOiAnaycsXG4gICAgJ8OHwqknOiAnaycsXG4gICAgJ8OEwrcnOiAnaycsXG4gICAgJ8OiwrHCqic6ICdrJyxcbiAgICAnw6rCncKDJzogJ2snLFxuICAgICfDocK4wrMnOiAnaycsXG4gICAgJ8OGwpknOiAnaycsXG4gICAgJ8OhwrjCtSc6ICdrJyxcbiAgICAnw6HCtsKEJzogJ2snLFxuICAgICfDqsKdwoEnOiAnaycsXG4gICAgJ8Oqwp3ChSc6ICdrJyxcbiAgICAnw4TCuic6ICdsJyxcbiAgICAnw4bCmic6ICdsJyxcbiAgICAnw4nCrCc6ICdsJyxcbiAgICAnw4TCvic6ICdsJyxcbiAgICAnw4TCvCc6ICdsJyxcbiAgICAnw6HCuMK9JzogJ2wnLFxuICAgICfDiMK0JzogJ2wnLFxuICAgICfDocK4wrcnOiAnbCcsXG4gICAgJ8OhwrjCuSc6ICdsJyxcbiAgICAnw6LCscKhJzogJ2wnLFxuICAgICfDqsKdwoknOiAnbCcsXG4gICAgJ8OhwrjCuyc6ICdsJyxcbiAgICAnw4XCgCc6ICdsJyxcbiAgICAnw4nCqyc6ICdsJyxcbiAgICAnw6HCtsKFJzogJ2wnLFxuICAgICfDicKtJzogJ2wnLFxuICAgICfDhcKCJzogJ2wnLFxuICAgICfDh8KJJzogJ2xqJyxcbiAgICAnw4XCvyc6ICdzJyxcbiAgICAnw6HCusKcJzogJ3MnLFxuICAgICfDocK6wpsnOiAncycsXG4gICAgJ8OhwrrCnSc6ICdzJyxcbiAgICAnw6HCuMK/JzogJ20nLFxuICAgICfDocK5woEnOiAnbScsXG4gICAgJ8OhwrnCgyc6ICdtJyxcbiAgICAnw4nCsSc6ICdtJyxcbiAgICAnw6HCtcKvJzogJ20nLFxuICAgICfDocK2woYnOiAnbScsXG4gICAgJ8OFwoQnOiAnbicsXG4gICAgJ8OFwognOiAnbicsXG4gICAgJ8OFwoYnOiAnbicsXG4gICAgJ8OhwrnCiyc6ICduJyxcbiAgICAnw4jCtSc6ICduJyxcbiAgICAnw6HCucKFJzogJ24nLFxuICAgICfDocK5wocnOiAnbicsXG4gICAgJ8OHwrknOiAnbicsXG4gICAgJ8OJwrInOiAnbicsXG4gICAgJ8OhwrnCiSc6ICduJyxcbiAgICAnw4bCnic6ICduJyxcbiAgICAnw6HCtcKwJzogJ24nLFxuICAgICfDocK2wocnOiAnbicsXG4gICAgJ8OJwrMnOiAnbicsXG4gICAgJ8ODwrEnOiAnbicsXG4gICAgJ8OHwownOiAnbmonLFxuICAgICfDg8KzJzogJ28nLFxuICAgICfDhcKPJzogJ28nLFxuICAgICfDh8KSJzogJ28nLFxuICAgICfDg8K0JzogJ28nLFxuICAgICfDocK7wpEnOiAnbycsXG4gICAgJ8OhwrvCmSc6ICdvJyxcbiAgICAnw6HCu8KTJzogJ28nLFxuICAgICfDocK7wpUnOiAnbycsXG4gICAgJ8OhwrvClyc6ICdvJyxcbiAgICAnw4PCtic6ICdvJyxcbiAgICAnw4jCqyc6ICdvJyxcbiAgICAnw4jCryc6ICdvJyxcbiAgICAnw4jCsSc6ICdvJyxcbiAgICAnw6HCu8KNJzogJ28nLFxuICAgICfDhcKRJzogJ28nLFxuICAgICfDiMKNJzogJ28nLFxuICAgICfDg8KyJzogJ28nLFxuICAgICfDocK7wo8nOiAnbycsXG4gICAgJ8OGwqEnOiAnbycsXG4gICAgJ8OhwrvCmyc6ICdvJyxcbiAgICAnw6HCu8KjJzogJ28nLFxuICAgICfDocK7wp0nOiAnbycsXG4gICAgJ8OhwrvCnyc6ICdvJyxcbiAgICAnw6HCu8KhJzogJ28nLFxuICAgICfDiMKPJzogJ28nLFxuICAgICfDqsKdwosnOiAnbycsXG4gICAgJ8Oqwp3CjSc6ICdvJyxcbiAgICAnw6LCscK6JzogJ28nLFxuICAgICfDhcKNJzogJ28nLFxuICAgICfDocK5wpMnOiAnbycsXG4gICAgJ8OhwrnCkSc6ICdvJyxcbiAgICAnw4fCqyc6ICdvJyxcbiAgICAnw4fCrSc6ICdvJyxcbiAgICAnw4PCuCc6ICdvJyxcbiAgICAnw4fCvyc6ICdvJyxcbiAgICAnw4PCtSc6ICdvJyxcbiAgICAnw6HCucKNJzogJ28nLFxuICAgICfDocK5wo8nOiAnbycsXG4gICAgJ8OIwq0nOiAnbycsXG4gICAgJ8OGwqMnOiAnb2knLFxuICAgICfDqsKdwo8nOiAnb28nLFxuICAgICfDicKbJzogJ2UnLFxuICAgICfDocK2wpMnOiAnZScsXG4gICAgJ8OJwpQnOiAnbycsXG4gICAgJ8OhwrbClyc6ICdvJyxcbiAgICAnw4jCoyc6ICdvdScsXG4gICAgJ8OhwrnClSc6ICdwJyxcbiAgICAnw6HCucKXJzogJ3AnLFxuICAgICfDqsKdwpMnOiAncCcsXG4gICAgJ8OGwqUnOiAncCcsXG4gICAgJ8OhwrXCsSc6ICdwJyxcbiAgICAnw6HCtsKIJzogJ3AnLFxuICAgICfDqsKdwpUnOiAncCcsXG4gICAgJ8OhwrXCvSc6ICdwJyxcbiAgICAnw6rCncKRJzogJ3AnLFxuICAgICfDqsKdwpknOiAncScsXG4gICAgJ8OKwqAnOiAncScsXG4gICAgJ8OJwosnOiAncScsXG4gICAgJ8Oqwp3Clyc6ICdxJyxcbiAgICAnw4XClSc6ICdyJyxcbiAgICAnw4XCmSc6ICdyJyxcbiAgICAnw4XClyc6ICdyJyxcbiAgICAnw6HCucKZJzogJ3InLFxuICAgICfDocK5wpsnOiAncicsXG4gICAgJ8OhwrnCnSc6ICdyJyxcbiAgICAnw4jCkSc6ICdyJyxcbiAgICAnw4nCvic6ICdyJyxcbiAgICAnw6HCtcKzJzogJ3InLFxuICAgICfDiMKTJzogJ3InLFxuICAgICfDocK5wp8nOiAncicsXG4gICAgJ8OJwrwnOiAncicsXG4gICAgJ8OhwrXCsic6ICdyJyxcbiAgICAnw6HCtsKJJzogJ3InLFxuICAgICfDicKNJzogJ3InLFxuICAgICfDicK9JzogJ3InLFxuICAgICfDosKGwoQnOiAnYycsXG4gICAgJ8OqwpzCvyc6ICdjJyxcbiAgICAnw4nCmCc6ICdlJyxcbiAgICAnw4nCvyc6ICdyJyxcbiAgICAnw4XCmyc6ICdzJyxcbiAgICAnw6HCucKlJzogJ3MnLFxuICAgICfDhcKhJzogJ3MnLFxuICAgICfDocK5wqcnOiAncycsXG4gICAgJ8OFwp8nOiAncycsXG4gICAgJ8OFwp0nOiAncycsXG4gICAgJ8OIwpknOiAncycsXG4gICAgJ8OhwrnCoSc6ICdzJyxcbiAgICAnw6HCucKjJzogJ3MnLFxuICAgICfDocK5wqknOiAncycsXG4gICAgJ8OKwoInOiAncycsXG4gICAgJ8OhwrXCtCc6ICdzJyxcbiAgICAnw6HCtsKKJzogJ3MnLFxuICAgICfDiMK/JzogJ3MnLFxuICAgICfDicKhJzogJ2cnLFxuICAgICfDocK0wpEnOiAnbycsXG4gICAgJ8OhwrTCkyc6ICdvJyxcbiAgICAnw6HCtMKdJzogJ3UnLFxuICAgICfDhcKlJzogJ3QnLFxuICAgICfDhcKjJzogJ3QnLFxuICAgICfDocK5wrEnOiAndCcsXG4gICAgJ8OIwpsnOiAndCcsXG4gICAgJ8OIwrYnOiAndCcsXG4gICAgJ8OhwrrClyc6ICd0JyxcbiAgICAnw6LCscKmJzogJ3QnLFxuICAgICfDocK5wqsnOiAndCcsXG4gICAgJ8OhwrnCrSc6ICd0JyxcbiAgICAnw4bCrSc6ICd0JyxcbiAgICAnw6HCucKvJzogJ3QnLFxuICAgICfDocK1wrUnOiAndCcsXG4gICAgJ8OGwqsnOiAndCcsXG4gICAgJ8OKwognOiAndCcsXG4gICAgJ8OFwqcnOiAndCcsXG4gICAgJ8OhwrXCuic6ICd0aCcsXG4gICAgJ8OJwpAnOiAnYScsXG4gICAgJ8OhwrTCgic6ICdhZScsXG4gICAgJ8OHwp0nOiAnZScsXG4gICAgJ8OhwrXCtyc6ICdnJyxcbiAgICAnw4nCpSc6ICdoJyxcbiAgICAnw4rCric6ICdoJyxcbiAgICAnw4rCryc6ICdoJyxcbiAgICAnw6HCtMKJJzogJ2knLFxuICAgICfDisKeJzogJ2snLFxuICAgICfDqsKewoEnOiAnbCcsXG4gICAgJ8OJwq8nOiAnbScsXG4gICAgJ8OJwrAnOiAnbScsXG4gICAgJ8OhwrTClCc6ICdvZScsXG4gICAgJ8OJwrknOiAncicsXG4gICAgJ8OJwrsnOiAncicsXG4gICAgJ8OJwronOiAncicsXG4gICAgJ8OiwrHCuSc6ICdyJyxcbiAgICAnw4rChyc6ICd0JyxcbiAgICAnw4rCjCc6ICd2JyxcbiAgICAnw4rCjSc6ICd3JyxcbiAgICAnw4rCjic6ICd5JyxcbiAgICAnw6rCnMKpJzogJ3R6JyxcbiAgICAnw4PCuic6ICd1JyxcbiAgICAnw4XCrSc6ICd1JyxcbiAgICAnw4fClCc6ICd1JyxcbiAgICAnw4PCuyc6ICd1JyxcbiAgICAnw6HCucK3JzogJ3UnLFxuICAgICfDg8K8JzogJ3UnLFxuICAgICfDh8KYJzogJ3UnLFxuICAgICfDh8KaJzogJ3UnLFxuICAgICfDh8KcJzogJ3UnLFxuICAgICfDh8KWJzogJ3UnLFxuICAgICfDocK5wrMnOiAndScsXG4gICAgJ8OhwrvCpSc6ICd1JyxcbiAgICAnw4XCsSc6ICd1JyxcbiAgICAnw4jClSc6ICd1JyxcbiAgICAnw4PCuSc6ICd1JyxcbiAgICAnw6HCu8KnJzogJ3UnLFxuICAgICfDhsKwJzogJ3UnLFxuICAgICfDocK7wqknOiAndScsXG4gICAgJ8OhwrvCsSc6ICd1JyxcbiAgICAnw6HCu8KrJzogJ3UnLFxuICAgICfDocK7wq0nOiAndScsXG4gICAgJ8OhwrvCryc6ICd1JyxcbiAgICAnw4jClyc6ICd1JyxcbiAgICAnw4XCqyc6ICd1JyxcbiAgICAnw6HCucK7JzogJ3UnLFxuICAgICfDhcKzJzogJ3UnLFxuICAgICfDocK2wpknOiAndScsXG4gICAgJ8OFwq8nOiAndScsXG4gICAgJ8OFwqknOiAndScsXG4gICAgJ8OhwrnCuSc6ICd1JyxcbiAgICAnw6HCucK1JzogJ3UnLFxuICAgICfDocK1wqsnOiAndWUnLFxuICAgICfDqsKdwrgnOiAndW0nLFxuICAgICfDosKxwrQnOiAndicsXG4gICAgJ8Oqwp3Cnyc6ICd2JyxcbiAgICAnw6HCucK/JzogJ3YnLFxuICAgICfDisKLJzogJ3YnLFxuICAgICfDocK2wownOiAndicsXG4gICAgJ8OiwrHCsSc6ICd2JyxcbiAgICAnw6HCucK9JzogJ3YnLFxuICAgICfDqsKdwqEnOiAndnknLFxuICAgICfDocK6woMnOiAndycsXG4gICAgJ8OFwrUnOiAndycsXG4gICAgJ8OhwrrChSc6ICd3JyxcbiAgICAnw6HCusKHJzogJ3cnLFxuICAgICfDocK6woknOiAndycsXG4gICAgJ8OhwrrCgSc6ICd3JyxcbiAgICAnw6LCscKzJzogJ3cnLFxuICAgICfDocK6wpgnOiAndycsXG4gICAgJ8OhwrrCjSc6ICd4JyxcbiAgICAnw6HCusKLJzogJ3gnLFxuICAgICfDocK2wo0nOiAneCcsXG4gICAgJ8ODwr0nOiAneScsXG4gICAgJ8OFwrcnOiAneScsXG4gICAgJ8ODwr8nOiAneScsXG4gICAgJ8OhwrrCjyc6ICd5JyxcbiAgICAnw6HCu8K1JzogJ3knLFxuICAgICfDocK7wrMnOiAneScsXG4gICAgJ8OGwrQnOiAneScsXG4gICAgJ8OhwrvCtyc6ICd5JyxcbiAgICAnw6HCu8K/JzogJ3knLFxuICAgICfDiMKzJzogJ3knLFxuICAgICfDocK6wpknOiAneScsXG4gICAgJ8OJwo8nOiAneScsXG4gICAgJ8OhwrvCuSc6ICd5JyxcbiAgICAnw4XCuic6ICd6JyxcbiAgICAnw4XCvic6ICd6JyxcbiAgICAnw6HCusKRJzogJ3onLFxuICAgICfDisKRJzogJ3onLFxuICAgICfDosKxwqwnOiAneicsXG4gICAgJ8OFwrwnOiAneicsXG4gICAgJ8OhwrrCkyc6ICd6JyxcbiAgICAnw4jCpSc6ICd6JyxcbiAgICAnw6HCusKVJzogJ3onLFxuICAgICfDocK1wrYnOiAneicsXG4gICAgJ8OhwrbCjic6ICd6JyxcbiAgICAnw4rCkCc6ICd6JyxcbiAgICAnw4bCtic6ICd6JyxcbiAgICAnw4nCgCc6ICd6JyxcbiAgICAnw6/CrMKAJzogJ2ZmJyxcbiAgICAnw6/CrMKDJzogJ2ZmaScsXG4gICAgJ8OvwqzChCc6ICdmZmwnLFxuICAgICfDr8KswoEnOiAnZmknLFxuICAgICfDr8KswoInOiAnZmwnLFxuICAgICfDhMKzJzogJ2lqJyxcbiAgICAnw4XCkyc6ICdvZScsXG4gICAgJ8OvwqzChic6ICdzdCcsXG4gICAgJ8OiwoLCkCc6ICdhJyxcbiAgICAnw6LCgsKRJzogJ2UnLFxuICAgICfDocK1wqInOiAnaScsXG4gICAgJ8OiwrHCvCc6ICdqJyxcbiAgICAnw6LCgsKSJzogJ28nLFxuICAgICfDocK1wqMnOiAncicsXG4gICAgJ8OhwrXCpCc6ICd1JyxcbiAgICAnw6HCtcKlJzogJ3YnLFxuICAgICfDosKCwpMnOiAneCdcbn07XG4iLCJpbXBvcnQgeyBUeXBlYWhlYWREaXJlY3RpdmUgfSBmcm9tICcuL3R5cGVhaGVhZC5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY2xhc3MgVHlwZWFoZWFkT3B0aW9ucyB7XG4gIHBsYWNlbWVudDogc3RyaW5nO1xuICBhbmltYXRpb246IGJvb2xlYW47XG4gIHR5cGVhaGVhZFJlZjogVHlwZWFoZWFkRGlyZWN0aXZlO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFR5cGVhaGVhZE9wdGlvbnMpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVHlwZWFoZWFkTWF0Y2gge1xuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHJlYWRvbmx5IGl0ZW06IGFueTtcbiAgcHJvdGVjdGVkIGhlYWRlcjogYm9vbGVhbjtcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBjb25zdHJ1Y3RvcihpdGVtOiBhbnksIHZhbHVlOiBzdHJpbmcgPSBpdGVtLCBoZWFkZXIgPSBmYWxzZSkge1xuICAgIHRoaXMuaXRlbSA9IGl0ZW07XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuICB9XG5cbiAgaXNIZWFkZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaGVhZGVyO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBsYXRpbk1hcCB9IGZyb20gJy4vbGF0aW4tbWFwJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxhdGluaXplKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFzdHIpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gc3RyLnJlcGxhY2UoL1teQS1aYS16MC05XFxbXFxdIF0vZywgZnVuY3Rpb24gKGE6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGxhdGluTWFwW2FdIHx8IGE7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnZXhwKHF1ZXJ5VG9Fc2NhcGU6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIFJlZ2V4OiBjYXB0dXJlIHRoZSB3aG9sZSBxdWVyeSBzdHJpbmcgYW5kIHJlcGxhY2UgaXQgd2l0aCB0aGUgc3RyaW5nXG4gIC8vIHRoYXQgd2lsbCBiZSB1c2VkIHRvIG1hdGNoIHRoZSByZXN1bHRzLCBmb3IgZXhhbXBsZSBpZiB0aGUgY2FwdHVyZSBpc1xuICAvLyAnYScgdGhlIHJlc3VsdCB3aWxsIGJlIFxcYVxuICByZXR1cm4gcXVlcnlUb0VzY2FwZS5yZXBsYWNlKC8oWy4/KiteJFtcXF1cXFxcKCl7fXwtXSkvZywgJ1xcXFwkMScpO1xufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplKHN0cjogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRSZWdleERlbGltaXRlcnMgPSAnICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgcGhyYXNlUmVnZXhEZWxpbWl0ZXJzID0gJycpOiBBcnJheTxzdHJpbmc+IHtcbiAgLyogdHNsaW50OmVuYWJsZSAqL1xuICBjb25zdCByZWdleFN0ciA9IGAoPzpbJHtwaHJhc2VSZWdleERlbGltaXRlcnN9XSkoW14ke3BocmFzZVJlZ2V4RGVsaW1pdGVyc31dKylgICtcbiAgICBgKD86WyR7cGhyYXNlUmVnZXhEZWxpbWl0ZXJzfV0pfChbXiR7d29yZFJlZ2V4RGVsaW1pdGVyc31dKylgO1xuICBjb25zdCBwcmVUb2tlbml6ZWQ6IHN0cmluZ1tdID0gc3RyLnNwbGl0KG5ldyBSZWdFeHAocmVnZXhTdHIsICdnJykpO1xuICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IHByZVRva2VuaXplZExlbmd0aDogbnVtYmVyID0gcHJlVG9rZW5pemVkLmxlbmd0aDtcbiAgbGV0IHRva2VuOiBzdHJpbmc7XG4gIGNvbnN0IHJlcGxhY2VQaHJhc2VEZWxpbWl0ZXJzID0gbmV3IFJlZ0V4cChgWyR7cGhyYXNlUmVnZXhEZWxpbWl0ZXJzfV0rYCwgJ2cnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByZVRva2VuaXplZExlbmd0aDsgaSArPSAxKSB7XG4gICAgdG9rZW4gPSBwcmVUb2tlbml6ZWRbaV07XG4gICAgaWYgKHRva2VuICYmIHRva2VuLmxlbmd0aCAmJiB0b2tlbiAhPT0gd29yZFJlZ2V4RGVsaW1pdGVycykge1xuICAgICAgcmVzdWx0LnB1c2godG9rZW4ucmVwbGFjZShyZXBsYWNlUGhyYXNlRGVsaW1pdGVycywgJycpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVGcm9tT2JqZWN0KG9iamVjdDogYW55LCBvcHRpb246IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghb3B0aW9uIHx8IHR5cGVvZiBvYmplY3QgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG9iamVjdC50b1N0cmluZygpO1xuICB9XG5cbiAgaWYgKG9wdGlvbi5lbmRzV2l0aCgnKCknKSkge1xuICAgIGNvbnN0IGZ1bmN0aW9uTmFtZSA9IG9wdGlvbi5zbGljZSgwLCBvcHRpb24ubGVuZ3RoIC0gMik7XG5cbiAgICByZXR1cm4gb2JqZWN0W2Z1bmN0aW9uTmFtZV0oKS50b1N0cmluZygpO1xuICB9XG5cbiAgY29uc3QgcHJvcGVydGllczogc3RyaW5nID0gb3B0aW9uXG4gICAgLnJlcGxhY2UoL1xcWyhcXHcrKVxcXS9nLCAnLiQxJylcbiAgICAucmVwbGFjZSgvXlxcLi8sICcnKTtcbiAgY29uc3QgcHJvcGVydGllc0FycmF5OiBzdHJpbmdbXSA9IHByb3BlcnRpZXMuc3BsaXQoJy4nKTtcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHByb3BlcnRpZXNBcnJheSkge1xuICAgIGlmIChwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgb2JqZWN0ID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cbiAgaWYgKCFvYmplY3QpIHtyZXR1cm4gJyc7IH1cblxuICByZXR1cm4gb2JqZWN0LnRvU3RyaW5nKCk7XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW4sXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaXNCczMsIFV0aWxzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5pbXBvcnQgeyBsYXRpbml6ZSB9IGZyb20gJy4vdHlwZWFoZWFkLXV0aWxzJztcbmltcG9ydCB7IFR5cGVhaGVhZE1hdGNoIH0gZnJvbSAnLi90eXBlYWhlYWQtbWF0Y2guY2xhc3MnO1xuaW1wb3J0IHsgVHlwZWFoZWFkRGlyZWN0aXZlIH0gZnJvbSAnLi90eXBlYWhlYWQuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHlwZWFoZWFkLWNvbnRhaW5lcicsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICB0ZW1wbGF0ZVVybDogJy4vdHlwZWFoZWFkLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2Ryb3Bkb3duIG9wZW4nLFxuICAgICdbY2xhc3MuZHJvcGRvd24tbWVudV0nOiAnaXNCczQnLFxuICAgICdbc3R5bGUub3ZlcmZsb3cteV0nIDogYGlzQnM0ICYmIG5lZWRTY3JvbGxiYXIgPyAnc2Nyb2xsJzogJ3Zpc2libGUnYCxcbiAgICAnW3N0eWxlLmhlaWdodF0nOiBgaXNCczQgJiYgbmVlZFNjcm9sbGJhciA/IGd1aUhlaWdodDogJ2F1dG8nYCxcbiAgICAnW3N0eWxlLnZpc2liaWxpdHldJzogYHR5cGVhaGVhZFNjcm9sbGFibGUgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ2AsXG4gICAgJ1tjbGFzcy5kcm9wdXBdJzogJ2Ryb3B1cCcsXG4gICAgc3R5bGU6ICdwb3NpdGlvbjogYWJzb2x1dGU7ZGlzcGxheTogYmxvY2s7J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCB7XG4gIHBhcmVudDogVHlwZWFoZWFkRGlyZWN0aXZlO1xuICBxdWVyeTogc3RyaW5nW10gfCBzdHJpbmc7XG4gIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIGlzRm9jdXNlZCA9IGZhbHNlO1xuICB0b3A6IHN0cmluZztcbiAgbGVmdDogc3RyaW5nO1xuICBkaXNwbGF5OiBzdHJpbmc7XG4gIHBsYWNlbWVudDogc3RyaW5nO1xuICBkcm9wdXA6IGJvb2xlYW47XG4gIGd1aUhlaWdodDogc3RyaW5nO1xuICBuZWVkU2Nyb2xsYmFyOiBib29sZWFuO1xuXG4gIGdldCBpc0JzNCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWlzQnMzKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2FjdGl2ZTogVHlwZWFoZWFkTWF0Y2g7XG4gIHByb3RlY3RlZCBfbWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXSA9IFtdO1xuXG4gIEBWaWV3Q2hpbGQoJ3VsRWxlbWVudCcpXG4gIHByaXZhdGUgdWxFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIEBWaWV3Q2hpbGRyZW4oJ2xpRWxlbWVudHMnKVxuICBwcml2YXRlIGxpRWxlbWVudHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgZ2V0IGFjdGl2ZSgpOiBUeXBlYWhlYWRNYXRjaCB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIGdldCBtYXRjaGVzKCk6IFR5cGVhaGVhZE1hdGNoW10ge1xuICAgIHJldHVybiB0aGlzLl9tYXRjaGVzO1xuICB9XG5cbiAgc2V0IG1hdGNoZXModmFsdWU6IFR5cGVhaGVhZE1hdGNoW10pIHtcbiAgICB0aGlzLl9tYXRjaGVzID0gdmFsdWU7XG4gICAgdGhpcy5uZWVkU2Nyb2xsYmFyID0gdGhpcy50eXBlYWhlYWRTY3JvbGxhYmxlICYmIHRoaXMudHlwZWFoZWFkT3B0aW9uc0luU2Nyb2xsYWJsZVZpZXcgPCB0aGlzLm1hdGNoZXMubGVuZ3RoO1xuICAgIGlmICh0aGlzLnR5cGVhaGVhZFNjcm9sbGFibGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFNjcm9sbGFibGVNb2RlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSB0aGlzLl9tYXRjaGVzWzBdO1xuICAgICAgaWYgKHRoaXMuX2FjdGl2ZS5pc0hlYWRlcigpKSB7XG4gICAgICAgIHRoaXMubmV4dEFjdGl2ZU1hdGNoKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGdldCBvcHRpb25zTGlzdFRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50Lm9wdGlvbnNMaXN0VGVtcGxhdGUgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgdHlwZWFoZWFkU2Nyb2xsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC50eXBlYWhlYWRTY3JvbGxhYmxlIDogZmFsc2U7XG4gIH1cblxuXG4gIGdldCB0eXBlYWhlYWRPcHRpb25zSW5TY3JvbGxhYmxlVmlldygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnR5cGVhaGVhZE9wdGlvbnNJblNjcm9sbGFibGVWaWV3IDogNTtcbiAgfVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBnZXQgaXRlbVRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnR5cGVhaGVhZEl0ZW1UZW1wbGF0ZSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHNlbGVjdEFjdGl2ZU1hdGNoKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0TWF0Y2godGhpcy5fYWN0aXZlKTtcbiAgfVxuXG4gIHByZXZBY3RpdmVNYXRjaCgpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubWF0Y2hlcy5pbmRleE9mKHRoaXMuX2FjdGl2ZSk7XG4gICAgdGhpcy5fYWN0aXZlID0gdGhpcy5tYXRjaGVzW1xuICAgICAgaW5kZXggLSAxIDwgMCA/IHRoaXMubWF0Y2hlcy5sZW5ndGggLSAxIDogaW5kZXggLSAxXG4gICAgICBdO1xuICAgIGlmICh0aGlzLl9hY3RpdmUuaXNIZWFkZXIoKSkge1xuICAgICAgdGhpcy5wcmV2QWN0aXZlTWF0Y2goKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudHlwZWFoZWFkU2Nyb2xsYWJsZSkge1xuICAgICAgdGhpcy5zY3JvbGxQcmV2aW91cyhpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgbmV4dEFjdGl2ZU1hdGNoKCk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5tYXRjaGVzLmluZGV4T2YodGhpcy5fYWN0aXZlKTtcbiAgICB0aGlzLl9hY3RpdmUgPSB0aGlzLm1hdGNoZXNbXG4gICAgICBpbmRleCArIDEgPiB0aGlzLm1hdGNoZXMubGVuZ3RoIC0gMSA/IDAgOiBpbmRleCArIDFcbiAgICAgIF07XG4gICAgaWYgKHRoaXMuX2FjdGl2ZS5pc0hlYWRlcigpKSB7XG4gICAgICB0aGlzLm5leHRBY3RpdmVNYXRjaCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy50eXBlYWhlYWRTY3JvbGxhYmxlKSB7XG4gICAgICB0aGlzLnNjcm9sbE5leHQoaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEFjdGl2ZSh2YWx1ZTogVHlwZWFoZWFkTWF0Y2gpOiB2b2lkIHtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgdGhpcy5fYWN0aXZlID0gdmFsdWU7XG4gIH1cblxuICBoaWdobGlnaHQobWF0Y2g6IFR5cGVhaGVhZE1hdGNoLCBxdWVyeTogc3RyaW5nW10gfCBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCBpdGVtU3RyOiBzdHJpbmcgPSBtYXRjaC52YWx1ZTtcbiAgICBsZXQgaXRlbVN0ckhlbHBlcjogc3RyaW5nID0gKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnR5cGVhaGVhZExhdGluaXplXG4gICAgICA/IGxhdGluaXplKGl0ZW1TdHIpXG4gICAgICA6IGl0ZW1TdHIpLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IHN0YXJ0SWR4OiBudW1iZXI7XG4gICAgbGV0IHRva2VuTGVuOiBudW1iZXI7XG4gICAgLy8gUmVwbGFjZXMgdGhlIGNhcHR1cmUgc3RyaW5nIHdpdGggdGhlIHNhbWUgc3RyaW5nIGluc2lkZSBvZiBhIFwic3Ryb25nXCIgdGFnXG4gICAgaWYgKHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5TGVuOiBudW1iZXIgPSBxdWVyeS5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJ5TGVuOyBpICs9IDEpIHtcbiAgICAgICAgLy8gcXVlcnlbaV0gaXMgYWxyZWFkeSBsYXRpbml6ZWQgYW5kIGxvd2VyIGNhc2VcbiAgICAgICAgc3RhcnRJZHggPSBpdGVtU3RySGVscGVyLmluZGV4T2YocXVlcnlbaV0pO1xuICAgICAgICB0b2tlbkxlbiA9IHF1ZXJ5W2ldLmxlbmd0aDtcbiAgICAgICAgaWYgKHN0YXJ0SWR4ID49IDAgJiYgdG9rZW5MZW4gPiAwKSB7XG4gICAgICAgICAgaXRlbVN0ciA9XG4gICAgICAgICAgICBgJHtpdGVtU3RyLnN1YnN0cmluZygwLCBzdGFydElkeCl9PHN0cm9uZz4ke2l0ZW1TdHIuc3Vic3RyaW5nKHN0YXJ0SWR4LCBzdGFydElkeCArIHRva2VuTGVuKX08L3N0cm9uZz5gICtcbiAgICAgICAgICAgIGAke2l0ZW1TdHIuc3Vic3RyaW5nKHN0YXJ0SWR4ICsgdG9rZW5MZW4pfWA7XG4gICAgICAgICAgaXRlbVN0ckhlbHBlciA9XG4gICAgICAgICAgICBgJHtpdGVtU3RySGVscGVyLnN1YnN0cmluZygwLCBzdGFydElkeCl9ICAgICAgICAkeycgJy5yZXBlYXQodG9rZW5MZW4pfSAgICAgICAgIGAgK1xuICAgICAgICAgICAgYCR7aXRlbVN0ckhlbHBlci5zdWJzdHJpbmcoc3RhcnRJZHggKyB0b2tlbkxlbil9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocXVlcnkpIHtcbiAgICAgIC8vIHF1ZXJ5IGlzIGFscmVhZHkgbGF0aW5pemVkIGFuZCBsb3dlciBjYXNlXG4gICAgICBzdGFydElkeCA9IGl0ZW1TdHJIZWxwZXIuaW5kZXhPZihxdWVyeSk7XG4gICAgICB0b2tlbkxlbiA9IHF1ZXJ5Lmxlbmd0aDtcbiAgICAgIGlmIChzdGFydElkeCA+PSAwICYmIHRva2VuTGVuID4gMCkge1xuICAgICAgICBpdGVtU3RyID1cbiAgICAgICAgICBgJHtpdGVtU3RyLnN1YnN0cmluZygwLCBzdGFydElkeCl9PHN0cm9uZz4ke2l0ZW1TdHIuc3Vic3RyaW5nKHN0YXJ0SWR4LCBzdGFydElkeCArIHRva2VuTGVuKX08L3N0cm9uZz5gICtcbiAgICAgICAgICBgJHtpdGVtU3RyLnN1YnN0cmluZyhzdGFydElkeCArIHRva2VuTGVuKX1gO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpdGVtU3RyO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBmb2N1c0xvc3QoKTogdm9pZCB7XG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGlzQWN0aXZlKHZhbHVlOiBUeXBlYWhlYWRNYXRjaCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmUgPT09IHZhbHVlO1xuICB9XG5cbiAgc2VsZWN0TWF0Y2godmFsdWU6IFR5cGVhaGVhZE1hdGNoLCBlOiBFdmVudCA9IHZvaWQgMCk6IGJvb2xlYW4ge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICB0aGlzLnBhcmVudC5jaGFuZ2VNb2RlbCh2YWx1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnBhcmVudC50eXBlYWhlYWRPblNlbGVjdC5lbWl0KHZhbHVlKSwgMCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzZXRTY3JvbGxhYmxlTW9kZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudWxFbGVtZW50KSB7XG4gICAgICB0aGlzLnVsRWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICB9XG4gICAgaWYgKHRoaXMubGlFbGVtZW50cy5maXJzdCkge1xuICAgICAgY29uc3QgdWxTdHlsZXMgPSBVdGlscy5nZXRTdHlsZXModGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICBjb25zdCBsaVN0eWxlcyA9IFV0aWxzLmdldFN0eWxlcyh0aGlzLmxpRWxlbWVudHMuZmlyc3QubmF0aXZlRWxlbWVudCk7XG4gICAgICBjb25zdCB1bFBhZGRpbmdCb3R0b20gPSBwYXJzZUZsb2F0KCh1bFN0eWxlc1sncGFkZGluZy1ib3R0b20nXSA/IHVsU3R5bGVzWydwYWRkaW5nLWJvdHRvbSddIDogJycpXG4gICAgICAgIC5yZXBsYWNlKCdweCcsICcnKSk7XG4gICAgICBjb25zdCB1bFBhZGRpbmdUb3AgPSBwYXJzZUZsb2F0KCh1bFN0eWxlc1sncGFkZGluZy10b3AnXSA/IHVsU3R5bGVzWydwYWRkaW5nLXRvcCddIDogJzAnKVxuICAgICAgICAucmVwbGFjZSgncHgnLCAnJykpO1xuICAgICAgY29uc3Qgb3B0aW9uSGVpZ2h0ID0gcGFyc2VGbG9hdCgobGlTdHlsZXMuaGVpZ2h0ID8gbGlTdHlsZXMuaGVpZ2h0IDogJzAnKVxuICAgICAgICAucmVwbGFjZSgncHgnLCAnJykpO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy50eXBlYWhlYWRPcHRpb25zSW5TY3JvbGxhYmxlVmlldyAqIG9wdGlvbkhlaWdodDtcbiAgICAgIHRoaXMuZ3VpSGVpZ2h0ID0gYCR7aGVpZ2h0ICsgdWxQYWRkaW5nVG9wICsgdWxQYWRkaW5nQm90dG9tfXB4YDtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICB9XG5cbiAgc2Nyb2xsUHJldmlvdXMoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgdGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmxpRWxlbWVudHMpIHtcbiAgICAgIGNvbnN0IGxpRWxlbWVudCA9IHRoaXMubGlFbGVtZW50cy50b0FycmF5KClbaW5kZXggLSAxXTtcbiAgICAgIGlmIChsaUVsZW1lbnQgJiYgIXRoaXMuaXNTY3JvbGxlZEludG9WaWV3KGxpRWxlbWVudC5uYXRpdmVFbGVtZW50KSkge1xuICAgICAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IGxpRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzY3JvbGxOZXh0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoaW5kZXggKyAxID4gdGhpcy5tYXRjaGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5saUVsZW1lbnRzKSB7XG4gICAgICBjb25zdCBsaUVsZW1lbnQgPSB0aGlzLmxpRWxlbWVudHMudG9BcnJheSgpW2luZGV4ICsgMV07XG4gICAgICBpZiAobGlFbGVtZW50ICYmICF0aGlzLmlzU2Nyb2xsZWRJbnRvVmlldyhsaUVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPVxuICAgICAgICAgIGxpRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCAtXG4gICAgICAgICAgTnVtYmVyKHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KSArXG4gICAgICAgICAgTnVtYmVyKGxpRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBwcml2YXRlIGlzU2Nyb2xsZWRJbnRvVmlldyA9IGZ1bmN0aW9uIChlbGVtOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lclZpZXdUb3A6IG51bWJlciA9IHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IGNvbnRhaW5lclZpZXdCb3R0b20gPSBjb250YWluZXJWaWV3VG9wICsgTnVtYmVyKHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcbiAgICBjb25zdCBlbGVtVG9wID0gZWxlbS5vZmZzZXRUb3A7XG4gICAgY29uc3QgZWxlbUJvdHRvbSA9IGVsZW1Ub3AgKyBlbGVtLm9mZnNldEhlaWdodDtcblxuICAgIHJldHVybiAoKGVsZW1Cb3R0b20gPD0gY29udGFpbmVyVmlld0JvdHRvbSkgJiYgKGVsZW1Ub3AgPj0gY29udGFpbmVyVmlld1RvcCkpO1xuICB9O1xuXG4gIHByaXZhdGUgc2Nyb2xsVG9Cb3R0b20oKTogdm9pZCB7XG4gICAgdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsVG9Ub3AoKTogdm9pZCB7XG4gICAgdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBEZWZhdWx0IHZhbHVlcyBwcm92aWRlciBmb3IgdHlwZWFoZWFkICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHlwZWFoZWFkQ29uZmlnIHtcbiAgLyoqIHVzZWQgdG8gaGlkZSByZXN1bHRzIG9uIGJsdXIgKi9cbiAgaGlkZVJlc3VsdHNPbkJsdXIgPSB0cnVlO1xufVxuIiwiLyogdHNsaW50OmRpc2FibGU6bWF4LWZpbGUtbGluZS1jb3VudCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBmcm9tLCBTdWJzY3JpcHRpb24sIGlzT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdHlwZWFoZWFkLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHlwZWFoZWFkTWF0Y2ggfSBmcm9tICcuL3R5cGVhaGVhZC1tYXRjaC5jbGFzcyc7XG5pbXBvcnQgeyBnZXRWYWx1ZUZyb21PYmplY3QsIGxhdGluaXplLCB0b2tlbml6ZSB9IGZyb20gJy4vdHlwZWFoZWFkLXV0aWxzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyLCBtZXJnZU1hcCwgc3dpdGNoTWFwLCB0b0FycmF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVHlwZWFoZWFkQ29uZmlnIH0gZnJvbSAnLi90eXBlYWhlYWQuY29uZmlnJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbdHlwZWFoZWFkXScsIGV4cG9ydEFzOiAnYnMtdHlwZWFoZWFkJ30pXG5leHBvcnQgY2xhc3MgVHlwZWFoZWFkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKiogb3B0aW9ucyBzb3VyY2UsIGNhbiBiZSBBcnJheSBvZiBzdHJpbmdzLCBvYmplY3RzIG9yXG4gICAqIGFuIE9ic2VydmFibGUgZm9yIGV4dGVybmFsIG1hdGNoaW5nIHByb2Nlc3NcbiAgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSB0eXBlYWhlYWQ6IGFueTtcbiAgLyoqIG1pbmltYWwgbm8gb2YgY2hhcmFjdGVycyB0aGF0IG5lZWRzIHRvIGJlIGVudGVyZWQgYmVmb3JlXG4gICAqIHR5cGVhaGVhZCBraWNrcy1pbi4gV2hlbiBzZXQgdG8gMCwgdHlwZWFoZWFkIHNob3dzIG9uIGZvY3VzIHdpdGggZnVsbFxuICAgKiBsaXN0IG9mIG9wdGlvbnMgKGxpbWl0ZWQgYXMgbm9ybWFsIGJ5IHR5cGVhaGVhZE9wdGlvbnNMaW1pdClcbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZE1pbkxlbmd0aDogbnVtYmVyID0gdm9pZCAwO1xuICAvKiogbWluaW1hbCB3YWl0IHRpbWUgYWZ0ZXIgbGFzdCBjaGFyYWN0ZXIgdHlwZWQgYmVmb3JlIHR5cGVhaGVhZCBraWNrcy1pbiAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRXYWl0TXM6IG51bWJlcjtcbiAgLyoqIG1heGltdW0gbGVuZ3RoIG9mIG9wdGlvbnMgaXRlbXMgbGlzdC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMjAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkT3B0aW9uc0xpbWl0OiBudW1iZXI7XG4gIC8qKiB3aGVuIG9wdGlvbnMgc291cmNlIGlzIGFuIGFycmF5IG9mIG9iamVjdHMsIHRoZSBuYW1lIG9mIGZpZWxkXG4gICAqIHRoYXQgY29udGFpbnMgdGhlIG9wdGlvbnMgdmFsdWUsIHdlIHVzZSBhcnJheSBpdGVtIGFzIG9wdGlvbiBpbiBjYXNlXG4gICAqIG9mIHRoaXMgZmllbGQgaXMgbWlzc2luZy4gU3VwcG9ydHMgbmVzdGVkIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRPcHRpb25GaWVsZDogc3RyaW5nO1xuICAvKiogd2hlbiBvcHRpb25zIHNvdXJjZSBpcyBhbiBhcnJheSBvZiBvYmplY3RzLCB0aGUgbmFtZSBvZiBmaWVsZCB0aGF0XG4gICAqIGNvbnRhaW5zIHRoZSBncm91cCB2YWx1ZSwgbWF0Y2hlcyBhcmUgZ3JvdXBlZCBieSB0aGlzIGZpZWxkIHdoZW4gc2V0LlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkR3JvdXBGaWVsZDogc3RyaW5nO1xuICAvKiogc2hvdWxkIGJlIHVzZWQgb25seSBpbiBjYXNlIG9mIHR5cGVhaGVhZCBhdHRyaWJ1dGUgaXMgYXJyYXkuXG4gICAqIElmIHRydWUgLSBsb2FkaW5nIG9mIG9wdGlvbnMgd2lsbCBiZSBhc3luYywgb3RoZXJ3aXNlIC0gc3luYy5cbiAgICogdHJ1ZSBtYWtlIHNlbnNlIGlmIG9wdGlvbnMgYXJyYXkgaXMgbGFyZ2UuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRBc3luYzogYm9vbGVhbiA9IHZvaWQgMDtcbiAgLyoqIG1hdGNoIGxhdGluIHN5bWJvbHMuXG4gICAqIElmIHRydWUgdGhlIHdvcmQgc8ODwrpwZXIgd291bGQgbWF0Y2ggc3VwZXIgYW5kIHZpY2UgdmVyc2EuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRMYXRpbml6ZSA9IHRydWU7XG4gIC8qKiBDYW4gYmUgdXNlIHRvIHNlYXJjaCB3b3JkcyBieSBpbnNlcnRpbmcgYSBzaW5nbGUgd2hpdGUgc3BhY2UgYmV0d2VlbiBlYWNoIGNoYXJhY3RlcnNcbiAgICogIGZvciBleGFtcGxlICdDIGEgbCBpIGYgbyByIG4gaSBhJyB3aWxsIG1hdGNoICdDYWxpZm9ybmlhJy5cbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFNpbmdsZVdvcmRzID0gdHJ1ZTtcbiAgLyoqIHNob3VsZCBiZSB1c2VkIG9ubHkgaW4gY2FzZSB0eXBlYWhlYWRTaW5nbGVXb3JkcyBhdHRyaWJ1dGUgaXMgdHJ1ZS5cbiAgICogU2V0cyB0aGUgd29yZCBkZWxpbWl0ZXIgdG8gYnJlYWsgd29yZHMuIERlZmF1bHRzIHRvIHNwYWNlLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkV29yZERlbGltaXRlcnMgPSAnICc7XG4gIC8qKiBzaG91bGQgYmUgdXNlZCBvbmx5IGluIGNhc2UgdHlwZWFoZWFkU2luZ2xlV29yZHMgYXR0cmlidXRlIGlzIHRydWUuXG4gICAqIFNldHMgdGhlIHdvcmQgZGVsaW1pdGVyIHRvIG1hdGNoIGV4YWN0IHBocmFzZS5cbiAgICogRGVmYXVsdHMgdG8gc2ltcGxlIGFuZCBkb3VibGUgcXVvdGVzLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkUGhyYXNlRGVsaW1pdGVycyA9ICdcXCdcIic7XG4gIC8qKiB1c2VkIHRvIHNwZWNpZnkgYSBjdXN0b20gaXRlbSB0ZW1wbGF0ZS5cbiAgICogVGVtcGxhdGUgdmFyaWFibGVzIGV4cG9zZWQgYXJlIGNhbGxlZCBpdGVtIGFuZCBpbmRleDtcbiAgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSB0eXBlYWhlYWRJdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKiB1c2VkIHRvIHNwZWNpZnkgYSBjdXN0b20gb3B0aW9ucyBsaXN0IHRlbXBsYXRlLlxuICAgKiBUZW1wbGF0ZSB2YXJpYWJsZXM6IG1hdGNoZXMsIGl0ZW1UZW1wbGF0ZSwgcXVlcnlcbiAgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBvcHRpb25zTGlzdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKiogc3BlY2lmaWVzIGlmIHR5cGVhaGVhZCBpcyBzY3JvbGxhYmxlICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRTY3JvbGxhYmxlID0gZmFsc2U7XG4gIC8qKiBzcGVjaWZpZXMgbnVtYmVyIG9mIG9wdGlvbnMgdG8gc2hvdyBpbiBzY3JvbGwgdmlldyAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkT3B0aW9uc0luU2Nyb2xsYWJsZVZpZXcgPSA1O1xuICAvKiogdXNlZCB0byBoaWRlIHJlc3VsdCBvbiBibHVyICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZEhpZGVSZXN1bHRzT25CbHVyOiBib29sZWFuO1xuICAvKiogZmlyZWQgd2hlbiAnYnVzeScgc3RhdGUgb2YgdGhpcyBjb21wb25lbnQgd2FzIGNoYW5nZWQsXG4gICAqIGZpcmVkIG9uIGFzeW5jIG1vZGUgb25seSwgcmV0dXJucyBib29sZWFuXG4gICAqL1xuICBAT3V0cHV0KCkgdHlwZWFoZWFkTG9hZGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgLyoqIGZpcmVkIG9uIGV2ZXJ5IGtleSBldmVudCBhbmQgcmV0dXJucyB0cnVlXG4gICAqIGluIGNhc2Ugb2YgbWF0Y2hlcyBhcmUgbm90IGRldGVjdGVkXG4gICAqL1xuICBAT3V0cHV0KCkgdHlwZWFoZWFkTm9SZXN1bHRzID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAvKiogZmlyZWQgd2hlbiBvcHRpb24gd2FzIHNlbGVjdGVkLCByZXR1cm4gb2JqZWN0IHdpdGggZGF0YSBvZiB0aGlzIG9wdGlvbiAqL1xuICBAT3V0cHV0KCkgdHlwZWFoZWFkT25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPFR5cGVhaGVhZE1hdGNoPigpO1xuICAvKiogZmlyZWQgd2hlbiBibHVyIGV2ZW50IG9jY3VycmVzLiByZXR1cm5zIHRoZSBhY3RpdmUgaXRlbSAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQE91dHB1dCgpIHR5cGVhaGVhZE9uQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHR5cGVhaGVhZCBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyOiBzdHJpbmc7XG5cbiAgLyoqIFRoaXMgYXR0cmlidXRlIGluZGljYXRlcyB0aGF0IHRoZSBkcm9wZG93biBzaG91bGQgYmUgb3BlbmVkIHVwd2FyZHMgKi9cbiAgQElucHV0KCkgZHJvcHVwID0gZmFsc2U7XG5cbiAgLy8gbm90IHlldCBpbXBsZW1lbnRlZFxuICAvKiogaWYgZmFsc2UgcmVzdHJpY3QgbW9kZWwgdmFsdWVzIHRvIHRoZSBvbmVzIHNlbGVjdGVkIGZyb20gdGhlIHBvcHVwIG9ubHkgd2lsbCBiZSBwcm92aWRlZCAqL1xuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkRWRpdGFibGU6Ym9vbGVhbjtcbiAgLyoqIGlmIGZhbHNlIHRoZSBmaXJzdCBtYXRjaCBhdXRvbWF0aWNhbGx5IHdpbGwgbm90IGJlIGZvY3VzZWQgYXMgeW91IHR5cGUgKi9cbiAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZEZvY3VzRmlyc3Q6Ym9vbGVhbjtcbiAgLyoqIGZvcm1hdCB0aGUgbmctbW9kZWwgcmVzdWx0IGFmdGVyIHNlbGVjdGlvbiAqL1xuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkSW5wdXRGb3JtYXR0ZXI6YW55O1xuICAvKiogaWYgdHJ1ZSBhdXRvbWF0aWNhbGx5IHNlbGVjdCBhbiBpdGVtIHdoZW4gdGhlcmUgaXMgb25lIG9wdGlvbiB0aGF0IGV4YWN0bHkgbWF0Y2hlcyB0aGUgdXNlciBpbnB1dCAqL1xuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkU2VsZWN0T25FeGFjdDpib29sZWFuO1xuICAvKiogIGlmIHRydWUgc2VsZWN0IHRoZSBjdXJyZW50bHkgaGlnaGxpZ2h0ZWQgbWF0Y2ggb24gYmx1ciAqL1xuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkU2VsZWN0T25CbHVyOmJvb2xlYW47XG4gIC8qKiAgaWYgZmFsc2UgZG9uJ3QgZm9jdXMgdGhlIGlucHV0IGVsZW1lbnQgdGhlIHR5cGVhaGVhZCBkaXJlY3RpdmUgaXMgYXNzb2NpYXRlZCB3aXRoIG9uIHNlbGVjdGlvbiAqL1xuICAgIC8vIEBJbnB1dCgpIHByb3RlY3RlZCB0eXBlYWhlYWRGb2N1c09uU2VsZWN0OmJvb2xlYW47XG5cbiAgX2NvbnRhaW5lcjogVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50O1xuICBpc1R5cGVhaGVhZE9wdGlvbnNMaXN0QWN0aXZlID0gZmFsc2U7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcm90ZWN0ZWQga2V5VXBFdmVudEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwcm90ZWN0ZWQgX21hdGNoZXM6IFR5cGVhaGVhZE1hdGNoW107XG4gIHByb3RlY3RlZCBwbGFjZW1lbnQgPSAnYm90dG9tLWxlZnQnO1xuICAvLyBwcm90ZWN0ZWQgcG9wdXA6Q29tcG9uZW50UmVmPFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudD47XG5cbiAgcHJpdmF0ZSBfdHlwZWFoZWFkOiBDb21wb25lbnRMb2FkZXI8VHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBfb3V0c2lkZUNsaWNrTGlzdGVuZXI6IEZ1bmN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBjb25maWc6IFR5cGVhaGVhZENvbmZpZyxcbiAgICAgICAgICAgICAgY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxuICAgICAgICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblxuICAgIHRoaXMuX3R5cGVhaGVhZCA9IGNpcy5jcmVhdGVMb2FkZXI8VHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50PihcbiAgICAgIGVsZW1lbnQsXG4gICAgICB2aWV3Q29udGFpbmVyUmVmLFxuICAgICAgcmVuZGVyZXJcbiAgICApXG4gICAgICAucHJvdmlkZSh7IHByb3ZpZGU6IFR5cGVhaGVhZENvbmZpZywgdXNlVmFsdWU6IGNvbmZpZyB9KTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyB0eXBlYWhlYWRIaWRlUmVzdWx0c09uQmx1cjogY29uZmlnLmhpZGVSZXN1bHRzT25CbHVyIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50eXBlYWhlYWRPcHRpb25zTGltaXQgPSB0aGlzLnR5cGVhaGVhZE9wdGlvbnNMaW1pdCB8fCAyMDtcblxuICAgIHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoID1cbiAgICAgIHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoID09PSB2b2lkIDAgPyAxIDogdGhpcy50eXBlYWhlYWRNaW5MZW5ndGg7XG5cbiAgICB0aGlzLnR5cGVhaGVhZFdhaXRNcyA9IHRoaXMudHlwZWFoZWFkV2FpdE1zIHx8IDA7XG5cbiAgICAvLyBhc3luYyBzaG91bGQgYmUgZmFsc2UgaW4gY2FzZSBvZiBhcnJheVxuICAgIGlmIChcbiAgICAgIHRoaXMudHlwZWFoZWFkQXN5bmMgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgIShpc09ic2VydmFibGUodGhpcy50eXBlYWhlYWQpKVxuICAgICkge1xuICAgICAgdGhpcy50eXBlYWhlYWRBc3luYyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChpc09ic2VydmFibGUodGhpcy50eXBlYWhlYWQpKSB7XG4gICAgICB0aGlzLnR5cGVhaGVhZEFzeW5jID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50eXBlYWhlYWRBc3luYykge1xuICAgICAgdGhpcy5hc3luY0FjdGlvbnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zeW5jQWN0aW9ucygpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSlcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvbklucHV0KGU6IGFueSk6IHZvaWQge1xuICAgIC8vIEZvciBgPGlucHV0PmBzLCB1c2UgdGhlIGB2YWx1ZWAgcHJvcGVydHkuIEZvciBvdGhlcnMgdGhhdCBkb24ndCBoYXZlIGFcbiAgICAvLyBgdmFsdWVgIChzdWNoIGFzIGA8c3BhbiBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCI+YCksIHVzZSBlaXRoZXJcbiAgICAvLyBgdGV4dENvbnRlbnRgIG9yIGBpbm5lclRleHRgIChkZXBlbmRpbmcgb24gd2hpY2ggb25lIGlzIHN1cHBvcnRlZCwgaS5lLlxuICAgIC8vIEZpcmVmb3ggb3IgSUUpLlxuICAgIGNvbnN0IHZhbHVlID1cbiAgICAgIGUudGFyZ2V0LnZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBlLnRhcmdldC52YWx1ZVxuICAgICAgICA6IGUudGFyZ2V0LnRleHRDb250ZW50ICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBlLnRhcmdldC50ZXh0Q29udGVudFxuICAgICAgICA6IGUudGFyZ2V0LmlubmVyVGV4dDtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZS50cmltKCkubGVuZ3RoID49IHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoKSB7XG4gICAgICB0aGlzLnR5cGVhaGVhZExvYWRpbmcuZW1pdCh0cnVlKTtcbiAgICAgIHRoaXMua2V5VXBFdmVudEVtaXR0ZXIuZW1pdChlLnRhcmdldC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHlwZWFoZWFkTG9hZGluZy5lbWl0KGZhbHNlKTtcbiAgICAgIHRoaXMudHlwZWFoZWFkTm9SZXN1bHRzLmVtaXQoZmFsc2UpO1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKVxuICBvbkNoYW5nZShldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIC8vIGVzY1xuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3IHx8IGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyB1cFxuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM4IHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5wcmV2QWN0aXZlTWF0Y2goKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGRvd25cbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSA0MCB8fCBldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5uZXh0QWN0aXZlTWF0Y2goKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGVudGVyLCB0YWJcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnNlbGVjdEFjdGl2ZU1hdGNoKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuICBvbkZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnR5cGVhaGVhZE1pbkxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy50eXBlYWhlYWRMb2FkaW5nLmVtaXQodHJ1ZSk7XG4gICAgICB0aGlzLmtleVVwRXZlbnRFbWl0dGVyLmVtaXQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgfHwgJycpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBvbkJsdXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciAmJiAhdGhpcy5fY29udGFpbmVyLmlzRm9jdXNlZCkge1xuICAgICAgdGhpcy50eXBlYWhlYWRPbkJsdXIuZW1pdCh0aGlzLl9jb250YWluZXIuYWN0aXZlKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgLy8gbm8gY29udGFpbmVyIC0gbm8gcHJvYmxlbXNcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIGFuIGl0ZW0gaXMgdmlzaWJsZSAtIHByZXZlbnQgZm9ybSBzdWJtaXNzaW9uXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiBhbiBpdGVtIGlzIHZpc2libGUgLSBkb24ndCBjaGFuZ2UgZm9jdXNcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uICovXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDkgfHwgZXZlbnQua2V5ID09PSAnVGFiJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5zZWxlY3RBY3RpdmVNYXRjaCgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlTW9kZWwobWF0Y2g6IFR5cGVhaGVhZE1hdGNoKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWVTdHI6IHN0cmluZyA9IG1hdGNoLnZhbHVlO1xuICAgIHRoaXMubmdDb250cm9sLnZpZXdUb01vZGVsVXBkYXRlKHZhbHVlU3RyKTtcbiAgICAodGhpcy5uZ0NvbnRyb2wuY29udHJvbCkuc2V0VmFsdWUodmFsdWVTdHIpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgZ2V0IG1hdGNoZXMoKTogVHlwZWFoZWFkTWF0Y2hbXSB7XG4gICAgcmV0dXJuIHRoaXMuX21hdGNoZXM7XG4gIH1cblxuICBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMuX3R5cGVhaGVhZFxuICAgICAgLmF0dGFjaChUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQpXG4gICAgICAvLyB0b2RvOiBhZGQgYXBwZW5kIHRvIGJvZHksIGFmdGVyIHVwZGF0aW5nIHBvc2l0aW9uaW5nIHNlcnZpY2VcbiAgICAgIC50byh0aGlzLmNvbnRhaW5lcilcbiAgICAgIC5wb3NpdGlvbih7YXR0YWNobWVudDogYCR7dGhpcy5kcm9wdXAgPyAndG9wJyA6ICdib3R0b20nfSBsZWZ0YH0pXG4gICAgICAuc2hvdyh7XG4gICAgICAgIHR5cGVhaGVhZFJlZjogdGhpcyxcbiAgICAgICAgcGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudCxcbiAgICAgICAgYW5pbWF0aW9uOiBmYWxzZSxcbiAgICAgICAgZHJvcHVwOiB0aGlzLmRyb3B1cFxuICAgICAgfSk7XG5cbiAgICB0aGlzLl9vdXRzaWRlQ2xpY2tMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy50eXBlYWhlYWRNaW5MZW5ndGggPT09IDAgJiYgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMudHlwZWFoZWFkSGlkZVJlc3VsdHNPbkJsdXIgfHwgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLm9uT3V0c2lkZUNsaWNrKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jb250YWluZXIgPSB0aGlzLl90eXBlYWhlYWQuaW5zdGFuY2U7XG4gICAgdGhpcy5fY29udGFpbmVyLnBhcmVudCA9IHRoaXM7XG4gICAgLy8gVGhpcyBpbXByb3ZlcyB0aGUgc3BlZWQgYXMgaXQgd29uJ3QgaGF2ZSB0byBiZSBkb25lIGZvciBlYWNoIGxpc3QgaXRlbVxuICAgIGNvbnN0IG5vcm1hbGl6ZWRRdWVyeSA9ICh0aGlzLnR5cGVhaGVhZExhdGluaXplXG4gICAgICA/IGxhdGluaXplKHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsdWUpXG4gICAgICA6IHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsdWUpXG4gICAgICAudG9TdHJpbmcoKVxuICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5fY29udGFpbmVyLnF1ZXJ5ID0gdGhpcy50eXBlYWhlYWRTaW5nbGVXb3Jkc1xuICAgICAgPyB0b2tlbml6ZShcbiAgICAgICAgbm9ybWFsaXplZFF1ZXJ5LFxuICAgICAgICB0aGlzLnR5cGVhaGVhZFdvcmREZWxpbWl0ZXJzLFxuICAgICAgICB0aGlzLnR5cGVhaGVhZFBocmFzZURlbGltaXRlcnNcbiAgICAgIClcbiAgICAgIDogbm9ybWFsaXplZFF1ZXJ5O1xuICAgIHRoaXMuX2NvbnRhaW5lci5tYXRjaGVzID0gdGhpcy5fbWF0Y2hlcztcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fdHlwZWFoZWFkLmlzU2hvd24pIHtcbiAgICAgIHRoaXMuX3R5cGVhaGVhZC5oaWRlKCk7XG4gICAgICB0aGlzLl9vdXRzaWRlQ2xpY2tMaXN0ZW5lcigpO1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBvbk91dHNpZGVDbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyICYmICF0aGlzLl9jb250YWluZXIuaXNGb2N1c2VkKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBjbGVhbiB1cCBzdWJzY3JpcHRpb25zXG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vic2NyaXB0aW9ucykge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuX3R5cGVhaGVhZC5kaXNwb3NlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25zKCk6IHZvaWQge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMua2V5VXBFdmVudEVtaXR0ZXJcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMudHlwZWFoZWFkV2FpdE1zKSxcbiAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy50eXBlYWhlYWQpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgobWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXSkgPT4ge1xuICAgICAgICAgIHRoaXMuZmluYWxpemVBc3luY0NhbGwobWF0Y2hlcyk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW5jQWN0aW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLmtleVVwRXZlbnRFbWl0dGVyXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGRlYm91bmNlVGltZSh0aGlzLnR5cGVhaGVhZFdhaXRNcyksXG4gICAgICAgICAgbWVyZ2VNYXAoKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRRdWVyeSA9IHRoaXMubm9ybWFsaXplUXVlcnkodmFsdWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gZnJvbSh0aGlzLnR5cGVhaGVhZClcbiAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgZmlsdGVyKChvcHRpb246IFR5cGVhaGVhZE1hdGNoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlc3RNYXRjaCh0aGlzLm5vcm1hbGl6ZU9wdGlvbihvcHRpb24pLCBub3JtYWxpemVkUXVlcnkpXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHRvQXJyYXkoKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgobWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXSkgPT4ge1xuICAgICAgICAgIHRoaXMuZmluYWxpemVBc3luY0NhbGwobWF0Y2hlcyk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJvdGVjdGVkIG5vcm1hbGl6ZU9wdGlvbihvcHRpb246IGFueSk6IGFueSB7XG4gICAgY29uc3Qgb3B0aW9uVmFsdWU6IHN0cmluZyA9IGdldFZhbHVlRnJvbU9iamVjdChcbiAgICAgIG9wdGlvbixcbiAgICAgIHRoaXMudHlwZWFoZWFkT3B0aW9uRmllbGRcbiAgICApO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRPcHRpb24gPSB0aGlzLnR5cGVhaGVhZExhdGluaXplXG4gICAgICA/IGxhdGluaXplKG9wdGlvblZhbHVlKVxuICAgICAgOiBvcHRpb25WYWx1ZTtcblxuICAgIHJldHVybiBub3JtYWxpemVkT3B0aW9uLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbm9ybWFsaXplUXVlcnkodmFsdWU6IHN0cmluZyk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICAvLyBJZiBzaW5nbGVXb3JkcywgYnJlYWsgbW9kZWwgaGVyZSB0byBub3QgYmUgZG9pbmcgZXh0cmEgd29yayBvbiBlYWNoXG4gICAgLy8gaXRlcmF0aW9uXG4gICAgbGV0IG5vcm1hbGl6ZWRRdWVyeTogc3RyaW5nIHwgc3RyaW5nW10gPSAodGhpcy50eXBlYWhlYWRMYXRpbml6ZVxuICAgICAgPyBsYXRpbml6ZSh2YWx1ZSlcbiAgICAgIDogdmFsdWUpXG4gICAgICAudG9TdHJpbmcoKVxuICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgbm9ybWFsaXplZFF1ZXJ5ID0gdGhpcy50eXBlYWhlYWRTaW5nbGVXb3Jkc1xuICAgICAgPyB0b2tlbml6ZShcbiAgICAgICAgbm9ybWFsaXplZFF1ZXJ5LFxuICAgICAgICB0aGlzLnR5cGVhaGVhZFdvcmREZWxpbWl0ZXJzLFxuICAgICAgICB0aGlzLnR5cGVhaGVhZFBocmFzZURlbGltaXRlcnNcbiAgICAgIClcbiAgICAgIDogbm9ybWFsaXplZFF1ZXJ5O1xuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRRdWVyeTtcbiAgfVxuXG4gIHByb3RlY3RlZCB0ZXN0TWF0Y2gobWF0Y2g6IHN0cmluZywgdGVzdDogc3RyaW5nW10gfCBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBsZXQgc3BhY2VMZW5ndGg6IG51bWJlcjtcblxuICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHNwYWNlTGVuZ3RoID0gdGVzdC5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwYWNlTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHRlc3RbaV0ubGVuZ3RoID4gMCAmJiBtYXRjaC5pbmRleE9mKHRlc3RbaV0pIDwgMCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2guaW5kZXhPZih0ZXN0KSA+PSAwO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpbmFsaXplQXN5bmNDYWxsKG1hdGNoZXM6IFR5cGVhaGVhZE1hdGNoW10pOiB2b2lkIHtcbiAgICB0aGlzLnByZXBhcmVNYXRjaGVzKG1hdGNoZXMgfHwgW10pO1xuXG4gICAgdGhpcy50eXBlYWhlYWRMb2FkaW5nLmVtaXQoZmFsc2UpO1xuICAgIHRoaXMudHlwZWFoZWFkTm9SZXN1bHRzLmVtaXQoIXRoaXMuaGFzTWF0Y2hlcygpKTtcblxuICAgIGlmICghdGhpcy5oYXNNYXRjaGVzKCkpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgLy8gZml4OiByZW1vdmUgdXNhZ2Ugb2YgbmdDb250cm9sIGludGVybmFsc1xuICAgICAgY29uc3QgX2NvbnRyb2xWYWx1ZSA9ICh0aGlzLnR5cGVhaGVhZExhdGluaXplXG4gICAgICAgID8gbGF0aW5pemUodGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZSlcbiAgICAgICAgOiB0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKSB8fCAnJztcbiAgICAgIC8vIFRoaXMgaW1wcm92ZXMgdGhlIHNwZWVkIGFzIGl0IHdvbid0IGhhdmUgdG8gYmUgZG9uZSBmb3IgZWFjaCBsaXN0IGl0ZW1cbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRRdWVyeSA9IF9jb250cm9sVmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdGhpcy5fY29udGFpbmVyLnF1ZXJ5ID0gdGhpcy50eXBlYWhlYWRTaW5nbGVXb3Jkc1xuICAgICAgICA/IHRva2VuaXplKFxuICAgICAgICAgIG5vcm1hbGl6ZWRRdWVyeSxcbiAgICAgICAgICB0aGlzLnR5cGVhaGVhZFdvcmREZWxpbWl0ZXJzLFxuICAgICAgICAgIHRoaXMudHlwZWFoZWFkUGhyYXNlRGVsaW1pdGVyc1xuICAgICAgICApXG4gICAgICAgIDogbm9ybWFsaXplZFF1ZXJ5O1xuICAgICAgdGhpcy5fY29udGFpbmVyLm1hdGNoZXMgPSB0aGlzLl9tYXRjaGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcHJlcGFyZU1hdGNoZXMob3B0aW9uczogVHlwZWFoZWFkTWF0Y2hbXSk6IHZvaWQge1xuICAgIGNvbnN0IGxpbWl0ZWQ6IFR5cGVhaGVhZE1hdGNoW10gPSBvcHRpb25zLnNsaWNlKDAsIHRoaXMudHlwZWFoZWFkT3B0aW9uc0xpbWl0KTtcblxuICAgIGlmICh0aGlzLnR5cGVhaGVhZEdyb3VwRmllbGQpIHtcbiAgICAgIGxldCBtYXRjaGVzOiBUeXBlYWhlYWRNYXRjaFtdID0gW107XG5cbiAgICAgIC8vIGV4dHJhY3QgYWxsIGdyb3VwIG5hbWVzXG4gICAgICBjb25zdCBncm91cHMgPSBsaW1pdGVkXG4gICAgICAgIC5tYXAoKG9wdGlvbjogVHlwZWFoZWFkTWF0Y2gpID0+XG4gICAgICAgICAgZ2V0VmFsdWVGcm9tT2JqZWN0KG9wdGlvbiwgdGhpcy50eXBlYWhlYWRHcm91cEZpZWxkKVxuICAgICAgICApXG4gICAgICAgIC5maWx0ZXIoKHY6IHN0cmluZywgaTogbnVtYmVyLCBhOiBzdHJpbmdbXSkgPT4gYS5pbmRleE9mKHYpID09PSBpKTtcblxuICAgICAgZ3JvdXBzLmZvckVhY2goKGdyb3VwOiBzdHJpbmcpID0+IHtcbiAgICAgICAgLy8gYWRkIGdyb3VwIGhlYWRlciB0byBhcnJheSBvZiBtYXRjaGVzXG4gICAgICAgIG1hdGNoZXMucHVzaChuZXcgVHlwZWFoZWFkTWF0Y2goZ3JvdXAsIGdyb3VwLCB0cnVlKSk7XG5cbiAgICAgICAgLy8gYWRkIGVhY2ggaXRlbSBvZiBncm91cCB0byBhcnJheSBvZiBtYXRjaGVzXG4gICAgICAgIG1hdGNoZXMgPSBtYXRjaGVzLmNvbmNhdChcbiAgICAgICAgICBsaW1pdGVkXG4gICAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgICAgICAgIChvcHRpb246IGFueSkgPT5cbiAgICAgICAgICAgICAgICBnZXRWYWx1ZUZyb21PYmplY3Qob3B0aW9uLCB0aGlzLnR5cGVhaGVhZEdyb3VwRmllbGQpID09PSBncm91cFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAgICAgICAob3B0aW9uOiBhbnkpID0+XG4gICAgICAgICAgICAgICAgbmV3IFR5cGVhaGVhZE1hdGNoKFxuICAgICAgICAgICAgICAgICAgb3B0aW9uLFxuICAgICAgICAgICAgICAgICAgZ2V0VmFsdWVGcm9tT2JqZWN0KG9wdGlvbiwgdGhpcy50eXBlYWhlYWRPcHRpb25GaWVsZClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fbWF0Y2hlcyA9IG1hdGNoZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX21hdGNoZXMgPSBsaW1pdGVkLm1hcChcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAob3B0aW9uOiBhbnkpID0+XG4gICAgICAgICAgbmV3IFR5cGVhaGVhZE1hdGNoKFxuICAgICAgICAgICAgb3B0aW9uLFxuICAgICAgICAgICAgZ2V0VmFsdWVGcm9tT2JqZWN0KG9wdGlvbiwgdGhpcy50eXBlYWhlYWRPcHRpb25GaWVsZClcbiAgICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBoYXNNYXRjaGVzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tYXRjaGVzLmxlbmd0aCA+IDA7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3R5cGVhaGVhZC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFR5cGVhaGVhZERpcmVjdGl2ZSB9IGZyb20gJy4vdHlwZWFoZWFkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xuaW1wb3J0IHsgVHlwZWFoZWFkQ29uZmlnIH0gZnJvbSAnLi90eXBlYWhlYWQuY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1R5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCwgVHlwZWFoZWFkRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW1R5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCwgVHlwZWFoZWFkRGlyZWN0aXZlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFR5cGVhaGVhZE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0NvbXBvbmVudExvYWRlckZhY3RvcnksIFBvc2l0aW9uaW5nU2VydmljZSwgVHlwZWFoZWFkQ29uZmlnXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fdmFsdWVzIiwiaXNCczMiLCJVdGlscyIsIkNvbXBvbmVudCIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJWaWV3Q2hpbGQiLCJWaWV3Q2hpbGRyZW4iLCJIb3N0TGlzdGVuZXIiLCJJbmplY3RhYmxlIiwiRXZlbnRFbWl0dGVyIiwiaXNPYnNlcnZhYmxlIiwiZGVib3VuY2VUaW1lIiwic3dpdGNoTWFwIiwibWVyZ2VNYXAiLCJmcm9tIiwiZmlsdGVyIiwidG9BcnJheSIsIkRpcmVjdGl2ZSIsIk5nQ29udHJvbCIsIlZpZXdDb250YWluZXJSZWYiLCJDb21wb25lbnRMb2FkZXJGYWN0b3J5IiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJJbnB1dCIsIk91dHB1dCIsIlBvc2l0aW9uaW5nU2VydmljZSIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHlCQUFhLFFBQVEsR0FBOEI7UUFDL0MsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxH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