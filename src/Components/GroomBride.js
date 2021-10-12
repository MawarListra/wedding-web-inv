import React from 'react'
import Gambar from '../Images/Rectangle 27.png'

function GroomBride() {
    return (
        <div className='md:flex flex-col w-full h-full'>
            <div className='flex flex-col w-full h-full justify-center text-center px-24'>
                <div className='flex flex-col text-white space-y-2'>
                    <text className='font-script text-4xl font-light font-bold text-yellow-700'>Mempelai Pria dan Wanita</text>
                    <text className='font-sansLight text-xl text-black'>Atas Ijin dan Kasih Karunia-Nya, Kami Dengan Berbahagia Mengumumkan Pernikahan Kami </text>
                </div>
                <div className='flex flex-col w-full h-full py-8 justify-center items-center'>
                    <div className='w-full h-full rounded-md'>
                        <img src={Gambar} alt='groom bride'></img>
                    </div>
                    <div className='flex flex-row py-8 space-x-12'>
                        <div className='flex flex-col h-44 justify-center items-center space-y-2'>
                            <text className='font-sans text-2xl font-bold text-yellow-700'>Sara Permata Septiandani</text>
                            <div className='w-24 h-0 bg-chocolate border'></div>
                            <text className='font-sansLight text-xl text-black'>Anak Pertama dari :</text>
                            <text className='font-sansLight text-base text-black'>Hidayat</text>
                            <text className='font-sansLight text-base text-black'>&</text>
                            <text className='font-sansLight text-base text-black'>Heni Purnawati Hendri H</text>
                        </div>
                        <div className='flex w-44 h-44 justify-center items-center'>
                            <text className='font-script text-7xl text-yellow-700'>&</text>
                        </div>
                        <div className='flex flex-col h-44 justify-center items-center space-y-2'>
                            <text className='font-sans text-2xl font-bold text-yellow-700'>Kelvin Eka Pramudita</text>
                            <div className='w-24 h-0 bg-chocolate border'></div>
                            <text className='font-sansLight text-xl text-black'>Anak Pertama dari :</text>
                            <text className='font-sansLight text-base text-black'>Sudarna</text>
                            <text className='font-sansLight text-base text-black'>&</text>
                            <text className='font-sansLight text-base text-black'>Sienny Oktavien</text>
                        </div>
                    </div>
                    <div className='flex w-groom h-groom justify-center items-center py-24 bg-quotes-image rounded-md'>
                        <p className='font-sansLight text-xl text-white text-center px-14'>“Pernikahan yang Sempurna Bukan Berarti Pasangan Sempurna Menjadi Satu. Melainkan Ketika Pasangan yang Tidak Sempurna Belajar Memahami, Menikmati , dan Saling Melengkapi Kekurangan Satu Sama Lain.”</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroomBride
