import { defineStore } from 'pinia'

interface AuthState {
    loggedIn: boolean
    user: object
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
        async login({ email, password }) {
            const router = useRouter()
            const { login } = useDirectusAuth()

            try {
                // Try to login
                const response = await login({
                    email,
                    password,
                })

                // If login was successful, fetch the users data
                const user = await useDirectusUser()

                // Update the auth store with the user data
                this.loggedIn = true
                this.user = user

                // If there's a redirect, send the user there
                if (this.loggedIn) {
                    router.push('/processos-seletivos')
                }
            } catch (e) {
                console.log(e)
                throw new Error('Wrong email address or password')
            }
        },
        async logout() {
            const router = useRouter()
            const { logout } = useDirectusAuth()
            try {
                // Try to logout
                const response = await logout()

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

            try {
                // Try to fetch the user data
                const user = await useDirectusUser();
                // Update the auth store with the user data
                this.loggedIn = true
                this.user = user
            } catch (e) {
                console.log(e)
            }
        },
        async resetState() {
            this.$reset()
        },
    },
})
