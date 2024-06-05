import React from 'react'
import search from "../assets/search.svg";
import filter from "../assets/filter.svg";
import Lara from "../assets/lara.png";
import Lara1 from "../assets/Lara-1.png";
import thomos from "../assets/thomos.png";
import thomos1 from "../assets/thomos-1.png";
import like from "../assets/heart.png";
import comment from "../assets/comment.png";
import dots from "../assets/dots.png";
import share from "../assets/share.png";
import Foot from "./Foot";

export default function Third() {
    const container = [
        {
            profi: Lara,
            namer: "Lara Leones",
            usernmes: "@thewallart",
            menu: "",
            content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            bgIm: Lara1
        },
        {
            profi: thomos,
            namer: "Thomas J.",
            usernmes: "@thecustomcreater",
            menu: "",
            content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
            bgIm: thomos1
        },
    ]
    return (
        <div className='h-screen'>
            <div className='w-[620px] border-0 bg-[#FFFFFF] rounded-[10px] p-6'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <img src={search} alt="" />
                        <p className='font-Gilroy font-medium text-xs text-[#9A9A9E]' >search here</p>
                    </div>
                    <div className='flex items-center gap-2' >
                        <img src={filter} alt="" />
                        <p className='font-Gilroy font-medium text-xs text-[#303030]' >Filters</p>
                    </div>
                </div>
            </div>
            <div className='h-screen overflow-y-scroll'>
                {
                    container.map((items) => {
                        return (
                            <div className='w-[620px] h-[590px] border-0 rounded-[10px] bg-[#FFFFFF] p-5 mb-5 mt-6'>

                                <div className='flex ites-center justify-between'>
                                    <div className='flex items-center gap-3 mb-5'>
                                        <div>
                                            <img src={items.profi} height={48} width={48} alt="" />
                                        </div>
                                        <div className='flex items-left flex-col '>
                                            <p className='font-Gilroy font-semibold text-xl text-[#101010] opacity-100'>{items.namer}</p>
                                            <p className='font-Gilroy font-medium text-sm text-[#8D8D8D] opacity-90'>{items.usernmes}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <img src={dots} height={30} width={30} alt="" srcset="" />
                                    </div>
                                </div>
                                <div>
                                    <p className='font-Gilroy font-medium text-sm text-[#101010] mb-6 opacity-95'>{items.content} <span className='Font-medium text-sm text-[#FF5E8A]'>.Read More</span> </p>
                                    <img src={items.bgIm} alt="" />
                                </div>
                                <div className='flex items-center gap-8 mt-10'>
                                    <div className='flex items-center gap-2'>
                                        <img src={like} alt="" />
                                        <h1 className='font-Gilroy font-semibold text-xl text-[#101010]'>9.8k</h1>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <img src={comment} alt="" />
                                        <h1 className='font-Gilroy font-semibold text-xl text-[#101010]'>8.6k</h1>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <img src={share} alt="" />
                                        <h1 className='font-Gilroy font-semibold text-xl text-[#101010]'>7.2k</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <Foot />
            </div>
        </div>
    )
}
