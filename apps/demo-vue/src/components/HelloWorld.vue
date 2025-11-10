<script setup lang="ts">

defineProps<{ msg: string }>()

</script>

<template>
  <h1>{{ msg }}</h1>

 

 
  <p class="read-the-docs">Click on the button to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
