import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const Nav = styled.nav`
    background: #000000;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    
    @media screen and (max-width: 960px) {
    
        transition: 0.8s all ease
        
        }`;

export const NavbarContainer = styled.div `

    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100%;`;

export const NavLogo = styled(LinkR)`

    color: #de354c;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.6rem;
    display: flex;
    align-items: center;
    margin-left: 30px;
    font-weight: bold;
    text-decoration: none;
    -o-transition:color .1s ease-out, background 2s ease-in;
    -ms-transition:color .1s ease-out, background 2s ease-in;
    -moz-transition:color .1s ease-out, background 2s ease-in;
    -webkit-transition:color .1s ease-out, background 2s ease-in;
    transition:color .1s ease-out;
    
    &:hover {
        color: white;
        }`;

export const MobileIcon = styled.div`
    
    display: none;
    
    @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #ffffff;`;

export const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    
    @media screen and (max-width: 768px) {
        display: none;
    }`;

export const NavItem = styled.li`
    height: 80px;
    `;

export const NavLinks = styled(LinkR)`
    color: #ffffff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1rem;
    height: 100%;
    cursor: pointer;
    
    
    &:hover {
        transform: scale(1.3);
        color: #de354c;
        transition: 0.1s ease-in-out;
        }`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    
    @media screen and (max-width:768px){
        display: none;
    }
    `;

export const NavBtnLink = styled(LinkR)`

    border-radius: 50px;
    background: #de354c;
    white-space: nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin: 8px;
    
    
    &:hover{
        transition: all 0.2s ease-in-out;
        background:#ffffff;
        color: #010606;
       }
        `;

