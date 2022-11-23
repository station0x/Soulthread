import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store'
// import CONSTANTS from '../../constants'

const Onboarding = () => import('../views/Onboarding.vue')
const Portal = () => import('../views/Portal.vue')
const Verify = () => import('../views/Verify.vue')

// const Login = () => import('@/views/Login')
// const RedeemAccessKey = () => import('@/views/RedeemAccessKey')

// const Dashboard = () => import('@/views/admin/Dashboard.vue')

Vue.use(VueRouter)

const TITLE = ' | Soulthread'

const routes = [
    { path: '/', redirect: { name: 'Onboarding' }},
    // { path: '*', redirect: { name: 'Onboarding' }},
    { path: '/welcome/user?', component: Onboarding, name: 'Onboarding', meta: { requiresLogin: true, title: 'Welcome' } },
    { path: '/portal', component: Portal, name: 'Portal', meta: { requiresLogin: true, title: 'Portal' } },
//   { path: '/login/:redirect?:key?', component: Login, name: 'Login', meta: { title: 'Login' } },

//   { path: '/home', component: Home, name: 'Home', meta: { requiresLogin: true, title: 'Home' } },
//   { path: '/lobby', component: Lobby, name: 'Lobby', meta: { requiresLogin: true, title: 'Lobby' } },
//   { path: '/play/:link', component: Link, name: 'Join Game with Link', meta: { title: 'Join Game' } },
//   { path: '/admin', component: Admin, name: 'Admin' },
//   { path: '/redeem-your-access-key', component: RedeemAccessKey, name: 'Redeem Access Key', meta: { requiresLogin: true, title: 'Redeem Access Key' } },
//   { path: '/not-found', component: NotFound, name: 'Not Found', props: true, meta: { title: 'Page Not Found' } },
//   // Admin
//   { path: '/dashboard', component: Dashboard, name: 'Dashboard', meta: { requiresAdmin: true, title: 'Admin Dashboard' } },
]

const router = new VueRouter({
    routes,
    mode: 'history'
  })

// router.beforeEach((to, from, next) => {
//   // if(to.matched.some(record => record.meta.requiresLogin) && !store.state.address) next({ name: 'Login' })
// //   if(to.name != 'Register' && (store.state.candidateSignature || store.state.airdropCandidate)) {
// //     // clear candidate data from state and localstorage 
// //     store.dispatch('unregisterCandidate')
// //     store.dispatch('unregisterAirdropCandidate')
// //     next()
// //   }
//   // else if(to.name == 'Lobby' && (!store.state.profile || store.state.profile.banned)) next({ name: 'Home' })
//   next()
// })

// router.afterEach((to, from, next) => {
//   // Use next tick to handle router history correctly
//   // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
//   Vue.nextTick(() => {
//     document.title = to.meta.title + TITLE;
//     // if(to.name === 'Invitations') {
//     //   document.title = to.meta.title + to.params.project + TITLE;
//     // } else {
//     //   document.title = to.meta.title + TITLE;
//     // }
//   })
// })

export default router