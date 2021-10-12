import {React, useState, useEffect} from 'react'

function Countdown() {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    

    useEffect(() => {
        const startTimer = () => {
        const countDownDate = new Date("November 21, 2021").getTime();
        console.log(countDownDate);
        let interval = setInterval(()=>{
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days = Math.floor(distance/(24 * 60 * 60 * 1000));
            const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / (1000));

            if(distance<0) {
                //stop timer
                clearInterval(interval.current);
            }else{
                //update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        });
    };
        startTimer();
    }, [])
    return (
        <div className='md:flex md:w-full md:h-full justify-center items-center py-24' id='waktu'>
            <div className='flex flex-col w-full h-60 py-8 px-8 justify-center items-center space-y-2'>
                <div className='flex flex-col items-center justify-center space-y-2'>
                    <text className='font-script text-4xl font-bold'>Pernikahan Kami akan Dilaksanakan Pada</text>
                    <div className='flex flex-row h-auto w-auto items-center space-x-8'>
                        <div className='w-48 h-0 border border-gray-300'></div>
                        <text className='font-sans text-xl'>21 November 2021</text>
                        <div className='w-48 h-0 border border-gray-300'></div>
                    </div>
                </div>
                <div className='flex flex-row w-auto h-auto space-x-8 justify-center items-center py-4'>
                    <div className='flex flex-col md:w-36 md:h-36 bg-chocolate text-white justify-center items-center rounded-full'>
                        <text className='font-sans text-3xl font-bold'>{timerDays}</text>
                        <text className='font-sansLight text-xl'>Hari</text>
                    </div>
                    <div className='flex flex-col md:w-36 md:h-36 bg-chocolate text-white justify-center items-center rounded-full'>
                        <text className='font-sans text-3xl font-bold'>{timerHours}</text>
                        <text className='font-sansLight text-xl'>Jam</text>
                    </div>
                    <div className='flex flex-col md:w-36 md:h-36 bg-chocolate text-white justify-center items-center rounded-full'>
                        <text className='font-sans text-3xl font-bold'>{timerMinutes}</text>
                        <text className='font-sansLight text-xl'>Menit</text>
                    </div>
                    <div className='flex flex-col md:w-36 md:h-36 bg-chocolate text-white justify-center items-center rounded-full'>
                        <text className='font-sans text-3xl font-bold'>{timerSeconds}</text>
                        <text className='font-sansLight text-xl '>Detik</text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Countdown
