import React from 'react'
// import Gambar from '../Images/Rectangle 8.png'

function Pemberkatan() {
    const handleOnClick = ()=>{
        window.location.assign('https://www.google.com/maps/dir//Adhiwangsa+Hotel+%26+Convention,+Jl.+Adi+Sucipto+No.146,+Jajar,+Kec.+Laweyan,+Kota+Surakarta,+Jawa+Tengah+57144/@-7.5484203,110.7877213,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x2e7a1427ac04f2bb:0xef1d746e25602ad5!2m2!1d110.7878389!2d-7.5484696!3e0')
    }
    return (
        <div className='flex w-full h-full justify-center items-center py-8'>
            <div className='w-4/5 h-full justify-center items-center bg-pemberkatan-image px-24 rounded-3xl'>
                {/* <img src={Gambar} width={1080} height={545}></img> */}
            {/* </div> */}
                <div className='flex flex-col z-10 w-full h-full justify-center items-center py-8 space-y-4'>
                    <div className='flex flex-col justify-center items-center space-y-2'>
                        <text className='font-script text-4xl font-bold text-white'>Pemberkatan</text>
                        <text className='font-sans text-xl text-white'>Minggu, 21 November 2021</text>
                        <text className='font-sans text-lg text-white'>16.00</text>
                    </div>
                        <div className='w-28 h-0 bg-yellow-700 border'></div>
                    <div className='flex flex-col justify-center items-center space-y-2'>
                        <text className='font-script text-4xl font-bold text-white'>Resepsi</text>
                        <text className='font-sans text-xl text-white'>Minggu, 21 November 2021</text>
                        <text className='font-sans text-lg text-white'>18.00</text>
                    </div>
                        <div className='w-28 h-0 bg-yellow-700 border'></div>
                    <div className='flex flex-col justify-center items-center space-y-2'>
                        <text className='font-script text-4xl font-bold text-white'>Lokasi</text>
                        <text className='font-sans text-xl text-white'>The Adhiwangsa Solo</text>
                        <button className='w-48 h-12 bg-chocolate rounded-full text-sm text-white font-sans' onClick={handleOnClick}>Petunjuk Arah</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pemberkatan
