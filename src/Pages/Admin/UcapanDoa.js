import React, { useState, useEffect } from 'react'
import Table from '../../Components/Table/Table';
import axios from 'axios';
import { Link } from 'react-router-dom';

const api = process.env.REACT_APP_PUBLIC_URL
function UcapanDoa({pilih}) {
    const [undangan, setUndangan] = useState([]);


    useEffect(() => {
        getData()
        // const interval = setInterval(() => {

        //     getData()
        //     }, 1000);
        
        //    return () => clearInterval(interval);
        

        
    }, [])
    const getData=()=>{
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }
        axios.get(`${api}/v1/Undangan/getall`, config)
            .then(response => {
                setUndangan(response.data.data);
                console.log(response.data.data);
            }).catch((err) => {
                console.log(err);
            })
    }
    const headers = React.useMemo(() => [
        {
            label: 'Name',
            key: 'name',
           
        },
        {
            label: 'Ucapan dan Doa',
            key: 'message',
        },
    ],[]);
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
            mystyle: "max-w-sedang",
            disableFilters: true
        },
        {
            Header: 'Ucapan dan Doa',
            accessor: 'message',
            mystyle: "max-w-sedang",
            className: "truncate",
            disableFilters: true
        },
        {
            Header: 'Template',
            accessor: 'tempelate',
            mystyle: "max-w-kecil",
            disableFilters: true
        },
        {
            mystyle: "rounded-r-3xl max-w-sedang",
            Header: 'Lihat Kartu Ucapan',
            accessor: "id",
            Cell: (data) => {
                return <div>
                    <Link to={`/kartu/${data.value}`} target='_blank' className="rounded-lg py-2 px-9 font-poppins font-normal text-sm border-2 border-warnaborder">
                        Lihat
                    </Link>
                </div>;
            },
            disableFilters: true
        },
    ],[]
    );

    return (
        <div className="mx-10">
            <Table columns={COLUMNS} data={undangan} pilih={pilih} headers={headers} />
        </div>
    )
}

export default UcapanDoa
