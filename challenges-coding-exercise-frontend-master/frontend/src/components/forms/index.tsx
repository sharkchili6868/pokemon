import styled from 'styled-components';
import { Theme } from 'components/shared/theme';

const caratDown = './assets/images/carat-down.svg';

export const Input = styled.input`
    background-color: ${Theme.colors.gray100};
    display: block;
    width: inherit;
    height: 2.25rem;
    padding: 0.375rem 0.75rem;
    outline: none;
    font-size: ${Theme.primaryFontSize};
    line-height: ${Theme.primaryLineHeight};
    border: none;
`

export const Select = styled.select`
    width: 100%;
    padding: 0.375rem 0.75rem;
    background-color: ${Theme.colors.gray100};
    display: block;
    appearance: none;
    border: none;
    background-position: right .5rem top 50%;
    border-radius: 0;
    outline: none;
    background-repeat:no-repeat;
    background-image: url(${caratDown})
`