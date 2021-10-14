import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel'
import axios from 'axios'

function Wishes() {
    // var typeCard;
    // var messageCard;
    // var nameCard;
    // var temp;
    const [rows,setData] = useState([]);
    const GetData = () => {
        axios.get("https://api.wedding.chicodefive.com/v1/Undangan/getall")
        .then(res => {
            setData(res.data.data)
            // console.log(res.data.data)
            // console.log(rows)
        })
    }
    useEffect(() => {
        GetData();
    }, [rows])
    const renderWishesCard = () => {
        // i++;
        return(
            rows.map((row) => {
                var temp = 'card' + row.tempelate;
                // console.log(temp);
                return (
                    <div key={row.id}>
                        {/* <div className='flex w-cardW h-cardH'> */}
                            <div className={temp} >
                                <div className='flex flex-col w-full h-full pt-16 pb-24 pl-10 pr-16 text-center'>
                                    <h1 className='break-all font-sans text-2xl text-black'>{row.name}</h1>
                                    <p className='break-all font-sansLight text-sm pt-2 text-black px-2'>{row.message}</p>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                )
            })
        )
    }
    return (
        <div className='sm:flex flex-col w-full h-full justify-center items-center py-8'>
            <div className='flex flex-col w-full h-full justify-center items-center md:px-24 px-5'>
                <text className='py-8 font-script sm:text-4xl font-bold'>Ucapan dan Doa Anda</text>
                <div className='hidden w-full h-full'>
                    <Carousel 
                    className='h-location'
                    dynamicHeight={false}
                    autoPlay 
                    infiniteLoop 
                    // selectedItem={3} 
                    centerMode={true} showStatus={false} showIndicators={false}
                    centerSlidePercentage={33} showThumbs={false}>
                        {renderWishesCard()}
                    </Carousel>
                </div>
                <div className='md:hidden w-full h-full'>
                    <Carousel 
                    className='h-location'
                    width={360}
                    dynamicHeight={false}
                    autoPlay 
                    infiniteLoop 
                    // selectedItem={3} 
                    centerMode={true} showStatus={false} showIndicators={false}
                    centerSlidePercentage={95} showThumbs={false}>
                        {renderWishesCard()}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Wishes
