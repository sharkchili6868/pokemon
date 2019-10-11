import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import {    
    ImageCard,
    TextTitle,
    TextSmall,
    FavButton,
    PokemonCard,
    ImageCardFooter
} from 'views/dashboard/style';
import { ADD_FAVORITE, REMOVE_FAVORITE } from 'views/dashboard/query';
import { Grid } from 'components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

export interface PokemonProps extends RouteComponentProps {
    pokemon:{
        id: string,
        name: string,
        types: string[],
        image: string,
        isFavorite: boolean
    }
    list: boolean
}

 const Pokemon = (props: PokemonProps) => {
    const {id, name, types, image, isFavorite} = props.pokemon;
    const [addFavorites] = useMutation(ADD_FAVORITE);
    const [removeFavorites] = useMutation(REMOVE_FAVORITE);

    const toggleFavorite = () => {
        if (isFavorite){
            removeFavorites({variables: {id}});
        } else {
            addFavorites({variables: {id}});
        }
    }

    const gotoPokemonScreen = (name: string) => {
        props.history.push(`/${name}`);
    }
    return (
        <PokemonCard list={props.list}>
            <ImageCard onClick={gotoPokemonScreen.bind(null, name)} list={props.list}>
                <img src={image} alt={name}/>
            </ImageCard>
            <ImageCardFooter list={props.list}>
                <Grid>
                    <TextTitle>{name}</TextTitle>
                    <TextSmall>{types.join(', ')}</TextSmall>
                </Grid>
                <Grid>
                    <FavButton onClick={toggleFavorite}>
                        <FontAwesomeIcon icon={isFavorite ? faHeart: faHeartRegular} />
                    </FavButton>
                </Grid>
            </ImageCardFooter>
        </PokemonCard>
    )
}

export default withRouter(Pokemon);