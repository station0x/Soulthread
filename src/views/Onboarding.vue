<template>
    <section class="px-10 py-16">
        <div class="py-8 bg-white dark:bg-gray-900 lg:py-0">
            <div class="flex h-[600px]">
                <div class="hidden w-full max-w-md p-12 lg:max-h-fit lg:block bg-neutral-800">
                    <div class="flex items-center mb-8 space-x-4">
                        <a href="#" class="flex items-center text-2xl font-semibold text-white">
                            <img class="w-[200px]" src="/img/logo.svg" />
                        </a>
                    </div>
                </div> 
                <div class="flex items-center mx-auto md:w-[42rem] px-4 md:px-8 xl:px-0">
                    <div class="w-full">
                        <div class="flex items-center justify-center mb-8 space-x-4 lg:hidden">
                            <a href="#" class="flex items-center text-2xl font-semibold">
                                <img class="w-8 h-8 mr-2" src="/img/logo.svg" />
                                <span class="text-gray-900 dark:text-white">Flowbite</span>
                            </a>
                        </div>
                        <ol class="flex items-center mb-6 text-sm font-medium text-center text-gray-500 dark:text-gray-400 lg:mb-12 sm:text-base">
                            <li class="flex items-center text-primary-600 dark:text-primary-500 sm:after:content-[''] after:w-12 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                <div class="flex items-center sm:block after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                                    <svg class="w-4 h-4 mr-2 sm:mb-2 sm:w-6 sm:h-6 sm:mx-auto shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    Personal <span class="hidden sm:inline-flex">Info</span>
                                </div>
                            </li>
                            <li class="flex items-center text-primary-600 dark:text-primary-500 after:content-[''] after:w-12 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                <div class="flex items-center sm:block after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                                    <svg class="w-4 h-4 mr-2 sm:mb-2 sm:w-6 sm:h-6 sm:mx-auto shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    Account <span class="hidden sm:inline-flex">Info</span>
                                </div>
                            </li>
                            <li class="flex items-center text-primary-600 dark:text-primary-500">
                                <div class="flex items-center sm:block">
                                    <svg class="w-4 h-4 mr-2 sm:mb-2 sm:w-6 sm:h-6 sm:mx-auto shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    Confirmation
                                </div>
                            </li>
                        </ol> 
                        <svg class="w-12 h-12 mb-4 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <h1 class="mb-2 text-2xl font-extrabold tracking-tight text-gray-900 leding-tight dark:text-white">Verified</h1>
                        <p class="mb-4 font-light text-gray-500 dark:text-gray-400 md:mb-6">You have successfully verified your account.</p>
                        <a @click="authDiscord" class="block w-full text-white bg-neutral-600 hover:bg-neutral-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3.5 text-center dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-primary-800">
                            Connect Discord</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
const lib = JsonUrl('lzw')

export default {
    data(){
        return {
            id: undefined,
            username: undefined,
            avatar: undefined
        }
    },
    methods: {
        authDiscord() {
            let endpoint = import.meta.env.MODE === 'development' ? 'http%3A%2F%2Flocalhost:3000' : 'https%3A%2F%2Fsoulthread.xyz'
            window.open(`https://discord.com/api/oauth2/authorize?client_id=1044688147902120089&redirect_uri=${endpoint}%2Fapi%2FauthDiscord%2FgetRedirect&response_type=code&scope=identify%20guilds`, '_self')
        }
    },
    async created() {
        if(this.$route.params.user) {
            var self = this
            await lib.decompress(this.$route.params.user).then(output => {
                self.avatar = output.avatar
                self.id = output.id
                self.username = output.username
            })
            this.$store.dispatch('signin', { id: this.id, username: this.username, avatar: this.avatar })
            this.$router.push({ name: 'Dashboard' })
        }
    }
}
</script>
