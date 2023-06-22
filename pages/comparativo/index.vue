import { initFlowbite } from 'flowbite';
<template>
    <div class="px-0 py-5 w-full mx-auto min-w-full">
        <h1 class="text-3xl font-extrabold text-center text-goias-400 dark:text-white my-5">Turmas sem cadastro no SIGA</h1>


        <!-- paginação -->
        <div class="relative overflow-x-auto shadow-md sm:rouded-lg">
            <div class="flex flex-col items-center bg-gray-50">

                

            </div>
        </div>

        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Curso
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Turno
                    </th>

                    <th scope="col" class="px-6 py-3">
                        Categoria
                    </th>

                    <th scope="col" class="px-6 py-3">
                        Modalidade
                    </th>

                    <th scope="col" class="px-2 py-3">
                        
                    </th>
                </tr>

            </thead>

            <tbody>
                <tr
                    v-for="(turma, index) in turmasSemCadastro"
                    :key="index"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                    <td class="px-6 py-4">
                        {{ turma.id }}
                    </td>

                    <td class="px-6 py-4">
                        {{ getNomeCurso(turma.Curso) }}
                    </td>

                    <td class="px-6 py-4">
                        {{ turma.Turno }}
                    </td>

                    <td class="px-6 py-4">
                        {{ getNomeCategoria(turma.categoria) }}
                    </td>

                    <td class="px-6 py-4">
                        {{ getNomeModalidade(turma.modalidade) }}
                    </td>

                    <td class="px-1 py-3">
                        <button type="button" class="text-goias-400 border border-goias-400 hover:bg-goias-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-goias-700 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-goias-600 dark:text-goias-600 dark:hover:text-white dark:focus:ring-goias-300 dark:hover:bg-goias-600">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">   <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
                            <span class="sr-only">Editar</span>
                        </button>
                    </td>

                </tr>
            </tbody>
        </table>
    </div> 

</template>

<script setup>
import {initFlowbite} from 'flowbite';
import { getTrailingCommentRanges } from 'typescript';

const { expires } = useDirectusToken();
const { getItems } = useDirectusItems();

definePageMeta({
         middleware: ["directus-auth"],
    })

useHead({
    title: "Comparativo de Editais"
})

onMounted(() => {
    initFlowbite()
    getTurmasSemCadastro();
    getCursos();
    getCategorias();
    getModalidade();
})

const turmas = ref([]);
const cursos = ref([]);
const categorias = ref([]);
const modalidades = ref([]);

const turmasSemCadastro = ref([]);

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

const getTurmasSemCadastro = async () => {
    try {
        const items = await getItems({
            collection: "Turmas",
            params:{
                filter: {
                    "Codigo": {
                        "_null": "true"
                    }
                }
            }
        
        });
        turmasSemCadastro.value = items;    
    }catch(e){
        console.error(e);
    }
}


const getCursos = async () => {
    try {
        const items = await getItems({
            collection: "Cursos",
            
        });
        cursos.value = items;
    }catch(e){
        console.error(e);
    }
}

const getNomeCurso = (cursoId) => {
    const curso =  cursos.value.find((c) => c.id == cursoId);
    return curso ? curso.nome: '';
}


const getCategorias = async () => {
    try {
        const items = await getItems({
            collection: "Categorias",
        });
        categorias.value = items;
    }catch(e){
        console.error(e);
    }
}

const getNomeCategoria = (categoriaId) => {
    const categoria = categorias.value.find((c) => c.id == categoriaId);
    return categoria ? categoria.Nome: '';
}

const getModalidade = async () => {
    try {
        const items = await getItems({
            collection: "Modalidade",
        });
        modalidades.value = items;
    }catch(e){
        console.error(e);
    }
}
const getNomeModalidade = (modalidadeId) => {
    const modalidade = modalidades.value.find((m) => m.id == modalidadeId);
    return modalidade ? modalidade.Nome: '';
}

</script>

<style lang="scss" scoped>

</style>