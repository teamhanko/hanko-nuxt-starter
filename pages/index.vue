<script setup lang="ts">
    import '@/style/hanko-style.css'

    definePageMeta({
        //Define that you should run the logged out middleware
        middleware: ["hanko-logged-out"],
    });
</script>

<template>
    <main>
        <HankoStarterInfo/>
        <hanko-auth />
    </main>
</template>