<template>
    <div id="app">
      <div class="flex flex-row">
        <!-- <div class="grow">1</div> 
        <div>2</div> 
        <div>3</div>  -->
        <!-- drawer component -->
        <div v-if="$store.state.discordId != null && isApp" id="drawer-navigation" class="z-40 custom-scroll shrink-0 h-screen p-4 overflow-y-auto bg-white w-[300px] dark:bg-neutral-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
            <a href="/" class="flex items-center text-2xl font-semibold text-white">
                <img class="w-[140px]" src="/img/logo.svg" />
            </a>
            <div class="py-4 overflow-y-auto">
                <ul class="space-y-2">
                    <li>
                        <a @click="$router.push({ name: 'Dashboard' })" class="flex cursor-pointer items-center p-2 text-base font-normal text-neutral-900 rounded-lg dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700">
                        <svg aria-hidden="true" class="w-6 h-6 text-neutral-500 transition duration-75 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                        <span class="ml-3">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <button @click="toggleMyServersDropdown()" v-show="allServers" type="button" class="flex items-center w-full p-2 text-base font-normal text-neutral-900 transition duration-75 rounded-lg group hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-neutral-500 transition duration-75 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                            <span class="flex-1 ml-3 whitespace-nowrap text-left">Owned Servers</span>
                            <span class="inline-flex items-center justify-center w-3 h-3 p-[15px] ml-3 text-xs font-bold text-neutral-600 bg-neutral-200 rounded-lg mr-1 bg-gradient-to-tr to-st-sky from-st-green dark:text-neutral-900">{{ myServersCount }}</span>
                            <svg :class="myServersHidden ? '' : 'rotate-180'" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div v-show="!allServers" role="status" class="animate-pulse">
                            <div class="flex justify-center items-center mt-4 mr-4">
                                <svg aria-hidden="true" class="flex-shrink-0 w-7 h-7 mr-4 text-neutral-700 transition duration-75 dark:text-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                                <div class="w-36 h-2.5 bg-neutral-200 rounded-full dark:bg-neutral-700 mr-6"></div>
                                <!-- <div class="w-24 h-2 bg-neutral-200 rounded-full dark:bg-neutral-700"></div> -->
                                <div class="w-6 h-6 bg-neutral-200 rounded-lg dark:bg-neutral-700"></div>
                            </div>
                            <span class="sr-only">Loading...</span>
                        </div>
                        <ul class="py-2 space-y-2" :class="myServersHidden ? 'hidden' : ''">
                            <li :class="server.active ? 'dark:hover:text-black' : 'opacity-50'" class="flex rounded-lg hover:opacity-100 group hover:bg-neutral-100 dark:hover:bg-neutral-700 pl-2 pr-2" v-for="server in myServers" @click.prevent="openServer(server.id)">
                                <img class="w-6 h-6 rounded-full sm:mr-3 align-middle self-center" :src="server.icon === null ? 'https://ia803204.us.archive.org/4/items/discordprofilepictures/discordblue.png' : `https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png`" alt="Helene avatar">
                                <a href="#" class="flex items-center w-full p-2 pl-1 text-base font-normal text-neutral-900 transition duration-75  dark:text-white">{{ server.name.length > 13 ? server.name.slice(0,13) + '..' : server.name }}</a>
                                <span v-if="server.active" class="inline-flex items-center justify-center px-2 ml-2 text-sm font-medium text-neutral-800 bg-neutral-200 rounded-full dark:bg-neutral-700 dark:text-st-green h-6 mt-2">Active</span>
                            </li>
                        </ul>
                    </li>
                    <!-- <li>
                        <a @click="$router.push({ name: 'Roles' })" class="flex cursor-pointer items-center p-2 text-base font-normal text-neutral-900 rounded-lg dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700">
                        <svg class="flex-shrink-0 w-6 h-6 text-neutral-500 transition duration-75 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Assets Granted Roles</span>
                        <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-neutral-800 bg-neutral-200 rounded-full dark:bg-neutral-700 dark:text-neutral-300">Pro</span>
                        </a>
                    </li> -->
                    <!-- <div class="w-44 bg-white rounded divide-y divide-neutral-100 shadow dark:bg-neutral-700 dark:divide-neutral-600"></div>
                    <li>
                        <a href="#" class="flex items-center p-2 text-base font-normal text-neutral-900 rounded-lg dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700">
                        <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-neutral-500 transition duration-75 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                        <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-neutral-600 bg-neutral-200 rounded-full dark:bg-neutral-900 dark:text-neutral-200">3</span>
                        </a>
                    </li> -->
                </ul>
                <ul class="pt-4 mt-4 space-y-2 border-t border-neutral-200 dark:border-neutral-700">
                    <li>
                        <button @click="toggleAllServersDropdown()" v-show="allServers" type="button" class="flex items-center w-full p-2 text-base font-normal text-neutral-900 transition duration-75 rounded-lg group hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-neutral-500 transition duration-75 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                            <span class="flex-1 ml-3 whitespace-nowrap text-left">All Servers</span>
                            <span class="inline-flex items-center justify-center w-3 h-3 p-[15px] ml-3 text-xs font-medium text-neutral-600 bg-neutral-200 rounded-lg mr-1 dark:bg-neutral-700 dark:text-neutral-200">{{ allServersCount }}</span>
                            <svg :class="allServersHidden ? '' : 'rotate-180'" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div v-show="!allServers" role="status" class="animate-pulse">
                            <div class="flex justify-center items-center mt-4 mr-4">
                                <svg aria-hidden="true" class="flex-shrink-0 w-7 h-7 mr-4 text-neutral-700 transition duration-75 dark:text-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                                <div class="w-36 h-2.5 bg-neutral-200 rounded-full dark:bg-neutral-700 mr-6"></div>
                                <!-- <div class="w-24 h-2 bg-neutral-200 rounded-full dark:bg-neutral-700"></div> -->
                                <div class="w-6 h-6 bg-neutral-200 rounded-lg dark:bg-neutral-700"></div>
                            </div>
                            <span class="sr-only">Loading...</span>
                        </div>
                        <ul class="py-2 space-y-2" :class="allServersHidden ? 'hidden' : ''">
                            <li :class="server.active ? 'dark:hover:text-black' : 'opacity-50'" class="flex rounded-lg hover:opacity-100 group hover:bg-neutral-100 dark:hover:bg-neutral-700 pl-2 pr-2" v-for="server in allServers">
                                <img class="w-6 h-6 rounded-full sm:mr-3 align-middle self-center" :src="server.icon === null ? 'https://ia803204.us.archive.org/4/items/discordprofilepictures/discordblue.png' : `https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png`" alt="Helene avatar">
                                <a href="#" class="flex items-center w-full p-2 pl-1 text-base font-normal text-neutral-900 transition duration-75  dark:text-white">{{ server.name.length > 13 ? server.name.slice(0,13) + '..' : server.name }}</a>
                                <span v-if="server.active" class="inline-flex items-center justify-center px-2 ml-2 text-sm font-medium text-neutral-800 bg-neutral-200 rounded-full dark:bg-neutral-700 dark:text-st-green h-6 mt-2">Active</span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a @click.prevent="signout" class="flex items-center cursor-pointer p-2 text-base font-normal text-neutral-900 rounded-lg transition duration-75 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:text-white group">
                        <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-neutral-500 transition duration-75 group-hover:text-neutral-900 dark:group-hover:text-white dark:text-neutral-400"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                        <span class="ml-4">Sign out</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="grow p-0 h-screen flex justify-center md:p-10">
          <router-view :key="$route.fullPath"></router-view>
        </div>
      </div>
    </div>
</template>
<script>
import axios from 'axios'
import arraySort from 'array-sort'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            allServersHidden: true,
            myServersHidden: false,
            isApp: false
        }
    },
    methods: {
        signout() {
            this.$store.dispatch('signout')
            this.$router.push({ name: 'Onboarding' })
        },
        toggleAllServersDropdown() {
            if(this.allServersHidden) this.allServersHidden = false
            else this.allServersHidden = true
        },
        toggleMyServersDropdown() {
            if(this.myServersHidden) this.myServersHidden = false
            else this.myServersHidden = true
        },
        openServer(id) {
            this.$router.push({ name: 'Server', params: { id } }).catch();
        }
    },
    async created() {
        setTimeout(async () => {
            if(this.$router.history.current.name !== 'Verify') {
                this.isApp = true
                if(this.$store.state.discordId) this.$router.push({ name: 'Dashboard' })
                let servers = (await axios.get('/api/bot/getBotServers', {
                    params: {
                        id: this.$store.state.discordId
                    }
                })).data.servers
                console.log(servers)
                this.$store.commit('setServers', arraySort(servers, 'active', {reverse: true}))
            }
        }, 
        300)
    },
    computed: {
        ...mapGetters({
            allServers: 'getAllServers',
            myServers: 'getMyServers'
        }),
        allServersCount() {
            return this.allServers ? this.allServers.length : 0 
        },
        myServersCount() {
            return this.myServers ? this.myServers.length : 0 
        }
    }
}
</script>
<style scoped>
/* width */
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 1px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(1, 232, 151, 0.842); 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: rgb(3, 250, 163);
    border-radius: 16px;
    cursor: pointer;
}
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
