<template>

    <div class="px-0 py-5 w-full mx-auto min-w-full">
    
    
        <h1 class="text-3xl font-extrabold text-center text-goias-400 dark:text-white my-5">Fazer Login</h1>
    
    
        <div class="flex items-center justify-center h-full">
            
            <form class="rounded-lg px-10 py-8 w-full max-w-md mx-auto" @submit.prevent="submitLogin" >
                <!-- <VAlert v-if="error" type="error" class="mb-4"> Error: {{ error }} </VAlert>
                <div v-if="loading" class="flex items-center justify-center flex-1">
                <VLoading class="w-24 h-24 text-primary-600" />
                </div> -->
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Digite seu e-mail</label>
                    <input v-model="email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-goias-400 focus:border-goias-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="usuario@goias.gov.br" required>
                </div>
    
                <div class="mb-6">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Digite sua senha</label>
                    <input v-model="password" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-goias-400 focus:border-goias-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                </div>
    
                <button type="submit"   class="  text-white bg-goias-400 hover:bg-goias-600 focus:ring-4 focus:outline-none focus:ring-goias-600 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Entrar</button>
                <!-- <div v-if="consoleError" class="alert alert-error p-4 text-sm text-center text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 my-3">
                    E-mail ou senha incorretos.
                </div> -->
            </form>
    
            
        </div>
    
    </div>
    
    </template>
    
    <script setup lang="ts">
        
        const { login } = useDirectusAuth();
        const user = useDirectusUser();
        const error = useError();
        const route = useRoute();

        const showPassword = ref(false);
        const passwordType = ref("password")
        const email = ref("");
        const password = ref("");
        
        const togglePasswordType = () => {
            showPassword.value = !showPassword.value;
            if (!showPassword.value){
                passwordType.value = "password"
            } else {
                passwordType.value = "text"
            }
        };

        const submitLogin = async () => {

            try{
                await login({
                    email: email.value,
                    password: password.value
                });
    
                setTimeout(async () => {
                    await navigateTo("/processos-seletivos", {redirectCode: 200});
                    
                }, 2000);
            }catch(err){
                console.log(err);
            }
        };

        useHead({
            title: 'Login - Cadastro PSA'
        });
        
    </script>
    
    <style scoped>
    
    </style>