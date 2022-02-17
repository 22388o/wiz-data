var wizData=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hexBoundaries=t.hexToBytes=t.hexLE=t.hexFixBytes=void 0;var r=n(2);t.hexFixBytes=function(e){return e.length%2==0?e:e.padStart(2*Math.ceil(e.length/2),"0")};var o=function(e){return e.length%2==0&&!/[^a-fA-F0-9]/u.test(e)};t.hexLE=function(e){return(0,r.bytesToHex)((0,t.hexToBytes)(e).reverse())};t.hexToBytes=function(e){return Uint8Array.from(function(e){if(!o(e))throw"hexToHexBytes: invalid hex string";var t=e.match(/.{1,2}/g);return null===t?[]:t.map((function(e){return e}))}(e).map((function(e){return function(e){if(!o(e))throw"hexToByte: invalid hex string";return parseInt(e,16)}(e)})))};t.hexBoundaries=function(e){var t=Math.pow(2,8*e-9),n=Math.pow(2,8*e-1);if(0<e&&e<5)return{minPos:t,maxPos:n-1,minNeg:1-n,maxNeg:-1*t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MAX_INTEGER=void 0,t.MAX_INTEGER=2147483647},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bytesToBin=t.bytesToNumber=t.bytesToString=t.bytesToHex=void 0;var r=n(0),o=n(3);t.bytesToHex=function(e){return e.reduce((function(e,t){return e+function(e){if(!function(e){return 0<=e&&e<=255}(e))throw"byteToHex: invalid byte number";return e.toString(16).padStart(2,"0")}(t)}),"")};t.bytesToString=function(e){for(var t=[],n=0,r=0;n<e.length;){var o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){var i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){var u=((7&o)<<18|(63&(i=e[n++]))<<12|(63&(a=e[n++]))<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(1023&u))}else{i=e[n++];var a=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&a)}}return t.join("")};t.bytesToNumber=function(e){if(0==e.length)return 0;if(!(4<e.length)){var n=(0,t.bytesToHex)(e);if((0,o.numberIsValid)(n,e.length)){var i=(0,r.hexBoundaries)(e.length);if(void 0!==i){var u=parseInt((0,r.hexLE)(n),16);return i.minPos<=u&&u<=i.maxPos||0===u?u:Math.pow(2,8*e.length-1)-u}}}};t.bytesToBin=function(e){return e.reduce((function(e,t){return t.toString(2).padStart(8,"0")+e}),"")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.numberIsValid=t.numberToBytes=void 0;var r=n(0),o=function(e,t){return Math.log(t)/Math.log(e)},i=function(e,t){var n=e%t;return{numeral:n,nextValue:(e-n)/t}};t.numberToBytes=function(e){var t,n=0===(t=e)?0:0<t?Math.ceil((o(2,t+1)+1)/8):t<0?Math.floor((o(2,-t)+1)/8+1):0;return function(e,t){var n=new Uint8Array(t);if(e.length>t){var r=Math.pow(2,8)-1;n.fill(r)}else n.set(e);return n}(function(e){for(var t=Math.pow(2,8),n=e,r=[];n>=t;){var o=i(n,t),u=o.numeral,a=o.nextValue;r.push(u),n=a}return n>0&&r.push(n),Uint8Array.from(r)}(e<0?Math.pow(2,8*n-1)-e:e),n)};t.numberIsValid=function(e,t){var n=parseInt((0,r.hexLE)(e),16);return(1!==t||0!=n&&128!=n)&&((2!==t||!(1<=n&&n<=127||32768<=n&&n<=32895))&&((3!==t||!(1<=n&&n<=32767||8388608<=n&&n<=8421375))&&(4!==t||!(1<=n&&n<=8388607||2147483648<=n&&n<=2155872255))))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MAX_INTEGER=t.hexLE=void 0;var r=n(1);Object.defineProperty(t,"MAX_INTEGER",{enumerable:!0,get:function(){return r.MAX_INTEGER}});var o=n(0);Object.defineProperty(t,"hexLE",{enumerable:!0,get:function(){return o.hexLE}});var i=n(5);t.default=i.WizData},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WizData=void 0;var r=n(1),o=n(6),i=n(2),u=n(0),a=n(3),s=n(7),f=function(){function e(e,t,n,f,c,d){void 0===d&&(d=!0);var v="",l=new Uint8Array([]),b="",y="",h=void 0,m=void 0;this.isWitnessElement=d,void 0!==e?(v="0x"+e,l=(0,u.hexToBytes)(e),b=(0,i.bytesToBin)(l),y=e,h=(0,i.bytesToNumber)(l)):void 0!==t?(v="0b"+t,l=(0,o.binToBytes)(t),b=t,y=(0,i.bytesToHex)(l),h=(0,i.bytesToNumber)(l)):void 0!==n?(v=n,l=(0,a.numberToBytes)(n),b=(0,i.bytesToBin)(l),y=(0,i.bytesToHex)(l),h=n):void 0!==f?(v=f,l=(0,s.stringToBytes)(f),b=(0,i.bytesToBin)(l),y=(0,i.bytesToHex)(l),h=(0,i.bytesToNumber)(l),m=f):void 0!==c&&(v=c,l=c,b=(0,i.bytesToBin)(l),y=(0,i.bytesToHex)(c),h=(0,i.bytesToNumber)(l)),this.input=v,this.bytes=l,this.bin=b,this.hex=y,void 0!==h&&-r.MAX_INTEGER<=h&&h<=r.MAX_INTEGER&&(this.number=h),this.text=m}return e.fromHex=function(t,n){return new e(t,void 0,void 0,void 0,void 0,n)},e.fromBin=function(t,n){return new e(void 0,t,void 0,void 0,void 0,n)},e.fromNumber=function(t,n){return new e(void 0,void 0,t,void 0,void 0,n)},e.fromText=function(t,n){return new e(void 0,void 0,void 0,t,void 0,n)},e.fromBytes=function(t,n){return new e(void 0,void 0,void 0,void 0,t,n)},e}();t.WizData=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.binToBytes=t.binFixBytes=void 0;t.binFixBytes=function(e){return e.length%8==0?e:e.padStart(8*Math.ceil(e.length/8),"0")};t.binToBytes=function(e){return Uint8Array.from(function(e){if(!function(e){return!/[^01]/u.test(e)&&e.length%8==0}(e))throw"binToBinBytes: invalid bin string";var t=e.match(/.{1,8}/g);return null===t?[]:t.map((function(e){return e}))}(e).reverse().map((function(e){return function(e){return parseInt(e,2)}(e)})))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.stringToBytes=void 0;t.stringToBytes=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296==(64512&o)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(r+=1)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return new Uint8Array(t)}}]);
//# sourceMappingURL=wizData.umd.js.map