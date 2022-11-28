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
                        <h1 class="mb-2 text-5xl font-extrabold font-Allenoire dark:text-white">Verify your assets</h1>
                        <p class="mb-4 font-light text-neutral-500 dark:text-neutral-400 md:mb-6">Sign this message to verify your assets for granting discord roles.</p>

                        <div class="flex gap-10 my-10">
                            <div class="flex cursor-pointer w-90 h-90 items-center after:font-light after:text-neutral-200">
                                <div class="w-full max-w-sm bg-white border border-neutral-200 rounded-lg dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700">
                                    <div class="flex flex-col items-center pb-4 px-2">
                                        <img class="w-20 h-20 mt-5" src="/img/metamask-fox.svg"/>
                                        <h5 class="mb-1 px-6 text-lg font-light text-neutral-900 dark:text-white">Metamask</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="flex cursor-not-allowed w-90 h-90 items-center after:font-light after:text-neutral-200">
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
            <div class="z-40 mx-auto flex items-center mt-16 space-x-4 bg-st-black">
                <a href="https://station0x.com" target="_blank" class="flex h-full mx-auto items-center text-2xl font-semibold text-white">
                    <p class="text-xs font-light mr-4">Developed by </p>
                    <img class="w-[100px] mx-auto" src="/img/szx.svg" />
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
import { decode } from 'js-base64'
import JsonURL from "@jsonurl/jsonurl"
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
    data() { 
        return {
            query: undefined
        }
    },
    components: {

    },
    methods: {

    },
    computed: {

    },
    async created() {
        let query = this.$route.params.query
        let decoded = decode(query)
        console.log(decoded)
        let parsed = JsonURL.parse(decoded)
        console.log(parsed)
        // console.log(query, decoded)
        // console.log(isBase64(query), isBase64(decoded))

        // let mock = " (one:'1038407504318705724',two:'1046073267636674592',three:'267142718856101889')"
        // let parsed = JsonURL.stringify( mock )
        // let encoded = encode(parsed)
        // console.log(encoded)
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
</style>