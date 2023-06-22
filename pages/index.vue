<template>
    <div>
        
        
    </div>
</template>

<script setup>
    const router = useRouter();
    definePageMeta({
         middleware: ["directus-auth"],
    })

    const token = useDirectusToken();
    const user = useDirectusUser();
</script>


<style scoped>

</style>