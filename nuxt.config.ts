// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({


    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-directus',
        '@pinia/nuxt',
    ],
    directus: {
        url: "https://siga.go.gov.br/editais-psa/"
    },

    vite: {
        optimizeDeps: {
            include: [
                'pinia',
            ]
        }
    }
    // app: {
    //     head: {
    //         script: [
    //             {
    //                 src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/datepicker.min.js',

    //             }
    //         ]
    //     },
    // }
})

