import React from 'react'

function Code() {
  return (
    <div className=' p-4 max-w-fit -top-8 rounded-lg dark:bg-slate-400 dark:text-slate-100  shadow-md'>
        <div>
            <p className='text-lg'>Enter your poll Code</p>
            <p className='text-xs opacity-30 dark:opacity-50'>code to enter into poll</p>
        </div>
        <div className='mt-4 bg-slate-100 flex flex-row justify-center p-2 rounded-lg'>
            <input  placeholder='eg: 245321' className=' bg-slate-100 font-lg outline-none   '/>
            <button className='bg-cyan-700 text-white p-2 pt-1 pb-1  rounded'>Enter</button>
        </div>
    </div>
  )
}

export default Code