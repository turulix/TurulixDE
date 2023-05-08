<script lang="ts" setup>
const year = new Date().getFullYear()

const socials = [
    {
        icon: "mdi:twitter",
        link: "https://twitter.com/turulix"
    },
    {
        icon: "mdi:github",
        link: "https://github.com/turulix"
    },
    {
        icon: "mdi:twitch",
        link: "https://twitch.tv/turulix"
    },
]
</script>

<template>
    <div class="flex w-full h-full justify-center items-center bg-neutral-800 font-roboto">
        <div class="w-[364px] h-[540px] bg-white rounded-xl flex-col drop-shadow-2xl">
            <img src="/avatar.jpg" alt="profile picture" class="max-w-[300px] max-h-[300px] m-8 mb-0">
            <div class="text-center" style="font-size: 18px">
                <h1 class="" style="font-size: 2em; font-weight: bold; text-decoration-style: solid">Turulix</h1>
                <p>Gamer & Developer from <a href="https://www.google.com/search?q=Germany">Germany</a></p>
                <p>Mainly developing in Java & Kotlin</p>
            </div>
            <div>
                <ul class="flex justify-evenly">
                    <li v-for="(social, index) in socials" class="flex basis-full justify-center" :class="index !== socials.length-1 ? 'border-r border-black' : ''">
                        <a :href="social.link" target="_blank" >
                            <Icon :name="social.icon" size="64px" class="text-transition"></Icon>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <footer class="absolute bottom-0 font-roboto text-white">
            Website made by Turulix &copy; {{ year }}
        </footer>
    </div>
</template>

<style lang="scss" scoped>
.text-transition {
  @apply hover:text-gray-500;
  @apply transition-colors;
  @apply ease-in-out;
  @apply duration-300;
  @apply cursor-pointer;
}

</style>
