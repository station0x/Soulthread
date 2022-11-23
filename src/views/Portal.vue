<template>
    <h1 class="text-white">Portal</h1>
</template>

<script>
// const lib = JsonUrl('lzw')
export default {
    data() {
        return {
            user: {
                id: undefined,
                username: undefined,
                avatar: undefined
            }
        }
    },
    async created() {
        // await lib.decompress(this.$route.params.user).then(output => {
        //     this.user.avatar = output.avatar
        //     this.user.steamHash = output.steamHash
        //     this.user.playerAlias = output.username
        // })
        console.log(this.username, this.id, this.avatar)
    }
}
</script>