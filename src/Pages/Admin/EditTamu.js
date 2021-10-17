import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";


function EditTamu() {


    const [nama, setNama] = React.useState('');
    const [noTlp, setNoTlp] = React.useState('');
    const [alamat, setAlamat] = React.useState('');
    const [hadir, setHadir] = React.useState('');
    const [sovenir, setSovenir] = React.useState('');
    const url = "https://api.wedding.chicodefive.com";
    const { id } = useParams();


    useEffect(() => {
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                'Content-Type': 'application/json',
            },
        }
        axios.get(`${url}/v1/User/${id}`, config)
            .then(response => {
                const datas = response.data.data;
                datas.map(tamu => (
                    (setNama(tamu.name),
                    setNoTlp(tamu.phone),
                    setAlamat(tamu.address),
                    setHadir(tamu.statushadir),
                    setSovenir(tamu.statussouvenir))
                ));


                console.log(response.data.data);
            }).catch((err) => {
                console.log(err);
            })
    },[id]);

    const editUser = async (e) => {
        e.preventDefault();
        const data = {
            name: nama,
            phone: noTlp,
            address: alamat,
            statushadir: hadir,
            statussouvenir: sovenir
        }
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                'Content-Type': 'application/json',
            },
        };
        await axios
            .put(`${url}/v1/User/update/${id}`, data, config)
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    window.location = "/AdminDashboard";
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <div>
             <header className=" border-b h-24 flex items-center justify-center">
                   
                    <div className="flex flex-grow items-center justify-between px-3">
                        <h1 className="font-medium font-poppins text-2xl">Edit Data</h1>
                    </div>
                </header>
            <div className="ml-10 mt-10">
                <form onSubmit={editUser}>
                    <div>
                        <div className="font-semibold font-poppins text-sm text-warnaborder"> Nama Tamu </div>
                        <input type="text"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)} className="border rounded-lg py-3 px-4 w-72 focus:outline-none mb-8"></input>
                    </div>
                    <div>
                        <div className="font-semibold font-poppins text-sm text-warnaborder">Alamat</div>
                        <textarea type="text" value={alamat}
                            onChange={(e) => setAlamat(e.target.value)} className="border rounded-lg py-3 px-4 w-2/5 h-36 focus:outline-none mb-8"></textarea>
                    </div>
                    <div>
                        <div className="font-semibold font-poppins text-sm text-warnaborder">Nomor Handphone</div>
                        <input type="tel"
                            pattern="[0-9]{>20}"
                            value={noTlp}
                            onChange={(e) => setNoTlp(e.target.value)} className="border rounded-lg py-3 px-4 w-72 focus:outline-none mb-8"></input>
                    </div>
                    <div>
                        <div className="font-semibold font-poppins text-sm text-warnaborder"> Check In </div>
                        <select
                            value={hadir}
                            onChange={(e) => setHadir(e.target.value)} className="border rounded-lg py-3 px-4 w-72 focus:outline-none mb-8">
                            <option value={0}>Belum Hadir</option>
                            <option value={1}>Hadir</option>
                        </select>
                    </div>
                    <div>
                        <div className="font-semibold font-poppins text-sm text-warnaborder"> Souvenir </div>
                        <select
                            value={sovenir}
                            onChange={(e) => setSovenir(e.target.value)} className=" border rounded-lg py-3 px-4 w-72 focus:outline-none mb-8">
                            <option value={0}>Belum</option>
                            <option value={1}>Sudah</option>
                        </select>
                    </div>
                    <div className="flex">
                        <button className="bg-yellow-400 text-white px-8 py-2 border rounded-lg">Ubah Data</button>
                        <Link to="/AdminDashboard" className=" px-4 py-2 border rounded-lg ml-4">Batal</Link>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default EditTamu
