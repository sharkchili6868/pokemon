import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Dashboard } from 'views/dashboard/view';
import {GET_ALL_POKEMONS, GET_POKEMON_TYPES} from 'views/dashboard/query';

const DashboardScreen: React.FC = (props) => {

    const [variables, setVariables] = useState({
        search: null, filter: {
            isFavorite: null,
            type: null
        }
    }); 

    const {data, refetch, fetchMore} = useQuery(GET_ALL_POKEMONS);

    const fetchPokemon = (variable: any) => {
        
        if (variable.isFavorite || variable.isFavorite === null){
            variables.filter.isFavorite = variable.isFavorite
        }
        if (variable.type || variable.type === ""){
            variables.filter.type = variable.type;
        }
        if (variable.search || variable.search === ""){
            variables.search = variable.search;
        }
        setVariables(variables);
        refetch(variables);
    }

    const allPokemonsTypes = useQuery(GET_POKEMON_TYPES);
    
    if (data)
    return (
        <Dashboard 
            pokemons={data} 
            pokemonTypes={allPokemonsTypes.data} 
            refetch={fetchPokemon} 
            fetchMore={fetchMore} 
        />
    );
    return null
}

export default DashboardScreen;