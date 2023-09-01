<script setup lang="ts">
const hanko = useHanko()
function logout() {
  hanko!.user.logout();
 navigateTo("/login");

}
</script>
<template>
  <button @click="logout">
      Log out
  </button>
</template>