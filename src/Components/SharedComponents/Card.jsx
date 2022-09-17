import React from 'react'
import {AiOutlineFieldTime} from 'react-icons/ai'
function Card() {
    return (
        <div className='p-5 flex flex-col items-center dark:bg-slate-600 shadow-3xl rounded-lg gap-4 w-72 '>
            <p className='p-2 border-2 border-cyan-700 rounded-full font-semibold '>CP</p>
            <div className='flex flex-col items-center gap-1'>
                <p className=''>Capgemini Poll</p>
                <p className='text-xs opacity-90'>polling regarding onboarding </p>
            </div>
            <div className='w-full flex items-center justify-center gap-2' >
                <AiOutlineFieldTime className='text-xl opacity-40'/>
                <p className='text-xs'>End at :3:00pm 19 Jan 2023</p>
            </div>
            <div className='w-full flex items-center justify-between '>
                <p className='text-sm'> <strong>4.9k</strong> votes</p>
                <button className='bg-cyan-700 text-white p-2 pt-1 pb-1  rounded'>vote</button>
            </div>
        </div>
    )
}

export default Card