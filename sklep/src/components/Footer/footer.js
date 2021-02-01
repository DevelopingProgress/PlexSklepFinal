import React from 'react'
import {
    FooterContainer, FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterWrap, RightLink, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights
} from "./footerElements";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, RiArrowUpCircleLine} from "react-icons/all";
import {animateScroll as scroll} from "react-scroll";

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer id="information">
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Informacje</FooterLinkTitle>
                                <FooterLink to="/aboutus">O nas</FooterLink>
                                <FooterLink to="/contact">Kontakt</FooterLink>
                                <FooterLink to="/contactform">Formularz kontaktowy</FooterLink>
                                <FooterLink to="/carrier">Kariera</FooterLink>
                                <FooterLink to="/privacypolicy">Polityka Prywatności</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Informacje</FooterLinkTitle>
                            <FooterLink to="/aboutus">O nas</FooterLink>
                            <FooterLink to="/contact">Kontakt</FooterLink>
                            <FooterLink to="/contactform">Formularz kontaktowy</FooterLink>
                            <FooterLink to="/carrier">Kariera</FooterLink>
                            <FooterLink to="/privacypolicy">Polityka Prywatności</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Informacje</FooterLinkTitle>
                            <FooterLink to="/aboutus">O nas</FooterLink>
                            <FooterLink to="/contact">Kontakt</FooterLink>
                            <FooterLink to="/contactform">Formularz kontaktowy</FooterLink>
                            <FooterLink to="/carrier">Kariera</FooterLink>
                            <FooterLink to="/privacypolicy">Polityka Prywatności</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Informacje</FooterLinkTitle>
                            <FooterLink to="/aboutus">O nas</FooterLink>
                            <FooterLink to="/contact">Kontakt</FooterLink>
                            <FooterLink to="/contactform">Formularz kontaktowy</FooterLink>
                            <FooterLink to="/carrier">Kariera</FooterLink>
                            <FooterLink to="/privacypolicy">Polityka Prywatności</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo onClick={toggleHome}><RiArrowUpCircleLine/></SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                    <WebsiteRights>&copy;2020. Designed by <RightLink href="//www.github.com/DevelopingProgress/">Kacper Gaweł</RightLink>.</WebsiteRights>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
