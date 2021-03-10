import React from 'react';
import Card from '../Card/Card.component';

class Project extends React.Component{
    constructor(){
        super();

        this.state = {
            items: [
                {
                    id: 1,
                    title: 'Project1',
                    description: 'Describing the project. Describing the project. Describing the project. Describing the project.',
                    link: ''
                },
                {
                    id: 2,
                    title: 'Project2',
                    description: 'Describing the project. Describing the project.Describing the project.',
                    link: ''
                },
                {
                    id: 3,
                    title: 'Project3',
                    description: 'Describing the project. Describing the project.Describing the project. Describing the project.',
                    link: ''
                },
                {
                    id: 4,
                    title: 'Project4',
                    description: 'Describing the project. Describing the project.Describing the project. Describing the project.',
                    link: ''
                }

            ]
        }
    }

    render(){
        const {items} = this.state;
        return(
            <div className='w-full md:h-72 bg-blue-100 flex flex-col md:flex-row align-middle items-center md:justify-around text-white'>
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
