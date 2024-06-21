import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='w-full px-5 lg:px-16 py-12 mx-auto border-t border-gray-200'>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 pb-12">
                <div className='flex flex-col gap-1'>
                    <img className='w-40 h-auto' src="https://cloudshee.com.au/wp-content/uploads/2021/03/mariana-napolitani-2-1-e1713522957115-300x112.png" alt="" />
                    <h6 className="text-xl font-medium">Call us</h6>
                    <h4 className="text-lg font-medium text-primary">1234568</h4>
                    <address className='text-gray-500'>
                        1234 Street Name, City Name, United States
                    </address>

                </div>

                <div className="flex flex-col gap-2">
                    <h6 className="text-lg font-medium">For Candidates </h6>
                    <ul className='flex flex-col gap-2 mt-3'>
                        <li>
                            <a href="" className='text-gray-500 hover:text-primary'>Browse Jobs</a>
                        </li>
                        <li>
                            <a href="" className='text-gray-500 hover:text-primary'>Candidated</a>
                        </li>
                        <li>
                            <a href="" className='text-gray-500 hover:text-primary'>Candidate Dashboard</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <h6 className="text-lg font-medium">For Employers </h6>
                    <ul className='flex flex-col gap-2 mt-3'>
                        <li>
                            <a href="" className='text-gray-500 hover:text-primary'>Browse Jobs</a>
                        </li>
                        <li>
                            <a href="" className='text-gray-500 hover:text-primary'>Candidated</a>
                        </li>
                        <li>
                            <a href="" className='text-gray-500 hover:text-primary'>Candidate Dashboard</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <h6 className="text-lg font-medium">Quick Links</h6>
                    <ul className='flex flex-col gap-2 mt-3'>
                        <li>
                            <a href="" className='text-gray-500 hover:text-primary'>Browse Jobs</a>
                        </li>
                        <li>
                            <a href="" className='text-gray-500 hover:text-primary'>Candidated</a>
                        </li>
                        <li>
                            <a href="" className='text-gray-500 hover:text-primary'>Candidate Dashboard</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <h6 className="text-lg font-medium">Join Us on</h6>
                    <p className="font-medium">We don't spam so don't worry</p>
                 
                </div>
            </div>

            <div className="border-t border-gray-200 py-5 flex justify-between items-center">
                <p className='text-gray-500'>© {currentYear} Cloudshee. All Rights Reserved.</p>
                <div className="flex gap-5">
                    {/* <a href="" className='text-gray-500 hover:text-primary'>
                        Privacy Policy
                    </a>
                    <a href="" className='text-gray-500 hover:text-primary'>
                        Terms of Service
                    </a> */}
                </div>
            </div>


        </footer>
    );
};

export default Footer;