import React from 'react'
import Banner from '../SharedComponents/banner/Banner'
import Card from '../SharedComponents/Card'
import Code from './Code'
import Pagenation from './pagenation/Pagenation'

function Main() {
  return (
    <div className='flex flex-col items-center box-border '>
      <Banner />
      <Code />

      <div className='flex flex-col flex-wrap w-full box-border p-5 gap-4'>
        <h1 className=' text-3xl border-b-4 border-cyan-800 w-max '>Polls </h1>
        <div className='flex flex-row gap-6 flex-wrap justify-center '>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /><Card />
          <Card />
        </div>
        <Pagenation/>
      </div>
    </div>
  )
}

export default Main