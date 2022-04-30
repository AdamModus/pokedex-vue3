import { StateModel } from '@/models/state.model';
import { Pokemon } from '../models/pokemon.model';

export default {
  allPokemons: (state: StateModel) => {
    return state.pokemons;
  },

  getPokemonById: (state: StateModel) => {
    (id: number) => {
      return state.pokemons.find((pokemon: Pokemon) => pokemon.id === id);
    };
  },
};
