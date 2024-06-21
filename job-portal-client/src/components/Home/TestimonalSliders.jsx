import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonalSliders = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const data = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {
                    data.map((item, index) => (
                        <div key={index} className="bg-white rounded-md  p-12">
                            <div className="flex gap-3 items-center">
                                <img src="https://cloudshee.com.au/wp-content/uploads/2024/04/testimonial-04-150x150-1.jpg" className="h-12 w-12 rounded-full" alt="" />
                                <div>
                                    <h4 className="text-xl font-medium">Gabriel Nolan</h4>
                                    <p className="text-gray-500">CEO, Cloudshee</p>
                                </div>
                            </div>

                            <div className="mt-5 text-md font-normal">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo excepturi accusantium quia! Nihil, ea suscipit deleniti quod temporibus nemo possimus!
                            </div>
                       
                        </div>
                    ))
                }

            </Slider>
        </div>
    );
}

export default TestimonalSliders;
