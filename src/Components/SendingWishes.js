import {React, useState, useEffect} from 'react'
import Card1 from '../Images/SMALLCARD_1.png'
import Card2 from '../Images/SMALLCARD_2.png'
import Card3 from '../Images/SMALLCARD_4.png'
import Card4 from '../Images/SMALLCARD_3.png'
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
    return (
        <div className='flex md:w-full md:h-full justify-center items-center py-20' id='kirim-ucapan'>
            <div className='flex flex-col w-9/12 h-full justify-center items-center'>
                <text className='py-8 font-script text-4xl font-bold'>Kirim Ucapan Untuk Kami</text>
                <div className='flex flex-col w-auto h-auto space-y-2 py-2 items-center'>
                    <text className='font-sans text-xl  italic' >Nama</text>
                    <input className='md:w-xl h-14 border-gray-200 border-2 font-sansLight text-xl items-justify' value={name} onChange={handleInputNameChange}></input>
                </div>
                <div className='flex flex-col w-auto h-auto space-y-2 py-2 items-center'>
                    <text className='font-sans text-xl  italic' >Pesan</text>
                    <textarea className='md:w-xl h-48 border-gray-200 border-2 font-sansLight text-xl  pt-2 items-justify' value={message} onChange={handleInputMessageChange}></textarea>
                </div>
                <div className='flex flex-col w-auto h-auto px-8 items-center'>
                    <text className='font-sans text-xl italic '>Pilih kartu ucapan</text>
                    <div className='flex flex-row'>
                        <div className='flex flex-row justify-center'>
                            <input type='radio' value='1' onChange={handleCardChange} checked={tempelate === '1'}/>
                            <img src={Card1} alt='card 1'></img>
                        </div>
                        <div className='flex flex-row justify-center'>
                            <input type='radio' value='2' onChange={handleCardChange} checked={tempelate === '2'}/>
                            <img src={Card2} alt='card 2'></img>
                        </div>
                        <div className='flex flex-row justify-center'>
                            <input type='radio' value='3' onChange={handleCardChange} checked={tempelate === '3'}/>
                            <img src={Card3} alt='card 3'></img>
                        </div>
                        <div className='flex flex-row justify-center'>
                            <input type='radio' value='4' onChange={handleCardChange} checked={tempelate === '4'}/>
                            <img src={Card4} alt='card 4'></img>
                        </div>
                    </div>
                </div>
                <div className='sm:flex sm:w-auto sm:h-auto py-8'>
                    <button className='sm:w-xl sm:h-12 bg-chocolate text-white justify-center items-center rounded-md font-sansLight text-xl ' onClick={PostWishes}>Kirim</button>
                </div>
            </div>
        </div>
    )
}

export default SendingWishes
