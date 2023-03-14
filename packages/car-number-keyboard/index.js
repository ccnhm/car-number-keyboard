// 引入组件
import carNumberKeyboard from './carNumberKeyboard.vue'
 
// 为组件提供 install 安装方法，供按需引入
carNumberKeyboard.install = (Vue) => {
  Vue.component(carNumberKeyboard.name, carNumberKeyboard)
}
 
// 导出组件
export default carNumberKeyboard