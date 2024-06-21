import React from 'react';
import herovideo from '../../assets/videos/herobg.mp4'
const HeroSection = () => {
    return (
        <div className='relative h-screen'>
            <video className='w-full h-full object-cover' src={herovideo} autoPlay muted loop></video>
            {/* add a overlay */}
            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-80'></div>

            {/* add a title and search bar center */}
            <div className='absolute top-[500px] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full'>
                <h1 className='text-2xl lg:text-4xl font-medium'>Build Your Career on Solid <span className='text-primary'>Foundations</span></h1>

                <div className='mt-6 px-2 mb-12'>
                    {/* create a search filter with 3 input keyword, city and categories in one row and search button */}
                    <div className='bg-white max-w-[850px] px-8 py-4 mx-auto rounded-md gap-2 grid grid-cols-1 md:grid-cols-4 text-gray-600 text-xs'>
                        <div className='flex items-center w-full'>
                            {/* add a search icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                            <input type='text' placeholder='job title, keywords' className='px-4 py-2 lg:border-gray-400 lg:border-r outline-none' />
                        </div>

                        <div className='flex items-center w-full'>
                            {/* add a search icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>


                            <select className='px-4 py-2 lg:border-gray-400 lg:border-r outline-none w-full'>
                                <option value=''>City</option>
                                <option value=''>Option 1</option>
                                <option value=''>Option 2</option>
                            </select>
                        </div>
                        <div className='flex items-center w-full'>
                            {/* add a search icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                            </svg>



                            <select className='px-4 py-2 outline-none w-full'>
                                <option value=''>Categories</option>
                                <option value=''>Option 1</option>
                                <option value=''>Option 2</option>
                            </select>
                        </div>



                        <button className='px-3 py-3 lg:ml-8 bg-primary text-white rounded '>Find Jobs</button>
                    </div>



                </div>

                <div className='max-w-[800px] mx-auto'>
                    <div className="grid grid-cols-1 gap-y-8 text-sm md:text-base md:grid-cols-3 gap-5 items-center justify-center">
                        <div className='flex flex-col items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-12 md:h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <p className='mt-3 md:text-lg'>Accounting / Finance</p>
                            <p className="text-xs">
                                (0 Open positions)
                            </p>

                        </div>
                        <div className='flex flex-col items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-12 md:h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <p className='mt-3 md:text-lg'>Accounting / Finance</p>
                            <p className="text-xs">
                                (0 Open positions)
                            </p>

                        </div>
                        <div className='flex flex-col items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-12 md:h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <p className='mt-3 md:text-lg'>Accounting / Finance</p>
                            <p className="text-xs">
                                (0 Open positions)
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;