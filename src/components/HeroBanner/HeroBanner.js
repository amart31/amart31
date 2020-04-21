import React from 'react';
import headerImg from '../../img/heroBg.jpg';
import headerImgMobile from '../../img/heroBg-mobil.jpg';
import './HeroBanner.scss';

export function HeroBanner() {
    return (
        <section className="'HeroBanner">
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
            <picture>
                <source media='(min-width: 768px)' srcSet={headerImg} />
                <img src={headerImgMobile} alt='typing hands' className='HeroBanner-img fluid-img' />
                
            </picture>
        
        </section>
    )
}