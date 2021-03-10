import React from 'react';

const Card = props => (
    <div className='h-52 w-48 m-4 bg-blue-400 shadow-md'>
        <h3 className='font-bold pt-3'>{props.title}</h3>
        <div className='h-18 font-serif text-xs p-2 mb-6'>
            {props.description}
        </div>
        <a href={props.link} className='text-sm sm:text-base shadow-lg bg-blue-100 rounded px-3 py-2 text-blue-900'>View On Github</a>
    </div>
);

export default Card;