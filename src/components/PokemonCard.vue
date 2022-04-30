<template>
  <div class="p-5 m-5 ring-2 hover:ring-4 rounded-lg shadow-xl">
    <img :src="imgUrl" :alt="name" />
    <p class="capitalize">{{ name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { usePokemonStore } from "@/store";

export default defineComponent({
  name: 'PokemonCard',

  props: {
    id: Number,
    name: String,
    url: String,
    imgUrl: String,
  },
});
</script>

<style scoped lang="scss"></style>
