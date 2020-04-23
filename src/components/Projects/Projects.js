import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.scss';

export function Projects(props) {
    return (
        <section className='Project container'>
        <div className={`${props.side % 2 === 0 ? 'right' : 'left'}-side Project-desc`}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <Link to={props.link} className='button'>
            {props.btnTxt}</Link>
        </div>
        <div className={`${props.side % 2 === 0 ? 'left' : 'right'}-side Project-img`}>
            <picture>
            <source media='(min-width: 768px)' srcSet={props.imgSrc} />
            <img src={props.imgSrcM} alt={props.imgAlt} />
            </picture>
        </div>
        </section>
    )
}

