/*!
  * Vuesax v4.0.1-alpha.23 🖖 (https://lusaxweb.github.io/vuesax/)
  * Forged by Luis Daniel Rovira
  * Released under the MIT License.
  * Donate: https://www.patreon.com/bePatron?c=1567892
  * © 2019, Lusaxweb. (https://lusaxweb.net)
  */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):"object"==typeof exports?exports.vsPagination=e(require("vue")):t.vsPagination=e(t.Vue)}("undefined"!=typeof self?self:this,function(n){return(o={},i.m=r={0:function(t,e,n){"use strict";var r=n(4),s=n.n(r),l="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function c(n,r,i){(i?Reflect.getOwnMetadataKeys(r,i):Reflect.getOwnMetadataKeys(r)).forEach(function(t){var e=i?Reflect.getOwnMetadata(t,r,i):Reflect.getOwnMetadata(t,r);i?Reflect.defineMetadata(t,e,n,i):Reflect.defineMetadata(t,e,n)})}var u={__proto__:[]}instanceof Array;function a(i){return function(t,e,n){var r="function"==typeof t?t:t.constructor;r.__decorators__||(r.__decorators__=[]),"number"!=typeof n&&(n=void 0),r.__decorators__.push(function(t){return i(t,e,n)})}}var p=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function i(t,r){void 0===r&&(r={}),r.name=r.name||t._componentTag||t.name;var i=t.prototype;Object.getOwnPropertyNames(i).forEach(function(e){if("constructor"!==e)if(-1<p.indexOf(e))r[e]=i[e];else{var n=Object.getOwnPropertyDescriptor(i,e);void 0!==n.value?"function"==typeof n.value?(r.methods||(r.methods={}))[e]=n.value:(r.mixins||(r.mixins=[])).push({data:function(){var t;return(t={})[e]=n.value,t}}):(n.get||n.set)&&((r.computed||(r.computed={}))[e]={get:n.get,set:n.set})}}),(r.mixins||(r.mixins=[])).push({data:function(){return function(r,t){var e=t.prototype._init;t.prototype._init=function(){var t=this,e=Object.getOwnPropertyNames(r);if(r.$options.props)for(var n in r.$options.props)r.hasOwnProperty(n)||e.push(n);e.forEach(function(e){"_"!==e.charAt(0)&&Object.defineProperty(t,e,{get:function(){return r[e]},set:function(t){r[e]=t},configurable:!0})})};var n=new t;t.prototype._init=e;var i={};return Object.keys(n).forEach(function(t){void 0!==n[t]&&(i[t]=n[t])}),i}(this,t)}});var e=t.__decorators__;e&&(e.forEach(function(t){return t(r)}),delete t.__decorators__);var n=Object.getPrototypeOf(t.prototype),o=n instanceof s.a?n.constructor:s.a,a=o.extend(r);return function(i,o,a){Object.getOwnPropertyNames(o).forEach(function(t){if(!d[t]){var e=Object.getOwnPropertyDescriptor(i,t);if(!e||e.configurable){var n=Object.getOwnPropertyDescriptor(o,t);if(!u){if("cid"===t)return;var r=Object.getOwnPropertyDescriptor(a,t);if(!function(t){var e=typeof t;return null==t||"object"!=e&&"function"!=e}(n.value)&&r&&r.value===n.value)return}0,Object.defineProperty(i,t,n)}}})}(a,t,o),l&&function(e,n){c(e,n),Object.getOwnPropertyNames(n.prototype).forEach(function(t){c(e.prototype,n.prototype,t)}),Object.getOwnPropertyNames(n).forEach(function(t){c(e,n,t)})}(a,t),a}var d={prototype:!0,arguments:!0,callee:!0,caller:!0};function o(e){return"function"==typeof e?i(e):function(t){return i(t,e)}}o.registerHooks=function(t){p.push.apply(p,t)};var f=o;n.d(e,"b",function(){return g}),n.d(e,"c",function(){return y}),n.d(e,"a",function(){return f});var h="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function b(t,e,n){h&&(Array.isArray(t)||"function"==typeof t||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",e,n)))}function g(n){return void 0===n&&(n={}),function(t,e){b(n,t,e),a(function(t,e){(t.props||(t.props={}))[e]=n})(t,e)}}function y(r,t){void 0===t&&(t={});var e=t.deep,i=void 0!==e&&e,n=t.immediate,o=void 0!==n&&n;return a(function(t,e){"object"!=typeof t.watch&&(t.watch=Object.create(null));var n=t.watch;"object"!=typeof n[r]||Array.isArray(n[r])?void 0===n[r]&&(n[r]=[]):n[r]=[n[r]],n[r].push({handler:e,deep:i,immediate:o})})}},1:function(t,e){t.exports=function(n,r,t,e,i){var o={};return Object.keys(e).forEach(function(t){o[t]=e[t]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=t.slice().reverse().reduce(function(t,e){return e(n,r,t)||t},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(n,r,o),o=null),o}},10:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},11:function(t,e,n){},12:function(t,e,n){"use strict";n.d(e,"a",function(){return O});var r,i,o,a,s=n(10),l=n.n(s),c=n(2),u=n.n(c),p=n(3),d=n.n(p),f=n(5),h=n.n(f),b=n(1),g=n.n(b),y=(n(8),n(4)),v=n.n(y),m=n(0);n(11);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var O=(r=Object(m.b)({type:Boolean,default:!1}),Object(m.a)((o=function(i){function t(){for(var t,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t=i.call.apply(i,[this].concat(n))||this,u()(t,"less",a,d()(t)),t}return h()(t,i),t.prototype.render=function(t){return t("i",{staticClass:"vs-icon-arrow",class:{less:this.less},ref:"icon",on:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach(function(t){l()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},this.$listeners)})},t}(v.a),a=g()(o.prototype,"less",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i=o))||i)},2:function(t,e){t.exports=function(t,e,n,r){n&&Object.defineProperty(t,e,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}},3:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},30:function(t,e,n){},4:function(t,e){t.exports=n},5:function(t,e){t.exports=function(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}},59:function(t,e,n){"use strict";n.r(e);n(30);var r,i,o,a,s,l,c,u,p,d,f,h,b,g,y,v,m,w,O,j,P,x,C,_,B,D,k,$,z,L,A,M,W,R,E=n(2),N=n.n(E),V=n(7),I=n.n(V),S=n(3),H=n.n(S),T=n(5),q=n.n(T),K=n(1),Y=n.n(K),U=(n(8),n(0)),F=n(12),G=n(9),J=(r=Object(U.b)({}),i=Object(U.b)({default:!1,type:Boolean}),o=Object(U.b)({default:!1,type:Boolean}),a=Object(U.b)({default:!1,type:Boolean}),s=Object(U.b)({default:!1,type:Boolean}),l=Object(U.b)({default:!1,type:Boolean}),c=Object(U.b)({default:!1,type:Boolean}),u=Object(U.b)({default:!1,type:Boolean}),p=Object(U.b)({default:!1,type:Boolean}),d=Object(U.b)({default:!1,type:Boolean}),f=Object(U.b)({default:function(){return[]},type:Array}),h=Object(U.b)({default:function(){return[]},type:Array}),b=Object(U.b)({default:0,type:Number}),g=Object(U.b)({default:9,type:Number}),y=Object(U.b)({default:5,type:Number}),v=Object(U.c)("length"),m=Object(U.c)("value"),Object(U.a)((O=function(i){function t(){for(var t,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(t=i.call.apply(i,[this].concat(n))||this).val=0,t.leftActive=42,t.activeClassMove=!1,N()(t,"value",j,H()(t)),N()(t,"infinite",P,H()(t)),N()(t,"progress",x,H()(t)),N()(t,"notMargin",C,H()(t)),N()(t,"buttonsDotted",_,H()(t)),N()(t,"notArrows",B,H()(t)),N()(t,"onlyArrows",D,H()(t)),N()(t,"circle",k,H()(t)),N()(t,"square",$,H()(t)),N()(t,"disabled",z,H()(t)),N()(t,"disabledItems",L,H()(t)),N()(t,"loadingItems",A,H()(t)),N()(t,"length",M,H()(t)),N()(t,"max",W,H()(t)),N()(t,"dottedNumber",R,H()(t)),t}q()(t,i);var e=t.prototype;return e.handleLength=function(){var e=this;this.$nextTick(function(){var t=e.$refs.pagination.offsetLeft;e.leftActive=e.$refs["btn"+e.value].offsetLeft+t,setTimeout(function(){e.activeClassMove=!1},300)})},e.handleValue=function(e,t){var n=this;if(this.isDisabledItem(e)||this.isLoadingItem(e)){var r=e;t<e?r+=1:r-=1,r>this.length?r=this.infinite?1:t:r<=0&&(r=this.infinite?this.length:t),this.val=r,this.setValuePage(r)}else this.val=e,this.$refs.pagination&&(this.activeClassMove=!0,this.$nextTick(function(){var t=n.$refs.pagination.offsetLeft;n.leftActive=n.$refs["btn"+e].offsetLeft+t,setTimeout(function(){n.activeClassMove=!1},300)}))},e.setValuePage=function(t){this.$emit("input",t)},e.renderDotted=function(n){var r=this;void 0===n&&(n="...");var t=this.$createElement;return t("div",{staticClass:"vs-pagination__dotted",class:{next:this.value!=this.length&&"...>"==n},on:{click:function(t){var e=r.value!=r.length&&"...>"==n?r.val+=r.dottedNumber:r.val-=r.dottedNumber;e>r.length?e=r.length:e<1&&(e=1),r.setValuePage(e)}}},[t("span",{staticClass:"dotted"},["..."]),t("span",{staticClass:"con-arrows"},[t(F.a),t(F.a)])])},e.isDisabledItem=function(t){return-1!==this.disabledItems.indexOf(t)},e.isLoadingItem=function(t){return-1!==this.loadingItems.indexOf(t)},e.renderButton=function(e){var n=this;return void 0===e&&(e=1),(0,this.$createElement)("button",{ref:"btn"+e,staticClass:"vs-pagination__button",class:{active:e==this.value,prevActive:e==this.value-1,nextActive:e==this.value+1,disabled:this.isDisabledItem(e),loading:this.isLoadingItem(e)},on:{click:function(t){n.setValuePage(e)}}},this.buttonsDotted?"":""+e)},e.renderButtons=function(t){var e=this,n=[];return t.forEach(function(t){"...>"===t||"<..."===t?n.push(e.renderDotted(t)):n.push(e.renderButton(t))}),n},e.getButtons=function(t,e){void 0===t&&(t=1),void 0===e&&(e=6);for(var n=[];t<=e;t++)n.push(t);return n},e.mounted=function(){this.val=this.value,this.handleValue(this.value,this.val+=1)},e.render=function(t){var e=this,n=t("div",{staticClass:"vs-pagination__active",style:{left:this.leftActive+"px"},class:{move:this.activeClassMove}},this.buttonsDotted?"":this.value),r=t("div",{staticClass:"vs-pagination",ref:"pagination"},[this.getPages]),i=t("button",{staticClass:"vs-pagination__arrow",attrs:{disabled:!this.infinite&&this.val<=1},class:["prev"],on:{click:function(){var t=e.val-=1;0<t?e.setValuePage(t):e.infinite&&e.setValuePage(e.length)}}},[this.$slots.arrowPrev?this.$slots.arrowPrev:t(F.a)]),o=t("button",{staticClass:"vs-pagination__arrow",attrs:{disabled:!this.infinite&&this.val>=this.length},class:["next"],on:{click:function(){var t=e.val+=1;t<=e.length?e.setValuePage(t):e.infinite&&e.setValuePage(1)}}},[this.$slots.arrowNext?this.$slots.arrowNext:t(F.a)]),a=t("div",{staticClass:"vs-pagination__slot"},[this.$slots.default]),s=t("div",{staticClass:"vs-pagination__progress"},[t("div",{staticClass:"progress",style:{width:this.getProgress+"%"}})]);return t("div",{staticClass:"vs-pagination-content",class:[{buttonsDotted:this.buttonsDotted,circle:this.circle,square:this.square,disabled:this.disabled,notMargin:this.notMargin}]},[!this.onlyArrows&&!this.$slots.default&&n,!this.notArrows&&i,this.$slots.default&&a,!this.onlyArrows&&!this.$slots.default&&r,!this.notArrows&&o,this.progress&&s])},I()(t,[{key:"isMobile",get:function(){var t=!1;return this.$isServer||window.innerWidth<600&&(t=!0),t}},{key:"getPages",get:function(){var t=Number(this.length),e=this.isMobile?5:this.max,n=e%2==0?1:0,r=Math.floor(e/2),i=t-r+1+n;if(this.value>=r&&this.value<=i&&!this.buttonsDotted){var o=this.value-r+2,a=this.value+r-2-n;return this.renderButtons([1,"<..."].concat(this.getButtons(o,a),["...>",this.length]))}return!this.buttonsDotted&&6<this.length?this.renderButtons([].concat(this.getButtons(1,r),["...>"],this.getButtons(i,t))):this.buttonsDotted||this.length<=6?this.renderButtons([].concat(this.getButtons(1,0==this.length?1:this.length))):[]}},{key:"getProgress",get:function(){return 100*this.value/this.length}}]),t}(G.a),j=Y()(O.prototype,"value",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=Y()(O.prototype,"infinite",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=Y()(O.prototype,"progress",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=Y()(O.prototype,"notMargin",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=Y()(O.prototype,"buttonsDotted",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=Y()(O.prototype,"notArrows",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=Y()(O.prototype,"onlyArrows",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=Y()(O.prototype,"circle",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$=Y()(O.prototype,"square",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=Y()(O.prototype,"disabled",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=Y()(O.prototype,"disabledItems",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=Y()(O.prototype,"loadingItems",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=Y()(O.prototype,"length",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),W=Y()(O.prototype,"max",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=Y()(O.prototype,"dottedNumber",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Y()(O.prototype,"handleLength",[v],Object.getOwnPropertyDescriptor(O.prototype,"handleLength"),O.prototype),Y()(O.prototype,"handleValue",[m],Object.getOwnPropertyDescriptor(O.prototype,"handleValue"),O.prototype),w=O))||w);J.install=function(t){t.component("vs-pagination",J)},"undefined"!=typeof window&&window.Vue&&J.install(window.Vue);e.default=J},6:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return a});function u(t,e,n){n?"#comment"!==n.nodeName&&n.style.setProperty("--vs-"+t,e):document.documentElement.style.setProperty("--vs-"+t,e)}var r=function(t,e,n,r){var i,o=/^(rgb|rgba)/.test(e),a=/^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(e),s=/^(#)/.test(e);if("dark"==e&&n&&n.classList.add("vs-component-dark"),o){var l=e.replace(/[rgba()]/g,"").split(",");i=l[0]+","+l[1]+","+l[2],u(t,i,n),r&&n.classList.add("vs-change-color")}else if(s){var c=function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,n,r){return e+e+n+n+r+r});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}(e);i=c.r+","+c.g+","+c.b,u(t,i,n),r&&n.classList.add("vs-change-color")}else if(function(t){return["primary","secondary","success","danger","warning","dark","light","warn","facebook","twitter","youtube","pinterest","linkedin","snapchat","whatsapp","tumblr","reddit","spotify","amazon","medium","vimeo","skype","dribbble","slack","yahoo","twitch","discord","telegram","google-plus","messenger"].includes(t)}(e)){i=getComputedStyle(document.body).getPropertyValue("--vs-"+e),u(t,i,n),r&&n.classList.add("vs-change-color")}else a&&(u(t,e,n),r&&n.classList.add("vs-change-color"))},i=function(t,e){var n=e||document.body;n.insertBefore(t,n.lastChild)},o=function(t,e){var n=e.getBoundingClientRect(),r=n.x,i=n.y,o=n.width,a=n.height,s=t.style,l=window.pageYOffset,c=t.clientHeight+n.y+l;l+window.innerHeight-c<30?(s.top=i+l-t.clientHeight-4+"px",s.left=r+"px",s.width=o+"px",t.classList.add("top"),e.classList.add("top")):(s.top=i+l+a-4+"px",s.left=r+"px",s.width=o+"px",t.classList.remove("top"),e.classList.remove("top"))},a=function(t,e,n){var r=e.getBoundingClientRect(),i=r.x,o=r.y,a=r.width,s=r.height,l=t.style,c=window.pageYOffset,u=t.clientHeight+r.y+c,p=c+window.innerHeight;if(i+a+10+t.getBoundingClientRect().width>window.innerWidth&&"right"==n&&(n="left",t.classList.remove("right"),t.classList.add("left")),i-10<t.getBoundingClientRect().width&&"left"==n&&(n="top",t.classList.remove("left"),t.classList.add("top")),p-u<30||"top"==n){l.top=o+c-t.clientHeight-8+"px";var d=i+(a-t.getBoundingClientRect().width)/2;d+t.getBoundingClientRect().width<window.innerWidth?0<d?l.left=d+"px":(l.left="10px",t.classList.add("notArrow")):(l.left="auto",l.right="10px",t.classList.add("notArrow"))}else if("bottom"==n){l.top=o+c+s+8+"px";var f=i+(a-t.getBoundingClientRect().width)/2;f+t.getBoundingClientRect().width<window.innerWidth?0<f?l.left=f+"px":(l.left="10px",t.classList.add("notArrow")):(l.left="auto",l.right="10px",t.classList.add("notArrow"))}else"left"==n?(l.top=o+c+(s-t.getBoundingClientRect().height)/2+"px",l.left=i-t.getBoundingClientRect().width-8+"px"):"right"==n&&(l.top=o+c+(s-t.getBoundingClientRect().height)/2+"px",l.left=i+a+8+"px")}},7:function(t,e){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},8:function(t,e){t.exports=function(t,e){throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")}},9:function(t,e,n){"use strict";n.d(e,"a",function(){return S});var r,i,o,a,s,l,c,u,p,d,f,h,b,g,y,v,m,w,O,j,P,x,C,_,B=n(2),D=n.n(B),k=n(7),$=n.n(k),z=n(3),L=n.n(z),A=n(5),M=n.n(A),W=n(1),R=n.n(W),E=(n(8),n(4)),N=n.n(E),V=n(0),I=n(6),S=(r=Object(V.b)({type:String,default:null}),i=Object(V.b)({type:Boolean,default:!1}),o=Object(V.b)({type:Boolean,default:!1}),a=Object(V.b)({type:Boolean,default:!1}),s=Object(V.b)({type:Boolean,default:!1}),l=Object(V.b)({type:Boolean,default:!1}),c=Object(V.b)({type:Boolean,default:!1}),u=Object(V.c)("color"),p=Object(V.c)("primary"),d=Object(V.c)("danger"),f=Object(V.c)("success"),h=Object(V.c)("warn"),b=Object(V.c)("dark"),Object(V.a)((_=C=function(i){function t(){for(var t,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(t=i.call.apply(i,[this].concat(n))||this).componentColor=null,D()(t,"color",v,L()(t)),D()(t,"danger",m,L()(t)),D()(t,"success",w,L()(t)),D()(t,"warn",O,L()(t)),D()(t,"dark",j,L()(t)),D()(t,"primary",P,L()(t)),D()(t,"active",x,L()(t)),t}M()(t,i);var e=t.prototype;return e.changeColor=function(){this.$el&&"#comment"!=this.$el.nodeName&&(this.componentColor=(this.danger?"danger":this.success&&"success")||this.warn&&"warn"||this.dark&&"dark"||this.primary&&"primary",(this.color||this.componentColor)&&(Object(I.b)("color",this.componentColor||this.color||"primary",this.$el,!0),this.$refs.options&&Object(I.b)("color",this.componentColor||this.color||"primary",this.$refs.options,!0),this.$refs.tooltip&&Object(I.b)("color",this.componentColor||this.color||"primary",this.$refs.tooltip,!0)),"dark"==this.componentColor||"dark"==this.color?this.$el.classList.add("vs-component-dark"):this.$el.classList.remove("vs-component-dark"),"white"==this.componentColor?this.$el.classList.add("vs-component-white"):this.$el.classList.remove("vs-component-white"))},e.handleWatchColor=function(){this.changeColor()},e.handleWatchPrimary=function(){this.changeColor()},e.handleWatchDanger=function(){this.changeColor()},e.handleWatchSuccess=function(){this.changeColor()},e.handleWatchWarn=function(){this.changeColor()},e.handleWatchDark=function(){this.changeColor()},e.updated=function(){this.changeColor()},e.mounted=function(){this.changeColor()},$()(t,[{key:"isColorDark",get:function(){return"dark"===this.color||this.dark||"dark"===this.componentColor}}]),t}(N.a),C.install=void 0,C.use=void 0,y=_,v=R()(y.prototype,"color",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=R()(y.prototype,"danger",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=R()(y.prototype,"success",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=R()(y.prototype,"warn",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=R()(y.prototype,"dark",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=R()(y.prototype,"primary",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=R()(y.prototype,"active",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R()(y.prototype,"handleWatchColor",[u],Object.getOwnPropertyDescriptor(y.prototype,"handleWatchColor"),y.prototype),R()(y.prototype,"handleWatchPrimary",[p],Object.getOwnPropertyDescriptor(y.prototype,"handleWatchPrimary"),y.prototype),R()(y.prototype,"handleWatchDanger",[d],Object.getOwnPropertyDescriptor(y.prototype,"handleWatchDanger"),y.prototype),R()(y.prototype,"handleWatchSuccess",[f],Object.getOwnPropertyDescriptor(y.prototype,"handleWatchSuccess"),y.prototype),R()(y.prototype,"handleWatchWarn",[h],Object.getOwnPropertyDescriptor(y.prototype,"handleWatchWarn"),y.prototype),R()(y.prototype,"handleWatchDark",[b],Object.getOwnPropertyDescriptor(y.prototype,"handleWatchDark"),y.prototype),g=y))||g)}},i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=59)).default;function i(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}var r,o});