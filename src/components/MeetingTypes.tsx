"use client";

import { Calendar, SquarePlus, UserPlus, Video } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MeetingModal } from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "@/hooks/use-toast";


const MeetingTypes = () => {
  const router = useRouter();

  const {user} = useUser();

  const client = useStreamVideoClient();

  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

  const {toast} = useToast();

  const [values, setValues] = useState({

    dateTime: new Date(),
    description: '',
    link: '',

  });

  const [callDetails, setCallDetails] = useState<Call>()

  const createMeeting = async () => {

    if (!client || !user) return;

    try {

        if (!values.dateTime) {
            toast({
                title: 'Please select a date and a time',
            })
            return;
    
        };

        const id = crypto.randomUUID();
        const call = client.call("default", id);

        if (!call) throw new Error("Failed to create call");

        const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
        const description = values.description || 'Instant Meeting';

        await call.getOrCreate({
            data: {
                starts_at: startsAt,
                custom: {description},
            }
        })

        setCallDetails(call);

        if (!values.description) {
            router.push(`/meetings/${call.id}`);
        }

        toast({
            title: 'Meeting Created!',
        })


        
    } catch (error) {
        console.log(error);
        toast({
            title: 'Failed to create meeting',
        })

        
    }

  }




  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 mt-4 gap-7 min-h-[35vh]  mb-2 mx-4 ">
        <div className="w-full bg-line bg-cover border-b-white border  flex flex-col justify-between  rounded-[24px] ">
          <div className="ml-14 mt-6">
          <MeetingModal handlesubmit={() => createMeeting()} />
            {/* <button
              onClick={() => {
                setMeetingState("isJoiningMeeting");
              }}
            >
              <SquarePlus className="text-white" size="60" />
             
            </button> */}
          </div>
          <div className="ml-14 mb-8 text-white  ">
            <h1 className="text-2xl font-semibold">New Meeting</h1>
            <p className="text-lg">Start an instant meeting</p>
          </div>
        </div>
        <div className="w-full bg-line bg-cover border-b-white border flex flex-col justify-between  rounded-[24px]">
          <div className="ml-14 mt-6">
            <button
              onClick={() => {
                setMeetingState("isInstantMeeting")
              }}

              
            >
              <UserPlus className="text-white" size="60" />
            </button>
          </div>

          <div className="ml-14 mb-8 text-white  ">
            <h1 className="text-2xl font-semibold">Join Meeting</h1>
            <p className="text-lg">via an invitation link</p>
          </div>
        </div>
        <div className="w-full  bg-line bg-cover border-b-white border  flex flex-col justify-between  rounded-[24px]">
          <div className="ml-14 mt-6">
            <button
              onClick={() => {
                setMeetingState("isScheduleMeeting");
              }}
            >
              <Calendar className="text-white" size="60" />
            </button>
          </div>
          <div className="ml-14 mb-8 text-white  ">
            <h1 className="text-2xl font-semibold">Schedule Meeting</h1>
            <p className="text-lg">Plan your meeting</p>
          </div>
        </div>
        <div className="w-full bg-line bg-cover border-b-white border flex flex-col justify-between  rounded-[24px]">
          <div className="ml-14 mt-6">
            <button
              onClick={() => {
                router.push("/recordings");
              }}
            >
              <Video className="text-white" size="60" />
            </button>
          </div>
          <div className="ml-14 mb-8 text-white  ">
            <h1 className="text-2xl font-semibold">View Recordings</h1>
            <p className="text-lg">Check out recorded meetings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingTypes;
