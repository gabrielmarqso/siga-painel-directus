import { useAuth } from "~/store/auth";

export default defineNuxtRouteMiddleware((to) => {
    const auth = useAuth();
    const router = useRouter();

    if (!auth.loggedIn) {
        return router.push({
            path: '/login',
            query: {
                next: to.path,
            },
        })
    }


})