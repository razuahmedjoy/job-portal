import React from 'react';
import Title from '../Shared/Title';
import FeaturedCandidatesSlider from './FeaturedCandidatesSlider';

const FeaturedCandidates = () => {
    return (
        <div className='w-full px-5 lg:px-16 py-12 mx-auto mb-12'>

            <Title 
            title="Featured Candidates" 
            subtitle="Explore the best candidates in the world" 
            align='left'
            rightLink={true}
            rightLinkText='View All Candidates'
            rightLinkPath='/candidates'
            />
            

            <div>
                <FeaturedCandidatesSlider />
            </div>
        </div>
    );
};

export default FeaturedCandidates;