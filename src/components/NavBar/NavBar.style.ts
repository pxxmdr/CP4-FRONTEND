import styled from "styled-components";

export const NavList = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-around;
`

export const NavWrapper = styled.nav `
    width: 100vw;
    position: fixed;
    left: 0;
    bottom: 0;
    padding-block: 24px;
    border-top: 1px solid lightgray;
`

export const NavLink = styled.a `
    color: #3299CC;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & svg{
        width: 40px;
        height: 25px;
    }

`