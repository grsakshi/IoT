import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './project.style.css';
import Card from '../Card/card.component';

SwiperCore.use([Navigation, A11y]);

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
                    id: 5,
                    title: 'Project5',
                    imageUrl: '',
                    description: 'Describing the project. Describing the project.Describing the project. Describing the project.',
                    link: ''
                },
                {
                    id: 6,
                    title: 'Project6',
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
            <React.Fragment>
                <div className='w-full justify-items-center align-middle items-center text-white'> 
                    <Swiper 
                        id='main'
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {
                            items.map(({id, ...otherprops}) => (
                                <SwiperSlide key={id}>
                                    <Card key={id} {...otherprops} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </React.Fragment>
        );
    }
}

export default Project;