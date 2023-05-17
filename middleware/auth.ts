export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = useDirectusUser();
    const { fetchUser } = useDirectusAuth()

    if (to.path === '/login' && user.value) {
        return navigateTo("/processos-seletivos");
    }
    if (to.path === '/') {
        return navigateTo("/login");
    }

    await fetchUser()

})