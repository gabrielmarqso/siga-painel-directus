<template>

    <div class="px-0 py-5 w-full mx-auto min-w-full">
            <h1 class="text-2xl font-extrabold text-center text-goias-400 dark:text-white my-5">Processo Seletivo</h1>
    
            <div class="flex items-center justify-center h-full">
        
                <form class="min-w-[75vh]">
                <div class="grid gap-5 mb-5 md:grid-cols-2">
                    <div>
                        <label for="edital" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edital</label>
                        <input v-model="processo.Edital" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-goias-500 focus:border-goias-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
                    </div>
                    <div>
                        <label for="efg" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">EFG</label>
    
                        <select v-model="processo.EFG"
                        id="efg" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-goias-500 focus:border-goias-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option v-for="(efg , index) in efg"
                            :key="index"
                             :value="efg.id">{{efg.Nome}}</option>
                        </select>
                    </div>
                   
                </div>
    
                <div class="mb-6">
                    <label for="descricao" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrição</label>
                    <input v-model="processo.Descricao" type="text" id="descricao" class="bg-gray-50 p-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-goias-500 focus:border-goias-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
                </div> 
    
                <div class="grid gap-5 mb-5 md:grid-cols-2">
                    <div>
                        <label for="tipo-edital" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo do Edital</label>
                        <select id="tipo-edital" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-goias-500 focus:border-goias-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Escolha um tipo</option>
                            <option value="Novas Vagas">Novas Vagas</option>
                            <option value="Rematrícula">Rematrícula</option>
                            <option value="Novas Vagas">Republicação</option>
                        </select>
                    </div>
    
                    <div>
                        <label for="data-publicacao" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Publicação do Edital</label>
    
                        <div class="relative max-w-sm">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input v-model="processo.publicacao_edital" datepicker datepicker-buttons datepicker-format="{dd/mm/yyyy}" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Selecione a data de publicação">
                        </div>
                    </div>
    
                </div>
    
                <div class="mb-6">
                    <label for="prazo-inscricao" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prazo de Inscrição</label>
                    <div id="prazo-inscricao" date-rangepicker class="flex items-center">
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input v-model="processo.Inicio_da_inscricao" name="start" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Data inicial das inscrições">
                        </div>
                        <span class="mx-10 text-gray-500">até</span>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input v-model="processo.Termino_da_inscricao" name="end" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Data final das inscrições">
                        </div>
                    </div>
    
                </div>
    
                <div class="mb-6">
                    <label for="link" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link</label>
                    <input v-model="processo.Link" type="text" id="link" class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-goias-500 focus:border-goias-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
                </div> 
    
                <div class="mb-6">
                    <div>
                        <label for="projeto" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Projeto</label>
                        <select v-model="processo.projeto" id="projeto" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-goias-500 focus:border-goias-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    
                            <option v-for="(projeto , index) in projetos"
                            :key="index"
                             :value="projeto.id" >{{ projeto.nome }}</option>
                            
                        </select>
                    </div>
    
                </div>
    
                <div class="mb-6">
                    <label for="arquivos" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Anexar arquivos</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="arquivos" type="file" multiple>
                </div>
    
    
                <div class="mb-6">
    
                    <label for="turmas" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Turmas</label>
    
    
                    
                    <div id="turmas" class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table  class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="p-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            <label for="checkbox-all" class="sr-only">checkbox</label>
                                        </div>
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
                                        Ação.
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        
                                    </th>
                                    <td class="px-6 py-4">
                                        
                                    </td>
                                    <td class="px-6 py-4">
                                        
                                    </td>
                                    <td class="px-6 py-4">
                                        
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-goias-400 dark:text-blue-500 hover:underline"></a>
                                    </td>
                                </tr>
    
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Empreendedorismo
                                    </th>
                                    <td class="px-6 py-4">
                                        Noturno
                                    </td>
                                    <td class="px-6 py-4">
                                        Qualificação
                                    </td>
                                    <td class="px-6 py-4">
                                        Online
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-goias-400 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
    
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Gestão de Negócios
                                    </th>
                                    <td class="px-6 py-4">
                                        Noturno
                                    </td>
                                    <td class="px-6 py-4">
                                        Qualificação
                                    </td>
                                    <td class="px-6 py-4">
                                        Online
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-goias-400 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
    
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Programação de Computadores
                                    </th>
                                    <td class="px-6 py-4">
                                        Noturno
                                    </td>
                                    <td class="px-6 py-4">
                                        Qualificação
                                    </td>
                                    <td class="px-6 py-4">
                                        Presencial
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-goias-400 dark:text-blue-500 hover:underline">Editar</a>
                                    </td>
                                </tr>
                                
                                
                            </tbody>
                        </table>
                    </div>
    
    
                </div>
    
    
                <button type="submit" class="text-white mr-2 bg-gray-500 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancelar</button>
                <button type="submit" class="text-white bg-goias-400 hover:bg-goias-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Salvar</button>
                
                
            </form>
    
    
            </div>
            
        </div>
    
    </template>
    
    <script setup>
        const { id } = useRoute().params
        const { getItemById } = useDirectusItems();
        const { getItems } = useDirectusItems();
        const processo = ref([]);
        
        // onMounted(() => {
        // initFlowbite();
        // })  
    
    
        const fetchProcesso = async () => {
            try {
                const item = await getItemById({
                    collection: "processos_seletivos",
                    id: id,
                });
    
                processo.value = item;
            }catch (e) {}
        };
    
        fetchProcesso();
    
        const efg = ref([]);
        const fetchEFG = async () => {
            try {
                const items = await getItems({
                    collection: "EFG",
                    params: {
                       
                    },
                });
                efg.value = items;
            } catch (e) {
                console.error(e);
            }
        };
        fetchEFG();
    
        const projetos = ref([]);
        const fetchProjetos = async () => {
            try {
                const items = await getItems({
                    collection: "projeto",
                    params: {
                       
                    },
                });
                projetos.value = items;
            } catch (e) {
                console.error(e);
            }
        };
        fetchProjetos();
    
        const turmas = ref([]);
        const fetchTurmas = async () => {
            try{
                const items = await getItems({
                    collection: "Turmas",
                    params: {
                        
                    }
                });
                turmas.value = items;
            } catch(e){
                console.error(e);
            }
        };
    
        fetchTurmas();
    
    </script>
    
    <style scoped>
    
    </style>