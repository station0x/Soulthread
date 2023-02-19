import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//tailwind
import './style.css'
import 'flowbite'

Vue.prototype.ethereum = window.ethereum

// dark mode
// document.documentElement.classList.add('dark')

// constants
import prodCONSTANTS from '../constants/prod.json'
import devCONSTANTS from '../constants/dev.json'
const CONSTANTS = import.meta.env.VITE_APP_ENV === "prod" ? prodCONSTANTS : devCONSTANTS
Vue.prototype.$CONSTANTS = CONSTANTS

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')
