(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["keyboard"] = factory(require("vue"));
	else
		root["keyboard"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 744:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/car-number-keyboard/carNumberKeyboard.vue?vue&type=template&id=25af4289&scoped=true


const _withScopeId = n => (_pushScopeId("data-v-25af4289"),n=n(),_popScopeId(),n)
const _hoisted_1 = { class: "keyboardBox" }
const _hoisted_2 = {
  key: 0,
  class: "keyboardInputBox"
}
const _hoisted_3 = ["onClick"]
const _hoisted_4 = {
  key: 0,
  class: "keyboardInputBox"
}
const _hoisted_5 = ["onClick"]
const _hoisted_6 = { class: "keyboardHead" }
const _hoisted_7 = { class: "keyboardContent" }
const _hoisted_8 = { class: "keyboardList" }
const _hoisted_9 = ["onClick"]
const _hoisted_10 = { class: "keyboardList" }
const _hoisted_11 = ["onClick"]
const _hoisted_12 = { class: "keyboardList" }
const _hoisted_13 = ["onClick"]
const _hoisted_14 = { class: "keyboardList" }
const _hoisted_15 = ["onClick"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_1, [
    ($props.showInputBox)
      ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_2, [
          ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)(8, (item, index) => {
            return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
              class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["keyboardInputItem", {newSource:index==7&&!$data.carNumber[7],active:index==$data.curIndex,ani:index==$data.curIndex&&!$data.carNumber[$data.curIndex]}]),
              key: index,
              onClick: $event => ($options.inputItemClick(index))
            }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($options.curIndexVal(index)), 11, _hoisted_3)
          }), 64))
        ]))
      : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true),
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
      class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["keyboard", $data.showKeyboard?'showKeyboard':''])
    }, [
      ($props.showKeyboardInputBox)
        ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_4, [
            ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)(8, (item, index) => {
              return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
                class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["keyboardInputItem", {newSource:index==7&&!$data.carNumber[7],active:index==$data.curIndex,ani:index==$data.curIndex&&!$data.carNumber[$data.curIndex]}]),
                key: index,
                onClick: $event => ($options.inputItemClick(index))
              }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($options.curIndexVal(index)), 11, _hoisted_5)
            }), 64))
          ]))
        : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true),
      (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_6, [
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
          class: "keyboardClose",
          onClick: _cache[0] || (_cache[0] = (...args) => ($options.closeKeyboard && $options.closeKeyboard(...args)))
        }, "??????")
      ]),
      (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_7, [
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_8, [
          ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($data.firstValue.slice(0,10), (item) => {
            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
              class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["keyboardItem", {disable:$options.disable(item)}]),
              onClick: $event => ($options.itemClick(item)),
              key: item
            }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(item), 11, _hoisted_9))
          }), 128))
        ]),
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_10, [
          ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($data.firstValue.slice(10,20), (item) => {
            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
              class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["keyboardItem", {disable:$options.disable(item)}]),
              onClick: $event => ($options.itemClick(item)),
              key: item
            }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(item), 11, _hoisted_11))
          }), 128))
        ]),
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_12, [
          ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($data.secondValue, (item) => {
            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
              class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["keyboardItem", {disable:$options.disable(item)}]),
              onClick: $event => ($options.itemClick(item)),
              key: item
            }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(item), 11, _hoisted_13))
          }), 128))
        ]),
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_14, [
          (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
            class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["keyboardItem keyboardButton", {disable:$data.curIndex===0}]),
            onClick: _cache[1] || (_cache[1] = $event => ($data.curIndex!==0?$options.changeType($data.keyboardType=='ZH'?'EN':'ZH'):''))
          }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($data.keyboardType=="ZH"?'ABC':'??????'), 3),
          ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($data.thirdValue, (item) => {
            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
              class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["keyboardItem", {disable:$options.disable(item)}]),
              onClick: $event => ($options.itemClick(item)),
              key: item
            }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(item), 11, _hoisted_15))
          }), 128)),
          (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
            class: "keyboardItem keyboardButton",
            onClick: _cache[2] || (_cache[2] = $event => ($options.removeItem()))
          }, "X")
        ])
      ])
    ], 2)
  ]))
}
;// CONCATENATED MODULE: ./packages/car-number-keyboard/carNumberKeyboard.vue?vue&type=template&id=25af4289&scoped=true

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/car-number-keyboard/carNumberKeyboard.vue?vue&type=script&lang=js

const keyboardEnChar="1234567890QWERTYUIOPASDFGHJKLZXCVBNM"
const keyboardZhChar='???????????????????????????????????????????????????????????????????????????????????????????????????????????????'
/* harmony default export */ var carNumberKeyboardvue_type_script_lang_js = ({
  name: "carNumberKeyboard",
  props:{
    showInputBox:{  //???????????????????????????
      type:Boolean,
      default:true
    },
    showKeyboardInputBox:{   //????????????????????????????????????
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      curIndex:-1,
      carNumber:["","","","","","","",""],
      disableChar:["I","O"],
      keyboardType:'ZH',
      firstValue:[],
      secondValue:[],
      thirdValue:[],
      showKeyboard:false
    };
  },
  created() {
    this.changeType("ZH")
  },
  methods: {
    //??????
    closeKeyboard(){
      this.showKeyboard=false
      this.curIndex=-1
      this.$emit("onClose")
    },
    //??????????????????
    itemClick(val){
      if (this.disableChar.includes(val)) return;
      this.carNumber[this.curIndex] = val;
      if (this.carNumber.slice(this.curIndex + 1, 7).every((item) => item)) {
        if (this.carNumber.slice(0, this.curIndex).every((item) => item)) {
          if (this.carNumber[7]) {
            this.closeKeyboard();
          } else {
            this.curIndex = 7;
          }
        } else {
          for (let i = 0; i < this.curIndex; i++) {
            if (!this.carNumber[i]) {
              this.curIndex = Number(i);
              break;
            }
          }
        }
      } else {
        for (let i = this.curIndex + 1; i < 7; i++) {
          if (!this.carNumber[i]) {
            this.curIndex = Number(i);
            break;
          }
        }
      }
      this.changeType(this.curIndex === 0 ? 'ZH' : 'EN');
      this.$emit('onChange', this.carNumber, this.curIndex);
    },
    //??????????????????????????????
    curIndexVal(index){
      return  index==7&&this.curIndex!=7&&!this.carNumber[7]?'?????????': this.carNumber[index]
    },
    //???????????????????????????
    disable(item){
      return this.disableChar.includes(item)
    },
    //???????????????
    inputItemClick(index){
      this.curIndex = index;
      this.changeType(this.curIndex === 0 ? 'ZH' : 'EN');
      this.showKeyboard = true;
    },
    //???????????????
    changeType(type){
      if(type=="ZH"){
        this.firstValue=keyboardZhChar.split("").slice(0,20)
        this.secondValue=keyboardZhChar.split("").slice(20,30)
        this.thirdValue=keyboardZhChar.split("").slice(30,37)
      }else{
        this.firstValue=keyboardEnChar.split("").slice(0,20)
        this.secondValue=keyboardEnChar.split("").slice(20,29)
        this.thirdValue=keyboardEnChar.split("").slice(29,36)
      }
      this.keyboardType=type
    },
    //??????
    removeItem(){
      this.carNumber[this.curIndex] = '';
      this.curIndex -= this.curIndex > 0 ? 1 : 0;
      this.changeType(this.curIndex === 0 ? 'ZH' : 'EN');
      this.$emit('onChange', this.carNumber, this.curIndex);
    }
  }
});

;// CONCATENATED MODULE: ./packages/car-number-keyboard/carNumberKeyboard.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/car-number-keyboard/carNumberKeyboard.vue?vue&type=style&index=0&id=25af4289&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/car-number-keyboard/carNumberKeyboard.vue?vue&type=style&index=0&id=25af4289&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./packages/car-number-keyboard/carNumberKeyboard.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(carNumberKeyboardvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-25af4289"]])

/* harmony default export */ var carNumberKeyboard = (__exports__);
;// CONCATENATED MODULE: ./packages/car-number-keyboard/index.js
// ????????????

 
// ??????????????? install ??????????????????????????????
carNumberKeyboard.install = (Vue) => {
  Vue.component(carNumberKeyboard.name, carNumberKeyboard)
}
 
// ????????????
/* harmony default export */ var car_number_keyboard = (carNumberKeyboard);
;// CONCATENATED MODULE: ./packages/index.js


// ??????????????????
const components = [
  car_number_keyboard
]
/* 
  ??????install ???????????????Vue???????????????????????????use????????????????????????????????????????????????
*/
const install = function (Vue) {
  // ??????????????????
  if (install.installed) { return }
  // ??????????????????
  components.map(item => {
    Vue.component(item.name, item)
  })
}
// ????????????????????????
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
/* harmony default export */ var packages_0 = ({
  install,
  carNumberKeyboard: car_number_keyboard
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=keyboard.umd.js.map