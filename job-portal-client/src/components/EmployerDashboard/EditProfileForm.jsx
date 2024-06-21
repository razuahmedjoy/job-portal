import React, { useState } from 'react';
import ImageUpload from '../Shared/ImageUpload';
import { useForm } from 'react-hook-form';
import Select from 'react-select'
import MapInput from './MapInput';


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
const EditProfileForm = () => {



    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <>



            <div className="bg-white rounded-md shadow-md shadow-blue-gray-200/50 mb-8 p-7">
                <h4 className='text-md font-medium md:text-lg mb-4'>My Profile</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-y-8 mt-10">
                        <div className='flex flex-col gap-2'>
                            <label className='font-bold' htmlFor="cover">Cover Photo</label>
                            <ImageUpload />
                        </div>
                        <div className="grid grid-cols-2 gap-5 ">
                            <div className='flex flex-col gap-2 mb-3'>
                                <label className='font-medium' htmlFor="name">Employer Name</label>
                                <input className='bg-blue-100/30 focus:bg-white focus:border focus:border-primary duration-300 rounded-md outline-none py-3 px-4' type="text" />
                            </div>
                            <div className='flex flex-col gap-2 mb-3'>
                                <label className='font-medium' htmlFor="name">Employer Name</label>
                                <input className='bg-blue-100/30 focus:bg-white focus:border focus:border-primary duration-300 rounded-md outline-none py-3 px-4 ' type="text" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 ">
                            <div className='flex flex-col gap-2 mb-3'>
                                <label className='font-medium' htmlFor="number">Phone Number</label>
                                <input className='bg-blue-100/30 focus:bg-white focus:border focus:border-primary duration-300 rounded-md outline-none py-3 px-4' type="number" min={0} />
                            </div>
                            <div className='flex flex-col gap-2 mb-3'>
                                <label className='font-medium' htmlFor="website">Website</label>
                                <input className='bg-blue-100/30 focus:bg-white focus:border focus:border-primary duration-300 rounded-md outline-none py-3 px-4 ' type="text" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 ">
                            <div className='flex flex-col gap-2 mb-3'>
                                <label className='font-medium' htmlFor="name">Founded Date</label>
                                <input className='bg-blue-100/30 focus:bg-white focus:border focus:border-primary duration-300 rounded-md outline-none py-3 px-4' type="date" />
                            </div>
                            <div className='flex flex-col gap-2 mb-3'>
                                <label className='font-medium' htmlFor="name">Company Size</label>
                                <input className='bg-blue-100/30 focus:bg-white focus:border focus:border-primary duration-300 rounded-md outline-none py-3 px-4 ' type="text" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 ">
                            <div className='flex flex-col gap-2 mb-3'>
                                <label className='font-medium' htmlFor="name">Categories</label>
                                <Select options={options} />

                            </div>
                            <div className='flex flex-col gap-2 mb-3'>
                                <label className='font-medium' htmlFor="name">Introduction Video Url</label>
                                <input className='bg-blue-100/30 focus:bg-white focus:border focus:border-primary duration-300 rounded-md outline-none py-3 px-4 ' type="text" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 ">
                            <div className='flex flex-col gap-2 mb-3'>
                                <label className='font-medium' htmlFor="name">Profile Url</label>
                                <div className='flex items-center gap-2'>
                                    <p className='text-sm text-gray-600'>https://cloudshee.com/profile/razuahmedjoy</p>
                                    <p className='py-1 px-2 bg-primary-light text-primary rounded cursor-pointer'>Edit</p>
                                </div>

                            </div>

                        </div>

                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-medium' htmlFor="name">About Company</label>
                            <textarea className='w-full border border-gray-200 bg-blue-gray-200/10 p-4' name="" id="" cols="30" rows="10"></textarea>

                        </div>

                    </div>
                </form>

            </div>
            <div className="bg-white rounded-md shadow-md shadow-blue-gray-200/50 mb-8 p-7">
                <h4 className='text-md font-medium md:text-lg mb-4'>Profile Photo</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-y-8 mt-10">
                        <div className='flex flex-col gap-2'>

                            <ImageUpload />
                        </div>


                    </div>
                </form>

            </div>
            <div className="bg-white rounded-md shadow-md shadow-blue-gray-200/50 mb-8 p-7">
                <h4 className='text-md font-medium md:text-lg mb-4'>Contact Information</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-y-8 mt-10">
                        <div className='flex flex-col gap-2'>

                            <MapInput />
                        </div>


                    </div>
                </form>

            </div>
        </>

    );
};

export default EditProfileForm;