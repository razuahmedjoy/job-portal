import React from 'react';
import Title from '../Shared/Title';

const FeaturedCities = () => {
    const cities = [1, 2, 3, 4]
    return (
        <div className='w-full px-5 lg:px-16 py-12 mx-auto'>
            <Title title="Featured Cities" subtitle="Explore the best cities in the world" align='left' />

            <div className='mt-8'>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center">
                    {cities.map((city, index) => (
                        <div key={index} className='relative w-full h-[320px] rounded-md overflow-hidden'>
                            <img className='w-full h-full object-cover rounded-md hover:scale-110 duration-300' src="https://cloudshee.com.au/wp-content/uploads/2024/04/canberra-1.jpg" alt="" />

                            <p className='font-medium text-lg text-white absolute bottom-5 left-5'>Canbera
                            <br />
                            <span className='text-sm font-light'>0 Job posted</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default FeaturedCities;