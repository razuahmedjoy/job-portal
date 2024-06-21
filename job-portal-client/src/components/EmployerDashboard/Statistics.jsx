import React from 'react';
// import BriefcaseIcon outline from '@heroicons/react/24/outline';
import { BookmarkIcon, BriefcaseIcon, ChatBubbleBottomCenterTextIcon, DocumentIcon } from '@heroicons/react/24/outline';
const Statistics = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div className="card p-8 bg-white rounded shadow-md shadow-blue-gray-300/2">
                <div className="flex items-center justify-between">
                    <div className="icon w-[70px] h-[70px] bg-blue-600/20 flex items-center justify-center rounded-lg">

                        <BriefcaseIcon className="h-10 w-10 text-blue-800" />
                    </div>
                    <div className="text-right">
                        <h2 className="text-2xl font-bold text-blue-800">12</h2>
                        <p className="text-sm text-gray-800 mt-2">Posted Jobs</p>
                    </div>
                </div>
            </div>
            <div className="card p-8 bg-white rounded shadow-md shadow-blue-gray-300/2">
                <div className="flex items-center justify-between">
                    <div className="icon w-[70px] h-[70px] bg-red-600/20 flex items-center justify-center rounded-lg">

                        <DocumentIcon className="h-10 w-10 text-red-800" />
                    </div>
                    <div className="text-right">
                        <h2 className="text-2xl font-bold text-red-800">12</h2>
                        <p className="text-sm text-gray-800 mt-2">Application</p>
                    </div>
                </div>
            </div>
            <div className="card p-8 bg-white rounded shadow-md shadow-blue-gray-300/2">
                <div className="flex items-center justify-between">
                    <div className="icon w-[70px] h-[70px] bg-orange-600/20 flex items-center justify-center rounded-lg">

                        <ChatBubbleBottomCenterTextIcon className="h-10 w-10 text-orange-800" />
                    </div>
                    <div className="text-right">
                        <h2 className="text-2xl font-bold text-orange-800">12</h2>
                        <p className="text-sm text-gray-800 mt-2">Review</p>
                    </div>
                </div>
            </div>
            <div className="card p-8 bg-white rounded shadow-md shadow-blue-gray-300/2">
                <div className="flex items-center justify-between">
                    <div className="icon w-[70px] h-[70px] bg-green-600/20 flex items-center justify-center rounded-lg">

                        <BookmarkIcon className="h-10 w-10 text-green-800" />
                    </div>
                    <div className="text-right">
                        <h2 className="text-2xl font-bold text-green-800">12</h2>
                        <p className="text-sm text-gray-800 mt-2">Posted Jobs</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;