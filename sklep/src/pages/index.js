import React, {useState} from 'react'
import {Sidebar} from "../components/Sidebar/sidebar";
import {Navbar} from "../components/Navbar/navbar";
import HeroSection from "../components/HeroSection/hero";
import InfoSection from "../components/InfoSection/info";
import {
    homeObjContact,
    homeObjOffer,

} from "../components/InfoSection/Data";
import Services from "../components/Services/services";
import Footer from "../components/Footer/footer";


export const Home = () => {



    const[isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOffer}/>
            <Services/>
            <InfoSection {...homeObjContact}/>
            <Footer/>
            </>
    )
}
