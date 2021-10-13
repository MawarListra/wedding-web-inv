import React from 'react'
// import FootImg from '../Images/Rectangle 30.png'

function Footer() {
    return (
        <div className='md:flex md:w-full  h-screen '>
            <div className='flex  md:w-screen h-screen justify-center items-center text-white space-y-8 bg-footer-image bg-contain md:bg-auto'>
                <div className='flex flex-col w-96 h-auto justify-center items-center'>
                    <h1 className='font-sansLight text-2xl'>Salam Hangat Dari Kami,</h1>
                    <h1 className='font-script text-5xl'>Sara & Kevin</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
