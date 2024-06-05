
import React from 'react'
import images1 from "../assets/pixabay-3x.png";
import images2 from "../assets/Image 40@2x.png";
import images3 from "../assets/Image 39@2x.png";
import images4 from "../assets/max-vakhtbovych-2x.png";
import star from "../assets/star.svg";

export default function Foot() {
    const pictr = [
        {
            imgs: images1,
            headng: "Modern Wall Decor Framed Painting",
            rupees: "$199.99",
            stars: star
        },
        {
            imgs: images2,
            headng: "Modern Wall Decor Framed Painting",
            rupees: "$199.99",
            stars: star
        },
        {
            imgs: images3,
            headng: "Modern Wall Decor Framed Painting",
            rupees: "$199.99",
            stars: star
        },
        {
            imgs: images4,
            headng: "Modern Wall Decor Framed Painting",
            rupees: "$199.99",
            stars: star
        }

    ]
    return (
        <div>
            <div className='flex'>
                <div className="carousel carousel-center w-[38rem] p-4 space-x-4 bg-[#F5F5F5] rounded-box">
                    <div className="carousel-item max-h-[15rem]">
                        {
                            pictr.map((item) => {
                                return (
                                    <div className='p-2'>
                                        <img src={item.imgs} style={{width:252, height:180}} alt="" className="rounded-box" />
                                        <div className='flex item-center gap-3'>
                                            <p className='font-Barlow font-semibold text-sm text-[#101010]'>{item.headng}</p>
                                        </div>
                                        <div className='flex items-center justify-around gap-14'>
                                            <p className='font-Barlow font-semibold text-lg text-[#101010]'>{item.rupees}</p>
                                            <div className='flex items-center gap-1'>
                                                <img src={item.stars} alt="" />
                                                <img src={item.stars} alt="" />
                                                <img src={item.stars} alt="" />
                                                <img src={item.stars} alt="" />
                                                <img src={item.stars} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
