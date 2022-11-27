<template>
    <section class="px-10 py-16">
        <div class="flex items-center mx-auto md:w-[42rem] px-4 md:px-8 xl:px-0">
                    <div class="w-full">
                        <a @click="authDiscord" class="block w-full text-white bg-neutral-600 hover:bg-neutral-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3.5 text-center dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-primary-800">
                            Connect Discord</a>
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
