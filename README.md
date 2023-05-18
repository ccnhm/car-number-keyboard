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
import 'car-number-keyboard/lib/keyboard.css' // 引入样式
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
<carNumberKeyboard />
```
 
## Props
 
属性 | 说明 | 类型 | 默认值
:--- | :--- | :--- | :---
title | 标题 | String（可选） | true
value | 初始回填值 | String 或 Array（可选） | ""
HkCarNoSupport | 是否支持港澳车牌 | Boolean（可选） | true
completeHideKeyboard | 完成后自动收起键盘 | Boolean（可选） | true
autoCarNoTypeMatch | 初始回填值 | 是否根据车辆初始回填值自动识别为大陆车牌或港澳车牌 (此项设置需开启HkCarNoSupport:true) | true


## 方法
 
方法 | 说明 | 回调参数
:--- | :--- | :--- 
onChange | 键盘值改变回调 | (val,true || false) 当前车牌号值（数组类型）,是否是港澳车牌
onClose | 键盘关闭回调 | empty
 

