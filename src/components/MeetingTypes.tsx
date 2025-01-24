"use client";

import { Calendar, SquarePlus, UserPlus, Video } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MeetingModal } from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "@/hooks/use-toast";
import { ScheduleMeeting } from "./ScheduleMeeting";
import MeetingLink from "./MeetingList";
import { JoinMeeting } from "./JoinMeeting";

interface MeetingValues {
  // title?: string;
  dateTime?: Date;
  description?: string;
  link?: string;
}

interface ScheduleMeetingProps {
  values: MeetingValues;
  setValues: (values: MeetingValues) => void;
}

const MeetingTypes = () => {
  const router = useRouter();

  const { user } = useUser();

  const client = useStreamVideoClient();

  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

  const { toast } = useToast();

  const [values, setValues] = useState<MeetingValues>({
    dateTime: new Date(),
    description: "",
    link: "",
  });

  const [callDetails, setCallDetails] = useState<Call>();

  const createMeeting = async () => {
    if (!client || !user) return;

    try {
      if (!values.dateTime) {
        toast({
          title: "Please select a date and a time",
        });
        return;
      }

      const id = crypto.randomUUID();
      const call = client.call("default", id);

      if (!call) throw new Error("Failed to create call");

      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant Meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: { description },
        },
      });

      setCallDetails(call);

      if (!values.description) {
        router.push(`/meetings/${call.id}`);
      }

      toast({
        title: "Meeting Created!",
      });

      return call;
    } catch (error) {
      console.log(error);
      toast({
        title: "Failed to create meeting",
      });
    }
  };

  //   const handleClick = () => {

  //     createMeeting();
  //     const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meetings/${callDetails?.id}`

  //     navigator.clipboard.writeText(meetingLink);
  //     toast({ title: 'Link Copied' });
  //     // router.push('/upcoming');
  //   }
  const handleClick = async () => {
    const call = await createMeeting(); // Wait for the call to be created

    if (call) {
      const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meetings/${call.id}`;
      navigator.clipboard.writeText(meetingLink);
      toast({ title: "Link Copied" });
      router.push('/upcoming');
    } else {
      toast({ title: "Failed to generate meeting link" });
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 mt-4 gap-3 min-h-[35vh]  mb-2 mx-4 ">
        <div className="w-full bg-[#171010] flex flex-col justify-between  rounded-[24px] ">
          <div className="ml-10 mt-6">
            <MeetingModal handlesubmit={() => createMeeting()} />
            {/* <button
              onClick={() => {
                setMeetingState("isJoiningMeeting");
              }}
            >
              <SquarePlus className="text-white" size="60" />
             
            </button> */}
          </div>
          <div className="ml-10 mb-8 text-white  ">
            <h1 className="text-2xl font-semibold">New Meeting</h1>
            <p className="text-lg">Start an instant meeting</p>
          </div>
        </div>
        {/* bg-line bg-cover */}
        <div className="w-full  bg-[#171010]  flex flex-col justify-between  rounded-[24px]">
          <div className="ml-12 mt-6">
            {/* <button
              onClick={() => {
                setMeetingState("isInstantMeeting");
              }}
            >
              <UserPlus className="text-white" size="60" />
            </button>*/}
              <JoinMeeting handleJoin={(e) => {
                setValues({...values, link: e.target.value})}
              }  />
          </div> 
        

          <div className="ml-10 mb-8 text-white  ">
            <h1 className="text-2xl font-semibold">Join Meeting</h1>
            <p className="text-lg">via an invitation link</p>
          </div>
        </div>
        <div className="w-full  bg-[#171010]   flex flex-col justify-between  rounded-[24px]">
          <div className="ml-10 mt-6">
            {/* <button
              onClick={() => {
                setMeetingState("isScheduleMeeting");
              }}
            >
              <Calendar className="text-white" size="60" />
            </button> */}
            <ScheduleMeeting
              values={values}
              setValues={setValues}
              handleClick={handleClick}
            />
          </div>
          <div className="ml-10 mb-8 text-white  ">
            <h1 className="text-2xl font-semibold">Schedule Meeting</h1>
            <p className="text-lg">Plan your meeting</p>
          </div>
        </div>
        <div className="w-full bg-[#171010]  flex flex-col justify-between  rounded-[24px]">
          <div className="ml-10 mt-6">
            <button
              onClick={() => {
                router.push("/recordings");
              }}
            >
              <Video className="text-white" size="60" />
            </button>
          </div>
          <div className="ml-10 mb-8 text-white  ">
            <h1 className="text-2xl font-semibold">View Recordings</h1>
            <p className="text-lg">Check out recorded meetings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingTypes;
