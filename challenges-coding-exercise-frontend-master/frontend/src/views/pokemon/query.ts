import {gql} from 'apollo-boost';
 
export const GET_POKEMON_BY_NAME = gql`
    query PokemonByName($name: String!){
        pokemonByName(name: $name){
            name,
            id,
            weight {
                minimum, maximum
            },
            height {
                minimum, maximum
            },
            image,
            sound,
            maxCP,
            maxHP,
            types,
            isFavorite,
            evolutions {
                name,
                id, 
                image,
                isFavorite
              }
        }
    }

`