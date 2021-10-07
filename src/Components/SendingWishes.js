import {React, useState, useEffect} from 'react'
import Card1 from '../Images/Group 925.png'
import Card2 from '../Images/Group 924.png'
import Card3 from '../Images/Group 923.png'
import Card4 from '../Images/Group 922.png'

function SendingWishes() {
    const [cardSelected, setCardSelected] = useState('1');
    useEffect(() => {
        console.log('first 1')
        // console.log(cardSelected);
    }, [])
    const handleCardChange = (e) => {
        const selected = e.target;
        setCardSelected(selected.value);
        // console.log(cardSelected);
    }
    return (
        <div className='flex md:w-full md:h-full justify-center items-center py-20'>
            <div className='flex flex-col w-9/12 h-full shadow-2xl bg-white rounded-xl justify-center items-center'>
                <text className='py-8 font-sans text-3xl'>Kirim Ucapan Untuk Kami</text>
                <div className='flex flex-col w-auto h-auto space-y-2 py-2 items-justify'>
                    <text className='font-sans text-xl font-light italic'>Nama</text>
                    <input className='md:w-xl h-14 border-gray-200 border-2 font-sans text-xl font-light' placeholder='Nama'></input>
                </div>
                <div className='flex flex-col w-auto h-auto space-y-2 py-2'>
                    <text className='font-sans text-xl font-light italic'>Ucapan dan doa</text>
                    <textarea className='md:w-xl h-48 border-gray-200 border-2 font-sans text-xl font-light pt-2' placeholder='Ucapan dan doa'></textarea>
                </div>
                <div className='flex flex-col w-auto h-auto px-8'>
                    <text className='font-sans text-xl font-light italic'>Pilih kartu ucapan</text>
                    <div className='flex flex-row'>
                        <div className='flex flex-row justify-center'>
                            <input type='radio' value='1' onChange={handleCardChange} checked={cardSelected === '1'}/>
                            <img src={Card1} alt='card 1'></img>
                        </div>
                        <div className='flex flex-row justify-center'>
                            <input type='radio' value='2' onChange={handleCardChange} checked={cardSelected === '2'}/>
                            <img src={Card2} alt='card 2'></img>
                        </div>
                        <div className='flex flex-row justify-center'>
                            <input type='radio' value='3' onChange={handleCardChange} checked={cardSelected === '3'}/>
                            <img src={Card3} alt='card 3'></img>
                        </div>
                        <div className='flex flex-row justify-center'>
                            <input type='radio' value='4' onChange={handleCardChange} checked={cardSelected === '4'}/>
                            <img src={Card4} alt='card 4'></img>
                        </div>
                    </div>
                </div>
                <div className='sm:flex sm:w-auto sm:h-auto py-8'>
                    <button className='sm:w-xl sm:h-12 bg-chocolate text-white justify-center items-center rounded-xl font-sans text-xl font-light'>Kirim</button>
                </div>
            </div>
        </div>
    )
}

export default SendingWishes
