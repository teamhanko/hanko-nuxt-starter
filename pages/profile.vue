<script setup lang="ts">
    import '@/style/hanko-style.css'

    definePageMeta({
        middleware: ["hanko-logged-in"],
    });
</script>

<template>
    <main>
        <ClientOnly>
            <HankoStarterHeader/>
        </ClientOnly>
        <HankoStarterInfo/> 
        <hanko-profile />
    </main>
</template>
