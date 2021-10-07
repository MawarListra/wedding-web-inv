import React from 'react'
import Card1 from '../Images/WishesCard 1.png'
import Card2 from '../Images/WishesCard 2.png'
import Card3 from '../Images/WishesCard 3.png'
import Card4 from '../Images/WishesCard 4.png'
// import Carousel from 'react-elastic-carousel'

// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/swiper.scss'
// import { SilderData } from './SliderData'

// const breakpoints = [
//     { width: 1, itemToShow: 1},
//     { width: 550, itemToShow: 2},
//     { width: 768, itemToShow: 3},
//     { width: 1200, itemToShow: 4},
// ];
function Wishes() {
    return (
        <div className='sm:flex flex-col sm:w-full sm:h-full justify-center items-center'>
            <div className='flex flex-col sm:w-auto sm:h-full justify-center items-center py-8 px-24'>
                <text className='py-8 font-script sm:text-4xl font-bold'>Ucapan dan Doa Anda</text>
                <div className='flex flex-row space-x-8'>
                    {/* <section className='slider'>
                    {SilderData.map([slide, index] =>{
                        return <img src={slide.image} alt='wishes image'/>
                    })}
                    <> */}
                    {/* <Swiper 
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <img src={Card1}></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Card2}></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Card4}></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Card3}></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Card2}></img>
                        </SwiperSlide> */}
                    <div>
                        <img src={Card1} alt='card 1'></img>
                    </div>
                    <div>
                        <img src={Card2} alt='card 2'></img>
                    </div>
                    <div>
                        <img src={Card3} alt='card 3'></img>
                    </div>
                    <div>
                        <img src={Card4} alt='card 4'></img>
                    </div>
                    <div>
                        <img src={Card2} alt='card 5'></img>
                    </div>
                    {/* </Swiper> */}
                </div>
            </div>
        </div>
    )
}

export default Wishes
