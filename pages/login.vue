<script setup lang="ts">
function afterLogin() {
 navigateTo("/profile");
}
</script>
<template>
  <hanko-auth  @onAuthFlowCompleted="afterLogin()" />
</template>