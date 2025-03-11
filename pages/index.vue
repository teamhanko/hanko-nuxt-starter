<script setup lang="ts">
    import '@/style/hanko-style.css'

    definePageMeta({
        //Declares that this is the page the user will be redirected to after logout or unauthorized
        middleware: ["hanko-logged-out"],
    });
</script>

<template>
    <main>
        <HankoStarterInfo/>
        <hanko-auth />
    </main>
</template>