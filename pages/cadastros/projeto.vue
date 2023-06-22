<template>
   
    <div class="px-0 py-5 w-full mx-auto min-w-full">
        <h1 class="text-2xl font-extrabold text-center text-goias-400 dark:text-white my-5">Cadastro de Projeto</h1>

        <div class="flex items-center justify-center h-full">
    
            <form class="min-w-[75vh]">
            
                <div class="mb-6">
                    <label for="descricao" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Curso</label>
                    <input type="text" id="descricao" class="bg-gray-50 p-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-goias-500 focus:border-goias-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
                </div> 

                <div class="mb-6">
                    <label for="descricao" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                    <input type="text" id="descricao" class="bg-gray-50 p-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-goias-500 focus:border-goias-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
                </div>

                <div class="mb-6">
                    <label for="descricao" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Turno</label>
                    <input type="text" id="descricao" class="bg-gray-50 p-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-goias-500 focus:border-goias-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
                </div> 

                <div class="mb-6">
                    <label for="descricao" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Modalidade</label>
                    <input type="text" id="descricao" class="bg-gray-50 p-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-goias-500 focus:border-goias-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
                </div>  

                <div class="mb-6">
                    <label for="descricao" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Turno</label>
                    <input type="text" id="descricao" class="bg-gray-50 p-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-goias-500 focus:border-goias-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
                </div>  

                <button type="submit" class="text-white mr-2 bg-gray-500 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancelar</button>
                <button type="submit" class="text-white bg-goias-400 hover:bg-goias-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Salvar</button>
            
            
            </form>


        </div>
        
    </div>

</template>

<script setup>
    import { onMounted } from 'vue'
    import { initFlowbite } from 'flowbite'

    definePageMeta({
         middleware: ["directus-auth"],
    })

    onMounted(() => {
    initFlowbite();
    })  

    const router = useRouter();


   
</script>

<style scoped>
    
</style>