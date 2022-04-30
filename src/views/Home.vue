<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
    <PokemonCard
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :id="pokemon.id"
      :name="pokemon.name"
      :url="pokemon.url"
      :imgUrl="pokemon.imageUrl"
    >
    </PokemonCard>
  </div>
</template>

<script setup lang="ts">
import PokemonCard from '@/components/PokemonCard.vue';
import { usePokemonStore } from '@/store';
import { computed, onMounted } from 'vue';

const pokemonStore = usePokemonStore();

const pokemons = computed(() => pokemonStore.pokemons);

onMounted(() => {
  pokemonStore.fetchAllPokemons();
});
</script>
