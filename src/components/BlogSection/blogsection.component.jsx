import React from 'react';
import Blog from '../Blog/blog.component';

class BlogSection extends React.Component{
    constructor(){
        super();

        this.state = {
            blogs: [
                {
                    id: 1,
                    imageUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=701&q=80',
                    date: '12th APRIL 2020',
                    title: 'Title 1',
                    link: ''
                },
                {
                    id: 2,
                    imageUrl: 'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1866&q=80',
                    date: '12th MARCH 2020',
                    title: 'Title 2',
                    link: ''
                },
                {
                    id: 3,
                    imageUrl: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
                    date: '12th OCTOBER 2020',
                    title: '9 ways to trick your brain into working',
                    link: ''
                },
                {
                    id: 4,
                    imageUrl: 'https://images.unsplash.com/photo-1529397938791-2aba4681454f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                    date: '12th MARCH 2020',
                    title: 'Title 4',
                    link: ''
                }
            ]
        }
    }

    render(){
        const {blogs} = this.state;
        return(
            <div className='w-full md:grid md:grid-cols-2 md:gap-6 justify-items-center bg-gray-300 align-middle items-center text-black grid grid-cols-1 gap-4 p-4'>
                {
                    blogs.map(({id, ...otherprops}) => (
                        <Blog key={id} {...otherprops} />
                    ))
                }
            </div>
        );
    }
}

export default BlogSection;