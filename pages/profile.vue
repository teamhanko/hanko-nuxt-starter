<script setup lang="ts">
    import '@/style/hanko-style.css'
    import { ClientOnly } from '../.nuxt/components';

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
