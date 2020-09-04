/*!
  * Vuesax v4.0.1-alpha.23 🖖 (https://lusaxweb.github.io/vuesax/)
  * Forged by Luis Daniel Rovira
  * Released under the MIT License.
  * Donate: https://www.patreon.com/bePatron?c=1567892
  * © 2019, Lusaxweb. (https://lusaxweb.net)
  */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports.vsSwitch=t(require("vue")):e.vsSwitch=t(e.Vue)}("undefined"!=typeof self?self:this,function(n){return(i={},o.m=r={0:function(e,t,n){"use strict";var r=n(4),c=n.n(r),l="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function s(n,r,o){(o?Reflect.getOwnMetadataKeys(r,o):Reflect.getOwnMetadataKeys(r)).forEach(function(e){var t=o?Reflect.getOwnMetadata(e,r,o):Reflect.getOwnMetadata(e,r);o?Reflect.defineMetadata(e,t,n,o):Reflect.defineMetadata(e,t,n)})}var u={__proto__:[]}instanceof Array;function a(o){return function(e,t,n){var r="function"==typeof e?e:e.constructor;r.__decorators__||(r.__decorators__=[]),"number"!=typeof n&&(n=void 0),r.__decorators__.push(function(e){return o(e,t,n)})}}var p=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function o(e,r){void 0===r&&(r={}),r.name=r.name||e._componentTag||e.name;var o=e.prototype;Object.getOwnPropertyNames(o).forEach(function(t){if("constructor"!==t)if(-1<p.indexOf(t))r[t]=o[t];else{var n=Object.getOwnPropertyDescriptor(o,t);void 0!==n.value?"function"==typeof n.value?(r.methods||(r.methods={}))[t]=n.value:(r.mixins||(r.mixins=[])).push({data:function(){var e;return(e={})[t]=n.value,e}}):(n.get||n.set)&&((r.computed||(r.computed={}))[t]={get:n.get,set:n.set})}}),(r.mixins||(r.mixins=[])).push({data:function(){return function(r,e){var t=e.prototype._init;e.prototype._init=function(){var e=this,t=Object.getOwnPropertyNames(r);if(r.$options.props)for(var n in r.$options.props)r.hasOwnProperty(n)||t.push(n);t.forEach(function(t){"_"!==t.charAt(0)&&Object.defineProperty(e,t,{get:function(){return r[t]},set:function(e){r[t]=e},configurable:!0})})};var n=new e;e.prototype._init=t;var o={};return Object.keys(n).forEach(function(e){void 0!==n[e]&&(o[e]=n[e])}),o}(this,e)}});var t=e.__decorators__;t&&(t.forEach(function(e){return e(r)}),delete e.__decorators__);var n=Object.getPrototypeOf(e.prototype),i=n instanceof c.a?n.constructor:c.a,a=i.extend(r);return function(o,i,a){Object.getOwnPropertyNames(i).forEach(function(e){if(!f[e]){var t=Object.getOwnPropertyDescriptor(o,e);if(!t||t.configurable){var n=Object.getOwnPropertyDescriptor(i,e);if(!u){if("cid"===e)return;var r=Object.getOwnPropertyDescriptor(a,e);if(!function(e){var t=typeof e;return null==e||"object"!=t&&"function"!=t}(n.value)&&r&&r.value===n.value)return}0,Object.defineProperty(o,e,n)}}})}(a,e,i),l&&function(t,n){s(t,n),Object.getOwnPropertyNames(n.prototype).forEach(function(e){s(t.prototype,n.prototype,e)}),Object.getOwnPropertyNames(n).forEach(function(e){s(t,n,e)})}(a,e),a}var f={prototype:!0,arguments:!0,callee:!0,caller:!0};function i(t){return"function"==typeof t?o(t):function(e){return o(e,t)}}i.registerHooks=function(e){p.push.apply(p,e)};var d=i;n.d(t,"b",function(){return y}),n.d(t,"c",function(){return g}),n.d(t,"a",function(){return d});var h="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function b(e,t,n){h&&(Array.isArray(e)||"function"==typeof e||void 0!==e.type||(e.type=Reflect.getMetadata("design:type",t,n)))}function y(n){return void 0===n&&(n={}),function(e,t){b(n,e,t),a(function(e,t){(e.props||(e.props={}))[t]=n})(e,t)}}function g(r,e){void 0===e&&(e={});var t=e.deep,o=void 0!==t&&t,n=e.immediate,i=void 0!==n&&n;return a(function(e,t){"object"!=typeof e.watch&&(e.watch=Object.create(null));var n=e.watch;"object"!=typeof n[r]||Array.isArray(n[r])?void 0===n[r]&&(n[r]=[]):n[r]=[n[r]],n[r].push({handler:t,deep:o,immediate:i})})}},1:function(e,t){e.exports=function(n,r,e,t,o){var i={};return Object.keys(t).forEach(function(e){i[e]=t[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=e.slice().reverse().reduce(function(e,t){return t(n,r,e)||e},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(n,r,i),i=null),i}},10:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},2:function(e,t){e.exports=function(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}},21:function(e,t,n){},3:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},4:function(e,t){e.exports=n},5:function(e,t){e.exports=function(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}},51:function(e,t,n){"use strict";n.r(t);n(21);var r,o,i,a,c,l,s,u,p,f,d,h,b,y,g,v,m=n(10),w=n.n(m),O=n(2),j=n.n(O),x=n(7),_=n.n(x),P=n(3),C=n.n(P),k=n(5),$=n.n(k),R=n(1),W=n.n(R),z=(n(8),n(0)),D=n(9);function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?B(n,!0).forEach(function(e){w()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var L=(r=Object(z.b)({default:""}),o=Object(z.b)({default:""}),i=Object(z.b)({default:""}),a=Object(z.b)({type:Boolean,default:!1}),c=Object(z.b)({type:Boolean,default:!1}),l=Object(z.b)({type:Boolean,default:!1}),s=Object(z.b)({type:Boolean,default:!1}),Object(z.a)((p=function(o){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=o.call.apply(o,[this].concat(n))||this,j()(e,"value",f,C()(e)),j()(e,"val",d,C()(e)),j()(e,"notValue",h,C()(e)),j()(e,"loading",b,C()(e)),j()(e,"square",y,C()(e)),j()(e,"indeterminate",g,C()(e)),j()(e,"icon",v,C()(e)),e}return $()(e,o),e.prototype.render=function(e){var o=this,t=e("div",{class:["vs-switch__circle"]},[this.$slots.circle]),n=e("div",{ref:"on",class:["vs-switch__text","on"]},[this.$slots.on||this.$slots.default]),r=e("div",{ref:"off",class:["vs-switch__text","off"]},[this.$slots.off||this.$slots.default]),i=e("div",{class:["vs-switch__background"]}),a=e("input",{attrs:S({},this.$attrs,{type:"checkbox"}),domProps:{checked:this.isChecked},on:S({},this.$listeners,{input:function(e){if("boolean"==typeof o.value)o.$emit("input",!o.value);else if("object"==typeof o.value&&null!==o.value){var t=o.value,n=-1===t.indexOf(o.val)&&-1===JSON.stringify(t).indexOf(JSON.stringify(o.val)),r=0;t.forEach(function(e,t){JSON.stringify(e)==JSON.stringify(o.val)&&(r=t)}),n?t.push(o.val):t.splice(r,1),o.$emit("input",t)}else o.val!==o.value?o.$emit("input",o.val):o.$emit("input",o.notValue||null);o.$emit("change",e)}}),class:["vs-switch__input"]});return e("div",{staticClass:"vs-switch",attrs:{type:"checkbox"},class:{"vs-switch--loading":this.loading,"vs-switch--square":this.square,"vs-switch--indeterminate":this.indeterminate,"vs-switch--icon":this.icon}},[a,t,n,r,i])},_()(e,[{key:"isChecked",get:function(){var n=this,e=!1;if(this.value){if("boolean"==typeof this.value)e=this.value;else if("object"==typeof this.value&&null!==this.value){var t=this.value,r=-1===t.indexOf(this.val)&&-1===JSON.stringify(t).indexOf(JSON.stringify(this.val));return t.forEach(function(e,t){JSON.stringify(e)==JSON.stringify(n.val)&&t}),!r}}else e=!1;return e}}]),e}(D.a),f=W()(p.prototype,"value",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=W()(p.prototype,"val",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=W()(p.prototype,"notValue",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=W()(p.prototype,"loading",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=W()(p.prototype,"square",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=W()(p.prototype,"indeterminate",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=W()(p.prototype,"icon",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=p))||u);L.install=function(e){e.component("vs-switch",L)},"undefined"!=typeof window&&window.Vue&&L.install(window.Vue);t.default=L},6:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return a});function u(e,t,n){n?"#comment"!==n.nodeName&&n.style.setProperty("--vs-"+e,t):document.documentElement.style.setProperty("--vs-"+e,t)}var r=function(e,t,n,r){var o,i=/^(rgb|rgba)/.test(t),a=/^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(t),c=/^(#)/.test(t);if("dark"==t&&n&&n.classList.add("vs-component-dark"),i){var l=t.replace(/[rgba()]/g,"").split(",");o=l[0]+","+l[1]+","+l[2],u(e,o,n),r&&n.classList.add("vs-change-color")}else if(c){var s=function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(t);o=s.r+","+s.g+","+s.b,u(e,o,n),r&&n.classList.add("vs-change-color")}else if(function(e){return["primary","secondary","success","danger","warning","dark","light","warn","facebook","twitter","youtube","pinterest","linkedin","snapchat","whatsapp","tumblr","reddit","spotify","amazon","medium","vimeo","skype","dribbble","slack","yahoo","twitch","discord","telegram","google-plus","messenger"].includes(e)}(t)){o=getComputedStyle(document.body).getPropertyValue("--vs-"+t),u(e,o,n),r&&n.classList.add("vs-change-color")}else a&&(u(e,t,n),r&&n.classList.add("vs-change-color"))},o=function(e,t){var n=t||document.body;n.insertBefore(e,n.lastChild)},i=function(e,t){var n=t.getBoundingClientRect(),r=n.x,o=n.y,i=n.width,a=n.height,c=e.style,l=window.pageYOffset,s=e.clientHeight+n.y+l;l+window.innerHeight-s<30?(c.top=o+l-e.clientHeight-4+"px",c.left=r+"px",c.width=i+"px",e.classList.add("top"),t.classList.add("top")):(c.top=o+l+a-4+"px",c.left=r+"px",c.width=i+"px",e.classList.remove("top"),t.classList.remove("top"))},a=function(e,t,n){var r=t.getBoundingClientRect(),o=r.x,i=r.y,a=r.width,c=r.height,l=e.style,s=window.pageYOffset,u=e.clientHeight+r.y+s,p=s+window.innerHeight;if(o+a+10+e.getBoundingClientRect().width>window.innerWidth&&"right"==n&&(n="left",e.classList.remove("right"),e.classList.add("left")),o-10<e.getBoundingClientRect().width&&"left"==n&&(n="top",e.classList.remove("left"),e.classList.add("top")),p-u<30||"top"==n){l.top=i+s-e.clientHeight-8+"px";var f=o+(a-e.getBoundingClientRect().width)/2;f+e.getBoundingClientRect().width<window.innerWidth?0<f?l.left=f+"px":(l.left="10px",e.classList.add("notArrow")):(l.left="auto",l.right="10px",e.classList.add("notArrow"))}else if("bottom"==n){l.top=i+s+c+8+"px";var d=o+(a-e.getBoundingClientRect().width)/2;d+e.getBoundingClientRect().width<window.innerWidth?0<d?l.left=d+"px":(l.left="10px",e.classList.add("notArrow")):(l.left="auto",l.right="10px",e.classList.add("notArrow"))}else"left"==n?(l.top=i+s+(c-e.getBoundingClientRect().height)/2+"px",l.left=o-e.getBoundingClientRect().width-8+"px"):"right"==n&&(l.top=i+s+(c-e.getBoundingClientRect().height)/2+"px",l.left=o+a+8+"px")}},7:function(e,t){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},8:function(e,t){e.exports=function(e,t){throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")}},9:function(e,t,n){"use strict";n.d(t,"a",function(){return H});var r,o,i,a,c,l,s,u,p,f,d,h,b,y,g,v,m,w,O,j,x,_,P,C,k=n(2),$=n.n(k),R=n(7),W=n.n(R),z=n(3),D=n.n(z),B=n(5),S=n.n(B),L=n(1),E=n.n(L),M=(n(8),n(4)),N=n.n(M),A=n(0),J=n(6),H=(r=Object(A.b)({type:String,default:null}),o=Object(A.b)({type:Boolean,default:!1}),i=Object(A.b)({type:Boolean,default:!1}),a=Object(A.b)({type:Boolean,default:!1}),c=Object(A.b)({type:Boolean,default:!1}),l=Object(A.b)({type:Boolean,default:!1}),s=Object(A.b)({type:Boolean,default:!1}),u=Object(A.c)("color"),p=Object(A.c)("primary"),f=Object(A.c)("danger"),d=Object(A.c)("success"),h=Object(A.c)("warn"),b=Object(A.c)("dark"),Object(A.a)((C=P=function(o){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=o.call.apply(o,[this].concat(n))||this).componentColor=null,$()(e,"color",v,D()(e)),$()(e,"danger",m,D()(e)),$()(e,"success",w,D()(e)),$()(e,"warn",O,D()(e)),$()(e,"dark",j,D()(e)),$()(e,"primary",x,D()(e)),$()(e,"active",_,D()(e)),e}S()(e,o);var t=e.prototype;return t.changeColor=function(){this.$el&&"#comment"!=this.$el.nodeName&&(this.componentColor=(this.danger?"danger":this.success&&"success")||this.warn&&"warn"||this.dark&&"dark"||this.primary&&"primary",(this.color||this.componentColor)&&(Object(J.b)("color",this.componentColor||this.color||"primary",this.$el,!0),this.$refs.options&&Object(J.b)("color",this.componentColor||this.color||"primary",this.$refs.options,!0),this.$refs.tooltip&&Object(J.b)("color",this.componentColor||this.color||"primary",this.$refs.tooltip,!0)),"dark"==this.componentColor||"dark"==this.color?this.$el.classList.add("vs-component-dark"):this.$el.classList.remove("vs-component-dark"),"white"==this.componentColor?this.$el.classList.add("vs-component-white"):this.$el.classList.remove("vs-component-white"))},t.handleWatchColor=function(){this.changeColor()},t.handleWatchPrimary=function(){this.changeColor()},t.handleWatchDanger=function(){this.changeColor()},t.handleWatchSuccess=function(){this.changeColor()},t.handleWatchWarn=function(){this.changeColor()},t.handleWatchDark=function(){this.changeColor()},t.updated=function(){this.changeColor()},t.mounted=function(){this.changeColor()},W()(e,[{key:"isColorDark",get:function(){return"dark"===this.color||this.dark||"dark"===this.componentColor}}]),e}(N.a),P.install=void 0,P.use=void 0,g=C,v=E()(g.prototype,"color",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=E()(g.prototype,"danger",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=E()(g.prototype,"success",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=E()(g.prototype,"warn",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=E()(g.prototype,"dark",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=E()(g.prototype,"primary",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=E()(g.prototype,"active",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E()(g.prototype,"handleWatchColor",[u],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchColor"),g.prototype),E()(g.prototype,"handleWatchPrimary",[p],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchPrimary"),g.prototype),E()(g.prototype,"handleWatchDanger",[f],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchDanger"),g.prototype),E()(g.prototype,"handleWatchSuccess",[d],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchSuccess"),g.prototype),E()(g.prototype,"handleWatchWarn",[h],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchWarn"),g.prototype),E()(g.prototype,"handleWatchDark",[b],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchDark"),g.prototype),y=g))||y)}},o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o(o.s=51)).default;function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var r,i});