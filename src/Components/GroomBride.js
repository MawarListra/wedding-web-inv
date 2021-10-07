import React from 'react'
import Gambar from '../Images/Rectangle 27.png'

function GroomBride() {
    return (
        <div className='md:flex flex-col w-screen h-auto py-8'>
            <div className='md:flex flex-col w-full h-xl bg-chocolate justify-center text-center'>
                <div className='flex flex-col text-white py-8 space-y-2'>
                    <text className='font-script text-4xl font-light'>Mempelai Pria dan Wanita</text>
                    <text className='font-sans text-xl'>Atas Ijin dan Kasih Karunia-Nya, Kami Dengan Berbahagia Mengumumkan Pernikahan Kami </text>
                </div>
                <div className='flex flex-row justify-center items-center space-x-24'>
                    <div className='md:w-96 md:h-72'>
                        <img src={Gambar} alt='groom bride'></img>
                    </div>
                    <div className='flex flex-col text-white'>
                        <text className='font-sans text-2xl font-bold'>Sara Permata Septiandani</text>
                        <text className='font-sans text-lg font-bold'>Anak Pertama dari :</text>
                        <text className='font-sans text-lg font-light'>Hidayat</text>
                        <text className='font-sans text-lg font-light'>&</text>
                        <text className='font-sans text-lg font-light'>Heni Purnawati Hendri H</text>
                        <text className='font-script text-2xl'>&</text>
                        <text className='font-sans text-2xl font-bold'>Kelvin Eka Pramudita</text>
                        <text className='font-sans text-lg font-bold'>Anak Pertama dari :</text>
                        <text className='font-sans text-lg font-light'>Sudarna</text>
                        <text className='font-sans text-lg font-light'>&</text>
                        <text className='font-sans text-lg font-light'>Sienny Oktavien</text>
                    </div>
                </div>
            </div>
            <div className='md:flex w:96 h-48 justify-center items-center py-24 pl-96 pr-48 ml-80 mt-8'>
                <text className='md:flex text-justify font-sans text-xl italic font-light text-yellow-700'>“Pernikahan yang Sempurna Bukan Berarti Pasangan Sempurna Menjadi Satu. Melainkan Ketika Pasangan yang Tidak Sempurna Belajar Memahami, Menikmati , dan Saling Melengkapi Kekurangan Satu Sama Lain.”</text>
            </div>
        </div>
    )
}

export default GroomBride
