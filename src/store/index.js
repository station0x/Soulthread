import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        discordUsername: window.localStorage.getItem('discord_username') || undefined,
        discordId: window.localStorage.getItem('discord_id') || undefined,
        discordAvatar: window.localStorage.getItem('discord_avatar') || undefined,
        servers: undefined
    },
    mutations: {
        auth(state, {id, username, avatar}) {
            state.discordUsername = username
            state.discordId = id
            state.discordAvatar = avatar
        },
        setServers(state, servers) {
            console.log(servers)
            state.servers = servers
        }
    },
    actions: {
        signin({commit, dispatch}, {id, username, avatar}) {
            commit('auth', {id, username, avatar})
            window.localStorage.setItem('discord_username', username)
            window.localStorage.setItem('discord_id', id)
            window.localStorage.setItem('discord_avatar', avatar)
        },
        signout({commit, dispatch}) {
            commit('auth', {})
            window.localStorage.removeItem('discord_username')
            window.localStorage.removeItem('discord_id')
            window.localStorage.removeItem('discord_avatar')
        }
    },
    getters: {
        isMobile: state => {
            return state.innerWidth > 1024 ? false : true
        },
        getAllServers: state => state.servers,
        getMyServers: state => state.servers ? state.servers.filter((e, index) => e.owner) : state.servers
    }
})