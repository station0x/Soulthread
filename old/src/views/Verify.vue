<template>
    <section class="relative mx-auto my-auto px-0 md:px-10 py-16 dark:bg-st-gray select-none">
        <div class="bg-white dark:bg-st-gray z-40">
            <div class="flex h-[700px] z-40">
                <div class="z-40 hidden w-full max-w-sm p-12 lg:max-h-fit lg:grid content-center bg-st-black rounded-l-lg border border-r-0 border-neutral-800">
                    <div class="z-40 flex items-center mb-8 space-x-4 bg-st-black">
                        <a href="#" class="flex h-full my-auto items-center text-2xl font-semibold text-white">
                            <img class="w-[280px]" src="/img/logo.svg" />
                        </a>
                    </div>
                </div> 
                <div class="z-40 flex items-center mx-auto w-full p-8 px-16 bg-st-gray no-servers lg:rounded-r-lg lg:border md:border-l-0 lg:border-neutral-800">
                    <div class="z-40 w-full">
                        <div class="z-40 flex items-center justify-center mb-8 space-x-4 lg:hidden">
                            <a href="#" class="z-40 flex items-center text-2xl font-semibold">
                                <img class="w-[250px]" src="/img/logo.svg" />
                            </a>
                        </div>
                        <!-- <svg class="w-12 h-12 mb-4 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> -->
                        <h1 v-if="!finished" class="mb-2 text-5xl font-extrabold font-Allenoire dark:text-white">{{ headerText }}</h1>
                        <h1 v-else :class="!passed ? 'text-neutral-900 text-transparent bg-clip-text bg-gradient-to-r to-red-300 from-red-600' : 'text-neutral-900 text-transparent bg-clip-text bg-gradient-to-tr to-st-sky from-st-green'" class="mb-2 text-5xl font-extrabold font-Allenoire">
                            {{ headerText }}
                        </h1>
                        <p v-if="!finished" class="mb-4 font-light text-neutral-500 dark:text-neutral-400 md:mb-6"> {{ passed > 0 ? 'You can now go back to discord to enjoy your new granted roles.' : 'Sign this message to verify your assets for granting discord roles.' }}</p>
                        <p v-else class="mb-4 font-light text-neutral-500 dark:text-neutral-400 md:mb-6"> {{ passed > 0 ? 'You can now go back to discord to enjoy your new granted roles.' : 'Unfortunately, we could not verify you the have the required assets for discord roles.' }}</p>

                        <div v-if="!this.finished" class="flex gap-10 my-10">
                            <div class="flex cursor-pointer w-90 h-90 items-center after:font-light after:text-neutral-200">
                                <div class="w-full max-w-sm bg-white border border-neutral-200 rounded-lg dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700">
                                    <div @click="connectMetamask" class="flex flex-col items-center pb-4 px-2">
                                        <img v-if="!mmLoader" class="w-20 h-20 mt-5" src="/img/metamask-fox.svg"/>
                                        <svg v-else aria-hidden="true" role="status" :class="verifying ? 'text-[#01E898]' : 'text-[#F6851B]'" class="inline mt-9 mb-6 w-10 h-10 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="rgba(255,255,255,.125)"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                        </svg>
                                        <h5 class="mb-1 px-6 text-lg font-light text-neutral-900 dark:text-white">{{ verifying ? 'Checking Your Assets..' : 'Metamask' }}</h5>
                                    </div>
                                </div>
                            </div>
                            <div v-if="!verifying" class="flex cursor-not-allowed w-90 h-90 items-center after:font-light after:text-neutral-200">
                                <div class="w-full max-w-sm bg-white border border-neutral-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-800">
                                    <div class="flex flex-col items-center pb-4 px-0">
                                        <img class="w-20 h-20 mt-5" src="/img/wallet-connect.svg"/>
                                        <h5 class="mb-1 px-6 text-lg font-light text-neutral-900 dark:text-neutral-700">Wallet Connect</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full relative h-10 z-40">
            <div class="z-40 mx-auto flex items-center mt-16 space-x-4">
                <a href="https://station0x.com" target="_blank" class="flex h-full mx-auto items-center text-2xl font-semibold text-white">
                    <p class="text-xs font-light mr-4">Powered by </p>
                    <img class="w-[110px] mx-auto" src="/img/szx.svg" />
                </a>
            </div>
        </div>
        </div>
        <div class="h-full w-screen fixed top-0 left-0 md:bg-st-black z-0"></div>
        <div class="h-10 w-screen fixed top-0 left-0 md:bg-neutral-900 z-0">
            <div class="flex h-full items-center align-middle">
                <h1 class="grow font-semibold text-sm text-center text-transparent bg-clip-text bg-gradient-to-r to-st-sky from-st-green">Always verify the website domain is https://soulthread.xyz</h1>
            </div>
        </div>
    </section>
</template>

<script>
import Vue from 'vue'
import { decode } from 'js-base64'
import JsonURL from "@jsonurl/jsonurl"
import { mapGetters } from 'vuex'
import axios from 'axios'
import { ethers } from 'ethers'
import VueConfetti from 'vue-confetti'

Vue.use(VueConfetti)
export default {
    data() { 
        return {
            query: undefined,
            queryRaw: undefined,
            mmLoader: false,
            verifying: false,
            roles: undefined,
            finished: false
        }
    },
    components: {

    },
    methods: {
        async connectMetamask() {
            const message = `SoulThread (https://soulthread.xyz) requires verification of account ownership.\n\n Username: ${this.query.user} \n Server Name: ${this.query.guildName} \n Interaction ID: ${this.query.interactionId} \n Raw Timestamp: ${this.query.timestamp} \n\nThis Soul Bond (message) is READ-ONLY access and has NO GAS FEE associated with it. Please sign this Soul Bond (message) to verify with SoulThread`
            this.mmLoader = true   
            const provider = new ethers.providers.Web3Provider(window.ethereum, "any")
            const signer = provider.getSigner()
            await provider.send("eth_requestAccounts", []);
            const address = (await provider.listAccounts())[0]
            try {
                const signature = await signer.signMessage(message)
                this.verifying = true
                await axios.get('/api/verify/isEligible', {
                    params:{
                        userId: this.query.userId,
                        guildId: this.query.guildId,
                        roleId: this.query.roleId,
                        signature,
                        address,
                        // signing message
                        guildName: this.query.guildName,
                        timestamp: this.query.timestamp,
                        interactionId: this.query.interactionId,
                        username: this.query.user
                    }
                }).then(res => {
                    this.verifying = false
                    this.roles = res.data.rolesPassed
                    this.finished = true
                    if(this.roles.length > 0) {
                        this.start()
                        setTimeout(() => {
                            this.stop()
                        }, 3000)
                    }
                })
            } catch(err) {
                this.verifying = false
                this.mmLoader = false
            } finally {
                this.verifying = false
                this.mmLoader = false
            }
        },
        start() {
            this.$confetti.start();
        },

        stop() {
            this.$confetti.stop();
        },
    },
    computed: {
        headerText() {
            if(this.finished && this.roles.length > 0) {
                return 'Verified.'
            } else if(this.finished && this.roles.length < 1){
                return 'Whoops!'
            } else {
                if(this.mmLoader && !this.verifying) return 'Signing Message...'
                else if(this.mmLoader && this.verifying) return 'Verifying...'
                else return 'Verify your assets'
            }
        },
        passed() {
            if(this.roles) return this.roles.length > 0
        }
    },
    async created() {
        this.queryRaw = this.$route.params.query
        let decoded = decode(this.queryRaw)
        let parsed = JsonURL.parse(decoded)
        this.query = parsed
    }
}
</script>

<style scoped>
.no-servers {
    background-image: url('/img/verify-pattern.svg');
    background-size: 600px;
    background-repeat: no-repeat;
    background-position-x: 150px;
    background-position-y: 300px;
}
#confetti-canvas > * {
    z-index: 50 !important;
}
</style>