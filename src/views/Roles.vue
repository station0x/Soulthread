<template>
    <div class="flex flex-col h-full">
        <!-- card -->
        <div class="mb-5 bg-white border rounded-lg shadow-md dark:bg-neutral-800 dark:border-neutral-700">
            <div id="fullWidthTabContent" class="dark:border-neutral-600">
                <div class="p-4 pb-0 bg-white rounded-lg md:p-4 md:pb-0 dark:bg-neutral-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                    <dl class="grid max-w-screen-xl gap-4 p-1 mx-auto text-neutral-900 grid-cols-3 dark:text-white sm:p-8 pb-0 sm:pb-0">
                        <div class="flex grow flex-col items-left justify-center">
                            <dt class="mb-2 text-3xl font-extrabold font-Allenoire allen-typo">Welcome,</dt>
                            <h1 class="mb-4 text-3xl font-Allenoire font-extrabold allen-typo text-gray-900 lg:text-5xl text-transparent bg-clip-text bg-gradient-to-tr to-st-sky from-st-green">
                                {{ $store.state.discordUsername }}
                            </h1>

                            <dd class="font-light text-neutral-500 dark:text-neutral-400"></dd>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-4 text-3xl font-Allenoire font-extrabold allen-typo text-gray-900 lg:text-5xl text-transparent bg-clip-text bg-gradient-to-tr to-st-sky from-st-green">0</dt>
                            <dd class="font-light text-neutral-500 dark:text-neutral-400">Granted Roles</dd>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <Button class="" text="Add New Role"></Button>
                        </div>
                    </dl>
                </div>
                <div class="text-sm font-light opacity-30 p-5">SoulThread does not track any data and is free to use.</div>
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
        <div class="grow border rounded-lg max-h-[500px] shadow-md dark:bg-[#0F0F0F] dark:border-neutral-800 no-servers">
            <div id="fullWidthTabContent" class="dark:border-neutral-600">
                <div class="p-4 rounded-lg md:p-8 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
                    <dl class="grid max-w-screen-xl gap-2 p-4 mx-auto text-neutral-900 grid-cols-6 dark:text-white sm:p-8">
                        <div class="flex col-span-1 flex-col items-center justify-center">

                        </div>
                        <div class="flex col-span-4 flex-col items-center justify-center">
                            <dt class="mb-2 mt-10 text-white text-5xl allen-typo text-center font-extrabold font-Allenoire">Hello, add your first server now!</dt>
                            <Button class="mt-10" text="Add Soulthread bot"></Button>
                        </div>
                        <div class="flex col-span-1 flex-col items-center justify-center">
                            
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
    data() {
        return {
            
        }
    },
    components: {
        Button
    },
    created() {
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