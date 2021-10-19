import {React, useState, useEffect, Fragment, useRef, useCallback} from 'react'
import IconInv from '../Images/Rectangle 673.png'
import IconInvM from '../Images/Rectangle 673(1).png'
import IconScanned from '../Images/Scanned.png'
import { Dialog, Transition } from '@headlessui/react'
import QRCode from 'qrcode.react'
import axios from 'axios'
import {Link} from 'react-scroll'


const Navbar = ({toggle}) => {
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
    const [textQR, setTextQR] = useState('0');

    const [textData, setTextData] = useState('');
    const [openQR, setOpenQR] = useState(false)
    const [openErr, setOpenErr] = useState(false)
    const [openSuccess, setOpenSuccess] = useState(false)
    const [openInput, setOpenInput] = useState(false)
    const [openSubmit, setOpenSubmit] = useState(false)
    const [openScanned, setOpenScanned] = useState(false)
    const [textTemp, setTextTemp] = useState('0')
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
        if(textCode === '')
        {
            alert('Silahkan masukkan no hp anda!')
        }else {
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
                        if((res.data.data.statushadir).toString() === '1')
                        {
                            setOpenScanned(true)
                            setOpenSubmit(false)
                            setOpenSuccess(false)
                            setOpenErr(false)
                            setOpenInput(false)
                        }else if ((res.data.data.statushadir).toString() === '0'){
                            
                            setOpenScanned(false)
                            setOpenSubmit(false)
                            setOpenSuccess(true)
                            setOpenErr(false)
                            // setOpenInput(false)
                        }
                    }else {
                        setOpenSuccess(false)
                        setOpenErr(true)
                        setTextQR('')
                    }
                }else{
                    console(res.data);
                }
            })
        }
    }


    const checkHadiran =(textCek) => {
        console.log("masuk sini")
        axios.get("https://api.wedding.chicodefive.com/v1/User/checkhadir/" + textCek)
            .then(resp => {
                if(typeof resp.data == "object")
                {
                    // setOpenQR(!openQR)
                    if(resp.data.data != null)
                    {
                        console.log(resp.data.data)
                        setTextTemp(resp.data.data);
                        if(resp.data.data === '1')
                        {
                            if(openQR === true)
                            {
                                setOpenInput(false)
                                setOpenSubmit(false)
                                setOpenScanned(true)
                                setOpenSuccess(false)
                                setOpenErr(false)
                            }else{
                                console.log('Hadir')
                            }
                        }else{
                            console.log('Belum Hadir')
                        }
                    }else {
                        console.log('Data null')
                    }
                }else{
                    console(resp.data.data);
                }
            })
    }

    // const ref = useDetectClickOutside({ onTriggered: closeQR })
    const CekKehadiran = useCallback(() => {
        let textCek = textQR
            console.log(textCek)
        if(textCek === '0')
        {
            console.log('Nomor belum masuk')
        }else if(textCek !== '0')
        {
            axios.get("https://api.wedding.chicodefive.com/v1/User/checkhadir/" + textCek)
            .then(resp => {
                if(typeof resp.data == "object")
                {
                    // setOpenQR(!openQR)
                    if(resp.data.data != null)
                    {
                        console.log(resp.data.data)
                        setTextTemp(resp.data.data);
                        if(textTemp.toString() === '1')
                        {
                            if(openQR === true)
                            {
                                setOpenInput(false)
                                setOpenSubmit(false)
                                setOpenScanned(true)
                                setOpenSuccess(false)
                                setOpenErr(false)
                            }else{
                                console.log('Hadir')
                            }
                        }else{
                            console.log('Belum Hadir')
                        }
                    }else {
                        console.log('Data null')
                    }
                }else{
                    console(resp.data.data);
                }
            })
        }
    }, [textQR, openQR, textTemp]);
    useEffect(() => {
        if(open === false)
        {
            setOpen(false)
            setTextQR('0');
        }else
        {  
            checkHadiran(textQR)
        }
    }, [open, textQR, textTemp, checkHadiran])
    return (
        <div className='flex flex-row md:w-full h-full md:py-12 justify-center font-sansLight'>
            <div className='md:flex hidden w-full md:h-20 md:py-5 pb-10 pt-4 justify-center items-center md:px-24' >
                <div className='cursor-pointer md:hidden ' onClick={toggle}>
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </div>
                <div className='md:flex hidden w-24 h-20 justify-start items-center'>
                    <img src={IconInv} alt='Tanda'/>
                </div>
                <div className='md:hidden w-16 h-12 justify-start items-center'>
                    <img src={IconInvM} alt='Tanda'/>
                </div>
                <div className='flex flex-row w-4/5 md:flex hidden h-20 justify-center items-center space-x-8'>
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
                <div className='md:flex hidden w-40 h-12 h-12 justify-center items-center'>
                    <button className='flex w-full h-full justify-center text-base font-sansLight items-center rounded-md bg-chocolate text-white' onClick={togglePopup}>Buka QR</button>
                </div>
                <div className='md:hidden w-24 h-9 justify-center items-center'>
                    <button className='flex w-full h-full justify-center text-base font-sansLight items-center rounded-md bg-chocolate text-white' onClick={togglePopup}>Buka QR</button>
                </div>
            </div>
            <div className='md:hidden flex w-full h-20 py-5 pb-10 pt-4 justify-center items-center space-x-20' >
                <div className='cursor-pointer md:hidden pr-5' onClick={toggle}>
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </div>
                <div className='md:hidden w-16 h-12 justify-start items-center'>
                    <img src={IconInvM} alt='Tanda'/>
                </div>
                <div className='md:hidden w-24 h-9 justify-center items-center'>
                    <button className='flex w-full h-full justify-center text-xs font-sansLight items-center rounded-md bg-chocolate text-white' onClick={togglePopup}>Buka QR</button>
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
                        <div className="bg-white md:px-24 pt-5 pb-4 lg:p-6 lg:pb-4 justify-center items-center">
                            <div className="lg:flex lg:items-center justify-center">
                            <div className="mt-3 text-center lg:mt-0 lg:text-center py-8 justify-center items-center space-y-2">
                                {openInput && (
                                    <div className='flex flex-col justify-center items-center space-y-4 '>
                                        <div className=' flex-grow-0 overflow-y-auto md:w-24 md:h-20 bg-chocolate text-white justify-center items-center rounded-full -mt-36'>
                                            <img src={IconInv} alt='Tanda' />
                                        </div>
                                        
                                        <Dialog.Title as="h1" className="md:text-base text-xs font-sans leading-6 font-sans justify-center items-center md:px-4 px-4">
                                            Silahkan masukkan Nomor Handphone kalian untuk membuka QR Code yang di gunakan untuk masuk pada Hari Pernikahan  
                                        </Dialog.Title>
                                        <div className="mt-2 flex flex-row items-center pt-4 md:px-8 px-0">
                                            <input className='md:w-full w-80 md:h-16 h-12 border border-gray-300 justify-center text-center items-center md:text-2xl text-sm' type='text' value={textData} onChange={handleChange}></input>
                                        </div>
                                        <div className='font-sans text-xs text-gray-400 font-light text-justify px-8'>
                                            <p>* Nomor handphone kamu tidak akan kami sebarkan. Nomor handphone hanya untuk membuka QR Code di hari Pernikahan kami.</p>
                                        </div>
                                        {openSubmit && (
                                            <div className='md:py-4 py-2'>
                                                <button className='w-40 h-12 text-white bg-black rounded-md font-sans items-center justify-center text-white' onClick={GetID}>MASUK</button>
                                            </div>
                                        )}
                                    </div>
                                )}
                                {openQR && (
                                    <div className='flex flex-col w-auto h-auto md:px-8 px-0 justify-center items-center'>
                                        {openScanned && (
                                            <div className='flex flex-col w-auto h-auto px-8 justify-center items-center'>
                                                <div className='w-auto h-auto'>
                                                    <img src={IconScanned} alt='scanned'/>
                                                </div>
                                                <div className='flex flex-col w-auto h-auto justify-center items-center space-y-4 py-4'>
                                                    <h1 className='font-sans text-black text-2xl'>Selamat Datang</h1>
                                                    <p className='font-sans text-base text-black'>Terima kasih, telah menghadiri pernikahan kami </p>
                                                    {/* <p className='font-sansLight text-base text-black'>QR CODE SOUVENIR</p> */}
                                                    {/* <QRCode value={textQR.toString()} /> */}
                                                    {/* <p className='font-sans text-xs text-red-500'>SILAHKAN SCREENSHOT QR INI UNTUK PENGAMBILAN SOUVENIR PADA SAAT PULANG</p> */}
                                                </div>
                                            </div>
                                        )}
                                        {openSuccess && (
                                            <div className='flex flex-col w-auto h-auto justify-center items-center space-y-4'>
                                                <p className='font-sansLight text-base text-black'>QR CODE</p>
                                                <QRCode value={textQR.toString()} />
                                                <p className='font-sans font-light text-yellow-700 text-xs'>KODE QR INI BERSIFAT PRIBADI. TIDAK UNTUK DISEBARKAN</p>
                                            </ div>
                                        )}
                                        {openErr && (
                                            <div className='flex flex-col w-auto h-auto justify-center items-center'>
                                                <p className='font-sans font-light text-red-500 text-xs md:px-0 px-4'>* Nomor handphone kamu salah atau tidak terdaftar di sistem kami. Jika kalian telah mendapatkan undangan tetapi nomor handphone tidak bisa silahkan menghubungi Admin</p>
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
