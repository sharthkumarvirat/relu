import React from 'react'
import Home from "../assets/home.svg";
import Notification from "../assets/notification.svg";
import Shop from "../assets/shop.svg";
import Chatbox from "../assets/chatbox.svg";
import Wallet from "../assets/wallet.svg";
import Sub from "../assets/subscription.svg";
import Profile from "../assets/profile.svg";
import Setting from "../assets/setting.svg";
import Log from "../assets/logout.svg";

export default function Logo() {
    const side = [
        {
            logos: Home,
            heading: "Home",
        },
        {
            logos: Notification,
            heading: "Notifications",
        },
        {
            logos: Shop,
            heading: "Shop",
        },
        {
            logos: Chatbox,
            heading: "Conversation",
        },
        {
            logos: Wallet,
            heading: "wallet",
        },
        {
            logos: Sub,
            heading: "Subscription",
        },
        {
            logos: Profile,
            heading: "My profile",
        },
        {
            logos: Setting,
            heading: "Setting",
        }
    ]
    return (
        <div>
            <div className='w-[260px] max-h-screen border-0 rounded-[10px] bg-[#FFFFFF] overflow-hidden'>
                <h1 className='font-serif font-normal text-3xl text-left p-5 ml-4 text-[#101010]' >LOGO</h1>
            </div>
            <div className='flex itms-center justify-between flex-col w-[260px] h-[707px] border-0 rounded-[10px] bg-[#FFFFFF] mt-6'>
                <div>
                    {
                        side.map((ele) => {
                            return (
                                <div className='hover:border-s-4 border-[#88C2BB]'>
                                <div className='flex items-center gap-3 p-1 mt-8 ml-8'>
                                    <img src={ele.logos} alt="" />
                                    <h1 className='font-semibold text-base text-[#8D8D8D] hover:text-[#101010]'>{ele.heading}</h1>
                                </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex items-center gap-3 p-4'>
                    <img src={Log} alt="" />
                    <h1 className='font-semibold text-base text-[#8D8D8D]'>Log out</h1>
                </div>
            </div>
                <div className='flex items-center gap-4'>
                    <p className='font-semibold text-xs text-[8D8D8D] opacity-75'>2022©logo name</p>
                    <p className='font-semibold text-xs text-[8D8D8D] opacity-75'>Developed by ivan Infotech</p>
                </div>
        </div>
    )
}
