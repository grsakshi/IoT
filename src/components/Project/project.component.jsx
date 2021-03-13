import React from 'react';
import Card from '../Card/card.component';

class Project extends React.Component{
    constructor(){
        super();

        this.state = {
            items: [
                {
                    id: 1,
                    title: 'Project1',
                    imageUrl: '',
                    description: 'Describing the project. Describing the project. Describing the project. Describing the project.',
                    link: ''
                },
                {
                    id: 2,
                    title: 'Project2',
                    imageUrl: '',
                    description: 'Describing the project. Describing the project.Describing the project.',
                    link: ''
                },
                {
                    id: 3,
                    title: 'Project3',
                    imageUrl: '',
                    description: 'Describing the project. Describing the project.Describing the project. Describing the project.',
                    link: ''
                },
                {
                    id: 4,
                    title: 'Project4',
                    imageUrl: '',
                    description: 'Describing the project. Describing the project.Describing the project. Describing the project.',
                    link: ''
                },
                {
                    id: 4,
                    title: 'Project4',
                    imageUrl: '',
                    description: 'Describing the project. Describing the project.Describing the project. Describing the project.',
                    link: ''
                },
                {
                    id: 4,
                    title: 'Project4',
                    imageUrl: '',
                    description: 'Describing the project. Describing the project.Describing the project. Describing the project.',
                    link: ''
                }

            ]
        }
    }

    render(){
        const {items} = this.state;
        return(
            <div className='w-full md:grid md:grid-cols-3 justify-items-center flex flex-col bg-blue-100 align-middle items-center text-white'> 
                {
                    items.map(({id, ...otherprops}) => (
                        <Card key={id} {...otherprops} />
                    ))
                }
            </div>
        );
    }
}

export default Project;