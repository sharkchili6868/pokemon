import styled, {css} from 'styled-components';
import { Layout, Grid, CardBody, CardFooter, Card } from 'components/layout';
import { Theme } from 'components/shared/theme';
import { Button } from 'components/buttons';

export const DashboardLayout = styled(Layout)`
    position: relative;
    align-self: start;
    align-content: start; 
    justify-content: start;
    height: auto;
`

export const Header = styled(Grid)`
    grid-template-rows: 1fr 1fr;
    grid-row-gap: .3rem;
    justify-content: stretch;
    width: 100%;
    padding: .5rem;
    box-shadow: 0px 0px 2px 0px #cccccc;
    ${props => props.list && css`
        align-self: start;

    `}
`

export const HeaderButtons = styled(Grid)`
    grid-template-columns: 1fr 1fr;
    justify-content: stretch;
    align-self: start
    width: 100%;
`

export const HeaderActions = styled(Grid)`
    grid-template-columns: 7fr 4fr 1fr;
    grid-column-gap: .3rem;
    justify-content: stretch;
    align-self: start
    width: 100%;
`

export const HeaderButtonIcons = styled(Grid)`
    grid-template-columns: 5fr 1fr 5fr;
    justify-content: space-around;
`
export const Body = styled(Grid)`
    grid-template-columns: repeat(auto-fill, 11.581rem);
    grid-template-rows: auto;
    justify-content: start;
    grid-gap: 1rem;
    align-self: start;
    ${props => props.list && css`
        grid-template-columns: none;
        grid-template-rows: 1fr;
    `}
`

export const PokemonCard = styled(Card)`
    ${props => props.list && css`
        grid-template-columns: 1fr 11fr;
        height: fit-content;
    `}
`

export const ImageCard = styled(CardBody)`
    justify-self: center;
    padding: 1.5rem .75rem;
    & img{
        height: 9rem;
        width: inherit;
        ${props => props.list && css`
            height: 3rem;
            padding: 0;
        `}
    }
`

export const ImageCardFooter = styled(CardFooter)`
    ${props => props.list && css`
        grid-template-columns: 11fr 1fr;
    `}
`

export const TextTitle = styled.h4`
    margin: 0;
`

export const TextSmall = styled.p`
    font-size: ${Theme.fontSizeS};
    margin: 0;
`
export const FavButton = styled(Button)`
    color: ${Theme.colors.red};
    border: none;
    font-size: ${Theme.fontSizeXL};
    background: transparent;
    cursor: pointer;
`

export const Paginate = styled(Grid)`
    grid-template-columns: repeat(auto-fill, 4rem);
    grid-template-rows: auto;
    justify-content: start;
    grid-gap: 1rem;
    align-self: start;
`