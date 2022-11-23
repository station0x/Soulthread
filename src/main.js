import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'


//tailwind
import './style.css'
import 'flowbite'

Vue.prototype.ethereum = window.ethereum

// dark mode
// document.documentElement.classList.add('dark')

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app')
