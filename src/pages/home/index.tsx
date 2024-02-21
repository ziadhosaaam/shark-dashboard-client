import React from 'react'
import Stats from '../../components/stats'
import ProgressOrders from '../../components/progressOrders'

const Home = () => {
  return (
    <div className='p-10'>
      <span className='text-4xl font-semibold text-[#11142D]'>Dashboard</span>
      <div className='mt-8'>
        <Stats />
      </div>
      <div className='mt-8'>
        <ProgressOrders />
      </div>
    </div>
  )
}

export default Home