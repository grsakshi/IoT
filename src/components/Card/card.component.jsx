import React from 'react';

const Card = props => (
	<div className='relative select-none h-48 w-52 m-4 bg-blue-400 hover:bg-blue-900 border-blue-900 hover:shadow-2xl border-2 rounded-md shadow-md'>
        <h3 className='pt-16 text-4xl font-bold text-blue-900'>{props.title}</h3>
        <div className='absolute top-0 pt-4 opacity-0 hover:opacity-100 h-48'>
            <div className='h-18 font-serif text-sm leading-tight tracking-wide p-2 mb-6'>
                {props.description}
            </div>
            <a href={props.link} className='cursor-pointer text-sm sm:text-base shadow-lg bg-blue-100 rounded px-2 py-1 border-1 text-blue-900'>View On Github</a>
        </div>
    </div>
);

export default Card;


