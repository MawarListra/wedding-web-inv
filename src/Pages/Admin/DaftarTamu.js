import React, { useState, useEffect,useCallback } from 'react'
import Table from '../../Components/Table/Table';
import * as BoxIcon from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import axios from 'axios';
import { Link } from 'react-router-dom';

function DaftarTamu({ pilih }) {
    const [tamu, setTamu] = useState([]);


    useEffect(() => {
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }
        axios.get('https://api.wedding.chicodefive.com/v1/User/getall', config)
            .then(response => {
                setTamu(response.data.data);
                console.log(response.data.data);
            }).catch((err) => {
                console.log(err);
            })


    }, [])

    // const getUserById = async (id) => {

    //     const config = {
    //         headers: {
    //             Authorization: "Bearer " + localStorage.getItem("token"),
    //         },
    //     }
    //     await axios.get(`https://api.wedding.chicodefive.com/v1/User/${id}`, config)
    //         .then(response => {

    //             setOpen(true);
    //             setByID(response.data.data);
    //             console.log(response.data.data);
    //             byID.map((as)=>(
    //                 console.log(as.name)
    //             ))

    //         }).catch((err) => {
    //             console.log(err);
    //         })
    // }

    const deleteUser = useCallback((id) => {
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        };
        axios
            .delete(`https://api.wedding.chicodefive.com/v1/User/delete/${id}`, config)
            .then((response) => {
                setTamu(
                    tamu.filter((val) => {
                        return val.id !== id;
                    })
                );
            });
    },[tamu]);
    const COLUMNS = React.useMemo(() => [
        {
            Header: 'No',
            accessor: "",
            Cell: (row) => {
                return <div>{Number(row.row.id) + 1}</div>;
            },
            mystyle: "rounded-l-3xl max-w-kecil",
        },
        {
            Header: 'Name',
            accessor: 'name',
            mystyle: "max-w-sedang",
        },
        {
            Header: 'Alamat',
            accessor: 'address',
            mystyle: "max-w-besar",
        },
        {
            Header: 'Nomor Telepon',
            accessor: 'phone',
            mystyle: "max-w-sedang",
        },
        {
            Header: 'Check In',
            accessor: 'statushadir',
            mystyle: "max-w-kecil",
            Cell: (data) => {
                return <div className={data.value === 0 ? "flex justify-center rounded-lg mx-auto py-2 px-6 font-poppins font-medium lg:text-sm text-xs border bg-abuabu" : "flex justify-center rounded-lg mx-auto py-2 px-6 font-poppins font-normal lg:text-sm text-xs border bg-hijaumuda"}>
                    {data.value !== 0 ? "Hadir" : "Belum Hadir"}
                </div>;
            }
        },
        {
            Header: 'Souvenir',
            accessor: 'statussouvenir',
            mystyle: "max-w-kecil",
            Cell: (data) => {
                return <div className={data.value === 0 ? "flex justify-center rounded-lg mx-auto py-2 font-poppins font-normal lg:text-sm text-xs border bg-abuabu" : "flex justify-center rounded-lg mx-auto py-2 px-6 font-poppins font-normal lg:text-sm text-xs border bg-hijaumuda"}>
                    {data.value !== 0 ? "Sudah" : "Belum"}
                </div>;
            }

        },
        {
            mystyle: "max-w-besar",
            Header: 'QR Code',
            accessor: "code",
            Cell: (data) => {
                return <div>
                    <button className="rounded-lg mx-auto py-2 px-6 font-poppins font-normal lg:text-sm text-xs border-2 border-warnaborder">
                        Lihat QR
                    </button>
                </div>;
            },
        },
        {
            mystyle: "rounded-r-3xl max-w-sedang",
            width: 20,
            Header: ' ',
            accessor: "id",
            Cell: (data) => {
                return <div className="flex justify-between">
                    <Link to={`/edittamu/${data.value}`}>
                        <BoxIcon.BiEdit className="text-warnaborder text-2xl items-center p-0" />
                    </Link>
                    <button onClick={() => deleteUser(data.value)}>
                        <AiOutlineDelete className="text-warnaborder text-2xl items-center" />
                    </button>
                </div>;
            },
        },
    ],[deleteUser]
    );

    return (

        <div className="mx-10">
            <Table columns={COLUMNS} data={tamu} pilih={pilih} />
        </div>
    )
}

export default DaftarTamu
