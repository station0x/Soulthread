import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
// import CONSTANTS from '../../constants'

const Onboarding = () => import('@/views/Onboarding.vue')
const Dashboard = () => import('@/views/Dashboard.vue')
const Verify = () => import('@/views/Verify.vue')
const Roles = () => import('@/views/Roles.vue')
const Server = () => import('@/views/Server.vue')

// const Login = () => import('@/views/Login')
// const RedeemAccessKey = () => import('@/views/RedeemAccessKey')

// const Dashboard = () => import('@/views/admin/Dashboard.vue')

Vue.use(VueRouter)

const TITLE = ' | Soulthread'

const routes = [
    { path: '/', redirect: { name: 'Onboarding' }},
    { path: '*', redirect: { name: 'Onboarding' }},
    { path: '/welcome/:user?', component: Onboarding, name: 'Onboarding', meta: { title: 'Welcome' } },
    { path: '/dashboard', component: Dashboard, name: 'Dashboard', meta: { requiresLogin: true, title: 'Dashboard' } },
    { path: '/roles', component: Roles, name: 'Roles', meta: { requiresLogin: true, title: 'Assets Granted Roles' } },
    { path: '/server/:id', component: Server, name: 'Server', meta: { requiresLogin: true, title: 'Server' } },
    { path: '/verify/:query', component: Verify, name: 'Verify', meta: { title: 'Verify' } }
]

const router = new VueRouter({
    routes,
    mode: 'history'
  })

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresLogin) && !store.state.discordId) {
    next({ name: 'Onboarding' })
  } 
  next()
})

router.afterEach((to, from, next) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    if(to.name === 'Server') {
      let servers = {}
      for(let id in store.state.servers) {
        let server = store.state.servers[id]
        servers[`${server.id}`] = server.name
      }
      console.log(servers)
      document.title = servers[to.params.id] + TITLE;
    } else {
      document.title = to.meta.title + TITLE;
    } 
  })
})

export default router