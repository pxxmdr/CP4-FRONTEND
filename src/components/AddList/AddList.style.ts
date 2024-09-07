import styled from "styled-components";

export const Label = styled.label `
    color: gray;
`

export const Form = styled.form `
    margin-top: 0.25rem;
    display: flex;
    align-items: stretch;
    gap: 0.5rem;
    width: 100%;
    & button svg{
        width: 30px;
        height: 30px;
        color: #3299CC;
    }
`

export const Input = styled.input `
    flex:1;
    border: 2px solid lightgray;
    border-radius: 4px;
    padding: 12px;
    box-shadow: none;
    &::placeholder {
        color: lightgray;

    }


`