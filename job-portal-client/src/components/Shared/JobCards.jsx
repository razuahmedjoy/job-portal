import React from 'react';
import { BookmarkIcon, BriefcaseIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const JobCards = () => {
    return (
        <div className="p-5 hover:border hover:border-primary duration-300 cursor-pointer rounded-lg border-gray-200 border relative">
            <div className='flex gap-4'>
                <div className='bg-gray-200 w-20 h-20 rounded-md'></div>
                <div>
                    <h1 className='text-lg font-medium'>Job Title</h1>
                    <p className='text-sm flex items-center gap-2 text-gray-600 mt-2 mb-1'>
                        <BriefcaseIcon className='w-4 h-4' /> Design, Development
                    </p>
                    <p className='text-sm flex items-center gap-2 text-gray-600'>
                        <CurrencyDollarIcon className='w-4 h-4' /> $150-$180 / week
                    </p>

                    <div className="flex items-center gap-4 mt-4">
                        <span className='px-4 py-1 bg-pink-100/35 text-primary rounded-full'>
                            Full Time
                        </span>
                        <span className='px-4 py-1 bg-orange-100/35 text-orange-600 rounded-full'>
                            Urgent
                        </span>
                    </div>
                </div>

            </div>


            <BookmarkIcon className='w-4 h-4 absolute top-5 right-5' />


        </div>
    );
};

export default JobCards;