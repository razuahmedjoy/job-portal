import React from 'react';

const PageTitle = ({ title, breadcambs }) => {

    return (
        <div className="py-14 text-center bg-blue-100/20">
            <h2 className="text-3xl font-medium">{title}</h2>
            {/* breadcambs */}
            <div className="mt-4">
                {
                    breadcambs && breadcambs.map((item, index) => {
                        return (
                            <>
                                <span className="text-gray-500">{item}</span>
                                {index !== breadcambs.length - 1 && <span className="text-gray-500 mx-2">/</span>}
                            </>
                        )
                    })

                }
            </div>

        </div>
    );
};

export default PageTitle;