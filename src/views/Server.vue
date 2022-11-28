<template>
    <div>
        <Loader v-if="loading"></Loader>
        <div v-else class="flex flex-col h-full min-w-[900px]">
            <!-- card -->
            <div class="mb-5 bg-white border rounded-lg shadow-md dark:bg-neutral-800 dark:border-neutral-700">
                <div id="fullWidthTabContent" class="dark:border-neutral-600">
                    <div class="p-4 bg-white rounded-lg md:p-4 dark:bg-neutral-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                        <dl class="grid max-w-screen-xl gap-4 p-1 mx-auto grid-cols-2 text-neutral-900 dark:text-white sm:p-8 pb-2 sm:pb-2">
                            <div class="flex grow flex-col items-left justify-center">
                                <dt class="mb-2 text-3xl font-extrabold font-Allenoire allen-typo">Server</dt>
                                <h1 class="mb-4 text-3xl font-Allenoire font-extrabold allen-typo text-neutral-900 lg:text-4xl text-transparent bg-clip-text bg-gradient-to-tr to-st-sky from-st-green">
                                    {{ serverData.name }}
                                </h1>

                                <dd class="font-light text-neutral-500 dark:text-neutral-400"></dd>
                            </div>
                            <div v-if="serverData.active" class="flex flex-col justify-center items-end">
                                <dt class="mb-4 text-3xl font-Allenoire font-extrabold allen-typo text-neutral-900 lg:text-5xl text-transparent bg-clip-text bg-gradient-to-tr to-st-sky from-st-green">
                                    
                                </dt>
                                <dd class="font-light text-neutral-500 dark:text-neutral-400"> {{ criteriaArray.length }} Roles Criteria</dd>
                            </div>
                            <div v-if="!serverData.active" :class="serverData.active ? 'items-center' : 'items-end'" class="flex flex-col justify-center">
                                <div @click="addBot">
                                    <Button class="m-2" text="Authorize Soulthread bot"></Button>
                                </div>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            <div v-if="serverData.active" class="mb-5 bg-white border rounded-lg shadow-md dark:bg-neutral-800 dark:border-neutral-700">
                <div id="fullWidthTabContent" class="dark:border-neutral-600">
                    <div class="p-4 pb-0 bg-white rounded-lg md:p-4 md:pb-0 dark:bg-neutral-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                        <!-- Breadcrumb -->
                    <nav class="flex px-5 py-3 text-neutral-700 border border-neutral-200 rounded-lg bg-neutral-50 dark:bg-neutral-800 dark:border-neutral-700" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                        <a href="#" class="inline-flex items-center text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                            <svg class="flex-shrink-0 w-5 h-5 mr-2 -ml-2 text-neutral-500 transition duration-75 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            Server Roles
                        </a>
                        </li>
                    </ol>
                    </nav>
                    <!-- roles found -->
                    <div v-for="role in serverData.roles">
                        <dl v-if="criteriaArray.includes(role.id)" class="grid max-w-screen-2xl gap-4 p-1 mx-auto text-neutral-900 grid-cols-2 dark:text-white hover:bg-neutral-700 rounded-lg mt-2 mb-2">
                            <div class="flex grow flex-col items-left justify-center">
                                <!-- <dt class="mb-2 text-3xl font-extrabold font-Allenoire allen-typo">{{ server.active ? 'Soulful Server' : '' }}</dt> -->
                                <h1 class="m-3 text-2xl font-Allenoire font-extrabold allen-typo text-neutral-900 text-transparent bg-clip-text bg-gradient-to-tr to-st-sky from-st-green">
                                    {{ role.name }}
                                </h1>
                                <!-- <h1 v-else class="m-4 text-2xl font-Allenoire font-extrabold allen-typo text-white">
                                    {{ server.name }}
                                </h1> -->

                                <dd class="font-light text-neutral-500 dark:text-neutral-400"></dd>
                            </div>
                            <!-- <div class="flex flex-col items-center justify-center">
                                <dt v-if="server.active" class="mb-4 text-3xl font-Allenoire font-extrabold allen-typo text-neutral-900 lg:text-5xl text-transparent bg-clip-text bg-gradient-to-tr to-st-sky from-st-green">
                                    {{ activeServersCount }}
                                </dt>
                                <dd v-if="server.active" class="font-light text-neutral-500 dark:text-neutral-400">Assets Granted Roles</dd>
                            </div> -->
                            <div v-if="role.id != serverData.id" class="flex flex-col items-end justify-center">
                                <div @click="editRole(role)">
                                    <SecondaryBtnVue class="m-2" size="text-sm" text="Edit Criteria"></SecondaryBtnVue>
                                </div>
                            </div>
                        </dl> 
                        <dl v-else class="grid max-w-screen-2xl gap-4 p-1 mx-auto text-neutral-900 grid-cols-2 dark:text-white hover:bg-neutral-700 rounded-lg mt-2 mb-2">
                            <div class="flex grow flex-col items-left justify-center">
                                <!-- <dt class="mb-2 text-3xl font-extrabold font-Allenoire allen-typo">{{ server.active ? 'Soulful Server' : '' }}</dt> -->
                                <h1 class="m-3 text-2xl font-Allenoire font-extrabold allen-typo text-white">
                                    {{ role.name }}
                                </h1>
                                <!-- <h1 v-else class="m-4 text-2xl font-Allenoire font-extrabold allen-typo text-white">
                                    {{ server.name }}
                                </h1> -->

                                <dd class="font-light text-neutral-500 dark:text-neutral-400"></dd>
                            </div>
                            <!-- <div class="flex flex-col items-center justify-center">
                                <dt v-if="server.active" class="mb-4 text-3xl font-Allenoire font-extrabold allen-typo text-neutral-900 lg:text-5xl text-transparent bg-clip-text bg-gradient-to-tr to-st-sky from-st-green">
                                    {{ activeServersCount }}
                                </dt>
                                <dd v-if="server.active" class="font-light text-neutral-500 dark:text-neutral-400">Assets Granted Roles</dd>
                            </div> -->
                            <div v-if="role.id != serverData.id" class="flex flex-col items-end justify-center">
                                <div @click="addRole(role)">
                                    <Button class="m-2" size="text-sm" text="Add Role Criteria"></Button>
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
        <!-- Modal -->
<!-- Main modal -->
        <div v-if="modalUp" class="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 z-50 blur-sm" style="backdrop-filter: blur(1px);">
        </div>
        <div v-if="modalUp" aria-hidden="true" class="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
            <div class="relative p-4 w-full max-w-2xl h-full md:h-auto mx-auto my-auto">
                <!-- Modal content -->
                <div class="relative p-4 bg-white rounded-lg shadow dark:bg-neutral-800 sm:p-5 border border-neutral-700">
                    <!-- Modal header -->
                    <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-neutral-600">
                        <h3 class="text-lg font-semibold text-neutral-900 dark:text-white">
                            {{ criteriaArray.includes(modalRole.id) ? 'Edit' : 'Create' }} Role Criteria (for {{ modalRole.name }})
                        </h3>
                        <button @click="closeModal()" class="text-neutral-400 bg-transparent hover:bg-neutral-200 hover:text-neutral-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-neutral-600 dark:hover:text-white" data-modal-toggle="updateUserModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <form>
                        <div class="grid gap-4 mb-4 sm:grid-cols-2">
                            <div>
                                <label for="user-permissions" class="inline-flexitems-center mb-2 text-sm font-medium text-neutral-900 dark:text-white">
                                    Chain Type
                                </label>
                                <select :value="$CONSTANTS.ENUM.chains[criteria.chainType].chainName" @change="(e) => {criteria.chainType = e.target.value }" id="user-permissions" class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-st-green focus:border-st-green block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-st-green dark:focus:border-st-green" required="">
                                    <option v-for="chain in chainTypes" >{{ $CONSTANTS.ENUM.chains[chain].chainName }}</option>
                                </select>
                            </div>
                            <div>
                                <label for="user-permissions" class="inline-flexitems-center mb-2 text-sm font-medium text-neutral-900 dark:text-white">
                                    Token Standard
                                </label>
                                <select :value="$CONSTANTS.ENUM.standards[criteria.tokenStandard]" @change="(e) => {criteria.tokenStandard = e.target.value }" id="user-permissions" class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-st-green focus:border-st-green block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-st-green dark:focus:border-st-green" required="">
                                    <option v-for="standard in tokenStandards" >{{ $CONSTANTS.ENUM.standards[standard] }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="grid gap-4 mb-4 sm:grid-cols-1">
                            <div>
                                <label for="user-permissions" class="inline-flex items-center mb-2 text-sm font-medium text-neutral-900 dark:text-white">
                                    Contract Address
                                </label>
                                <input :value="criteria.contractAddress" @change="(e) => {criteria.contractAddress = e.target.value }" type="text" name="text" id="text" class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-st-green focus:border-st-green block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-st-green dark:focus:border-st-green" required="">
                            </div>
                        </div>
                        <div class="grid gap-4 mb-4 sm:grid-cols-1">
                            <div>
                                <label for="user-permissions" class="inline-flex items-center mb-2 text-sm font-medium text-neutral-900 dark:text-white">
                                    Minimum Amount
                                    <!-- <button type="button" data-tooltip-target="tooltip-dark" data-tooltip-style="dark" class="ml-1">
                                        <svg aria-hidden="true"  class="w-4 h-4 text-neutral-400 cursor-pointer hover:text-neutral-900 dark:hover:text-white dark:text-neutral-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                        <span class="sr-only">Details</span>
                                    </button>
                                    <div id="tooltip-dark" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 max-w-sm text-xs font-normal text-white bg-neutral-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-neutral-700">
                                        User permissions, part of the overall user management process, are access granted to users to specific resources such as files, applications, networks, or devices.
                                        <div class="tooltip-arrow" data-popper-arrow></div>
                                    </div> -->
                                </label>
                                <input :value="criteria.minAmount" @change="(e) => {criteria.minAmount = e.target.value }"  type="number" name="text" id="text" class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-st-green focus:border-st-green block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-st-green dark:focus:border-st-green" required="">
                            </div>
                        </div>
                        <div class="grid gap-4 mb-4 sm:grid-cols-1">
                            <div>
                                <label for="user-permissions" class="inline-flex items-center mb-2 text-sm font-medium text-neutral-900 dark:text-white">
                                    Description
                                </label>
                                <input :value="criteria.description" @change="(e) => {criteria.description = e.target.value }"  type="text" name="text" id="text" class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-st-green focus:border-st-green block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-st-green dark:focus:border-st-green" required="">
                            </div>
                        </div>
                        <div class="flex items-center space-x-4 mt-10">
                            <button v-if="criteriaArray.includes(modalRole.id)" @click.prevent="editCriteria" :class="criteriaValid ? 'opacity: 100':'opacity: 50'" class="text-black bg-st-green hover:bg-st-green focus:ring-4 focus:outline-none focus:ring-st-green font-bold rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-tr from-st-green to-st-sky dark:hover:bg-st-green dark:focus:ring-st-green">
                                <svg v-if="btnLoader" aria-hidden="true" role="status" class="inline mr-2 -mt-[0.5px] w-4 h-4 text-black animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="gray"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                </svg>
                                {{ btnLoader ? 'Editing..' : 'Edit Criteria' }}
                            </button>
                            <button v-else @click.prevent="addCriteria" :class="criteriaValid ? 'opacity: 100':'opacity: 50'" class="text-black bg-st-green hover:bg-st-green focus:ring-4 focus:outline-none focus:ring-st-green font-bold rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-tr from-st-green to-st-sky dark:hover:bg-st-green dark:focus:ring-st-green">
                                <svg v-if="btnLoader" aria-hidden="true" role="status" class="inline mr-2 -mt-[0.5px] w-4 h-4 text-black animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="gray"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                </svg>
                                {{ btnLoader ? 'Creating..' : 'Create Criteria' }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'
import SecondaryBtnVue from '@/components/SecondaryBtn.vue'
import Loader from '@/components/Loader.vue'
import { mapGetters } from 'vuex'
import axios from 'axios'
import arraySort from 'array-sort'
export default {
    data() { 
        return {
            serverData: undefined,
            modalUp: false,
            modalRole: undefined,
            criteria: {
                chainType: 0,
                tokenStandard: 0,
                contractAddress: '0x',
                minAmount: 0,
                description: '',
            },
            guildCriteria: undefined,
            loading: true,
            btnLoader: false
        }
    },
    components: {
        Button,
        SecondaryBtnVue,
        Loader
    },
    methods: {
        addBot() {
            window.open('https://discord.com/api/oauth2/authorize?client_id=1044688147902120089&permissions=8&scope=bot','_blank')
        },
        addRole(role) {
            this.modalRole = role
            this.modalUp = true
        },
        editRole(role) {
            this.criteria = {...this.guildCriteria[role.id]}
            this.modalRole = role
            this.modalUp = true
        },
        closeModal() {
            this.criteria = {
                chainType: 0,
                tokenStandard: 0,
                contractAddress: '0x',
                minAmount: 0,
                description: '',
            }
            this.modalUp = false
            this.modalRole = undefined
        },
        async addCriteria() {
            this.btnLoader = true
            await axios.get('/api/criteria/add', {
                params: {
                    modId: this.$store.state.discordId,
                    guildId: this.serverData.id,
                    roleId: this.modalRole.id,
                    criteria: JSON.stringify(this.criteria)
                }
            })    
            this.modalUp = false
            this.loading = false
            this.btnLoader = false
            this.getGuildCriteria()
        },
        async editCriteria() {
            this.btnLoader = true
            await axios.get('/api/criteria/edit', {
                params: {
                    modId: this.$store.state.discordId,
                    guildId: this.serverData.id,
                    roleId: this.modalRole.id,
                    criteria: JSON.stringify(this.criteria)
                }
            })    
            this.modalUp = false
            this.loading = false
            this.btnLoader = false
            this.getGuildCriteria()
        },
        async getGuildCriteria() {
            this.loading = true
            this.guildCriteria = (await axios.get('/api/criteria/getGuildCriteria', {
                params: {
                    guildId: this.serverData.id
                }
            })).data.guildCriteria
            this.loading = false
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
        },
        criteriaValid() {
            return this.criteria.contractAddress.length == 42
        },
        criteriaArray() {
            return Object.keys(this.guildCriteria)
        },
        // sortedRoles() {
        //     return arraySort(servers, 'active', {reverse: true})serverData.roles
        // }
    },
    async created() {
        this.chainTypes = this.$CONSTANTS.chainTypes
        this.tokenStandards = this.$CONSTANTS.tokenStandards
        this.serverData = this.servers.find((e, index) => {
            return e.id === this.$route.params.id
        })
        // await axios.get('/api/server/getAllRoles', {
        //     params: {
        //         id: this.$store.state.discordId
        //     }
        // })
        this.getGuildCriteria()
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