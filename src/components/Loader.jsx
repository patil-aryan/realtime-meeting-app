import { Loader2 } from 'lucide-react'
import React from 'react'

const LoaderIcon = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
       <Loader2 className='animate-spin' size='48' />
    </div>
  )
}

export default LoaderIcon