import React from 'react';
import Title from '../Shared/Title';
import TestimonalSliders from './TestimonalSliders';


const Testimonials = () => {
    return (
        <div className='w-full px-5 lg:px-16 py-12 mx-auto bg-primary'>

            <Title title="Testimonials" subtitle="What our clients say about us" black={false} />

            <div className='my-8'>
                <TestimonalSliders />
            </div>
        </div>
    );
};

export default Testimonials;