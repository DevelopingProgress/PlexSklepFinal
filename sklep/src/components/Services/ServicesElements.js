import styled from 'styled-components';
import {Link as LinkR} from "react-router-dom";

export const ServicesContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    padding-bottom: 200px;
    margin-top: 20px;
    
    
    @media screen and (max-width: 768px) {
        height:100%;
        margin: 0;
    }
    
    @media screen and (max-width:480px){
        height:100%;
          margin: 0;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    
    @media screen and (max-width:1920){
        grid-template-columns: 1fr 1fr 1fr 1fr
    }
    
    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
    }
    
`

export const ServicesCard = styled.div`
    background: #ffffff;
    display: flex;
    flex-direction: column;
    jusstify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    width: 400px;
    height: 550px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
    
     @media screen and (max-width:1000px){
       margin-left: 10px;
        width: 350px;
        padding: 0 20px;
    }
    
    @media screen and (max-width:768px){
        width: 300px;
        padding: 0 20px;
        margin-right: 20px;
    }
    
     @media screen and (max-width:320px){
       width: 200px;
        padding: 0 20px;
        margin-right: 20px;
    }
    @media screen and (min-width:500px){
       width: 520px;
        padding: 0 20px;
        margin-right: 20px;
    }
    @media screen and (min-width:1000px){
        width: 430px;
        height: 450px;
        padding: 0 20px;
        margin-right: 20px;
    }
    @media screen and (min-width:700px){
        width: 740px;
        height: 450px;
        padding: 0 20px;
        margin-right: 20px;
    }
    @media screen and (max-width:400px){
        width: 350px;
        height: 450px;
        padding: 0 20px;
        margin-right: 20px;
    }
     @media screen and (min-width:400px){
        width: 395px;
        height: 450px;
        padding: 0 20px;
        margin-right: 20px;
    }
    @media screen and (max-width:280px){
        width: 250px;
        height: 450px;
        padding: 0 20px;
        margin-right: 20px;
    }
    @media screen and (max-width:320px){
        width: 300px;
        height: 450px;
        padding: 0 20px;
        margin-right: 20px;
    }
`


export const ServicesIcon = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    font-size: 2rem;
    color: #ffffff;
    margin-bottom: 100px;
    
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
    `

export const ServicesH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #de354c
    `
export const ServicesP = styled.p`
    font-size: 1rem;
    margin-bottom: 20px;
    padding-left: 15px
    `

export const ServicesH3 = styled.h3`
    font-size: 1.5rem;
    display: inline-block;
    `

export const ServicesLink = styled.div`
       height: 100%;
       width: 100%;
       padding-left: 15px`


export const ServicesBtn = styled(LinkR)`
    
    border-radius: 50px;
    background: #010606;
    white-space: nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 1.3rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin: 8px;
  
    
    
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #de354c;
        color: #ffffff;
       }
        `;
