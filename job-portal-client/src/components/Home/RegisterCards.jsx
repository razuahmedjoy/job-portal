import React from 'react';
import empoyer from '../../assets/images/employer.jpg';
import candidate from '../../assets/images/cadidate.jpg';
const RegisterCards = () => {
    return (
        <div className='w-full px-5 lg:px-16 py-12 mx-auto my-12 border-b border-gray-300'>

            <div className="flex flex-wrap md:flex-nowrap gap-5 items-center justify-center">
                <div style={{ '--image-url': `url(${empoyer})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }} className="card rounded-md bg-white shadow p-12 bg-[image:var(--image-url)] text-white ">
                    <h3 className="text-2xl font-medium">Employers</h3>
                    <p className="text-xs leading-6 my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit earum debitis veniam necessitatibus quaerat? Delectus magnam necessitatibus quod quas non?</p>
                    <button className='py-3 px-10 bg-white text-black rounded'>
                        Register Account
                    </button>
                </div>
                <div style={{
                    '--image-url': `url(${candidate})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right'
                }} className="card rounded-md bg-white shadow p-12 bg-[image:var(--image-url)] object-contain text-white">
                    <h3 className="text-2xl font-medium">Candidate</h3>
                    <p className="text-xs leading-6 my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit earum debitis veniam necessitatibus quaerat? Delectus magnam necessitatibus quod quas non?</p>
                    <button className='py-3 px-10 bg-white text-black rounded'>
                        Register Account
                    </button>
                </div>

            </div>

        </div>
    );
};

export default RegisterCards;