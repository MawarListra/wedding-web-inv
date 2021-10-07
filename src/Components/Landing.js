import {React, useState, Fragment, useRef} from 'react'

import IconInv from '../Images/Rectangle 673.png'
import Scroll from '../Images/Vector.png'
import Song from '../Audio/Lagu Pernikahan Rohani - Kita Satu (Lyric Video).mp3'
// import Sound from 'react-sound'
import { Dialog, Transition } from '@headlessui/react'
// import {Howl} from 'howler';
import {Link} from 'react-scroll'

// const audioClips = [
//     (sound: {Song})
// ]
function Landing() {
    const [open, setOpen] = useState(false);
    const togglePopup = () => {
        setOpen(!open);
    }
    const cancelButtonRef = useRef(null)
    return (
        <div className='flex flex-col w-screen h-screen bg-landing-image justify-center items-center'>\
        <audio src={Song} autoPlay loop muted></audio>
            <div className='flex w-full h-full justify-center items-center py-4 '>
                <img src={IconInv} alt='Tanda'/>
            </div>
            <div className='flex  flex-col lg:w-screen lg:h-full justify-center items-center text-white'>
                <div className='flex flex-row w-auto h-auto space-x-8 justify-center items-center'>
                    <div className='lg:w-40 sm:w-20 h-0 border-2 bg-white'></div>
                    <h1 className='font-sans lg:text-2xl sm:text-xs font-bold'>PERNIKAHAN</h1>
                    <div className='lg:w-40 sm:w-20 h-0 border-2 bg-white'></div>
                </div>
                <h1 className='font-script lg:text-7xl sm:text-xl font-bold py-8 lg:m-0 sm:mb-32'>Sara & Kelvin</h1>
                <div className='flex flex-row w-auto h-auto space-x-8 justify-center items-center'>
                    <div className='lg:w-48 sm:w-24 h-0 border-2 bg-white'></div>
                    <h1 className='font-sans lg:text-2xl sm:text-xs font-bold'>Perjalanan Cinta</h1>
                    <div className='lg:w-48 sm:w-24 h-0 border-2 bg-white'></div>
                </div>
                <div className='flex flex-row w-auto h-auto py-8 space-x-40 justify-center items-center font-script text-white'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='lg:text-6xl sm:text-xl font-bold'>3440</h1>
                        <p className='lg:text-2xl sm:text-xs font-light'>Hari</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='lg:text-6xl sm:text-xl font-bold'>113</h1>
                        <p className='lg:text-2xl sm:text-xs font-light'>Bulan</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='lg:text-6xl sm:text-xl font-bold'>9</h1>
                        <p className='lg:text-2xl sm:text-xs font-light'>Tahun</p>
                    </div>
                </div>
                <div className='py-2'>
                    <button className='w-48 h-11 justify-center items-center rounded-full bg-chocolate' onClick={togglePopup}>Buka QR Code</button>
                </div>
            </div>
            <div className='flex flex-col space-y-4 justify-end items-center text-white py-8 pb-10'>
                <Link to='curchquotes' smooth={true} duration={1000}>
                <h1 className='font-sans text-lg cursor-pointer'>Scroll</h1>
                </Link>
                <Link to='curchquotes' smooth={true} duration={1000}>
                <img className='animate-bounce cursor-pointer' src={Scroll} alt='cursor'></img>
                </Link>
            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center lg:block lg:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden lg:inline-block lg:align-middle lg:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 lg:translate-y-0 lg:scale-95"
                        enterTo="opacity-100 translate-y-0 lg:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 lg:scale-100"
                        leaveTo="opacity-0 translate-y-4 lg:translate-y-0 lg:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all lg:my-8 lg:align-middle lg:max-w-lg lg:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 lg:p-6 lg:pb-4 justify-center items-center">
                            <div className="lg:flex lg:items-center justify-center">
                            <div className="mt-3 text-center lg:mt-0 lg:ml-4 lg:text-center py-8 justify-center items-center space-y-4">
                                <Dialog.Title as="h3" className="text-3xl leading-6 font-sans">
                                Masukkan kode anda
                                </Dialog.Title>
                                <div className="mt-2 flex flex-row space-x-4 items-center">
                                    <input className='w-20 h-20 border border-black justify-center text-center items-center text-2xl' type='text'></input>
                                    <input className='w-20 h-20 border border-black' type='text justify-center text-center items-center text-2xl'></input>
                                    <input className='w-20 h-20 border border-black' type='text justify-center text-center items-center text-2xl'></input>
                                    <input className='w-20 h-20 border border-black' type='text justify-center text-center items-center text-2xl'></input>
                                </div>
                                <div className='py-4'>
                                    <button className='w-40 h-12 text-white bg-chocolate rounded-3xl font-sans items-center justify-center'>Kirim</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default Landing
