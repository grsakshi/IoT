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
                    date: '',
                    title: 'Title 1',
                    link: ''
                },
                {
                    id: 2,
                    imageUrl: 'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1866&q=80',
                    date: '',
                    title: 'Title 2',
                    link: ''
                },
                {
                    id: 3,
                    imageUrl: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
                    date: '',
                    title: 'Title 3',
                    link: ''
                },
                {
                    id: 4,
                    imageUrl: 'https://images.unsplash.com/photo-1529397938791-2aba4681454f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                    date: '',
                    title: 'Title 4',
                    link: ''
                }
            ]
        }
    }

    render(){
        const {blogs} = this.state;
        return(
            <div className='w-full md:grid md:grid-cols-2 md:gap-6 justify-items-center flex flex-col bg-gray-300 align-middle items-center text-black p-4'>
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