import React from 'react'
import Gambar1 from '../Images/Rectangle 4.png'

function CurchQuotes() {
    return (
        <div className='md:flex md:w-screen md:h-screen py-24 px-24 justify-center items-center' id='curchquotes'>
            <div className='md:flex w-screen h-96 justify-center items-center'>
                <div className='md:h-full md:w-full ml-8 justify-center items-center'>
                    <img src={Gambar1} alt='curch' width={550} height={360}></img>
                </div>
                <div className='md:flex-row md:w-full md:h-full rounded-3xl mt-24 mr-8 justify-center items-center shadow-2xl z-10'>
                    <div className='md:w-auto md:h-auto py-8 px-8 justify-center items-center text-center'>
                        <div className=' flex flex-col space-y-2 items-center justify-center'>
                            <h1 className=' font-script text-yellow-700 text-3xl font-bold'>Seijin Tuhan</h1>
                            <div className='flex w-20 border border-yellow-700 '></div>
                        </div>
                        <p className=' font-sans text-gray-300 py-2 text-xl'>Sebab pada awal dunia, Allah menjadikan mereka laki-laki dan perempuan, sebab itu laki-laki akan meninggalkan ayahnya dan ibunya dan bersatu dengan istrinya, sehingga keduanya itu menjadi satu daging. Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.</p>
                        <p className=' font-sans text-yellow-700 text-xl font-light'>( Markus 10:6-9 )</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurchQuotes
