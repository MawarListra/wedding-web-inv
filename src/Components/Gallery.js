import React from 'react'
import Gambar1 from '../Images/Rectangle 20.png'
import Gambar2 from '../Images/Rectangle 21.png'
import Gambar2Res from '../Images/Rectangle 21(1).png'
import Gambar3 from '../Images/Rectangle 22.png'
import Gambar4 from '../Images/Rectangle 25.png'
import Gambar4Res from '../Images/Rectangle 22(1).png'
import Gambar5 from '../Images/Rectangle 23.png'
import Gambar6 from '../Images/Rectangle 24.png'

function Gallery() {
    return (
        <div className='flex md:w-full md:h-full justify-center items-center md:py-24 pb-14 overflow-auto' id='gallery'>
            <div className='flex flex-col w-full h-full justify-center items-center md:px-24 px-0'>
                <text className='font-script md:text-4xl text-lg font-bold'>Galeri Cinta Kami</text>
                <div className='flex md:flex-row flex-col md:w-full w-11/12 h-full justify-center items-center py-8 md:space-y-0 space-y-4'>
                    <div className='flex flex-col w-auto h-auto space-y-2 pb-2'>
                        <div>
                            <img src={Gambar1} alt='card 1'></img>
                        </div>
                        <div className='md:flex hidden'>
                            <img src={Gambar4} alt='card 2'></img>
                        </div>
                    </div>
                    <div className='md:hidden flex flex-row pt-2 space-x-4 w-auto h-full justify-center items-center'>
                        <div>
                            <img src={Gambar2Res} width={160}  alt='card 2'></img>
                        </div>
                        <div>
                            <img src={Gambar4Res} width={160} alt='card 3'></img>
                        </div>
                    </div>
                    <div className='flex flex-col w-auto h-auto space-y-2 ml-2 mr-2'>
                        <div className='md:flex hidden md:pb-2'>
                            <img src={Gambar2} alt='card 2'></img>
                        </div>
                        <div  className='md:flex hidden'>
                            <img src={Gambar5} alt='card 5'></img>
                        </div>
                    </div>
                    <div className='flex flex-col w-auto h-auto space-y-4'>
                        <div className='pb-2'>
                            <img src={Gambar3} alt='card 3'></img>
                        </div>
                        <div className='pb-2'>
                            <img src={Gambar6} alt='card 6'></img>
                        </div>
                    </div>
                    <div className='md:hidden flex flex-row space-x-10 h-full justify-center items-center'>
                        <div>
                            <img src={Gambar5} width={340} alt='card 5'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
