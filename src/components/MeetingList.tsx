// @ts-nocheck

'use client'
import { useGetInfo } from '@/hooks/use-getInfo'
import { Call, CallRecording } from '@stream-io/video-react-sdk'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import MeetingCard from './MeetingCard'
import LoaderIcon from './Loader'
import { useToast } from '@/hooks/use-toast'


const MeetingList = ({type} : {type: 'ended' | 'upcoming' | 'recordings'} ) => {

  const router = useRouter();
  const toast = useToast();

  const { endedCalls, upcomingCalls, callRecordings, loading } = useGetInfo();

  const [recordings, setRecordings] = React.useState<CallRecording[]>([]);

  const getCalls = () => {

    switch (type) {
      case 'ended':
        return endedCalls;
      case 'upcoming':
        return upcomingCalls;
      case 'recordings':
        return recordings;
      default:
        return []; 
        
    }

  }

  const getNoCallsMessage = () => {

    switch (type) {
      case 'ended':
        return 'No Previous Calls';
      case 'upcoming':
        return "No Upcoming Calls";
      case 'recordings':
        return "No Recordings";
      default:
        return ''; 
        
    }

  }

  useEffect(() => {
    const fetchRecordings = async () => {
      try {
        const callData = await Promise.all(
          callRecordings.map(meeting => meeting.queryRecordings())
        );
  
        const recordings = callData
          .filter(call => call.recordings.length > 0)
          .flatMap(call => call.recordings);
  
        setRecordings(recordings);
      } catch (error) {
        console.error('Failed to fetch recordings:', error);
        toast({'title': 'Try again in some time'})
      }
    };
  
    if (type === 'recordings') {
      fetchRecordings();
    }
  }, [type, callRecordings]);


  

  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();

  if (loading) return <LoaderIcon />

  return (
    <>

    {/* <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>

      {calls && calls.length > 0 ? calls.map((meeting : Call | CallRecording ) => (
        <MeetingCard 
        key = {(meeting as Call).id}
        icon = ''
        title = {(meeting as Call).state.custom.description.substring(0, 20) || 'No Description'}
        date = {meeting.state.startsAt.toLocaleString() || meeting.start_time.toLocaleString()}
        isPreviousMeeting = ''
        buttonIcon1 = ''
        handleClick = ''
        link = ''
        buttonText = '' />
      ) ) : <h1>{noCallsMessage}</h1>}


    </div> */}
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
      {calls && calls.length > 0 ? (
        calls.map((meeting: Call | CallRecording) => (
          <MeetingCard
            key={(meeting as Call).id}
            icon={
              type === 'ended'
                ? '/icons/previous.svg'
                : type === 'upcoming'
                  ? '/icons/upcoming.svg'
                  : '/icons/recordings.svg'
            }
            title={
              (meeting as Call).state?.custom?.description ||
              (meeting as CallRecording).filename?.substring(0, 20) || meeting.filename.substring(0,30) ||
              'No Description'
            }
            date={
              (meeting as Call).state?.startsAt?.toLocaleString() ||
              (meeting as CallRecording).start_time?.toLocaleString()
            }
            isPreviousMeeting={type === 'ended'}
            link={
              type === 'recordings'
                ? (meeting as CallRecording).url
                : `${process.env.NEXT_PUBLIC_BASE_URL}/meetings/${(meeting as Call).id}`
            }
            buttonIcon1={type === 'recordings' ? '/icons/play.svg' : undefined}
            buttonText={type === 'recordings' ? 'Play' : 'Start'}
            handleClick={
              type === 'recordings'
                ? () => router.push(`${(meeting as CallRecording).url}`)
                : () => router.push(`/meetings/${(meeting as Call).id}`)
            }
          />
        ))
      ) : (
        <h1 className="text-2xl font-bold text-white">{noCallsMessage}</h1>
      )}
    </div>
      
    </>
  )
}

export default MeetingList 