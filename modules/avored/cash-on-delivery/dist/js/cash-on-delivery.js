!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){AvoRed.initialize((function(e){e.component("avored-cash-on-delivery",t(2).default)}))},function(e,n,t){"use strict";t.r(n);var r=function(e,n,t,r,o,i,a,u){var s,c="function"==typeof e?e.options:e;if(n&&(c.render=n,c.staticRenderFns=t,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=s):o&&(s=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(c.functional){c._injectStyles=s;var l=c.render;c.render=function(e,n){return s.call(n),l(e,n)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,s):[s]}return{exports:e,options:c}}({name:"avored-cash-on-delivery",props:[],data:function(){return{selectedCashOnDeliveryPaymentOption:!1}},methods:{handlePaymentChange:function(e,n){this.selectedCashOnDeliveryPaymentOption=!!e,EventBus.$emit("selectedPaymentIdentifier",n)}},mounted:function(){var e=this,n=EventBus;n.$on("placeOrderBefore",(function(){e.selectedCashOnDeliveryPaymentOption&&n.$emit("placeOrderAfter")}))}},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("a-switch",{on:{change:function(n){return e.handlePaymentChange(n,"a-cash-on-delivery")}}}),e._v(" \n    Cash On Delivery\n")],1)}),[],!1,null,null,null);n.default=r.exports}]);