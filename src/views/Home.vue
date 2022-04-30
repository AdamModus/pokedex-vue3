<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
    <PokemonCard
      v-for="pokemon in pokemonStore.allPokemons"
      :key="pokemon.id"
      :id="pokemon.id"
      :name="pokemon.name"
      :url="pokemon.url"
      :imgUrl="pokemon.imageUrl"
    >
    </PokemonCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { usePokemonStore } from '@/store';
import PokemonCard from '@/components/PokemonCard.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    PokemonCard,
  },

  setup() {
    const pokemonStore = usePokemonStore();

    return { pokemonStore };
  },

  mounted() {
    this.pokemonStore.fetchAllPokemons();
  },
});
</script>
