import styled, {css} from 'styled-components';
import { Layout, Grid } from 'components/layout';
import { FavButton } from 'views/dashboard/style';
import { Theme } from 'components/shared/theme';


export const PokemonLayout = styled(Layout)`
    grid-row-gap: .3rem;
    position: relative;
    justify-content: stretch;
    justify-self: start;
    max-width: 700px;
    border: 1px solid ${Theme.colors.gray100};
    margin: .5rem auto;
`
export const PokemonImageBody = styled(Grid)`
    grid-template-columns: 2fr 10fr;
    justify-content: start;
    justify-self: start;
    align-self: start;
    & img{
         width: inherit;
         align-self: center;
    }
`

export const VolumeButton = styled(FavButton)`
    font-size: ${Theme.fontSizeXXL};
    color: ${Theme.colors.green};
    align-self: end;
`

export const PokemonBottom = styled(Grid)`
    background-color: ${Theme.colors.gray100};
`
export const PokemonBottomStart = styled(Grid)`
    
`

export const PokemonInitials = styled(Grid)`
    grid-template-columns: 6fr 6fr;
`
export const PokemonDimension = styled(Grid)`
    justify-content: center;
    text-align:center;
    & h2{
        margin-bottom: 0px;
    }
    & h3{
        margin-top: 0px;
    }
`
export const PokemonName = styled(Grid)`
    grid-template-columns: 10fr 2fr;
    padding: .3rem 0;
`

export const TextTitle = styled.h3`
    margin: 0;
`

export const PokemonStamina = styled(Grid)`
    grid-template-columns: 10fr 2fr;
    margin: 0.3rem 0;
`

export const Bar = styled.div`
    width: 100%;
    background-color: ${Theme.colors.indigo};
    border-radius: .6rem;
    align-self: center;
    height: 1rem;
    ${props => props.barColor && css`
        background-color: ${Theme.colors.green};    
    `}
`

export const TextSmall = styled.p`
    font-size: ${Theme.fontSizeL};
    margin: 0;
`