import { defineStore } from "pinia";

interface AuthState {
    loggedIn: boolean;
    user: object;
}

export const useAuth = defineStore('auth', {
    state: (): AuthState => ({
        loggedIn: false,
        user: {},

    }),

    getters: {
        isLoggedIn: (state) => state.loggedIn,
        userData: (state) => state.user,
    },

    actions: {
        async login({ email, password, redirect }) {
            const router = useRouter();
            const { $directus } = useNuxtApp()

            try {
                //Tentativa de login
                const response = await $directus.auth.login({
                    email,
                    password,
                })

                //Se o login for bem sucedido aparece os dados pro usuário

                const user = await $directus.users.me.read({
                    fields: ['*'],
                })


                this.loggedIn = true;
                this.user = user;

                if (redirect) {
                    router.push(redirect)
                }
            } catch (e) {
                console.log(e)
                throw new Error('E-mail ou senha incorretos')
            }
        },
        async logout() {
            const router = useRouter();
            const { $directus } = useNuxtApp()

            try {
                //Tenta fazer logout
                const response = await $directus.auth.logout()

                // Remove the auth_expires_at cookie that is left over from the logout
                const authExpiration = useCookie('auth_expires_at')
                authExpiration.value = null

                // If logout was successful, reset the auth store
                this.$reset()

                // Send the user back to the home page
                router.push('/')
            } catch (e) {
                console.log(e)
                throw new Error('Issue logging out')
            }

        },

        async getUser() {
            const { $directus } = useNuxtApp()

            try {
                const user = await $directus.users.me.read({
                    fields: ['*'],

                })

                //atualiza a situação da autenticação
                this.loggedIn = true;
                this.user = user;

            } catch (e) {
                console.log(e)
            }
        },
        async resetState() {
            this.$reset()
        },

    },
})