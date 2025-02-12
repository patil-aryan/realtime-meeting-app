import MeetingList from '@/components/MeetingList'
import React from 'react'

const Upcoming = () => {

    
  return (
    <>
        <div className='m-10'>
            <h1 className='font-bold text-2xl text-center text-white mb-6 -mt-6'>Upcoming Meetings</h1>
            <MeetingList type='upcoming' />
        </div>
    </>
  )
}

export default Upcoming