import React from 'react';

const Statistics = () => {
    return (
        <div className='my-20'>
            <div className='max-w-[800px] mx-auto'>
                <div className="grid grid-cols-1 gap-y-8 text-sm md:text-base md:grid-cols-3 gap-5 items-center justify-center">
                    <div className='flex flex-col items-center'>
                        <h3 className="text-5xl font-medium">4k</h3>


                        <p className="text-sm">
                            4K+ daily active users

                        </p>

                    </div>
                    <div className='flex flex-col items-center'>
                        <h3 className="text-5xl font-medium">2k</h3>


                        <p className="text-sm">
                            4K+ daily active users

                        </p>

                    </div>
                    <div className='flex flex-col items-center'>
                        <h3 className="text-5xl font-medium">1.5k</h3>


                        <p className="text-sm">
                            4K+ daily active users

                        </p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Statistics;