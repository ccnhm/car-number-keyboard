import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import carNumberKeyboard from '../packages'
console.log(carNumberKeyboard)
// import carNumberKeyboard from 'car-number-keyboard'
// import "car-number-keyboard/lib/keyboard.css"

createApp(App).use(carNumberKeyboard).mount('#app')
