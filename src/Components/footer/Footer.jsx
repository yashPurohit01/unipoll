import React from 'react'
import { FaLinkedin , FaFacebookSquare, FaGithub, FaInstagram} from 'react-icons/fa'
function Footer() {
    const date = new Date()
  return (
    <div className='p-5 text-center flex flex-col gap-3 border-2 rounded-lg m-2 bg-stone-200 dark:text-slate-800 border-primaryShadow mt-0 '>
        <div className='flex flex-col gap-3 border-b-2 pb-3 border-slate-300'>
            <h2 className='font-secondary text-3xl font-bold'>do polling </h2>
            <p>devloped with love by <strong>Yash</strong></p>
        </div>
        <div className='flex fle-row justify-center gap-2'>
            <input placeholder='enter your email for more query' className='text-xs p-2 w-52'/>
            <button className='bg-black text-white p-2 rounded-lg'>subscribe</button>
        </div>
        <div className='mt-2 flex flex-col gap-3'>
            <p className='text-sm font-semibold opacity-40'>follow me at :</p>
            <div className='flex flex-row gap-4 justify-center text-2xl opacity-70'>
               <FaLinkedin/>
               <FaFacebookSquare/>
               <FaGithub/>
               <FaInstagram/>
            </div>
            <p>Terms & Condition </p>
        </div>
    </div>
  )
}

export default Footer