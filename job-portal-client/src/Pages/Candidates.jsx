import React from 'react';
import PageTitle from '../components/PageTitle';
import Select from 'react-select'
import { Button, Checkbox, Slider } from '@material-tailwind/react';
import { BanknotesIcon } from '@heroicons/react/24/solid';
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
const Candidates = () => {
    return (
        <>

            <div>
                <PageTitle title="Candidates" breadcambs={["Home", "Candidates"]} />
                <div className='bg-white px-4 md:px-12 lg:px-28 w-full mx-auto my-8'>
                    <div className="grid grid-cols-3 gap-8">
                        {/* sidebar */}
                        <div className="sidebar hidden md:block">
                            <div className="bg-blue-100/20 p-5 rounded-lg flex flex-col gap-3">
                                <h2 className="text-xl font-medium">Search by Keywords</h2>
                                <input type="text" className="w-full border-none bg-transparent  bg-white p-4 rounded-md outline-none" placeholder="Search by Keywords" />

                                <h2 className="text-xl font-medium mt-2">Location</h2>
                                <Select options={options} />
                                <h2 className="text-sm text-primary font-normal mt-2">Radius</h2>
                                <div className="full">
                                    <Slider className='text-primary' defaultValue={50} />
                                </div>


                                <h2 className="text-xl font-medium mt-2">Category</h2>
                                <Select options={options} />

                                <h2 className="text-xl font-medium mt-2">Candidate Gender</h2>
                                <Select options={options} />
                                <h2 className="text-xl font-medium mt-2">Date Posted</h2>
                                <Select options={options} />
                                <h2 className="text-xl font-medium mt-2">Experience</h2>
                                <div className="flex flex-col">
                                    <Checkbox className='checked:bg-primary checked:outline-none checked:border-none' id="fresh" label="Fresh" ripple={true} />
                                    <Checkbox className='checked:bg-primary checked:outline-none checked:border-none' id="1" label="1 Year" ripple={true} />
                                    <Checkbox className='checked:bg-primary checked:outline-none checked:border-none' id="2" label="2 Year" ripple={true} />
                                    <Checkbox className='checked:bg-primary checked:outline-none checked:border-none' id="3" label="3 Year" ripple={true} />
                                    <Checkbox className='checked:bg-primary checked:outline-none checked:border-none' id="4" label="4 Year" ripple={true} />
                                    <Checkbox className='checked:bg-primary checked:outline-none checked:border-none' id="5" label="5 Year" ripple={true} />

                                </div>
                                <h2 className="text-xl font-medium mt-2">Qualification</h2>
                                <div className="flex flex-col">
                                    <Checkbox className='checked:bg-primary checked:outline-none checked:border-none' id="fresh" label="Fresh" ripple={true} />
                                    <Checkbox
                                        className='checked:bg-primary checked:outline-none checked:border-none'
                                        id="1" label="1 Year" ripple={true} />
                                    <Checkbox className='checked:bg-primary checked:outline-none checked:border-none'
                                        id="2" label="2 Year" ripple={true} />
                                    <Checkbox className='checked:bg-primary checked:outline-none checked:border-none'
                                        id="3" label="3 Year" ripple={true} />
                                    <Checkbox className='checked:bg-primary checked:outline-none checked:border-none'
                                        id="4" label="4 Year" ripple={true} />
                                    <Checkbox className='checked:bg-primary checked:outline-none checked:border-none'
                                        id="5" label="5 Year" ripple={true} />

                                </div>

                                <Button ripple={true} className="mt-5 bg-primary text-white capitalize">Find Candidates</Button>
                            </div>

                        </div>
                        {/* candidates */}
                        <div className="main-content candidates md:col-span-2 col-span-12 w-full">
                            <div className="flex items-center justify-between">
                                <h2 className="text-sm font-medium">Showing All Candidated</h2>
                                <div className="flex items-center gap-3">
                                    <Select options={options} />
                                    <Select options={options} />
                                </div>


                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-5 w-full justify-center items-center">
                                <div className="card p-5 border border-gray-400 rounded-lg flex flex-col items-center">
                                    <figure>
                                        <img src='https://cloudshee.com.au/wp-content/uploads/2021/05/team5-150x150.jpg' className="w-20 h-20 rounded-full bg-gray-200" alt='profile'/>
                                    </figure>
                                    <h2 className="text-base font-medium mt-3">Razu Ahmed</h2>
                                    <p className="text-xs text-primary">Web Developer</p>
                                    <p className="text-xs text-gray-500 mt-5">
                                        <div className="flex">
                                            <BanknotesIcon className="h-5 w-5" />
                                            <span className="ml-2">$ 1500 / month</span>
                                        </div>
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-2 justify-center">
                                        <span className="py-1 px-3 text-xs bg-gray-200 rounded-full text-gray-600 hover:bg-black hover:text-white duration-300 cursor-pointer">
                                            Customer
                                        </span>
                                        <span className="py-1 px-3 text-xs bg-gray-200 rounded-full text-gray-600 hover:bg-black hover:text-white duration-300 cursor-pointer">
                                            App
                                        </span>
                                        <span className="py-1 px-3 text-xs bg-gray-200 rounded-full text-gray-600 hover:bg-black hover:text-white duration-300 cursor-pointer">
                                            Design
                                        </span>
                                    </div>


                                    <Button ripple={true} className="mt-5 bg-primary text-white capitalize w-full">View Profile</Button>


                                </div>
                                <div className="card p-5 border border-gray-400 rounded-lg flex flex-col items-center">
                                    <figure>
                                        <img src='https://cloudshee.com.au/wp-content/uploads/2021/05/team5-150x150.jpg' className="w-20 h-20 rounded-full bg-gray-200" alt='profile'/>
                                    </figure>
                                    <h2 className="text-base font-medium mt-3">Razu Ahmed</h2>
                                    <p className="text-xs text-primary">Web Developer</p>
                                    <p className="text-xs text-gray-500 mt-5">
                                        <div className="flex">
                                            <BanknotesIcon className="h-5 w-5" />
                                            <span className="ml-2">$ 1500 / month</span>
                                        </div>
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-2 justify-center">
                                        <span className="py-1 px-3 text-xs bg-gray-200 rounded-full text-gray-600 hover:bg-black hover:text-white duration-300 cursor-pointer">
                                            Customer
                                        </span>
                                        <span className="py-1 px-3 text-xs bg-gray-200 rounded-full text-gray-600 hover:bg-black hover:text-white duration-300 cursor-pointer">
                                            App
                                        </span>
                                        <span className="py-1 px-3 text-xs bg-gray-200 rounded-full text-gray-600 hover:bg-black hover:text-white duration-300 cursor-pointer">
                                            Design
                                        </span>
                                    </div>


                                    <Button ripple={true} className="mt-5 bg-primary text-white capitalize w-full">View Profile</Button>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    );
};

export default Candidates;