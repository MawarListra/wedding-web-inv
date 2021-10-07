import React from 'react'
// import Flower from '../Images/Flower Long.png'
import Mask from '../Images/MASK 1.png'
import Distancing from '../Images/DISTANCING 1.png'
import Thermo from '../Images/THERMO 1.png'
import WashHand from '../Images/WASHHAND 1.png'
import Vaccinated from '../Images/VACCINATED 1.png'
import NoGroup from '../Images/NOGROUP 1.png'

function Protokol() {
    return (
        <div className='flex flex-col md:w-full md:h-full justify-center items-center py-8 px-24 bg-protokol-image bg-cover'>
            <div className='flex flex-col justify-center items-center z-10 bg-transparent'>
                <text className='py-8 font-script text-4xl font-bold'>Protokol Kesehatan</text>
                <div className='md:flex flex-col md:w-full md:h-full py-2 px-8 justify-center items-center z-10'>
                    <div className='md:flex md:flex-row md:space-x-8 py-4'>
                        <div className='md:flex flex-col md:w-80 md:h-40 shadow-2xl rounded-xl justify-center items-center text-center space-y-2 bg-white'>
                            <img src={Mask} alt='card 1' width={72} height={45}></img>
                            <text className='font-sans text-sm text-yellow-700 items-center px-2'>Gunakan Selalu Masker Ganda</text>
                        </div>
                        <div className='md:flex flex-col md:w-80 md:h-40 shadow-2xl rounded-xl justify-center items-center text-center space-y-2 bg-white'>
                            <img src={Distancing} alt='card 2' width={38} height={45}></img>
                            <text className='font-sans text-sm text-yellow-700 items-center px-2'>Menjaga Jarak Saat di Lokasi</text>
                        </div>
                        <div className='md:flex flex-col md:w-80 md:h-40 shadow-2xl rounded-xl justify-center items-center text-center space-y-2 bg-white'>
                            <img src={Thermo} alt='card 3' width={40} height={45}></img>
                            <text className='font-sans text-sm text-yellow-700 items-center px-2'>Mengecek Suhu Sebelum Masuk ke Lokasi Acara</text>
                        </div>
                    </div>
                    <div className='md:flex flex-row md:space-x-8 py-4'>
                        <div className='md:flex flex-col md:w-80 md:h-40 shadow-2xl rounded-xl justify-center items-center text-center space-y-2 bg-white'>
                            <img src={WashHand} alt='card 4' width={50} height={45}></img>
                            <text className='font-sans text-sm text-yellow-700 items-center px-2'>Mencuci Tangan Dengan Sabun dan Menggunakan Hand Sanitizer</text>
                        </div>
                        <div className='md:flex flex-col md:w-80 md:h-40 shadow-2xl rounded-xl justify-center items-center text-center space-y-2 bg-white'>
                            <img src={Vaccinated} alt='card 5' width={39} height={45}></img>
                            <text className='font-sans text-sm text-yellow-700 items-center px-2'>Tidak Kontak Erat Dengan Pengidap Covid-19 2 Bulan Terakhir</text>
                        </div>
                        <div className='md:flex flex-col md:w-80 md:h-40 shadow-2xl rounded-xl justify-center items-center text-center space-y-2 bg-white'>
                            <img src={NoGroup} alt='card 6' width={38} height={45}></img>
                            <text className='font-sans text-sm text-yellow-700 items-center px-2'>Menghindari Kerumunan di Lokasi</text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Protokol
