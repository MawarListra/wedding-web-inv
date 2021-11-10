import React, { useState, useEffect, useCallback } from 'react'
import Table from '../../Components/Table/Table';
import * as BoxIcon from "react-icons/bi";
import { AiOutlineDelete, AiFillCheckCircle } from "react-icons/ai";
import axios from 'axios';
import { Link } from 'react-router-dom';

const api = process.env.REACT_APP_PUBLIC_URL
function DaftarTamu({ pilih }) {
    const [tamu, setTamu] = useState([]);
    const [count, setCount] = useState([]);


    useEffect(() => {
        getData()
        getCount()



        // const interval = setInterval(() => {

        //     getData()
        //     getCount()
        // }, 1000);

        // return () => clearInterval(interval);

    }, [])
    const getData = () => {
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }
        axios.get(`${api}/v1/User/getall`, config).then(response => {
            setTamu(response.data.data);
            console.log(response.data.data);
        }).catch((err) => {
            console.log(err);
        })
    }
    const getCount = () => {
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }

        axios.get(`${api}/v1/User/getallcounter`, config)
            .then(response => {
                setCount(response.data);
                console.log(response.data);
            }).catch((err) => {
                console.log(err);
            })
    }
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
            .delete(`${api}/v1/User/delete/${id}`, config)
            .then((response) => {
                setTamu(
                    tamu.filter((val) => {
                        return val.id !== id;
                    })
                );
            });
    }, [tamu]);

    const souvenirCek = useCallback((id) => {
        const data = {
            statussouvenir: 1
        }
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        };
        axios
            .put(`${api}/v1/User/update/${id}`, data, config)
            .then((response) => {
                if (response.status === 200) {
                       getData()
                    //window.location.reload();
                }
            });
    }, []);

    const COLUMNS = React.useMemo(() => [
        {
            Header: 'No',
            accessor: "",
            Cell: (row) => {
                return <div>{Number(row.row.id) + 1}</div>;
            },
            mystyle: "rounded-l-3xl max-w-kecil",
            disableFilters: true
        },
        {
            Header: 'Name',
            accessor: 'name',
            mystyle: "max-w-besar",
            disableFilters: true
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
                return <div className={data.value === '0' ? "flex justify-center rounded-lg mx-auto py-2 px-6 font-poppins font-medium lg:text-sm text-xs border bg-abuabu" : "flex justify-center rounded-lg mx-auto py-2 px-6 font-poppins font-normal lg:text-sm text-xs border bg-hijaumuda"}>
                    {data.value !== '0' ? "Hadir" : "Belum Hadir"}
                </div>;
            },
            disableFilters: true
        },
        {
            Header: 'Souvenir',
            accessor: 'statussouvenir',
            mystyle: "max-w-kecil",
            Cell: (data) => {
                return <div className={data.value === '0' ? "flex justify-center rounded-lg mx-auto py-2 font-poppins font-normal lg:text-sm text-xs border bg-abuabu" : "flex justify-center rounded-lg mx-auto py-2 px-6 font-poppins font-normal lg:text-sm text-xs border bg-hijaumuda"}>
                    {data.value !== '0' ? "Sudah" : "Belum"}
                </div>;
            },
            disableFilters: true
        },
        // {
        //     mystyle: "max-w-besar",
        //     Header: '',

        //     Cell: (data) => {
        //         return <div>

        //         </div>;
        //     },
        //     disableFilters: true
        // },
        {
            mystyle: "rounded-r-3xl",
            width: 20,
            Header: 'QR Code',
            accessor: "id",
            Cell: (data) => {
                return <div className="flex space-x-10 items-center">
                    <div>
                        {data.value}
                    </div>
                    <Link to={`/qr/${data.value}`} target='_blank' className="rounded-lg py-2 px-6 font-poppins font-normal lg:text-sm text-xs border-2 border-warnaborder">
                        Lihat QR
                    </Link>
                    <Link to={`/edittamu/${data.value}`}>
                        <BoxIcon.BiEdit className="text-warnaborder text-2xl items-center p-0" />
                    </Link>
                    <button onClick={() => deleteUser(data.value)}>
                        <AiOutlineDelete className="text-warnaborder text-2xl items-center" />
                    </button>
                    <button onClick={() => souvenirCek(data.value)}>
                        <AiFillCheckCircle className="text-warnaborder text-2xl items-center" />
                    </button>
                </div>;
            },
        },
    ], [deleteUser, souvenirCek]
    );

    return (

        <div className="mx-10">
            <Table columns={COLUMNS} data={tamu} pilih={pilih} banyak={count} />
        </div>
    )
}

export default DaftarTamu
