import React from 'react';

const Blog = props => (
    <div className='w-96 h-48 flex flex-row bg-black'>
        <img src={props.imageUrl} alt="blogpics" height='190' className='object-cover h-48 w-52' />

        <div className='w-44 h-48 text-gray-300'>
            <span>{props.date}</span>
            <h3 className=''>{props.title}</h3>
            <a href={props.link}>READ MORE</a>
        </div>
    </div>
);

export default Blog;