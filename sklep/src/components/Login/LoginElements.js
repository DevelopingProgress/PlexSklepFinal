import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #de354c;
    filter: brightness(0.7);
    `

export const FormWrap = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: column;
    
    
    @media screen and (max-width: 400px){
        height: 70%;
    }
    `

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #ffffff;
    font-weight: 700;
    font-size: 32px;
    transition: transform 0.5s;
    
    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-right: 8px;
    }
    
    &:hover{
        transform: scale(1.02);
        color: white;
    }
    `

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media screen and (max-width: 480px){
        padding: 40px;
        margin-left: 10px;
    }
    `

export const Form = styled.form`
    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
    
    @media screen and (max-width: 400px){
        padding: 32px 32px 32px 32px;
    }
    `

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #ffffff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    `

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #ffffff;
    `

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    `
export const FormButton = styled.button`
    background: #de354c;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    font-size: 20px;
    cursor: pointer;
    `

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #ffffff;
    font-size: 14px;
    `
