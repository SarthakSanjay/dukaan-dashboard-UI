import React from 'react'
import Navbar from './Navbar'
import Payout from './Payout'

const Dashboard = () => {
  return (
    <div className='w-5/6 h-screen'>
        <Navbar />
        <Payout />
    </div>
  )
}

export default Dashboard