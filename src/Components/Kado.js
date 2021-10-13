import {React, useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

function Kado() {
    let value = '0382146210'
    // const [value, setValue] = useState('');
    // setValue('0382146210')
    const [copied, setCopied] = useState(false);
    const handleClick = ()=>{
        alert('Nomor rekening berhasil di salin')
    }
    // copied = false;
    return (
        <div className='flex flex-col w-full h-full justify-center items-center py-8 px-24' id='kado'>
            <div className='flex flex-col w-auto h-auto py-8 px-32 justify-center items-center text-center'>
                <text className='py-8 font-script text-4xl font-bold'>Kado Pernikahan</text>
                <text className='font-sansLight text-lg'>Kami Memahami Bahwa Beberapa dari Anda Mungkin Ingin Memberikan Ucapan dan Kado Untuk Kami. Maka dari itu, Anda dapat Mengirimkannya Melalui Tombol di Bawah Ini: </text>
            </div>
            <div className='flex flex-col bg-chocolate w-96 h-48 justify-center items-center py-2 space-y-2 rounded-2xl'>
                <text className='font-sans text-lg text-white'>Kelvin Eka Pramudita</text>
                <text className='font-sans text-lg text-white'>AC : 0382146210</text>
                <text className='font-sans text-lg text-white'>Bank Central Asia (BCA)</text>
                <CopyToClipboard text={value} onCopy={() => setCopied(!copied)} >
                    <button className='w-48 h-10 bg-white rounded-3xl text-sm text-yellow-700 animation-pulse' onClick={handleClick}>Salin Nomor Rekening</button>
                </CopyToClipboard>
            </div>
        </div>
    )
}

export default Kado
