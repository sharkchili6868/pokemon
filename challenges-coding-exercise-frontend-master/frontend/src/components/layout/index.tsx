import styled from 'styled-components';

import {Theme} from 'components/shared/theme';

export const Layout = styled.div`
    height: 100%;
    min-width: inherit;
    position: absolute;
    display: grid;
    margin: auto;
    box-shadow: .3rem #000000;
    padding: .3rem;
    width: 100%;
    justify-self: center;
    grid-row-gap: 1rem;
    align-self: center;
    justify-content: stretch;
    max-width: 1000px;
`

export const Grid = styled.div`
    display: grid;
    position: relative;
    justify-content: stretch;
    width: inherit;
`

export const Card = styled.div`
    display: grid;
    justify-content: stretch;
    grid-template-rows: auto 1fr;
    border: 1px solid ${Theme.colors.gray100};
    border-radius: ${Theme.primaryBorderRadius};
    height: 250px;
`

export const CardBody = styled(Grid)`
    width: 100%;
    height: 100%;
`

export const CardFooter = styled(Grid)`
    background-color: ${Theme.colors.gray100};
    margin: 0;
    width: 100%;
    height: 100%;
    justify-content: stretch;
    grid-template-columns: 10fr 50px;
    padding: .3rem;
`