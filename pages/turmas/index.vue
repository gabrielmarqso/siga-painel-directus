<template>
    <div class="px-0 py-5 w-full mx-auto min-w-full">
        <h1 class="text-3xl font-extrabold text-center text-goias-400 dark:text-white my-5">
            Turmas Cadastradas
        </h1>

        <!-- paginação -->
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                    <th scope="col" class="px-6 py-3">
                        Código SIGA
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr
                    v-for="(turma, index) in turmas"
                    :key="index"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >

                <td class="px-6 py-4">
                    {{ turma.id }}
                </td>
                   
                <td class="px-6 py-4">
                    {{  getNomeCurso(turma.Curso)  }}
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

                <td class="px-6 py-4">
                    {{ turma.Nome_da_Turma  }}
                </td>
                
                

                

                </tr>
            </tbody>
        </table>

    </div>
</template>

<script setup>

import {initFlowbite} from 'flowbite';
import { onMounted } from 'vue';
const { expires } = useDirectusToken();
const { getItems } = useDirectusItems();

useHead({
    title: "Cadastro de PSA | Turmas Cadastradas"
})

onMounted(() => {
    initFlowbite();
    getTurmas();
    getCategorias();
    getCursos();
    getModalidade();
})

const turmas = ref([]);
const cursos = ref([]);
const categorias = ref([]);

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

const modalidades = ref([]);


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