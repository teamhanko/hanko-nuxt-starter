<script setup lang="ts">
    definePageMeta({
        //Declares that this is the page the user will be redirected to after they log-in
        middleware: ["hanko-logged-in"],
    });

    import { ClientOnly } from '../.nuxt/components';
</script>

<template>
    <main>
        <ClientOnly>
            <HankoStarterHeader/>
        </ClientOnly>
        <HankoStarterInfo/> 
        <HankoStarterDashboard/> 
</main>
</template>
