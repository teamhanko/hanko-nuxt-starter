<script setup lang="ts">
    import '@/style/hanko-style.css'

    definePageMeta({
        middleware: ["hanko-logged-out"],
    });
</script>

<template>
    <main>
        <HankoStarterInfo/>
        <hanko-auth />
    </main>
</template>