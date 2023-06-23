export default defineNuxtRouteMiddleware(async (to, from) => {
    const { token, refreshToken, expires, refreshTokens } = useDirectusToken()
    const user = useDirectusUser();


    console.log("Token: ", token.value)
    console.log("Refresh token: ", refreshToken.value)
    console.log("Expire: ", expires.value)
    console.log("User: ", user.value)

    const { onLogin } = useApollo()

    if (!user.value) {

        try {
            console.log("Refreshing token")
            const auth = await refreshTokens()
            console.log(auth)
            onLogin(auth?.access_token)
        } catch {

            return navigateTo({
                path: "/login",
                query: {
                    redir: to.path,
                },
            });
        }
    }
});
