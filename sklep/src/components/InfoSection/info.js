import React, {useState} from 'react'
import {ButtonR} from "../ButtonElement";
import {
    BtnWrap,
    Column1,
    Column2, Img, ImgWrap,
    InfoContainer,
    InfoRow,
    InfoWrapper,
    SubTitle,
    TextWrapper,
    TopLine, Heading
} from "./InfoElements";
import {ArrowForward, ArrowRight} from "../HeroSection/HeroElements";

const InfoSection = ({lightBg, id, imgStart, lightText, topLine,headline,
                         description, buttonLabel, img, alt, dark, primary, toWhere}) => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
          <InfoContainer lightBg = {lightBg} id = {id}>
              <InfoWrapper>
                  <InfoRow imgStart = {imgStart}>
                      <Column1>
                          <TextWrapper>
                              <TopLine>{topLine}</TopLine>
                              <Heading lightText={lightText}>{headline}</Heading>
                              <SubTitle darkText={dark}>{description}</SubTitle>
                              <BtnWrap>
                                  <ButtonR to={toWhere} primary={primary ? 1 : 0} secondary={primary ? 1 : 0} light={primary ? 1 : 0}
                                  smooth={true} duration={500} exact="true" offset={-80} onMouseEnter={onHover} onMouseLeave={onHover}>
                                      {buttonLabel} {hover ? <ArrowForward/> : <ArrowRight/>}</ButtonR>
                              </BtnWrap>
                          </TextWrapper>
                      </Column1>
                      <Column2>
                          <ImgWrap>
                              <Img src={img} alt={alt}/>
                          </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
          </InfoContainer>
        </>
    )
}

export default InfoSection
