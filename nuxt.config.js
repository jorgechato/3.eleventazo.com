export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'El Eventazo',
        htmlAttrs: {
            lang: 'es'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
            { hid: 'description', name: 'description', content: 'El Evento 3.0. Una fiesta privada de colegas cercanos.' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
            { name: 'theme-color', content: '#fff' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.jpg' },
            { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons' },
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/style/variables.css',
        '@/assets/style/main.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/vee-validate.js',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/firebase',
        '@nuxtjs/universal-storage',
    ],

    firebase: {
        config: {
            apiKey: "AIzaSyDZH210Qxep_4WwsPWkjt29Eph4pAv0aK8",
            authDomain: "el-evento-ea8c6.firebaseapp.com",
            databaseURL: "https://el-evento-ea8c6-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "el-evento-ea8c6",
            storageBucket: "el-evento-ea8c6.appspot.com",
            messagingSenderId: "493263525386",
            appId: "1:493263525386:web:35faee4618e0a5b1a231f3",
            measurementId: "G-HER6VXYT8L"
        },
        services: {
            firestore: true,
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ["vee-validate/dist/rules"],
    }
}
