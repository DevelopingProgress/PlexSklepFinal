import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const ButtonR = styled(LinkR)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#de354c' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#ffffff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({secondary}) => (secondary ? '#ffffff' : '#de354c')};
         color: ${({light}) => (light ? '#010606' : '#ffffff')};
    }
    `

export const ButtonS = styled(LinkS)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#de354c' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#ffffff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({secondary}) => (secondary ? '#ffffff' : '#de354c')};
         color: ${({light}) => (light ? '#010606' : '#ffffff')};
    }
    `
export const Button = styled.button`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#de354c' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#ffffff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({secondary}) => (secondary ? '#ffffff' : '#de354c')};
         color: ${({light}) => (light ? '#010606' : '#ffffff')};
    }
    `