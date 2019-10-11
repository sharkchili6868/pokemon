import {gql} from 'apollo-boost';

export const GET_ALL_POKEMONS = gql`
query GetPokemons($limit: Int, $offset: Int, $search: String, $filter: PokemonFilterInput){
    pokemons(query: {limit: $limit, offset: $offset, search: $search, filter: $filter}){
      limit, offset, count, edges{
        id,
        name, 
        image, 
        types,
        isFavorite
      }
    }
  }
`

export const ADD_FAVORITE = gql`
  mutation AddFavorties($id: ID!){
    favoritePokemon(id: $id){
      isFavorite,
      name,
      id
    }
  }
`

export const REMOVE_FAVORITE = gql`
  mutation RemoveFavorties($id: ID!){
    unFavoritePokemon(id: $id){
      isFavorite,
      name,
      id
    }
  }
`

export const GET_POKEMON_TYPES = gql`
  {
    pokemonTypes
  }
`