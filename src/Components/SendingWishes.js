import {React, useState, useEffect} from 'react'
import Card1 from '../Images/S6.png'
import Card2 from '../Images/S4.png'
import Card3 from '../Images/S7.png'
import Card4 from '../Images/S3.png'
import axios from 'axios'

function SendingWishes() {
    const [name, setNama] = useState('')
    const [message, setMessage] = useState('')
    const [tempelate, setTempelate] = useState('1')
    useEffect(() => {
        console.log('first 1')
        // console.log(cardSelected);
    }, [])
    const handleCardChange = (e) => {
        const selected = e.target;
        setTempelate(selected.value);
        // console.log(cardSelected);
    }
    const handleInputNameChange = (e) => {
        // const temp = 
        setNama(e.target.value);
        // console.log(name);
    }
    const handleInputMessageChange = (e) => {
        // const temp = e.target.value
        setMessage(e.target.value);
        // console.log(message);
    }
    async function PostWishes() {
        const url = 'https://api.wedding.chicodefive.com/v1/Undangan/create'
        const data = {
            name: name,
            message: message,
            tempelate: tempelate
        }
        try{
            const response = await axios.post(url,data)
            console.log('👉 Returned data:', response);
            console.log(data);
        }catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
        console.log(data);
        setNama('')
        setMessage('')
        // tempelate = '1'
    }
    // const stylesR = {
    //     radioGray: {
    //         background: '0.5px solid #DCD6D8',
    //     },
    //     radioPink: {
    //       border: "10px solid #EF959D",
    //     },
    //     radioRed: {
    //       border: "10px solid #90DDD0",
    //     }
    //   };
    return (
        <div className='flex md:w-full md:h-full justify-center items-center py-20' id='kirim-ucapan'>
            <div className='flex flex-col w-9/12 h-full justify-center items-center'>
                <text className='py-8 font-script md:text-4xl text-lg font-bold'>Kirim Ucapan Untuk Kami</text>
                <div className='flex flex-col w-auto h-auto space-y-2 py-2 items-center'>
                    <text className='font-sans md:text-xl text-sm  italic' >Nama</text>
                    <input className='md:w-xl h-14 border-gray-200 border-2 font-sansLight text-xl items-justify rounded-md  focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent' value={name} onChange={handleInputNameChange}></input>
                </div>
                <div className='flex flex-col w-auto h-auto space-y-2 py-2 items-center'>
                    <text className='font-sans md:text-xl text-sm  italic' >Pesan</text>
                    <textarea className='md:w-xl h-48 border-gray-200 border-2 font-sansLight text-xl  pt-2 items-justify rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent' value={message} onChange={handleInputMessageChange}></textarea>
                </div>
                <div className='flex flex-col w-full h-auto px-8 items-center py-2 space-y-4'>
                    <text className='font-sans md:text-xl text-sm italic '>Pilih kartu ucapan</text>
                    <div className='flex md:flex-row flex-col md:space-x-8 space-x-0 md:space-y-0 space-y-4'>
                        <div className='flex flex-row justify-center space-x-2'>
                            <input type='radio' value='1' onChange={handleCardChange} checked={tempelate === '1'}/>
                            <img className='shadow-2xl rounded-md' src={Card1} alt='card 1'></img>
                        </div>
                        <div className='flex flex-row justify-center space-x-2'>
                            <input className='border-opacity-0 ring-gray-700 checked:bg-gray-700 checked:border-transparent' type='radio' value='2' onChange={handleCardChange} checked={tempelate === '2'}/>
                            <img className='shadow-2xl rounded-md' src={Card2} alt='card 2'></img>
                        </div>
                        <div className='flex flex-row justify-center space-x-2'>
                            <input type='radio' value='3' onChange={handleCardChange} checked={tempelate === '3'}/>
                            <img className='shadow-2xl rounded-md' src={Card3} alt='card 3'></img>
                        </div>
                        <div className='flex flex-row justify-center space-x-2'>
                            <input type='radio' value='4' onChange={handleCardChange} checked={tempelate === '4'}/>
                            <img className='shadow-2xl rounded-md' src={Card4} alt='card 4'></img>
                        </div>
                    </div>
                </div>
                <div className='sm:flex md::w-auto md::h-auto py-10'>
                    <button className='md::w-xl w-64 md:h-12 h-14 bg-chocolate text-white justify-center items-center rounded-md font-sansLight md:text-xl md:text-xl text-sm' onClick={PostWishes}>Kirim</button>
                </div>
            </div>
        </div>
    )
}

export default SendingWishes
