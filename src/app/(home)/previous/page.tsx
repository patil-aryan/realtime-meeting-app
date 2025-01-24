import MeetingList from '@/components/MeetingList'
import React from 'react'

const Previous = () => {
  return (
    <div className='m-10'>
        <h1 className='font-bold text-2xl text-center mb-6 -mt-6'>Previous Meetings</h1>
        
        <MeetingList type='ended' />
    </div>
  )
}

export default Previous