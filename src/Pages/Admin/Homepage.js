import React from 'react'

import Transition from '../../Components/Transition';
import DaftarTamu from './DaftarTamu';
import UcapanDoa from './UcapanDoa';
import * as myIcon from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md";
import { RiBarChart2Line } from "react-icons/ri";
import walletIconcolor from "../../Images/walletIconcolor.png";
import walletIcon from "../../Images/walletIcon.png";
import LogoWedding from "../../Images/LogoWedding.png";

export default function Homepage() {
    const [isClose, setClosed] = React.useState(false);
    const [pages, setPages] = React.useState(0);

    const logout = () => {
        localStorage.clear();
        window.location = '/admin';
    }

    if (localStorage.getItem("token") === null) {
        window.location = '/admin';
    }
    return (
        <div className="flex bg-gray-100">
            <Transition
                show={!isClose} enter="transition-all duration-500"
                enterFrom="-ml-64"
                enterTo="ml-0"
                leave="transition-all duration-500"
                leaveTo="-ml-64"
            >

                < aside className="bg-white w-64 min-h-screen flex flex-col ">
                    <div className="bg-white border-r px-4 h-24 flex items-center justify-end">
                        <span className="text-blue px-10 ">
                            <img alt="logo" src={LogoWedding}/>
                        </span>
                        {isClose ? (
                            <div></div>
                        ) : (
                            <button aria-label="Close menu" title="Close menu" onClick={() => setClosed(true)}><myIcon.BiMenuAltRight className="text-4xl" /></button>)}
                    </div>

                    <div className="border-r flex-grow relative">

                        <nav >
                            <ul className="font-poppins font-normal text-lg">
                                <li className="pb-5">
                                    {pages === 0 ? (<button onClick={() => setPages(0)} className="flex items-center text-primary bg-warnarow py-4 px-2 mx-auto rounded-xl">
                                        <RiBarChart2Line className="border-2 border-primary text-primary rounded-md w-5 h-5 mr-3" />
                                        Buat tamu undangan
                                    </button>) : (<button onClick={() => setPages(0)} className="flex items-center py-4 px-2 mx-auto rounded-xl">
                                        <RiBarChart2Line className="border-2 border-second  rounded-md w-5 h-5 mr-3" />
                                        Buat tamu undangan
                                    </button>)}
                                </li>
                                <li className="pb-12">
                                    <button onClick={() => setPages(1)} className={pages === 1 ? ("flex bg-warnarow py-4 px-2 mx-auto rounded-xl") : ("flex py-4 px-2 mx-auto rounded-xl")}>
                                        <img alt='wallet' src={pages === 1 ? walletIconcolor : walletIcon} className={pages === 1 ? ("text-primary mr-3") : ("text-second mr-3")} />
                                        <div className={pages === 1 ? ("mr-9 text-primary") : ("mr-9")}>
                                            Ucapan dan Doa
                                        </div>
                                    </button>
                                </li>
                                <li className="flex items-center text-red-500 absolute inset-x-0 bottom-5">
                                    <button className="flex" onClick={() => logout()}>
                                        <MdOutlineLogout className="text-2xl mx-3" />
                                        Log Out
                                    </button>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </aside>
            </Transition>

            <div className="bg-white flex-grow flex flex-col min-h-screen">
                <header className=" border-b h-24 flex items-center justify-center">
                    {isClose ? (
                        <button aria-label="Open menu" title="Open menu" onClick={() => setClosed(false)}><myIcon.BiMenu className="text-4xl" /></button>
                    ) : (<button aria-label="Close menu" title="Close menu" onClick={() => setClosed(true)} className="hidden"><myIcon.BiMenuAltRight className="text-4xl" /></button>)}
                    <div className="flex flex-grow items-center justify-between px-3">
                        <h1 className="font-medium font-poppins text-2xl">{pages === 0 ? "Kelola Undangan Tamu" : "Ucapan dan Doa"}</h1>
                    </div>
                </header>
                <div className="flex-grow flex flex-col min-h-screen">
                    {pages === 0 ? <DaftarTamu pilih={pages} /> : <UcapanDoa pilih={pages} />}
                </div>
            </div>

        </div >
    )
}
