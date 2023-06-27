<template>
<div>
  <header>
    <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://inovacao.go.gov.br/" class="flex items-center">
          <img src="./img/efg_logo.svg" class="h-10 mr-3" alt="Logo EFG">
          <span class="self-center text-2xl font-bold whitespace-nowrap text-goias-400">Cadastro de PSA</span>
      </a>

      <div v-if="user" class="flex md:order-2">
        <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" class="w-10 h-10 rounded-full cursor-pointer" src="./img/user-profile.svg" alt="User dropdown">

        <!-- Dropdown menu -->
        <div id="userDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-50 dark:bg-gray-700 dark:divide-gray-600">
            <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>{{ usuario.first_name + ' '+ usuario.last_name}} </div>
              <div class="font-medium truncate">{{usuario.email}}</div>
            </div>
            <!-- <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              </li>
             
            </ul> -->
            <div class="py-1">
              <button @click="submitLogout()" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sair</button>
            </div>
        </div>
      </div>
      <!-- <div v-if="user" class="flex md:order-2">
          <a href="./cadastro-pss">
            <button type="button" class="text-white bg-goias-400 hover:bg-goias-500 focus:ring-4 focus:outline-none focus:ring-goias-700 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cadastrar Processo Seletivo</button>
          </a>
          <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
      </div> -->
      <div v-if="user" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-goias-400 md:p-0 md:dark:text-blue-500" aria-current="page">Página Inicial</a>
          </li>
          <li>
            <a href="./cadastro-pss" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-goias-400 md:p-0 md:dark:hover:text-goias-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Cursos</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-goias-400 md:p-0 md:dark:hover:text-goias-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Turmas</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-goias-400 md:p-0 md:dark:hover:text-goias-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Planejamentos</a>
          </li>
        </ul>

        
      </div>
      </div>
    </nav>
  </header>


  <main class="pt-16 w-full min-h-[76vh] ">

    <div class="container mx-auto mt-5">
              <slot />
    </div>

  </main>

    
  <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                    <img src="./img/logo-secti-goias.svg" class="h-14 mr-3" alt="Logo SECTI Goiás" />
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">Sobre</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Tutorial</a>
                    </li>
                    
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://inovacao.go.gov.br/" class="hover:underline">Secretaria de Estado de Ciência, Tecnologia e Inovação</a></span>
        </div>
  </footer>


  

</div>
</template>

<script setup>
  const user = useDirectusUser();

  const { logout } = useDirectusAuth();


  const submitLogout = async () => {
    await logout();
    window.location.reload();
  };

  const usuario = user.value;


</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>