export interface Pokemon {
  id: number;
  name: string;
  url: string;
  imageUrl: string;
  details?: PokemonDetails;
}

export interface PokemonDetails {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  game_indices: GameIndex[];
  id: number;
  height: number;
  held_items: HeldItem[];
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: PastType[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

interface Ability {}

interface Form {}

interface GameIndex {}

interface HeldItem {}

interface Move {}

interface PastType {}

interface Species {}

interface Sprites {}

interface Stat {}

interface Type {}
