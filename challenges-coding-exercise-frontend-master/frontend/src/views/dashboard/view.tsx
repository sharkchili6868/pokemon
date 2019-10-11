import React, { ReactNode, useState } from 'react';
import { 
    DashboardLayout, 
    Header, 
    HeaderButtons, 
    HeaderActions, 
    HeaderButtonIcons,
    Body
} from 'views/dashboard/style';
import { Button, ListIconButton, VerticalDivider, GridIconButton } from 'components/buttons';
import Pokemon from 'views/dashboard/components/pokemon';
import {Pagination} from 'views/dashboard/components/pagination';
import { SelectType } from './components/select';
import { Search } from './components/search';

interface DashboardProps {
    pokemons: {
        pokemons:{
            limit: number,
            offset: number,
            count: number,
            edges: {
                name: string,
                types: string[],
                image: string,
            }[]
        }
    },
    refetch?: any,
    fetchMore?: any,
    pokemonTypes?: {
        pokemonTypes: string[] 
    }
    children?: ReactNode
}

export const Dashboard = (props: DashboardProps) => {
    const {pokemons, pokemonTypes, refetch, fetchMore} = props;
    const [showFavorites, setShowFavorites] = useState(false);
    const [page, setPage] = useState(1);
    const [listView, setListView] = useState(true);
    const pullSize = 20;
    const {edges, limit, count} = pokemons.pokemons;

    const displayPokemons = () => {           
            return edges.map((pokemon: any) => {
                return <Pokemon key={pokemon.name} pokemon={pokemon} list={listView} />
            })
    }

    const handleShowFavorites = () => {
        if (!showFavorites){
            refetch({
                    isFavorite: true
                })
            setShowFavorites(true)
        }
    }

    const handleHideFavorites = () => {
        if (showFavorites){
            refetch({
                isFavorite: null
            })
            setShowFavorites(false)
        }
    }

    const fetchMorePokemons = (pageNumber: number) => {
            fetchMore({
                variables: {
                    offset: (pageNumber - 1)*pullSize,
                    limit: pullSize,
                },
                updateQuery: (prev, { fetchMoreResult, ...rest }) => {
                    if (!fetchMoreResult) return prev;
                    return fetchMoreResult;
            }})
        setPage(pageNumber)
    }

    

    return (
        <DashboardLayout>
            <Header  list={listView}>
                <HeaderButtons>
                    <Button onClick={handleHideFavorites} active={!showFavorites}>All</Button>
                    <Button onClick={handleShowFavorites} active={showFavorites}>Favorites</Button>
                </HeaderButtons>
                <HeaderActions>
                    <Search refetch={refetch}/>
                    <SelectType pokemonTypes={pokemonTypes} refetch={refetch}/>
                    <HeaderButtonIcons>
                            <ListIconButton onClick={setListView.bind(null, true)}/>
                            <VerticalDivider />
                            <GridIconButton onClick={setListView.bind(null, false)} />
                    </HeaderButtonIcons>
                </HeaderActions>
            </Header>
            <Body list={listView}>
               {displayPokemons()} 
            </Body>
            <Pagination pageNumber={page} pageSize={limit} totalSize={count} handleButtonClick={fetchMorePokemons}/>
        </DashboardLayout>
    )
}