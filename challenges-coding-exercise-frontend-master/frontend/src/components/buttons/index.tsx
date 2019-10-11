import styled, {css} from 'styled-components';
import React from 'react';
import { Theme } from 'components/shared/theme';
import { Grid } from 'components/layout';



export const Button = styled.button<any>`
display: inline-block;
weight: 100%
text-align: center;
vertical-align: middle;
outline: none;
padding: 0.375rem 0.9rem;
border: 1px solid ${Theme.colors.green};
height: fit-content;
cursor: pointer;
background-color: ${Theme.colors.white};
color: ${Theme.colors.green};
font-size: ${Theme.fontSizeL};
${(props) => props.active && css`
    background-color: ${Theme.colors.green};
    color: ${Theme.colors.white}
`}
transition: color .15s ease-in-out,
    background-color .15s ease-in-out,
    shadow 0.15s ease-in-out;
`

export const ActiveButton = styled(Button)`
    background-color: ${Theme.colors.green};
    color: ${Theme.colors.white}
`

export const IconButton = styled(Button)`
    border: none;
`

const ListIconButtonWrapper = styled(Grid)`
    grid-template-rows: repeat(4, 1fr);
    grid-gap: .2px;
    height: 1.5rem;
    justify-self: end;
    cursor: pointer;
    align-self: center;
    justify-content: stretch
    & div{
        width: 60%;
        background-color: ${Theme.colors.green};
        height: .1rem;
        justify-self: end;
        align-self: center;
    }
`

export const VerticalDivider = styled.div`
    width: 2px;
    border: none;
    height: 100%;
    margin: 0 .3rem;
    background-color: ${Theme.colors.gray100};
`

const GridIconButtonWrapper = styled(Grid)`
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    height: 1.5rem;
    justify-self: start;
    cursor: pointer;
    align-self: center;
    width: 60%;
    grid:-gap: 1px;
    & div{
        width: .3rem;
        height: .3rem;
        background-color: ${Theme.colors.green}
    }
`

const divGenerator = (count: number) => {
    const divs: any[] = [];
    for(let x = 1; x <= count; x++){
        divs.push(<div key={`key-${x}`}></div>)
    }
    return divs;
}

export const ListIconButton = (props: any) => <ListIconButtonWrapper {...props}>
    {divGenerator(4)}
</ListIconButtonWrapper>

export const GridIconButton = (props: any) => <GridIconButtonWrapper {...props}>
    {divGenerator(9)}
</GridIconButtonWrapper>