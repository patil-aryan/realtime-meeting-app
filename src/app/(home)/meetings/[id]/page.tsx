'use client'
import LoaderIcon from '@/components/Loader'
import MeetingRoom from '@/components/MeetingRoom'
import MeetingSetup from '@/components/MeetingSetup'
import { useGetCall } from '@/hooks/use-getcall'
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import React from 'react'

const Meetings = ({params: {id}} : {params : {id: string}}) => {

    const [isSetupComplete, setIsSetupComplete] = React.useState(false)

    const {user, isLoaded} = useUser()

    const {call, isCallLoading} = useGetCall(id)

    if (!isLoaded || isCallLoading) return <LoaderIcon />

  return (
    <div className=' m-4'>
        <StreamCall call={call}>
            <StreamTheme>
                {!isSetupComplete ? (
                   <MeetingSetup /> 
                ) : ( 
                    <MeetingRoom />
                )}
            </StreamTheme>
        </StreamCall>
    </div>
  )
}

export default Meetings