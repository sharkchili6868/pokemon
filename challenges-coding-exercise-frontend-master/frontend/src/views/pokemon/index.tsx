import React from 'react';
import { Pokemon } from 'views/pokemon/view';
import { GET_POKEMON_BY_NAME } from 'views/pokemon/query';
import { useQuery } from '@apollo/react-hooks';
import { withRouter, RouteComponentProps } from 'react-router';

export const PokemonScreen = (props: RouteComponentProps) => {

    const name = props.match.params['name'];

    const {data} = useQuery(GET_POKEMON_BY_NAME, {variables: {
        name
    }});
    return <Pokemon data={data} />
}

export default withRouter(PokemonScreen);