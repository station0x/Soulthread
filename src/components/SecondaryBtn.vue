<template>
    <button type="button" :class="size" class="text-neutral-100 bg-neutral-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-semibold rounded-lg px-5 py-2.5 text-center mr-2 mb-2">{{ text }}</button>
</template>

<script>
export default {
    props: [
        'text',
        'size',
    ]
}
</script>

<style>
</style>