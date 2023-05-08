// https://nuxt.com/docs/api/configuration/nuxt-config
// noinspection JSUnusedGlobalSymbols
export default defineNuxtConfig({
    modules: [
        "nuxt-icon",
        "@nuxtjs/tailwindcss"
    ],
    css: [
        "@/assets/defaults.scss"
    ],
    typescript: {
        strict: true
    },
    tailwindcss: {
        configPath: "./tailwind.config.ts"
    }
})
