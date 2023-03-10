# car-number-keyboard 

## 说明

```
该组件是与  'amfe-flexible' 'postcss-pxtorem' 配合使用的， 
主要依赖其rem转换  10rem=100%屏幕宽度 主要针对移动端
```

## 安装插件
 
```
npm install car-number-keyboard -S
npm install amfe-flexible -S
npm install postcss-pxtorem -D
```
 
## 引入并注册插件
 
```
main.js 中导入 rem 转换 和全局引入组件
import Vue from 'vue'
import 'amfe-flexible'
import carNumberKeyboard from 'car-number-keyboard'
import 'car-number-keyboard/lib/
keyboard.css' // 引入样式
Vue.use(carNumberKeyboard)

在postcss.config.js中配置rem选项参数
module.exports = {
    plugins: {
      "postcss-pxtorem": {
        // 设计稿 375:37.5
        // 设计稿：750:75
        // Vant 是基于 375
        rootValue: 37.5,
        propList: ["*"]
      }
    }
  }
```
 
## 基本用法示例

```
在相关业务中使用组件
<carNumberKeyboard 
showInputBox="true"
showKeyboardInputBox="false" />
```
 
## Props
 
属性 | 说明 | 类型 | 默认值
:--- | :--- | :--- | :---
showInputBox | 是否显示组件的车牌号输入框 | Boolean（可选） | true
showKeyboardInputBox | 是否显示组件键盘上的车牌号输入框 | Boolean（可选） | false

## 方法
 
方法 | 说明 | 回调参数
:--- | :--- | :--- 
onChange | 键盘值改变回调 | （val,curIndex） 当前车牌号值（数组类型）
onClose | 键盘关闭回调 | empty
 

