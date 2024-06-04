
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
                {
                    pictr.map((item) => {
                        return (
                            <div>
                                <img src={item.imgs} height={180} width={252} alt="" />
                                <div className='flex'>
                                    <p className='font-Barlow font-semibold text-base text-[#101010]'>{item.headng}</p>
                                </div>
                                <div className='flex items-center justify-around gap-12'>
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
    )
}
