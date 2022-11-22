import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'


//tailwind
import './style.css'
import 'flowbite'

// dark mode
document.documentElement.classList.add('dark')

const app = createApp(App)
app.use(router)
// app.use(store)
app.mount('#app')
