"use client";

import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useEffect } from "react";
import { Button } from "./ui/button";

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const [isToolsOpen, setIsToolsOpen] = React.useState(false);

  const call = useCall();

  if (!call) throw new Error("Call is required");

  useEffect(() => {
    if (isToolsOpen) {
      call?.camera?.disable();
      call?.microphone?.disable();
    } else {
      call?.camera?.enable();
      call?.microphone?.enable();
    }
  }, [isToolsOpen, call?.camera, call?.microphone]);

  return (
    <>
      {/* <div className='flex flex-col items-center h-[85vh] justify-center'>

<h1 className='text-2xl font-bold'>Setup</h1>
<VideoPreview className='flex items-center justify-center  w-[50vw] h-[50vh]' />
<div className='flex items-center justify-center space-x-4'>
    <label className='flex items-center gap-x-4 text-xl ' >
    <input type="checkbox" 
    checked={isToolsOpen}
    onChange={(e) => setIsToolsOpen(e.target.checked)}/>
    Join with camera and microphone disabled
    </label>

</div>

</div> */}
      <div className="flex flex-col items-center h-[85vh] justify-center space-y-10 text-black">
        <h1 className="text-2xl font-bold ">Setup</h1>
        <VideoPreview className="flex items-center justify-center w-[40vw] h-[40vh]" />
        <div className="flex items-center justify-center space-x-4">
          <label className="flex items-center gap-x-4 text-xl">
            <input
             
              type="checkbox"
              checked={isToolsOpen}
              onChange={(e) => setIsToolsOpen(e.target.checked)}
            />
            Join with camera and microphone disabled
          </label>

          <DeviceSettings />
        </div>
        <Button
          onClick={() => {
            call.join();
            setIsSetupComplete(true);
          }}
          className="rounded-md text-xl p-[1.5rem]"
        >
          Join Meeting
        </Button>
      </div>
    </>
  );
};

export default MeetingSetup;
