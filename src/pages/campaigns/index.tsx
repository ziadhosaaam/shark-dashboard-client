import React from 'react'
import TabView from '../../components/tabView'
import TButton from '../../components/button'
import {ProductCard} from '../../components/productCard'

const Campaigns = () => {
  return (
    <div className='p-10'>
      <span className='text-4xl font-semibold text-[#11142D]'>Campaigns</span>
      <div className='mt-8'>
        <TabView />
      </div>
      <div className='mt-8'>
        <ProductCard />
      </div>
    </div>  )
}

export default Campaigns