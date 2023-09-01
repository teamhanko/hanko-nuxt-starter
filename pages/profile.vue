<script setup lang="ts">
definePageMeta({
  middleware: ["hanko-logged-in"],
});
</script>

<template>
  <hanko-profile />
  <LogoutButton />
</template>
