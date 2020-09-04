/*!
  * Vuesax v4.0.1-alpha.23 🖖 (https://lusaxweb.github.io/vuesax/)
  * Forged by Luis Daniel Rovira
  * Released under the MIT License.
  * Donate: https://www.patreon.com/bePatron?c=1567892
  * © 2019, Lusaxweb. (https://lusaxweb.net)
  */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):"object"==typeof exports?exports.vsCard=e(require("vue")):t.vsCard=e(t.Vue)}("undefined"!=typeof self?self:this,function(r){return(i={},o.m=n={0:function(t,e,r){"use strict";var n=r(4),c=r.n(n),s="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function l(r,n,o){(o?Reflect.getOwnMetadataKeys(n,o):Reflect.getOwnMetadataKeys(n)).forEach(function(t){var e=o?Reflect.getOwnMetadata(t,n,o):Reflect.getOwnMetadata(t,n);o?Reflect.defineMetadata(t,e,r,o):Reflect.defineMetadata(t,e,r)})}var u={__proto__:[]}instanceof Array;function a(o){return function(t,e,r){var n="function"==typeof t?t:t.constructor;n.__decorators__||(n.__decorators__=[]),"number"!=typeof r&&(r=void 0),n.__decorators__.push(function(t){return o(t,e,r)})}}var p=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function o(t,n){void 0===n&&(n={}),n.name=n.name||t._componentTag||t.name;var o=t.prototype;Object.getOwnPropertyNames(o).forEach(function(e){if("constructor"!==e)if(-1<p.indexOf(e))n[e]=o[e];else{var r=Object.getOwnPropertyDescriptor(o,e);void 0!==r.value?"function"==typeof r.value?(n.methods||(n.methods={}))[e]=r.value:(n.mixins||(n.mixins=[])).push({data:function(){var t;return(t={})[e]=r.value,t}}):(r.get||r.set)&&((n.computed||(n.computed={}))[e]={get:r.get,set:r.set})}}),(n.mixins||(n.mixins=[])).push({data:function(){return function(n,t){var e=t.prototype._init;t.prototype._init=function(){var t=this,e=Object.getOwnPropertyNames(n);if(n.$options.props)for(var r in n.$options.props)n.hasOwnProperty(r)||e.push(r);e.forEach(function(e){"_"!==e.charAt(0)&&Object.defineProperty(t,e,{get:function(){return n[e]},set:function(t){n[e]=t},configurable:!0})})};var r=new t;t.prototype._init=e;var o={};return Object.keys(r).forEach(function(t){void 0!==r[t]&&(o[t]=r[t])}),o}(this,t)}});var e=t.__decorators__;e&&(e.forEach(function(t){return t(n)}),delete t.__decorators__);var r=Object.getPrototypeOf(t.prototype),i=r instanceof c.a?r.constructor:c.a,a=i.extend(n);return function(o,i,a){Object.getOwnPropertyNames(i).forEach(function(t){if(!d[t]){var e=Object.getOwnPropertyDescriptor(o,t);if(!e||e.configurable){var r=Object.getOwnPropertyDescriptor(i,t);if(!u){if("cid"===t)return;var n=Object.getOwnPropertyDescriptor(a,t);if(!function(t){var e=typeof t;return null==t||"object"!=e&&"function"!=e}(r.value)&&n&&n.value===r.value)return}0,Object.defineProperty(o,t,r)}}})}(a,t,i),s&&function(e,r){l(e,r),Object.getOwnPropertyNames(r.prototype).forEach(function(t){l(e.prototype,r.prototype,t)}),Object.getOwnPropertyNames(r).forEach(function(t){l(e,r,t)})}(a,t),a}var d={prototype:!0,arguments:!0,callee:!0,caller:!0};function i(e){return"function"==typeof e?o(e):function(t){return o(t,e)}}i.registerHooks=function(t){p.push.apply(p,t)};var f=i;r.d(e,"b",function(){return b}),r.d(e,"c",function(){return g}),r.d(e,"a",function(){return f});var h="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function y(t,e,r){h&&(Array.isArray(t)||"function"==typeof t||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",e,r)))}function b(r){return void 0===r&&(r={}),function(t,e){y(r,t,e),a(function(t,e){(t.props||(t.props={}))[e]=r})(t,e)}}function g(n,t){void 0===t&&(t={});var e=t.deep,o=void 0!==e&&e,r=t.immediate,i=void 0!==r&&r;return a(function(t,e){"object"!=typeof t.watch&&(t.watch=Object.create(null));var r=t.watch;"object"!=typeof r[n]||Array.isArray(r[n])?void 0===r[n]&&(r[n]=[]):r[n]=[r[n]],r[n].push({handler:e,deep:o,immediate:i})})}},1:function(t,e){t.exports=function(r,n,t,e,o){var i={};return Object.keys(e).forEach(function(t){i[t]=e[t]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=t.slice().reverse().reduce(function(t,e){return e(r,n,t)||t},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(r,n,i),i=null),i}},10:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},2:function(t,e){t.exports=function(t,e,r,n){r&&Object.defineProperty(t,e,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}},3:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},4:function(t,e){t.exports=r},43:function(t,e,r){},5:function(t,e){t.exports=function(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}},6:function(t,e,r){"use strict";r.d(e,"b",function(){return n}),r.d(e,"a",function(){return o}),r.d(e,"c",function(){return i}),r.d(e,"d",function(){return a});function u(t,e,r){r?"#comment"!==r.nodeName&&r.style.setProperty("--vs-"+t,e):document.documentElement.style.setProperty("--vs-"+t,e)}var n=function(t,e,r,n){var o,i=/^(rgb|rgba)/.test(e),a=/^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(e),c=/^(#)/.test(e);if("dark"==e&&r&&r.classList.add("vs-component-dark"),i){var s=e.replace(/[rgba()]/g,"").split(",");o=s[0]+","+s[1]+","+s[2],u(t,o,r),n&&r.classList.add("vs-change-color")}else if(c){var l=function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,r,n){return e+e+r+r+n+n});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}(e);o=l.r+","+l.g+","+l.b,u(t,o,r),n&&r.classList.add("vs-change-color")}else if(function(t){return["primary","secondary","success","danger","warning","dark","light","warn","facebook","twitter","youtube","pinterest","linkedin","snapchat","whatsapp","tumblr","reddit","spotify","amazon","medium","vimeo","skype","dribbble","slack","yahoo","twitch","discord","telegram","google-plus","messenger"].includes(t)}(e)){o=getComputedStyle(document.body).getPropertyValue("--vs-"+e),u(t,o,r),n&&r.classList.add("vs-change-color")}else a&&(u(t,e,r),n&&r.classList.add("vs-change-color"))},o=function(t,e){var r=e||document.body;r.insertBefore(t,r.lastChild)},i=function(t,e){var r=e.getBoundingClientRect(),n=r.x,o=r.y,i=r.width,a=r.height,c=t.style,s=window.pageYOffset,l=t.clientHeight+r.y+s;s+window.innerHeight-l<30?(c.top=o+s-t.clientHeight-4+"px",c.left=n+"px",c.width=i+"px",t.classList.add("top"),e.classList.add("top")):(c.top=o+s+a-4+"px",c.left=n+"px",c.width=i+"px",t.classList.remove("top"),e.classList.remove("top"))},a=function(t,e,r){var n=e.getBoundingClientRect(),o=n.x,i=n.y,a=n.width,c=n.height,s=t.style,l=window.pageYOffset,u=t.clientHeight+n.y+l,p=l+window.innerHeight;if(o+a+10+t.getBoundingClientRect().width>window.innerWidth&&"right"==r&&(r="left",t.classList.remove("right"),t.classList.add("left")),o-10<t.getBoundingClientRect().width&&"left"==r&&(r="top",t.classList.remove("left"),t.classList.add("top")),p-u<30||"top"==r){s.top=i+l-t.clientHeight-8+"px";var d=o+(a-t.getBoundingClientRect().width)/2;d+t.getBoundingClientRect().width<window.innerWidth?0<d?s.left=d+"px":(s.left="10px",t.classList.add("notArrow")):(s.left="auto",s.right="10px",t.classList.add("notArrow"))}else if("bottom"==r){s.top=i+l+c+8+"px";var f=o+(a-t.getBoundingClientRect().width)/2;f+t.getBoundingClientRect().width<window.innerWidth?0<f?s.left=f+"px":(s.left="10px",t.classList.add("notArrow")):(s.left="auto",s.right="10px",t.classList.add("notArrow"))}else"left"==r?(s.top=i+l+(c-t.getBoundingClientRect().height)/2+"px",s.left=o-t.getBoundingClientRect().width-8+"px"):"right"==r&&(s.top=i+l+(c-t.getBoundingClientRect().height)/2+"px",s.left=o+a+8+"px")}},69:function(t,e,r){"use strict";r.r(e);r(43);var n,o,i,a,c=r(10),s=r.n(c),l=r(2),u=r.n(l),p=r(3),d=r.n(p),f=r(5),h=r.n(f),y=r(1),b=r.n(y),g=(r(8),r(0)),v=r(9);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var w=(n=Object(g.b)({default:"1",type:[String,Boolean]}),Object(g.a)((i=function(o){function t(){for(var t,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t=o.call.apply(o,[this].concat(r))||this,u()(t,"type",a,d()(t)),t}return h()(t,o),t.prototype.render=function(t){var e=t("div",{staticClass:"vs-card__title"},[this.$slots.title]),r=t("div",{staticClass:"vs-card__text"},[this.$slots.title&&e,this.$slots.text]),n=t("div",{staticClass:"vs-card__buttons"},[this.$slots.buttons]),o=t("div",{staticClass:"vs-card__interactions"},[this.$slots.interactions]),i=t("div",{staticClass:"vs-card__img"},[this.$slots.img,this.$slots.interactions&&o]),a=t("div",{staticClass:"vs-card",on:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach(function(t){s()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},this.$listeners)},[this.$slots.img&&i,this.$slots.text&&r,this.$slots.buttons&&n]);return t("div",{staticClass:"vs-card-content",class:["type-"+this.type]},[a])},t}(v.a),a=b()(i.prototype,"type",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o=i))||o);w.install=function(t){t.component("vs-card",w)},"undefined"!=typeof window&&window.Vue&&w.install(window.Vue);e.default=w},7:function(t,e){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},8:function(t,e){t.exports=function(t,e){throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")}},9:function(t,e,r){"use strict";r.d(e,"a",function(){return V});var n,o,i,a,c,s,l,u,p,d,f,h,y,b,g,v,m,w,O,j,_,x,C,P,k=r(2),$=r.n(k),R=r(7),W=r.n(R),D=r(3),L=r.n(D),B=r(5),z=r.n(B),M=r(1),E=r.n(M),S=(r(8),r(4)),A=r.n(S),H=r(0),N=r(6),V=(n=Object(H.b)({type:String,default:null}),o=Object(H.b)({type:Boolean,default:!1}),i=Object(H.b)({type:Boolean,default:!1}),a=Object(H.b)({type:Boolean,default:!1}),c=Object(H.b)({type:Boolean,default:!1}),s=Object(H.b)({type:Boolean,default:!1}),l=Object(H.b)({type:Boolean,default:!1}),u=Object(H.c)("color"),p=Object(H.c)("primary"),d=Object(H.c)("danger"),f=Object(H.c)("success"),h=Object(H.c)("warn"),y=Object(H.c)("dark"),Object(H.a)((P=C=function(o){function t(){for(var t,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return(t=o.call.apply(o,[this].concat(r))||this).componentColor=null,$()(t,"color",v,L()(t)),$()(t,"danger",m,L()(t)),$()(t,"success",w,L()(t)),$()(t,"warn",O,L()(t)),$()(t,"dark",j,L()(t)),$()(t,"primary",_,L()(t)),$()(t,"active",x,L()(t)),t}z()(t,o);var e=t.prototype;return e.changeColor=function(){this.$el&&"#comment"!=this.$el.nodeName&&(this.componentColor=(this.danger?"danger":this.success&&"success")||this.warn&&"warn"||this.dark&&"dark"||this.primary&&"primary",(this.color||this.componentColor)&&(Object(N.b)("color",this.componentColor||this.color||"primary",this.$el,!0),this.$refs.options&&Object(N.b)("color",this.componentColor||this.color||"primary",this.$refs.options,!0),this.$refs.tooltip&&Object(N.b)("color",this.componentColor||this.color||"primary",this.$refs.tooltip,!0)),"dark"==this.componentColor||"dark"==this.color?this.$el.classList.add("vs-component-dark"):this.$el.classList.remove("vs-component-dark"),"white"==this.componentColor?this.$el.classList.add("vs-component-white"):this.$el.classList.remove("vs-component-white"))},e.handleWatchColor=function(){this.changeColor()},e.handleWatchPrimary=function(){this.changeColor()},e.handleWatchDanger=function(){this.changeColor()},e.handleWatchSuccess=function(){this.changeColor()},e.handleWatchWarn=function(){this.changeColor()},e.handleWatchDark=function(){this.changeColor()},e.updated=function(){this.changeColor()},e.mounted=function(){this.changeColor()},W()(t,[{key:"isColorDark",get:function(){return"dark"===this.color||this.dark||"dark"===this.componentColor}}]),t}(A.a),C.install=void 0,C.use=void 0,g=P,v=E()(g.prototype,"color",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=E()(g.prototype,"danger",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=E()(g.prototype,"success",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=E()(g.prototype,"warn",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=E()(g.prototype,"dark",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=E()(g.prototype,"primary",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=E()(g.prototype,"active",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E()(g.prototype,"handleWatchColor",[u],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchColor"),g.prototype),E()(g.prototype,"handleWatchPrimary",[p],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchPrimary"),g.prototype),E()(g.prototype,"handleWatchDanger",[d],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchDanger"),g.prototype),E()(g.prototype,"handleWatchSuccess",[f],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchSuccess"),g.prototype),E()(g.prototype,"handleWatchWarn",[h],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchWarn"),g.prototype),E()(g.prototype,"handleWatchDark",[y],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchDark"),g.prototype),b=g))||b)}},o.c=i,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist/",o(o.s=69)).default;function o(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}var n,i});