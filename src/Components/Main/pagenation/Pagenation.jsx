import React from 'react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
function Pagenation() {
    return (
        <div className='flex flex-row justify-end w-full align-middle  '>
            <div className='gap-2 border rounded-md bg-slate-300  flex flex-row items-center '>
                <GrFormPrevious className='dark:text-slate-200 text-3xl p-2' />
                <p className='pl-4 pr-4 border-l border-r text-black '>1</p>
                <GrFormNext className='dark:text-slate-200 text-3xl p-2' />
            </div>
        </div>
    )
}

export default Pagenation