/******/ (function() { // webpackBootstrap
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

/***/ 761:
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGvSURBVHgBvVahVsNAEByKIja2Ojq2OgZBBAIQmFp+BIvk4YoFSWyRxSBqqcHU1qaihp3eXrhCk17SJPPePEJz2bnd271doGecoB5Ch2thLlzq39YEaTwRxvq8DyvhlzDT50aCgfBaOILx4F2NrvBrlGuGuhm7oVmVcJlgJLyDCdtEuIAfuLlUn1+Ec9+PnmC8C1Af/OZGbYwOLY51YYrjkaqtqGwB438P41lboKcPcCI1wO6OiAzt4Q0mD67+vqB3XjFvgEhtb0vKekjvmMYfaB/McJZV4gpyF14p3BBTmITcCvJAw44FF6oRUnCoPy7RHeytE1oPCe8L+FjBM/SHfOCqozvYKK77EizyxAqSEbpDrBq5rUOWRILuQEH20qLwWZiMcxde8rrkcWWuoL3WxmjWA8tAW7w2Z6qx0y3YoVkiF2gP1lbRgU6dlxvht/BW//cdK6rEzoXPavefIGEzlo0z0IUb1AO/u1SxifDTfVk2RDGrbOdnE/VtW0y6MczRPGJPlKrGRGYWD5xZRq/nSnfwtUMxhVhW9I4J8oqSu9l3EE7VaNUgzM1McWAQ/gEeFlq1ySGZXwAAAABJRU5ErkJggg==";

/***/ }),

/***/ 660:
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIpSURBVHgBvVbNddNAEJ4ZLe+Fm6kAuQO4cQDsVEBSQRCPO6GDUEF84wAvUipwOkBAAbgDlgrQDQjSDjMSshPHisd+Vr73bGl3Z/Tt7M4fwB0DNxF+8v5X7JyLkTAGhoKZCxnP8gQL6zfWEo5TjgOXx4j0QoZxh5iXX45w+S5P7nvYhlCIBoGrCSIewWbIbiNeSfj0w99x5GgqrwPYDh6B3+aJu1hL+PysPBKrMtgB5I5ffnnlzjsJx2l5wIBT2CEQwn6e3MsX4zkZxwz8SfYVw25RINCw9WRqZ8VBTnogUwwYwmk7qC1srAvfoUeI5w7Vc2sLG+v6RWB3rM+aUIJ6ZNTz6gRyJw8+JxGK6x+Ktrco/k8cgBrgcpw/DTpCRo+X01ijz98s9//n9+WQyrJ8BAaESgP5Zs7UOYQqsXxjb8/FJEFuyiZfX9/MGgu4GRhQBY4pimzpS4+ua81cLZgKOVL2JmHoPvpnH8sDMCCKuCCpZ94izEDpKit1jiI6BRPcrA780VnlJTIfGjS8Oo/epxKpw0UuSo0ZyksoDV2z+3AhLv/GoCSXjtNRWqkOSAmrtY3I9a8OfEI3gZ6hRXlOKF7mpXadQ3/I2g5gXi0II8115mZoA/jWumuETcYIh7BjNK3Gor+hq4tamUXAlKaMZMlyX0PLQiKQbVIFOlA0rYXLlhdolbTuCgH3t3SkrGkpFn3MVRgb4eqkqZkdAc7wQ2OZsJysa4T/AXod6sdYbLBXAAAAAElFTkSuQmCC";

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

;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./static/Delete.png
var Delete_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAjCAYAAADrJzjpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHnSURBVHgB1ZiJUcMwEEU/HbgDtgNSgqkASkgJdJBQQeggogLoIJRAB1kqCFQA2nE0XjtxJOuIzZv5k2Mc7YtsS7KAf8oN8lDbLGzukJcvm0+bD5tvZKS22dn8XiEbm8oVTunxlc269530yg/ycdv7zDb3x9coRNr1xAHNHyCU4dFmr+rJ+woRrHqNEK7Di6q7xkimknbs0J7lYKaWFmrlEMQcpIUKI8TnIu04IEB8btICwyOeKr09thEC2byhGfp8MC6Ip0ov1O998oR2nH6HH8aAeK7Lw8AvT2ilQ2sxzojnvqYNhuUJ46UFRk+81I1ocCpPiJMWGEpcX5M5pR0G3VVerLTAUOJ6HUAog0F3mRrbQQwlblRjpSC0k4fr+RgYSnyN8OErBkJ3aZpSi6HEq17DOeVJtS09LveTSajF6I0qC3RPZQ55wqm0w0TWYpwZx3PKE4alHSaiFmNg5swhT/BLO4yq9QQ/jAFxIF3ezQs+aYc5Hr8NOJZxQdwVT5GvMe6hNvR4hkdcKHHDpsIIEBfmJu88gpiLvF5TjfrR1PIbRIgLU8qTqr1HBFPI1+guSZaxm54iv0M7fLHNK5ot4VzbwdI22TygEXc8I2ILTkM4v+IrmZCZNZglmp4uJSuXpTzokC76Bw3lSCVBIC/DAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/car-number-keyboard/carNumberKeyboard.vue?vue&type=template&id=4eae9b2e&scoped=true




const _withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.pushScopeId)("data-v-4eae9b2e"),n=n(),(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.popScopeId)(),n)
const _hoisted_1 = {
  key: 0,
  class: "title"
}
const _hoisted_2 = { class: "titleCon" }
const _hoisted_3 = ["src"]
const _hoisted_4 = { class: "keyboardBox" }
const _hoisted_5 = { class: "keyboardInputBox" }
const _hoisted_6 = ["onClick"]
const _hoisted_7 = { class: "keyboardHead" }
const _hoisted_8 = { class: "keyboardContent" }
const _hoisted_9 = { class: "keyboardList" }
const _hoisted_10 = ["onClick"]
const _hoisted_11 = { class: "keyboardList" }
const _hoisted_12 = ["onClick"]
const _hoisted_13 = { class: "keyboardList" }
const _hoisted_14 = ["onClick"]
const _hoisted_15 = { class: "keyboardList" }
const _hoisted_16 = ["onClick"]
const _hoisted_17 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("img", { src: Delete_namespaceObject }, null, -1))
const _hoisted_18 = [
  _hoisted_17
]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
    class: "contain",
    onClick: _cache[4] || (_cache[4] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withModifiers)(() => {}, ["stop"]))
  }, [
    ($props.title || $props.HkCarNoSupport)
      ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", _hoisted_1, [
          (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_2, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($props.title), 1),
          ($props.HkCarNoSupport)
            ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
                key: 0,
                class: "carTypeSwitch",
                onClick: _cache[0] || (_cache[0] = (...args) => ($options.changeHKCarNO && $options.changeHKCarNO(...args)))
              }, [
                (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("img", {
                  src: $data.isHKCarNo?__webpack_require__(660):__webpack_require__(761),
                  class: "check",
                  alt: ""
                }, null, 8, _hoisted_3),
                (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)(" 港澳车牌")
              ]))
            : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)
        ]))
      : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true),
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_4, [
      (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_5, [
        ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($data.carNumber.length, (item, index) => {
          return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
            class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["keyboardInputItem", {active:index==$data.curIndex,ani:index==$data.curIndex,HK:$data.isHKCarNo,newSource:index==7&&!$data.carNumber[7]}]),
            onClick: $event => ($options.inputItemClick(index))
          }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($options.curIndexVal(index)), 11, _hoisted_6))
        }), 256))
      ])
    ]),
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
      class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["keyboard", $data.showKeyboard?'showKeyboard':''])
    }, [
      (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_7, [
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
          class: "keyboardClose",
          onClick: _cache[1] || (_cache[1] = (...args) => ($options.closeKeyboard && $options.closeKeyboard(...args)))
        }, "关闭")
      ]),
      (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_8, [
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_9, [
          ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($data.firstValue.slice(0,10), (item) => {
            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
              class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["keyboardItem", {disable:$options.disable(item)}]),
              onClick: $event => ($options.itemClick(item)),
              key: item
            }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(item), 11, _hoisted_10))
          }), 128))
        ]),
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_11, [
          ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($data.firstValue.slice(10,20), (item) => {
            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
              class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["keyboardItem", {disable:$options.disable(item)}]),
              onClick: $event => ($options.itemClick(item)),
              key: item
            }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(item), 11, _hoisted_12))
          }), 128))
        ]),
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_13, [
          ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($data.secondValue, (item) => {
            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
              class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["keyboardItem", {disable:$options.disable(item)}]),
              onClick: $event => ($options.itemClick(item)),
              key: item
            }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(item), 11, _hoisted_14))
          }), 128))
        ]),
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_15, [
          (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
            class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["keyboardItem keyboardButton", {disable:$data.curIndex===0 || $data.isHKCarNo}]),
            onClick: _cache[2] || (_cache[2] = $event => ($data.curIndex!==0 && !$data.isHKCarNo?$options.changeType($data.keyboardType=='ZH'?'EN':'ZH'):''))
          }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($data.keyboardType=="ZH"?'ABC':'中文'), 3),
          ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($data.thirdValue, (item) => {
            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
              class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["keyboardItem", {disable:$options.disable(item)}]),
              onClick: $event => ($options.itemClick(item)),
              key: item
            }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(item), 11, _hoisted_16))
          }), 128)),
          (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
            class: "keyboardItem keyboardButton",
            onClick: _cache[3] || (_cache[3] = $event => ($options.removeItem()))
          }, _hoisted_18)
        ])
      ])
    ], 2)
  ]))
}
;// CONCATENATED MODULE: ./packages/car-number-keyboard/carNumberKeyboard.vue?vue&type=template&id=4eae9b2e&scoped=true

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/car-number-keyboard/carNumberKeyboard.vue?vue&type=script&lang=js

const keyboardEnChar="1234567890QWERTYUIOPASDFGHJKLZXCVBNM"
const keyboardZhChar='京沪粤津冀晋蒙辽吉黑苏浙皖闽赣鲁豫鄂湘桂琼渝川贵云藏陕甘青宁新使领警学港澳'
/* harmony default export */ var carNumberKeyboardvue_type_script_lang_js = (/*#__PURE__*/{
  name: 'carNumberKeyboard', // vue component name
  props:{
    title: {
      // 默认回显值
      type: String,
      default:()=> "请输入车牌号码"
    },
    firstFocus:{
      type:true,
      default:()=> true
    },
    value: {
      // 默认回显值
      type: [String, Array],
      default:()=> ["", "", "", "", "", "", "", ""]
    },
    HkCarNoSupport: {
      // 是否支持港澳车牌
      type: Boolean,
      default:()=>true
    },
    completeHideKeyboard:{
      //是否完成后自动收起键盘
      type: Boolean,
      default:()=>true
    },
    autoCarNoTypeMatch:{
      //是否根据车辆初始回填值自动识别为大陆车牌或港澳车牌 (此项设置需开启HkCarNoSupport:true)
      type: Boolean,
      default:()=>true
    },
  },
  data() {
    return {
      isInit:false,
      curIndex:-1,
      isHKCarNo:false,   //是否为港澳车牌
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
    if(this.firstFocus){
      this.showKeyboard=true
      this.curIndex=0
    }  
    document.addEventListener("click",this.bodyClickClose)

  },
  beforeDestroy(){
    document.removeEventListener("click",this.bodyClickClose)
  },
  watch: {
    value:{
      handler(newVal){
        if(!this.isInit && newVal){
          this.isInit=true
          // 做兼容处理 （港澳车牌小于7位且 首位为字母或数字  默认为港澳车牌）
          if(newVal.length<7 && /^[A-Z0-9]*$/.test(newVal) && this.HkCarNoSupport && this.autoCarNoTypeMatch){
            this.isHKCarNo=true
            this.changeType("EN");
            this.carNumber = ["","","","","",""].map((item,index)=>item=newVal[index]||"")
          }else{
            this.isHKCarNo=false
            this.changeType("ZH");
            this.carNumber = ["","","","","","","",""].map((item,index)=>item=newVal[index]||"")
          }
        }  
      },
      immediate:true
    },
  },
  methods: {
    bodyClickClose(){
      if(this.showKeyboard = true){
        // this.showKeyboard = false;
        this.closeKeyboard()
      }
    },
     // 切换港澳车牌
     changeHKCarNO(){
      this.isHKCarNo=!this.isHKCarNo
      this.curIndex = 0
      this.showKeyboard = true;
      if(this.isHKCarNo){
        this.changeType("EN");
        this.carNumber=["","","","","",""]
      }else{
        this.changeType("ZH");
        this.carNumber=["","","","","","","",""]
      }
      this.$emit("onChange", this.carNumber,this.isHKCarNo);

    },
    //关闭
    closeKeyboard(){
      this.showKeyboard=false
      this.curIndex=-1
      this.$emit("onClose")
    },
    //键盘字母点击
    itemClick(val) {
      this.isInit=true
      if (this.disableChar.includes(val)) return;
      this.carNumber[this.curIndex] = val;
      this.$emit("onChange", this.carNumber,this.isHKCarNo);
      if (this.carNumber.slice(this.curIndex + 1, this.carNumber.length).every(item => item)) {
        if (this.carNumber.slice(0, this.curIndex).every(item => item)) {
          if(this.completeHideKeyboard){
            this.closeKeyboard();
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
        for (let i = this.curIndex + 1; i < this.carNumber.length; i++) {
          if (!this.carNumber[i]) {
            this.curIndex = Number(i);
            break;
          }
        }
      }
      this.changeType(this.curIndex === 0 && !this.isHKCarNo ? "ZH" : "EN");
    },
    
    //返回输入框每一项的值
    curIndexVal(index){
      return  index==7&&this.curIndex!=7&&!this.carNumber[7]?'新能源': this.carNumber[index]
    },
    //返回键盘每一项的值
    disable(item){
      return this.disableChar.includes(item)
    },
    //输入框点击
    inputItemClick(index){
      this.curIndex = index;
      this.changeType(this.curIndex === 0 && !this.isHKCarNo ? "ZH" : "EN");
      this.showKeyboard = true;
    },
    //切换中英文
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
    //删除
    removeItem(){
      this.carNumber[this.curIndex] = '';
      this.curIndex -= this.curIndex > 0 ? 1 : 0;
      this.changeType(this.curIndex === 0 && !this.isHKCarNo ? "ZH" : "EN");
      this.$emit('onChange', this.carNumber,this.isHKCarNo);
    }
  }
});

;// CONCATENATED MODULE: ./packages/car-number-keyboard/carNumberKeyboard.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/car-number-keyboard/carNumberKeyboard.vue?vue&type=style&index=0&id=4eae9b2e&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/car-number-keyboard/carNumberKeyboard.vue?vue&type=style&index=0&id=4eae9b2e&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./packages/car-number-keyboard/carNumberKeyboard.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(carNumberKeyboardvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-4eae9b2e"]])

/* harmony default export */ var carNumberKeyboard = (__exports__);
;// CONCATENATED MODULE: ./packages/car-number-keyboard/index.js
// 引入组件

 
// 为组件提供 install 安装方法，供按需引入
carNumberKeyboard.install = (Vue) => {
  Vue.component(carNumberKeyboard.name, carNumberKeyboard)
}
 
// 导出组件
/* harmony default export */ var car_number_keyboard = (carNumberKeyboard);
;// CONCATENATED MODULE: ./packages/index.js


// 存储组件列表
const components = [
  car_number_keyboard
]
/* 
  定义install 方法，接收Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
*/
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) { return }
  // 遍历所有组件
  components.map(item => {
    Vue.component(item.name, item)
  })
}
// 判断是否引入文件
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
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=keyboard.common.js.map