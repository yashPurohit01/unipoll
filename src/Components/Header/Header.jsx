import React from 'react'
import { MdOutlineLightMode } from 'react-icons/md'
function Header({ setDark }) {

  return (
    <div className="p-5 pt-2 pb-2 border-b dark:border-slate-800 border-slate-200 flex flex-row justify-between items-center flex-1">
      <div className=' flex items-center '>

        <img src='./assests/images/lo.png' alt='logo' height="50" width="50" />{/* 
        <div className='flex flex-col ml-2 text-xl font-bold font-mono leading-6'> */}
          
          <span className=" ml-4 text-2xl font-bold font-secondary ">polling</span>
    {/*     </div> */}

      </div>
      <div className='flex gap-4 items-center'>
        <MdOutlineLightMode onClick={() => setDark(pre => !pre)} className='text-2xl text-cyan-700' />
        <button className='border-2 p-2 pt-1 pb-1 text-sm border-slate-900 dark:border-slate-200  rounded'>login</button>
      </div>
    </div>
  )
}

export default Header