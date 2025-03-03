<script setup lang="ts">
    definePageMeta({
        middleware: ["hanko-logged-in"],
    });
</script>

import { ClientOnly } from '../.nuxt/components';
<template>
    <main>
        <ClientOnly>
            <HankoStarterHeader/>
        </ClientOnly>
        <HankoStarterInfo/> 
        <HankoStarterDashboard/> 
</main>
</template>
