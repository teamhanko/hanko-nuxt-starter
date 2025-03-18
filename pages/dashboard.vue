<script setup lang="ts">
    definePageMeta({
        //Define that you should run the logged in middleware
        middleware: ["hanko-logged-in"],
    });
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
