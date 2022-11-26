<template>
    <div class="flex flex-col h-full min-w-[900px] max-w-[1300px]">
        <!-- card -->
        <div class="mb-5 bg-white border rounded-lg shadow-md dark:bg-neutral-800 dark:border-neutral-700">
            <div id="fullWidthTabContent" class="dark:border-neutral-600">
                <div class="p-4 bg-white rounded-lg md:p-4 dark:bg-neutral-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                    <dl class="grid max-w-screen-xl gap-4 p-1 mx-auto text-neutral-900 grid-cols-3 dark:text-white sm:p-8 sm:pb-2">
                        <div class="flex grow flex-col items-left justify-center">
                            <dt class="mb-2 text-3xl font-extrabold font-Allenoire allen-typo">Welcome,</dt>
                            <h1 class="mb-4 text-3xl font-Allenoire font-extrabold allen-typo text-neutral-900 lg:text-5xl text-transparent bg-clip-text bg-gradient-to-tr to-st-sky from-st-green">
                                {{ $store.state.discordUsername }}
                            </h1>

                            <dd class="font-light text-neutral-500 dark:text-neutral-400"></dd>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-4 text-3xl font-Allenoire font-extrabold allen-typo text-neutral-900 lg:text-5xl text-transparent bg-clip-text bg-gradient-to-tr to-st-sky from-st-green">
                                {{ activeServersCount }}
                            </dt>
                            <dd class="font-light text-neutral-500 dark:text-neutral-400">Soulful Servers</dd>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <div @click="addBot">
                                <Button class="m-2" text="Add new Server"></Button>
                            </div>
                        </div>
                    </dl>
                </div>
                <!-- <div class="text-sm font-light opacity-30 p-5">SoulThread does not track any data and is free to use.</div> -->
            </div>
        </div>
        
        <div class="mb-5 bg-white border rounded-lg shadow-md dark:bg-neutral-800 dark:border-neutral-700">
            <div id="fullWidthTabContent" class="dark:border-neutral-600">
                <div class="p-4 pb-0 bg-white rounded-lg md:p-4 md:pb-0 dark:bg-neutral-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                    <!-- Breadcrumb -->
                    <nav class="flex px-5 py-3 text-neutral-700 border border-neutral-200 rounded-lg bg-neutral-50 dark:bg-neutral-800 dark:border-neutral-700" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-3">
                            <li class="inline-flex items-center">
                            <a href="#" class="inline-flex items-center text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                Owned Servers
                            </a>
                            </li>
                        </ol>
                    </nav>
                    <div v-for="server in servers">
                        <dl class="grid max-w-screen-2xl gap-4 p-1 mx-auto text-neutral-900 grid-cols-3 dark:text-white sm:p-8 pb-4 hover:bg-neutral-700 rounded-lg mt-2 mb-2">
                            <div class="flex grow flex-col items-left justify-center">
                                <!-- <dt class="mb-2 text-3xl font-extrabold font-Allenoire allen-typo">{{ server.active ? 'Soulful Server' : '' }}</dt> -->
                                <h1 v-if="server.active" class="m-4 text-2xl font-Allenoire font-extrabold allen-typo text-neutral-900 text-transparent bg-clip-text bg-gradient-to-tr to-st-sky from-st-green">
                                    {{ server.name }}
                                </h1>
                                <h1 v-else class="m-4 text-2xl font-Allenoire font-extrabold allen-typo text-white">
                                    {{ server.name }}
                                </h1>

                                <dd class="font-light text-neutral-500 dark:text-neutral-400"></dd>
                            </div>
                            <div class="flex flex-col items-center justify-center">
                                <dt v-if="server.active" class="text-3xl font-Allenoire font-extrabold allen-typo text-neutral-900 lg:text-5xl text-transparent bg-clip-text bg-gradient-to-tr to-st-sky from-st-green">
                                    {{ activeServersCount }}
                                </dt>
                                <dd v-if="server.active" class="font-light text-neutral-500 dark:text-neutral-400">Assets Granted Roles</dd>
                            </div>
                            <div class="flex flex-col items-center justify-center">
                                <div v-if="server.active" @click="openServer(server.id)">
                                    <Button class="m-2" text="Manage Roles"></Button>
                                </div>
                                <div v-else @click="addBot">
                                    <SecondaryBtnVue class="m-2" text="Add Soulthread Bot"></SecondaryBtnVue>
                                </div>
                            </div>
                        </dl> 
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="bg-white border rounded-lg shadow-md dark:bg-neutral-800 dark:border-neutral-700">
            <div id="fullWidthTabContent" class="dark:border-neutral-600">
                <div class="p-4 bg-white rounded-lg md:p-8 dark:bg-neutral-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                    <dl class="grid max-w-screen-xl gap-8 p-4 mx-auto text-neutral-900 grid-cols-3 dark:text-white sm:p-8">
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
                            <dd class="font-light text-neutral-500 dark:text-neutral-400">Developers</dd>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
                            <dd class="font-light text-neutral-500 dark:text-neutral-400">Public repositories</dd>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
                            <dd class="font-light text-neutral-500 dark:text-neutral-400">Open source projects</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div> -->
        <div v-if="activeServersCount < 1" class="grow border rounded-lg max-h-[500px] shadow-md dark:bg-neutral-800 dark:border-neutral-700 no-servers">
            <div id="fullWidthTabContent" class="dark:border-neutral-600">
                <div class="p-4 rounded-lg md:p-8 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
                    <dl class="grid max-w-screen-xl gap-2 p-4 mx-auto text-neutral-900 grid-cols-6 dark:text-white sm:p-8">
                        <div class="flex col-span-1 flex-col items-center justify-center">

                        </div>
                        <div class="flex col-span-4 flex-col items-center justify-center">
                            <dt class="mb-2 mt-10 text-white text-5xl allen-typo text-center font-extrabold font-Allenoire">Hello, add your first <br/> server now!</dt>
                            <div @click="addBot">
                                <Button class="mt-10" text="Authorize Soulthread bot"></Button>
                            </div>
                        </div>
                        <div class="flex col-span-1 flex-col items-center justify-center">        
                        </div>
                    </dl>
                </div>
            </div>
        </div>
        <div v-else>

        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'
import SecondaryBtnVue from '../components/SecondaryBtn.vue'
import { mapGetters } from 'vuex'
export default {
    data() { 
        return {
            
        }
    },
    components: {
        Button,
        SecondaryBtnVue
    },
    methods: {
        addBot() {
            console.log('ldfskl;dlf')
            window.open('https://discord.com/api/oauth2/authorize?client_id=1044688147902120089&permissions=8&scope=bot','_blank')
        },
        openServer(id) {
            this.$router.push({ name: 'Server', params: { id } }).catch();
        }
    },
    computed: {
        ...mapGetters({
            servers: 'getMyServers',
            allServers: 'getAllServers'
        }),
        activeServersCount() {
            return this.servers ? this.servers.filter((e, i)=> {
                return e.active
            }).length : 0 
        }
    }
}
</script>

<style scoped>
.no-servers {
    background-image: url('/img/bg-pattern.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
}
</style>