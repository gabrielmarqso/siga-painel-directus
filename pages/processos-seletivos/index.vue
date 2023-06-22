<template>
    <div class="px-0 py-5 w-full mx-auto min-w-full">
        <h1 class="text-3xl font-extrabold text-center text-goias-400 dark:text-white my-5">Processos Seletivos</h1>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    
    <div class="flex flex-col items-center bg-gray-50">
    
    <div class="inline-flex  mt-2 xs:mt-0 ">
        <!-- Buttons -->
        <button @click="previous()" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-goias-400 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
            
        </button>
        <button @click="next()" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-goias-400 border-0 border-l  rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            
            <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
    </div>
    <!-- Help text -->
    <span class="text-sm text-gray-700 dark:text-gray-400">
        <span class="font-semibold text-gray-900 dark:text-white">{{ (currentPage - 1) * itemsPerPage + 1 }}</span>-<span class="font-semibold text-gray-900 dark:text-white">{{ Math.min(currentPage * itemsPerPage, qtdProcessos) }}</span> de <span class="font-semibold text-gray-900 dark:text-white">{{ qtdProcessos }}</span> Processos Seletivos
    </span>

    
    </div>

    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <!-- <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th> -->
                <th scope="col" class="px-6 py-3">
                    Descrição
                </th>
                <th scope="col" class="px-6 py-3">
                    EFG
                </th>
                <th scope="col" class="px-6 py-3">
                    Edital
                </th>
                <th scope="col" class="px-6 py-3">
                    Tipo Edital
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
                
            </tr>
        </thead>



        <tbody>
            
            <tr
            v-for="(processo, index) in processos"
            :key="index"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                <td class="px-6 py-4">
                    {{ processo.Descricao }}
                </td>
                <td class="px-6 py-4">
                    {{ processo.EFG }}
                </td>
                <td class="px-6 py-4">
                    {{ processo.Edital }}
                </td>
                <td class="px-6 py-4">
                    {{ processo.tipo_edital }}
                </td>
                <td class="px-6 py-4">

                    <NuxtLink :to="`/processos-seletivos/${processo.id}`">
                        <p class="font-medium text-goias-400 dark:text-goias-500 hover:underline">Editar</p>
                    </NuxtLink>
                </td>
            </tr>
            
        </tbody>

    </table>
    <div class="flex items-center justify-center max-width h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                <span class="sr-only">Loading...</span>
            </div>
    </div>

    </div>


    </div>
</template>

<script setup lang="ts">

    import { ref , watch} from 'vue';
    const { getItems } = useDirectusItems();
    const router = useRouter();

    const { expires } = useDirectusToken();

    import { onMounted } from 'vue'
    import { initFlowbite } from 'flowbite'


    definePageMeta({
         middleware: ["directus-auth"],
    })
   
    useHead({
        title: "Processos Seletivos de Alunos"
    })

    

    console.log(expires);

    onMounted(() => {
        initFlowbite();
    })

    const currentPage = ref(1);
    const itemsPerPage = ref(15);
    const processos = ref([]);

function previous(){
    if (currentPage.value > 1){
        currentPage.value--;
        fetchProcessos();
    }
}
function next(){
    if(currentPage.value < qtdProcessos / itemsPerPage.value){
        currentPage.value++;
        fetchProcessos();
    }
}

// function selectedPage(page: number){
//     currentPage.value = page;
//     fetchProcessos();
// }

interface Processos {
    id?: string | number;
    title: string;
    Descricao: string;
    EFG: string;
    tipo_edital: string;
}

const { login } = useDirectusAuth();

const fetchProcessos = async () => {

  try {
    const items = await getItems<Processos>({
      collection: "processos_seletivos",
      params: {
        limit: itemsPerPage.value,
        offset: (currentPage.value - 1) * itemsPerPage.value,
      },
    });
    
    processos.value = items;
  } catch (e) {
    console.error(e);
  }
};

fetchProcessos();

const getTotalProcessos = async () => {

  try {
    const response = await getItems<Processos>({
      collection: "processos_seletivos",
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

const qtdProcessos = await getTotalProcessos();


</script>



<style scoped>

</style>