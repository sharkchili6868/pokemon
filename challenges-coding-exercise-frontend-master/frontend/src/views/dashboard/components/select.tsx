import React from 'react';
import { Select } from 'components/forms';

interface pokemonTypes {
    pokemonTypes?: {
        pokemonTypes: string[] 
    },
    refetch: any
}

export const SelectType = (props: pokemonTypes) => {
    const { pokemonTypes, refetch } = props;
    const getOptions = () => {
        if (pokemonTypes){
            return pokemonTypes.pokemonTypes.map((type: string) => {
                return <option key={type} value={type}>{type}</option>
            })
        }
    }

    const onChange =  (e: any) => {
        refetch({
            type: e.target.value
        })
    }
    return (
        <Select onChange={onChange}>
            <option value="">Type</option>
            {getOptions()}
        </Select>
    );
}