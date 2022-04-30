<template>
  <div class="p-5 m-5 ring-2 rounded-lg shadow-xl hover:ring-4 cursor-pointer">
    <img :src="imgUrl" :alt="name" />
    <p class="capitalize">{{ name }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  url: { type: String, required: true },
  imgUrl: { type: String, required: true },
});
</script>

<style scoped lang="scss"></style>
