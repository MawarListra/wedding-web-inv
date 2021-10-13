import {React, useState, useEffect, Fragment, useRef} from 'react'
import IconInv from '../Images/Rectangle 673.png'
import IconScanned from '../Images/Scanned.png'
import { Dialog, Transition } from '@headlessui/react'
import QRCode from 'qrcode.react'
import axios from 'axios'
import {Link} from 'react-scroll'

function Navbar() {
    
    const [open, setOpen] = useState(false);
    const togglePopup = () => {
        setOpen(!open);
        setOpenInput(!openInput)
        setOpenSubmit(!openSubmit)
    }
    const closeQR = () => {
        setOpen(false);
        setOpenQR(false);
        setOpenInput(false)
        setOpenSubmit(false)
        setOpenSuccess(false)
        setOpenErr(false)
        setOpenScanned(false)
        // setTextQR('')
        setTextData('')
        console.log('closeQR')
    }
    const cancelButtonRef = useRef(null)
    const [textQR, setTextQR] = useState('');

    const [textData, setTextData] = useState('');
    const [openQR, setOpenQR] = useState(false)
    const [openErr, setOpenErr] = useState(false)
    const [openSuccess, setOpenSuccess] = useState(false)
    const [openInput, setOpenInput] = useState(false)
    const [openSubmit, setOpenSubmit] = useState(false)
    const [openScanned, setOpenScanned] = useState(false)
    const handleChange = (e) => {
        const temp = e.target.value
        if (!isNaN(temp)) {
            setTextData(temp)
        }else{
            alert('Hanya bisa memasukkan angka saja!')
        }
        console.log(textData);
    }
    // let textID;
    const GetID =() => {
        let textCode = textData
        // console.log(textCode)
         axios.get("https://api.wedding.chicodefive.com/v1/User/generateidforqr/" + textCode)
        .then(res => {
            if(typeof res.data == "object")
            {
                setOpenQR(!openQR)
                if(res.data.data != null)
                {
                    console.log(res.data.data)
                    setTextQR(res.data.data.id);
                    console.log(textCode);
                    setOpenSubmit(false)
                    setOpenErr(false)
                    setOpenSuccess(true)
                    // setOpenInput(false)
                    // setOpenScanned(true)
                }else {
                    setOpenSuccess(false)
                    setOpenErr(true)
                }
            }else{
                console(res.data);
            }
        })
    }
    // const ref = useDetectClickOutside({ onTriggered: closeQR })
    useEffect(() => {
        if(open === false)
        {
            setOpenQR(false)
        }
    }, [open])
    return (
        <div className='flex flex-row w-full h-full py-12 justify-center font-sansLight px-24 '>
            <div className='flex w-full h-20 justify-center items-center'>
                <div className='flex w-24 h-20 justify-start items-center'>
                    <img src={IconInv} alt='Tanda'/>
                </div>
                <div className='flex flex-row w-4/5 h-20 justify-center items-center space-x-8'>
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
                <div className='flex w-40 h-12 justify-center items-center'>
                    <button className='w-40 h-12 justify-center text-base font-sansLight items-center rounded-md bg-chocolate text-white' onClick={togglePopup}>Buka QR</button>
                </div>
            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={closeQR}>
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
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all lg:my-8 lg:align-middle lg:max-w-2xl lg:w-full" >
                        <div className="bg-white px-24 pt-5 pb-4 lg:p-6 lg:pb-4 justify-center items-center">
                            <div className="lg:flex lg:items-center justify-center">
                            <div className="mt-3 text-center lg:mt-0 lg:text-center py-8 justify-center items-center space-y-2">
                                {openInput && (
                                    <div className='flex flex-col justify-center items-center space-y-4'>
                                        <Dialog.Title as="h1" className="text-base font-sans leading-6 font-sans justify-center items-center px-4">
                                        Silahkan masukkan Nomor Handphone kalian untuk membuka QR Code yang di gunakan untuk masuk pada Hari Pernikahan  
                                        </Dialog.Title>
                                        <div className="mt-2 flex flex-row items-center pt-4 px-8">
                                            <input className='w-full h-16 border border-gray-300 justify-center text-center items-center text-2xl' type='text' value={textData} onChange={handleChange}></input>
                                        </div>
                                        <div className='font-sans text-xs text-gray-400 font-light text-justify px-8'>
                                            <p>* Nomor handphone kamu tidak akan kami sebarkan. Nomor handphone hanya untuk membuka QR Code di hari Pernikahan kami.</p>
                                        </div>
                                        {openSubmit && (
                                            <div className='py-4'>
                                                <button className='w-40 h-12 text-white bg-black rounded-md font-sans items-center justify-center text-white' onClick={GetID}>MASUK</button>
                                            </div>
                                        )}
                                    </div>
                                )}
                                {openQR && (
                                    <div className='flex flex-col w-auto h-auto px-8 justify-center items-center'>
                                        {openScanned && (
                                            <div className='flex flex-col w-auto h-auto px-8 justify-center items-center'>
                                                <div className='w-auto h-auto'>
                                                    <img src={IconScanned} alt='scanned'/>
                                                </div>
                                                <div className='flex flex-col w-auto h-auto justify-center items-center space-y-2 py-4'>
                                                    <h1>Selamat Menikmati</h1>
                                                    <p>Terima kasih telah hadir di pernikahan Sara & Kelvin. Selamat Menikmati Pernikahan Kami.</p>
                                                </div>
                                            </div>
                                        )}
                                        {openSuccess && (
                                            <div className='flex flex-col w-auto h-auto justify-center items-center space-y-4'>
                                                <p className='font-sans font-light text-base text-black'>QR CODE</p>
                                                <QRCode value={textQR.toString()} />
                                                <p className='font-sans font-light text-yellow-700 text-xs'>QR Code ini bersifat pribadi. Jangan di berikan atau di tunjukan kepada orang lain karena QR Code alat untuk hadir pada saat Pernikahan Sara & Kelvin</p>
                                            </ div>
                                        )}
                                        {openErr && (
                                            <div className='flex flex-col w-auto h-auto justify-center items-center'>
                                                <p className='font-sans font-light text-red-500 text-xs'>* Nomor handphone kamu salah atau tidak terdaftar di sistem kami. Jika kalian telah mendapatkan undangan tetapi nomor handphone tidak bisa silahkan menghubungi Admin</p>
                                            </div>
                                        )}
                                    </div>
                                )}
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

export default Navbar
