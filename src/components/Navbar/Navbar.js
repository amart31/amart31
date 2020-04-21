import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

import { useScrollPosition } from '@n8tb1t/use-scroll-position';

export function Navbar() {
    const [headerStyle, setHeaderStyle] = useState({
        transition: 'all 200ms ease-in'
    });

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isVisible = currPos.y > prevPos.y;

            const shouldBeStyle = {
                visibility: isVisible ? 'visible' : 'hidden',
                transition: `all 250ms ${isVisible ? 'ease-in' : 'ease-out'}`,
                transfrom: isVisible ? 'none' : 'translate(0, -100%)'
            };

            if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return;

            setHeaderStyle(shouldBeStyle);
        },
        [headerStyle],
        null,
        null,
        250
    );

    return (
        <section className='Navbar' style={{...headerStyle}}>
           
                <Link to='/' className='Navbar-link'>
                Andy Martinez
                </Link>
            
            <div>
                
                <a href='#projects' className='Navbar-link'>Projects</a>
                <a href='#about' className='Navbar-link'>About</a>
                <a href='#contact' className='Navbar-link'>Contact</a>
            </div>
        </section>
    );
    
}

