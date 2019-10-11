import React from 'react';
import {Input} from 'components/forms';
import { debounce } from 'components/shared/util';

interface pokemonTypes {
    refetch: any
}

export const Search = (props: pokemonTypes) => {
    const { refetch } = props;

    const onChange =  (e: any) => {
        debounce((text) =>refetch({
            search: text
        }), 500)(e.target.value)
    }
    return (
        <Input placeholder="Search" onChange={onChange} />
    );
}