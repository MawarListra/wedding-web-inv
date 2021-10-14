import React from 'react'
import {Link} from 'react-scroll'

const Dropdown=({isOpen, toggle}) => {
    return (
        <div className={
            isOpen ? 'grid grid-rows-4 text-center items-center bg-gray-300 -m-10' 
            :'hidden'} onClick={toggle}>
            <Link to='waktu'  smooth={true} duration={1000} className='text-base font-sansLight text-black cursor-pointer'>
                Waktu
            </Link>
            <Link to='protokol'  smooth={true} duration={1000} className='text-base font-sansLight text-black cursor-pointer'>
                Protokol
            </Link>
            <Link to='kado'  smooth={true} duration={1000} className='text-base font-sansLight text-black cursor-pointer'>
                Kirim Hadiah
            </Link>
            <Link to='kirim-ucapan'  smooth={true} duration={1000} className='text-base font-sansLight text-black cursor-pointer'>
                Kirim Ucapan
            </Link>
            <Link to='gallery'  smooth={true} duration={1000} className='text-base font-sansLight text-black cursor-pointer'>
                Galeri Cinta
            </Link>
        </div>
    )
}

export default Dropdown
