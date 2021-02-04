import React, {useState} from 'react'
import {
    ArrowForward,
    ArrowRight,
    HeroBg,
    HeroBtnWrapper,
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
    VideoBg
} from "./HeroElements";
import Video from '../../videos/video.mp4';
import { ButtonS} from "../ButtonElement";
import {useEffect} from "react";


const HeroSection = () => {

    const [scrollNav,setScrollNav] = useState(false);

    const changeNav = () => {

        if(window.scrollY >=80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', changeNav);
    }, []);

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id="home" scrollNav={scrollNav}>
            <HeroBg>
                <VideoBg  disablePictureinPicture autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Przedsiębiortswo Techniczne PLEX</HeroH1>
                <HeroP>Meblowy Sklep Internetowy</HeroP>
                <HeroBtnWrapper>
                    <ButtonS to="offers" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" secondary="true" light="true"
                             smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Nasza Oferta {hover ? <ArrowForward/> : <ArrowRight/>}
                    </ButtonS>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
