import axios from 'axios'
import React, { useEffect } from 'react'
import Card1 from '../../Images/L1.png'
import Card2 from '../../Images/L2.png'
import Card3 from '../../Images/L3.png'
import Card4 from '../../Images/L4.png'
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";

function Kartu() {

    const [nama, setNama] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [gambar, setGambar] = React.useState('');

    const { id } = useParams();

    const url = process.env.REACT_APP_PUBLIC_URL
    useEffect(() => {
        getUserById();
        //console.log(id);
    });
    const getUserById = async () => {

        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                'Content-Type': 'application/json',
            },
        }
        await axios.get(`${url}/v1/Undangan/${id}`, config)
            .then(response => {
                const datas = response.data.data;
                datas.map(tamu => (
                    (setNama(tamu.name),
                        setMessage(tamu.message),
                        setGambar(tamu.tempelate))
                ))


                console.log(response.data.data);
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <div className="flex justify-center items-center fixed inset-0">
                <div className="flex relative">
                    {gambar === '' || gambar === null ? <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    /> : <img src={gambar === 1 ? Card1 : gambar === 2 ? Card2 : gambar === 3 ? Card3 : Card4} alt={gambar === 1 ? 'card 1' : gambar === 2 ? 'card 2' : gambar === 3 ? 'card 3' : 'card 4'} className="object-fill m-auto w-full max-w-md border-2 rounded-xl"></img>}
                    <div className="flex justify-center fixed inset-x-0 mt-16">
                        <div className="font-sans text-3xl font-bold"> {nama} </div>
                    </div>
                    <div className="flex justify-center fixed inset-1/3 mt-7">
                        <div className="w-96 text-center break-all font-sans text-sm"> {message} </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Kartu
