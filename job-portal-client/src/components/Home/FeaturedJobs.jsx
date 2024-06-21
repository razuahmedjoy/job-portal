import React from 'react';
import Title from '../Shared/Title';

const FeaturedJobs = () => {
    const jobs = [1, 2, 3, 4, 5]
    return (
        <div className='w-full px-5 lg:px-16 py-12 mx-auto'>
            <Title title='Featured Jobs' subtitle='Know your worth and find the job that qualify your life' />

            <div className="border rounded border-gray-200 grid grid-cols-1 items-center justify-center gap-y-2">

                {
                    jobs.map((job, index) => (
                        <div className={`w-full flex justify-between lg:flex-nowrap flex-wrap gap-y-3 items-center p-5 ${index%2 === 1 && 'bg-blue-50'} hover:border-l hover:border-primary duration-300 ease-linear cursor-pointer`}>
                            <div className='flex items-center gap-3'>
                                <img src="https://cloudshee.com.au/wp-content/uploads/2021/06/giveth_logo-3.webp" className='w-10 h-10 rounded-md' alt="" />
                                <div className="flex flex-col gap-2">
                                    <div>
                                        <h3 className='text-sm font-medium inline-block mr-2'>Senior Product Designer</h3><span className="text-xs text-green-600 font-light">Featured</span>
                                    </div>
                                    <div className="details text-gray-700 grid grid-cols-2 md:grid-cols-5 justify-start gap-2 md:gap-5">
                                        <div className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                                            </svg>

                                            <p className='text-xs'>Design, Development</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>

                                            <p className='text-xs'>June 20, 2021</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>


                                            <p className='text-xs'> $150 - $180 / week</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className='text-primary bg-pink-50 p-1 px-2 text-xs rounded-full flex items-center justify-center'>Full Time</span>
                                            <span className='text-yellow-800 bg-yellow-100 p-1 px-2 text-xs rounded-full flex items-center justify-center'>Urgent</span>
                                        </div>
                                     
                                    </div>

                                </div>
                            </div>
                            <div>
                                <button className='py-2 px-4 bg-primary text-white rounded-md'>Apply Now</button>
                            </div>
                        </div>)
                    )
                }


            </div>

        </div>
    );
};

export default FeaturedJobs;