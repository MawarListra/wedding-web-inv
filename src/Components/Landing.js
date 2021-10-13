import {React} from 'react'

import Song from '../Audio/Lagu Pernikahan Rohani - Kita Satu (Lyric Video).mp3'
import CountUp from 'react-countup'


function Landing() {
    return (
        <div className='flex flex-col w-full h-full justify-center items-center px-24'>
        <audio src={Song} autoPlay loop muted controls ></audio>
            <div className='flex  flex-col w-full lg:h-hero bg-landing-image text-white'>
                <div className='flex flex-row w-auto h-auto space-x-8 justify-center items-center pt-9'>
                    <div className='lg:w-48 sm:w-24 h-0 border-2 bg-white'></div>
                    <h1 className='font-sans lg:text-2xl sm:text-xs font-bold'>Perjalanan Cinta</h1>
                    <div className='lg:w-48 sm:w-24 h-0 border-2 bg-white'></div>
                </div>
                <div className='flex flex-row w-auto h-auto py-8 space-x-24 justify-center items-center font-script text-white'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='lg:text-6xl sm:text-xl font-bold'><CountUp end={3440} duration={5}></CountUp></h1>
                        <p className='lg:text-2xl sm:text-xs Lightfont-light'>Hari</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='lg:text-6xl sm:text-xl font-bold'><CountUp end={113} duration={5}></CountUp></h1>
                        <p className='lg:text-2xl sm:text-xs font-light'>Bulan</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='lg:text-6xl sm:text-xl font-bold'><CountUp end={9} duration={5}></CountUp></h1>
                        <p className='lg:text-2xl sm:text-xs font-light'>Tahun</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
