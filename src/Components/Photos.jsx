import React from 'react'
import image1 from "../assets/ekaterina-1.png";
import image2 from "../assets/servín-2x.png";
import image3 from "../assets/pixabay-3x.png";
import image4 from "../assets/fiona-art-4.png";
import image5 from "../assets/steve-johnson.png";
import profile1 from "../assets/piacquadio2.png";
import profile2 from "../assets/shuraeva.png";
import profile3 from "../assets/shkraba3.png";
import profile4 from "../assets/shkraba-4.png";

export default function Photos() {
    const sets = [
        {
            bg_img: image1,
            profile: profile1,
            name: "Thomas Edward",
            usernm: "@thewildwithyou"
        },
        {
            bg_img: image2,
            profile: profile2,
            name: "Chris Doe",
            usernm: "@thewildwithyou"
        },
        {
            bg_img: image3,
            profile: profile3,
            name: "Emilie Jones",
            usernm: "@thewildwithyou"
        },
        {
            bg_img: image5,
            profile: profile4,
            name: "Jessica Williams",
            usernm: "@thewildwithyou"
        }


    ]
    return (
        <div>
            <div className='w-64 h20- border-2 rounded-lg bg-[#88C2BB] overflow-hidden'>
                <p className='font-Gilroy font-semibold text-base text-[#FFFFFF] text-center py-6'>Become a Seller</p>
            </div>
            <div className='flex items-center gap-6'>
                <p className='font-Gilroy font-semibold text-base text-[#101010]'>Artist</p>
                <p className='font-Gilroy font-semibold text-base text-[#8D8D8D]'>Photographers</p>
            </div>

            <div>
                {
                    sets.map((element) => {
                        return (
                            <div>
                                <div style={{ background: `transparent URL(${element.bg_img}) 0% 0%`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "120px", width: "244px", borderRadius: "10px" }}>
                                    <div className='flex items-center gap-1 py-14  mt-6'>
                                        <div className='w-[12px] h-[12px] border-2 border-[#FFFFFF] rounded-full bg-[#0EC297]  relative left-[55px] top-[-20px]'></div>
                                        <img src={element.profile} height={48} width={48} alt="" />
                                        <div className='flex items-center flex-col'>
                                            <p className='font-Gilroy font-semibold text-base text-[#FFFFFF]'>{element.name}</p>
                                            <p className='font-Gilroy font-medium text-xs text-[#FFFFFF]'>{element.usernm}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
                <div className='w-[246px] h-[120px] border-0 bg-[#F5F5F5] mt-5'>
                    <img src={image4}  alt="" style={{width:244, height:60} } />
                    <div className='flex item-center gap-4'>
                        <p className='font-semibold text-xs text-[8D8D8D] opacity-75'>Privacy </p>
                        <p className='font-semibold text-xs text-[8D8D8D] opacity-75' >Terms of Service </p>
                        <p className='font-semibold text-xs text-[8D8D8D] opacity-75'>Cookie Notice</p>

                    </div>
                </div>
            </div>

        </div>
    )
}
