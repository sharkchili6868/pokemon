import React from 'react';
import { 
    PokemonLayout, 
    PokemonImageBody, 
    VolumeButton, 
    PokemonBottom, 
    PokemonInitials, 
    TextTitle, 
    TextSmall,
    PokemonName,
    PokemonStamina,
    Bar,
    PokemonDimension,
    Evolutions
} from './style';
import { FavButton } from 'views/dashboard/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { Grid } from 'components/layout';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { ADD_FAVORITE, REMOVE_FAVORITE } from 'views/dashboard/query';
import { useMutation } from '@apollo/react-hooks';
import  PokemonPiece from 'views/pokemon/components/evolutions';


interface PokemonProps {
    data?: any
}

export const Pokemon = (props: PokemonProps) => {
    const {data} = props;
    const [addFavorites] = useMutation(ADD_FAVORITE);
    const [removeFavorites] = useMutation(REMOVE_FAVORITE);

    if (!data) return null;
    const {image, sound, name, types, isFavorite, maxCP, maxHP, weight, height, id, evolutions} = data.pokemonByName;

    const playAudio = () => {
        const audio:HTMLAudioElement = new Audio(sound);
        audio.play()
    }

    const toggleFavorite = () => {
        if (isFavorite){
            removeFavorites({variables: {id}});
        } else {
            addFavorites({variables: {id}});
        }
    }

    const displayPokemons = () => {           
        return evolutions.map((pokemon: any) => {
            return <PokemonPiece key={pokemon.name} pokemon={pokemon} list={false} />
        })
}
    
    return (
        <PokemonLayout>
            <PokemonImageBody>
                <VolumeButton onClick={playAudio}>
                    <FontAwesomeIcon icon={faVolumeUp} />
                </VolumeButton>
                <img src={image} alt={name} /> 
            </PokemonImageBody>
            <PokemonBottom>
                    <PokemonName>
                        <Grid>
                                <TextTitle>{name}</TextTitle>
                            <TextSmall>{types.join(', ')}</TextSmall>
                        </Grid>
                        <FavButton onClick={toggleFavorite}>
                        <FontAwesomeIcon icon={isFavorite ? faHeart: faHeartRegular} />
                    </FavButton>
                    </PokemonName>
                    <PokemonStamina>
                        <Bar />
                        <TextTitle>CP: {maxCP}</TextTitle>
                    </PokemonStamina>
                    <PokemonStamina>
                        <Bar barColor={true}/>
                        <TextTitle>HP: {maxHP}</TextTitle>
                    </PokemonStamina>
                    <PokemonInitials>
                        <PokemonDimension>
                            <h2>Weight</h2>
                            <h3>{weight.minimum} - {weight.maximum}</h3>
                        </PokemonDimension>
                        <PokemonDimension>
                            <h2>Height</h2>
                            <h3>{height.minimum} - {height.maximum}</h3>
                        </PokemonDimension>
                    </PokemonInitials>
            </PokemonBottom>
            <h4>Evolutions</h4>
            <Evolutions>
                {displayPokemons()}
            </Evolutions>
        </PokemonLayout>
    )
}