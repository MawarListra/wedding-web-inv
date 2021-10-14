import React from 'react'
import Gambar1 from '../Images/Seijin Tuhan.png'

function CurchQuotes() {
    return (
        <div className='flex md:w-full w-screen py-24 h-full justify-center items-center' id='curchquotes'>
            <div className='flex md:flex-row flex-col md:w-full md:h-full justify-center items-center md:py-24 md:px-24 '>
                <div className='w-auto h-full justify-center items-center'>
                    <img src={Gambar1} alt='curch'></img>
                </div>
                    <div className='md:w-2/5 h-auto py-8 px-8 justify-center items-center text-center'>
                        <div className=' flex flex-col space-y-2 items-center justify-center'>
                            <h1 className=' font-script text-yellow-700 md:text-3xl text-xl font-bold'>Seijin Tuhan</h1>
                            <div className='flex w-20 border border-yellow-700 '></div>
                        </div>
                        <p className=' font-sansLight text-gray-300 py-2 md:text-xl text-xs'>Sebab pada awal dunia, Allah menjadikan mereka laki-laki dan perempuan, sebab itu laki-laki akan meninggalkan ayahnya dan ibunya dan bersatu dengan istrinya, sehingga keduanya itu menjadi satu daging. Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.</p>
                        <p className=' font-sansLight text-yellow-700 md:text-xl text-xs'>( Markus 10:6-9 )</p>
                    </div>
            </div>
        </div>
    )
}

export default CurchQuotes
