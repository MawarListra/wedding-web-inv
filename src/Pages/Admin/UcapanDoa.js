import React, { useState, useEffect } from 'react'
import Table from '../../Components/Table/Table';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UcapanDoa({pilih}) {
    const [undangan, setUndangan] = useState([]);


    useEffect(() => {
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }
        axios.get('https://api.wedding.chicodefive.com/v1/Undangan/getall', config)
            .then(response => {
                setUndangan(response.data.data);
                console.log(response.data.data);
            }).catch((err) => {
                console.log(err);
            })

        
    }, [])

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
            Header: 'Ucapan dan Doa',
            accessor: 'message',
            mystyle: "max-w-sedang",
            className: "truncate"
        },
        {
            Header: 'Template',
            accessor: 'tempelate',
            mystyle: "max-w-kecil",
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
        },
    ],[]
    );

    return (
        <div className="mx-10">
            <Table columns={COLUMNS} data={undangan} pilih={pilih} />
        </div>
    )
}

export default UcapanDoa