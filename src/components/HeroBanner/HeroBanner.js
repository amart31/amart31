
import React, { useState, useEffect } from 'react';
import headerImg from '../../img/heroBg.jpg';
import headerImgMobile from '../../img/heroBg-mobil.jpg';
import './HeroBanner.scss';

const  HeroBanner = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const imageUrl = windowWidth >=767 ? headerImg : headerImgMobile;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);
    return (
        
        <section className="'HeroBanner" style={{backgroundImage:`url(${imageUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
        <div className="HeroBanner--textbox">
        <h1 className="HeroBanner--primary">
                <span className="HeroBanner--primary--main">{"<Welcome />"}</span>
                <span className="HeroBanner--primary--sub">created by Andy Martinez </span>
            <span className="HeroBanner--primary--sub2">Pega Certified Senior System Architect</span>
        </h1>

        <a href="#projects" className="btn btn--white">
            see my work
        </a>
    </div>

        </section>
    )
}

export default HeroBanner;