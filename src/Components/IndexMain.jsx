import React from 'react'
import Logo from "./Logo";
import Photos from "./Photos";
import Third from "./Third";

export default function IndexMain() {
    return (
        <div>
            <div className='flex gap-6 p-4 h-screen w-screen ites-center justify-center overflow-hidden'>
                <Logo />
                <Third />
                <Photos />
            </div>
        </div>
    )
}
