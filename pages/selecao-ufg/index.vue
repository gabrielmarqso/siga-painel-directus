<template>
    <div class="px-0 py-5 w-full mx-auto min-w-full">
        <h1 class="text-3xl font-extrabold text-center text-goias-400 dark:text-white my-5">
            Editais UFG
        </h1>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="flex flex-col items-center bg-gray-50">
                <div class="inline-flex  mt-2 xs:mt-0">
                    <button @click="previous()" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-goias-400 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                        
                    </button>
                    <button @click="next()" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-goias-400 border-0 border-l  rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        
                        <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>

                <span class="text-sm text-gray-700 dark:text-gray-400">
                    <span class="font-semibold text-gray-900 dark:text-white">{{ (currentPage - 1) * itemsPerPage + 1 }}</span>-<span class="font-semibold text-gray-900 dark:text-white">{{ Math.min(currentPage * itemsPerPage, qtdEditais) }}</span> de <span class="font-semibold text-gray-900 dark:text-white">{{ qtdEditais }}</span> Editais
                </span>

            </div>

            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <th scope="col" class="px-6 py-3">
                        Curso
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Edital
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Escola
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Modalidade
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Inscrições
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Turma
                    </th>
                    <th scope="col" class="px-6 py-3">
                        
                    </th>

                </thead>

                <tbody>

                    <tr
                    v-for="(edital, index) in editais"
                    :key="index"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >

                    <td class="px-6 py-4">
                        {{ edital.curso }}
                    </td>

                    <td class="px-6 py-4">
                        {{ edital.edital }}
                    </td>

                    <td class="px-6 py-4">
                        {{ edital.escola }}
                    </td>

                    <td class="px-6 py-4">
                        {{ edital.modalidade }}
                    </td>

                    <td class="px-6 py-4">
                        {{ edital.matriculas }}
                    </td>

                    <td class="px-6 py-4" >
                        {{  getTurmaNome(edital.turma) }}
                    </td>

                    </tr>
                    
                </tbody>
            </table>
        </div>
        

    </div>
</template>

<script setup lang="ts">
    import {ref, onMounted} from 'vue';
    import {initFlowbite} from 'flowbite';

    const { expires } = useDirectusToken();
    const { getItems } = useDirectusItems();

    useHead({
        title: "Editais de Seleção da UFG"
    })

    onMounted(() => {
        initFlowbite();
        getTurmas();
    })

    const editais = ref([]);
    const currentPage = ref(1);
    const itemsPerPage = ref(15);
    const processos = ref([]);

    function previous(){
        if (currentPage.value > 1){
            currentPage.value--;
        }
        fetchEditais();
    }
    function next(){
        if(currentPage.value < qtdEditais / itemsPerPage.value){
            currentPage.value++;
        }
        fetchEditais();
    }

    const getTotalEditais = async () => {
            try {
                const response = await getItems({
                    collection: "ufg_selecao",
                    params: {
                    limit: 0,
                    meta: 'total_count'
                    },  
                });
                return response.meta.total_count;
                } catch (e) {
                console.error(e);
                }
    };

   const qtdEditais = await getTotalEditais();

    const fetchEditais = async () => {
        try {
            const items = await getItems({
                collection: "ufg_selecao",
                params: {
                    limit: itemsPerPage.value,
                    offset: (currentPage.value - 1) * itemsPerPage.value,
                },
            });

            editais.value = items;

        }catch(e) {
            console.error(e);
        }
    };

    const turmas = ref();

    const getTurmas = async ( ) => {
        try {
            const items = await getItems({
                collection: "Turmas",
            });
            
            turmas.value = items;
        }catch(e){
            console.error(e);
        }
    }
    
    getTurmas();

    async function getTurmaNome(turmaIds) {
        if (Array.isArray(turmaIds) && turmaIds.length > 0) {
            const nomesTurmas = [];
            for (const turmaId of turmaIds) {
                const turma = turmas.value.find((turma) => turma.id === turmaId);
                    nomesTurmas.push(turma.Nome_da_Turma);
            }
            return nomesTurmas.join(", ");
        }
        return "";
    }

    async function exampleUsage(valores) {
        await getTurmas();
        const turmaIds = valores; // Exemplo de array de IDs de turmas
        const nomesTurmas = getTurmaNome(turmaIds);
        return nomesTurmas;
       
    }
    


    fetchEditais();

   


    

</script>

<style lang="scss" scoped>

</style>