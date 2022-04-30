import { Pokemon } from '@/models/pokemon.model';
import { defineStore } from 'pinia';
import getters from './getters';
import state from './state';

const pokemonsURL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

async function fetchPokemons() {
  const response = await fetch(pokemonsURL);
  const data = await response.json();
  const pokemons: Array<Pokemon> = data.results.map(
    (fetchedPokemon: { name: string; url: string }, index: number) => {
      const id = index + 1;
      return {
        id,
        name: fetchedPokemon.name,
        url: fetchedPokemon.url,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
      };
    }
  );
  return pokemons;
}

export const usePokemonStore = defineStore({
  id: 'main',
  state: () => state,

  actions: {
    async fetchAllPokemons() {
      const setPokemonState = async () => {
        const pokemonData: Array<Pokemon> = await fetchPokemons();
        const stringifiedPokemons = JSON.stringify(pokemonData);
        localStorage.setItem('pokemons', stringifiedPokemons);
        this.pokemons = pokemonData;
      };

      // If pokemons are in localStorage, use them
      if (localStorage.pokemons) {
        const localPokemons = localStorage.getItem('pokemons');

        // if, for some reason, storage is null, fetch them
        if (localPokemons === null) {
          localStorage.clear();
          setPokemonState();
          return;
        }

        // if storage is not null, parse it
        const parsedPokemons = JSON.parse(localPokemons);
        this.pokemons = parsedPokemons;
        return;
      }

      // If pokemons are not in localStorage, fetch them
      setPokemonState();
    },
  },

  getters,
});
