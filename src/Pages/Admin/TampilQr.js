import React from 'react'
import { useParams } from "react-router-dom";
function TampilQr() {
    const { id } = useParams();
    var QRCode = require('qrcode.react');
    return (
        <div className="items-center">
            <div className="flex h-screen"> 
            <QRCode  className="flex m-auto items-center" size={300} value={id}/>
            </div>
        </div>
    )
}

export default TampilQr
