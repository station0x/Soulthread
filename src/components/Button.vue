<template>
    <button type="button" class="text-black bg-gradient-to-r from-st-green to-st-sky action-btn focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-semibold rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">{{ text }}</button>
</template>

<script>
export default {
    props: [
        'text'
    ]
}
</script>

<style>
.action-btn:hover {
    filter: drop-shadow(0 0 0.8em #01e8974d);
    /* text-shadow:0px 0px 30px #fdec6e; */
}
</style>