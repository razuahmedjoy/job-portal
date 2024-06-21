import React from 'react';
import { Link } from 'react-router-dom';

const Title = ({ title = "", subtitle = "", black = true, align = "center", rightLink=false, rightLinkText="", rightLinkPath="" }) => {
    const titleColor = black ? "text-black" : "text-white";
    const subtitleColor = black ? "text-gray-500" : "text-white";

    const alignClass = align === "center" ? "text-center" : "text-left";
    return (
        <div className={`${alignClass === 'center' ? 'text-center' : 'flex justify-between text-left'}`}>
            <div>
                <h3 className={`text-xl md:text-3xl font-medium ${titleColor}`}>{title}</h3>
                <p className={` text-base py-3 ${subtitleColor}`}>
                    {subtitle}
                </p>

            </div>
            {/* link */}
           {
                rightLink && <Link to={rightLinkPath} className='text-primary underline'>
                    {rightLinkText}
                </Link>
           }

        </div>
    );
};

export default Title;