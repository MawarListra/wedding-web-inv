import React from 'react'
// import FootImg from '../Images/Rectangle 30.png'

function Footer() {
    return (
        <div className='flex w-screen  md:h-screen h-80'>
            <div className='flex w-screen md:h-screen justify-center items-center text-white space-y-8 bg-footer-image bg-contain md:bg-auto'>
                <div className='flex flex-col w-auto h-auto justify-center items-center'>
                    <h1 className='font-sansLight md:text-2xl text-xs'>Salam Hangat Dari Kami,</h1>
                    <h1 className='font-script md:text-5xl text-lg'>Sara & Kevin</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
