<template>
    <div>
        
        
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const { getItemById } = useDirectusItems();

    const fetchProcesso = async () => {
        try {
            const item = await getItemById({
                collection: "processos_seletivos",
                id: id,
            });
        }catch (e) {}
    };
    fetchProcesso();

</script>

<style scoped>

</style>