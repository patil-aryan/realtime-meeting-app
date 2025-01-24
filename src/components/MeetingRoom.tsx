// import { cn } from '@/lib/utils'
// import { CallParticipantsList, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk'
// import { Speaker } from 'lucide-react'
// import React from 'react'

// type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right'

// const MeetingRoom = () => {

//     const [layout, setLayout] = React.useState<CallLayoutType>('speaker-left')
//     const [showParticipants, setShowParticipants] = React.useState(false)

//     const CallLayout = () => {
//         switch (layout) {
//             case 'grid':
//                 return <PaginatedGridLayout />

//             case 'speaker-right':
//                 return <SpeakerLayout participantsBarPosition='left' />
//             default:
//                 return <SpeakerLayout participantsBarPosition='right' />
//         }
//     }

//   return (
//     <>
//     <div className='relative flex flex-col items-center justify-center overflow-hidden '>
//         <div className='relative flex flex-col items-center justify-center '>
//             <CallLayout />

//         </div>
//         <div className={cn('h-[calc(100vh-4rem)] w-full bg-white fixed bottom-0 left-0 right-0 z-50 transition-all duration-300', {
//             'show-block': showParticipants
//         })}>
//             <CallParticipantsList onClose={() => setShowParticipants(false)} />

//         </div>

//     </div>

//     </>
//   )
// }

// export default MeetingRoom

// 'use client';
// import { cn } from '@/lib/utils';
// import {
//   CallControls,
//   CallParticipantsList,
//   PaginatedGridLayout,
//   SpeakerLayout,
// } from '@stream-io/video-react-sdk';
// import { Users, LayoutList } from 'lucide-react';
// import React, { useState } from 'react';

// type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';

// const MeetingRoom = () => {
//   const [layout, setLayout] = useState<CallLayoutType>('speaker-left');
//   const [showParticipants, setShowParticipants] = useState(false);

//   // Define the call layout
//   const CallLayout = () => {
//     switch (layout) {
//       case 'grid':
//         return <PaginatedGridLayout />;
//       case 'speaker-right':
//         return <SpeakerLayout participantsBarPosition="left" />;
//       default:
//         return <SpeakerLayout participantsBarPosition="right" />;
//     }
//   };

//   return (
//     <section className="relative  overflow-hidden bg-[#001011] text-white">
//       {/* Main Content */}
//       <div className="relative flex size-full items-center justify-center">
//         {/* Video Layout */}
//         <div className="flex size-full max-w-[1000px] items-center">
//           <CallLayout />
//         </div>

//         {/* Participants Sidebar */}
//         <div
//           className={cn(
//             'fixed top-0 right-0 h-full w-80 bg-[#19232d] transform transition-transform duration-300 ease-in-out',
//             {
//               'translate-x-0': showParticipants,
//               'translate-x-full': !showParticipants,
//             }
//           )}
//         >
//           <CallParticipantsList onClose={() => setShowParticipants(false)} />
//         </div>
//       </div>

//       {/* Call Controls */}
//       <div className="fixed  flex items-center justify-center gap-5 p-4 bg-[#001011]">
//         {/* CallControls Component */}
//         <CallControls />

//         {/* Layout Dropdown */}
//         <div className="flex items-center">
//           <button
//             onClick={() => setLayout('grid')}
//             className={cn(
//               'p-3 rounded-full hover:bg-white/10 transition-colors',
//               {
//                 'bg-white/10': layout === 'grid',
//               }
//             )}
//           >
//             <LayoutList size={20} className="text-white" />
//           </button>
//         </div>

//         {/* Participants Toggle */}
//         <button
//           onClick={() => setShowParticipants((prev) => !prev)}
//           className={cn(
//             'p-3 rounded-full hover:bg-white/10 transition-colors',
//             {
//               'bg-white/10': showParticipants,
//             }
//           )}
//         >
//           <Users size={20} className="text-white" />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default MeetingRoom;

// import { cn } from '@/lib/utils'
// import { CallControls, CallParticipantsList, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk'
// import { Grid, Users, Layout } from 'lucide-react'
// import React from 'react'

// type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right'

// const MeetingRoom = () => {
//     const [layout, setLayout] = React.useState<CallLayoutType>('speaker-left')
//     const [showParticipants, setShowParticipants] = React.useState(false)

//     const CallLayout = () => {
//         switch (layout) {
//             case 'grid':
//                 return <PaginatedGridLayout />
//             case 'speaker-right':
//                 return <SpeakerLayout participantsBarPosition='left' />
//             default:
//                 return <SpeakerLayout participantsBarPosition='right' />
//         }
//     }

//     return (
//         <div className="relative h-screen w-full bg-[#1a1a1a] text-white">
//             {/* Header */}
//             <div className="h-16 bg-[#2a2a2a] border-b border-gray-800 px-6 flex items-center justify-between">
//                 <h1 className="text-lg font-semibold">Meeting Room</h1>
//                 <div className="flex items-center gap-4">
//                     <button
//                         onClick={() => setShowParticipants(!showParticipants)}
//                         className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-700"
//                     >
//                         <Users size={20} />
//                         <span>Participants</span>
//                     </button>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="h-[calc(100vh-128px)]">
//                 <CallLayout />
//             </div>

//             {/* Control Bar */}
//             <div className="fixed bottom-0 left-0 right-0 h-20 bg-[#2a2a2a] border-t border-gray-800">
//                 <div className="h-full max-w-6xl mx-auto px-6 flex items-center justify-between">
//                     {/* Layout Controls */}
//                     <div className="flex items-center gap-3">
//                         <button
//                             onClick={() => setLayout('grid')}
//                             className={cn('p-3 rounded-lg transition-all', {
//                                 'bg-blue-600': layout === 'grid',
//                                 'hover:bg-gray-700': layout !== 'grid'
//                             })}
//                         >
//                             <Grid size={20} />
//                         </button>
//                         <button
//                             onClick={() => setLayout('speaker-left')}
//                             className={cn('p-3 rounded-lg transition-all', {
//                                 'bg-blue-600': layout === 'speaker-left',
//                                 'hover:bg-gray-700': layout !== 'speaker-left'
//                             })}
//                         >
//                             <Layout size={20} />
//                         </button>
//                     </div>

//                     {/* Call Controls */}
//                     <div className="flex-1 flex justify-center">
//                         <CallControls />
//                     </div>

//                     {/* Spacer for symmetry */}
//                     <div className="w-[88px]" />
//                 </div>
//             </div>

//             {/* Participants Panel */}
//             <div
//                 className={cn(
//                     'fixed top-16 right-0 h-[calc(100vh-16px)] w-80 bg-[#2a2a2a] border-l border-gray-800 transform transition-transform duration-300 ease-in-out',
//                     {
//                         'translate-x-0': showParticipants,
//                         'translate-x-full': !showParticipants,
//                     }
//                 )}
//             >
//                 <CallParticipantsList onClose={() => setShowParticipants(false)} />
//             </div>
//         </div>
//     )
// }

// export default MeetingRoom

// 'use client';

// import { cn } from '@/lib/utils';
// import {
//   CallControls,
//   CallParticipantsList,
//   PaginatedGridLayout,
//   SpeakerLayout,
// } from '@stream-io/video-react-sdk';
// import { Users, LayoutList } from 'lucide-react';
// import React, { useState } from 'react';

// type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';

// const MeetingRoom = () => {
//   const [layout, setLayout] = useState<CallLayoutType>('speaker-left');
//   const [showParticipants, setShowParticipants] = useState(false);

//   const CallLayout = () => {
//     switch (layout) {
//       case 'grid':
//         return <PaginatedGridLayout />;
//       case 'speaker-right':
//         return <SpeakerLayout participantsBarPosition="left" />;
//       default:
//         return <SpeakerLayout participantsBarPosition="right" />;
//     }
//   };

//   return (
//     <section className="relative h-[calc(100vh-4rem)] bg-[#001011]">
//       {/* Video Container */}
//       <div className="absolute inset-0 flex items-center justify-center p-6">
//         <div className="w-full h-full">
//           <CallLayout />
//         </div>
//       </div>

//       {/* Participants Panel */}
//       <div
//         className={cn(
//           'fixed top-0 right-0 h-full w-[320px] bg-[#19232d]/95 backdrop-blur-sm shadow-xl transition-transform duration-300',
//           {
//             'translate-x-0': showParticipants,
//             'translate-x-full': !showParticipants,
//           }
//         )}
//       >
//         <CallParticipantsList onClose={() => setShowParticipants(false)} />
//       </div>

//       {/* Controls Bar */}
//       <div className="fixed bottom-0 left-0 right-0">
//         <div className="mx-auto max-w-4xl p-4 flex items-center justify-center gap-4">
//           <div className="bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-4">
//             <CallControls />

//             <div className="h-6 w-[1px] bg-white/20" />

//             <button
//               onClick={() => setLayout(layout === 'grid' ? 'speaker-left' : 'grid')}
//               className={cn('p-2.5 rounded-lg transition-colors', {
//                 'bg-white/20': layout === 'grid',
//                 'hover:bg-white/10': layout !== 'grid',
//               })}
//             >
//               <LayoutList size={20} className="text-white" />
//             </button>

//             <button
//               onClick={() => setShowParticipants(prev => !prev)}
//               className={cn('p-2.5 rounded-lg transition-colors', {
//                 'bg-white/20': showParticipants,
//                 'hover:bg-white/10': !showParticipants,
//               })}
//             >
//               <Users size={20} className="text-white" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MeetingRoom;

// "use client";
// import { cn } from "@/lib/utils";
// import {
//   CallControls,
//   CallingState,
//   CallParticipantsList,
//   CallStatsButton,
//   PaginatedGridLayout,
//   SpeakerLayout,
//   useCallStateHooks,
// } from "@stream-io/video-react-sdk";
// import { Users, LayoutList } from "lucide-react";
// import React, { useState } from "react";

// import { useSearchParams } from "next/navigation";
// import EndCallButton from "./EndCallButton";
// import LoaderIcon from "./Loader";

// type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

// const MeetingRoom = () => {
//   const [layout, setLayout] = useState<CallLayoutType>("speaker-left");
//   const [showParticipants, setShowParticipants] = useState(false);
//   const searchParams = useSearchParams();
//   const isPersonalRoom = !!searchParams.get("personal"); 
//   const { useCallCallingState } = useCallStateHooks();
//   const callingState = useCallCallingState();

//   if (callingState !== CallingState.JOINED) return <LoaderIcon />


//   const CallLayout = () => {
//     switch (layout) {
//       case "grid":
//         return <PaginatedGridLayout />;
//       case "speaker-right":
//         return <SpeakerLayout participantsBarPosition="left" />;
//       default:
//         return <SpeakerLayout participantsBarPosition="right" />;
//     }
//   };

//   return (
//     <section className="relative h-[calc(100vh-6rem)] w-full bg-gradient-to-br from-[#001011] to-[#001a1c] text-white">
//       {/* Video Container */}
//       <div className="absolute inset-0 flex items-center justify-center p-4">
//         <div className="w-full h-full max-w-[1800px] rounded-xl overflow-hidden shadow-2xl">
//           <CallLayout />
//         </div>
//       </div>

//       {/* Participants Panel */}
//       <div
//         className={cn(
//           "fixed top-0 right-0 h-full p-6  w-[360px] bg-[#19232d]/95 backdrop-blur-lg",
//           "shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]",
//           "border-l border-white/10 transform",
//           showParticipants ? "translate-x-0" : "translate-x-full"
//         )}
//       >
//         {/* <div className="p-6 border-b border-white/10">
//           <h2 className="text-xl font-semibold flex items-center gap-2">
//             <Users size={20} />
//             Participants
//           </h2>
//         </div> */}
//         <CallParticipantsList onClose={() => setShowParticipants(false)} />
//       </div>

//       {/* Floating Controls Bar */}
//       <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
//         <div className="bg-[#001011]/90 backdrop-blur-xl rounded-full shadow-2xl border border-white/10">
//           <div className="flex items-center gap-2 px-4 py-2 flex-wrap">
//             <CallControls />
//             {!isPersonalRoom && <EndCallButton />}
            

//             <div className="h-8 w-[1px] bg-white/20 mx-2" />

//             <button
//               onClick={() =>
//                 setLayout(layout === "grid" ? "speaker-left" : "grid")
//               }
//               className={cn(
//                 "p-3 rounded-full transition-all",
//                 "hover:bg-white/10 active:scale-95",
//                 layout === "grid" ? "bg-white/20" : "bg-transparent"
//               )}
//               title={layout === "grid" ? "Speaker View" : "Grid View"}
//             >
//               <LayoutList size={20} className="text-white" />
//             </button>

//             <button
//               onClick={() => setShowParticipants((prev) => !prev)}
//               className={cn(
//                 "p-3 rounded-full transition-all",
//                 "hover:bg-white/10 active:scale-95",
//                 showParticipants ? "bg-white/20" : "bg-transparent"
//               )}
//               title={
//                 showParticipants ? "Hide Participants" : "Show Participants"
//               }
//             >
//               <Users size={20} className="text-white" />
//             </button>

//             <div className="flex items-center justify-center "><CallStatsButton /></div>
//           </div>
//         </div>
       
//       </div>
//     </section>
//   );
// };

// export default MeetingRoom;


"use client";
import { cn } from "@/lib/utils";
import {
  CallControls,
  CallingState,
  CallParticipantsList,
  CallStatsButton,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { 
  Users, 
  LayoutList, 
  Minimize2, 
  Maximize2, 
  LogOut 
} from "lucide-react";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import EndCallButton from "./EndCallButton";
import LoaderIcon from "./Loader";
import { Tooltip } from "@/components/ui/tooltip";

type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

const MeetingRoom = () => {
  const [layout, setLayout] = useState<CallLayoutType>("speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get("personal");
  
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  const router = useRouter();

  if (callingState !== CallingState.JOINED) return <LoaderIcon />;

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  return (
    <section 
      className={cn(
        "relative h-[calc(100vh-6rem)] w-full",
        "bg-gradient-to-br from-[#0d1b2a] to-[#1b263b]",
        "text-white overflow-hidden"
      )}
    >
      {/* Video Container with Enhanced Shadow and Rounded Corners */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div 
          className={cn(
            "w-full h-full max-w-[1800px]",
            "rounded-2xl overflow-hidden",
            "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]",
            "transition-all duration-500 ease-in-out",
            isFullscreen ? "rounded-none" : ""
          )}
        >
          <CallLayout />
        </div>
      </div>

      {/* Participants Panel with Smooth Transition */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full p-6 w-[360px]",
          "bg-[#1b263b]/95 backdrop-blur-lg",
          "shadow-[-10px_0_15px_-3px_rgba(0,0,0,0.1)]",
          "border-l border-white/10 transform",
          "transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]",
          showParticipants ? "translate-x-0" : "translate-x-full"
        )}
      >
        <CallParticipantsList onClose={() => setShowParticipants(false)} />
      </div>

      {/* Enhanced Floating Controls Bar */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
        <div 
          className={cn(
            "bg-[#0d1b2a]/90 backdrop-blur-xl",
            "rounded-full shadow-2xl border border-white/10",
            "transition-all duration-300 ease-in-out",
            "hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          )}
        >
          <div className="flex items-center gap-4 px-6 py-3">
            <CallControls onLeave={() => router.push('/')} />
            {!isPersonalRoom && <EndCallButton />}
            
            <div className="h-8 w-[1px] bg-white/20 mx-2" />
            
            <Tooltip content={layout === "grid" ? "Speaker View" : "Grid View"}>
              <button
                onClick={() => setLayout(layout === "grid" ? "speaker-left" : "grid")}
                className={cn(
                  "p-3 rounded-full transition-all group",
                  "hover:bg-white/10 active:scale-95",
                  layout === "grid" ? "bg-white/20" : "bg-transparent"
                )}
              >
                <LayoutList 
                  size={20} 
                  className={cn(
                    "text-white",
                    "group-hover:rotate-6 transition-transform"
                  )} 
                />
              </button>
            </Tooltip>

            <Tooltip content={showParticipants ? "Hide Participants" : "Show Participants"}>
              <button
                onClick={() => setShowParticipants((prev) => !prev)}
                className={cn(
                  "p-3 rounded-full transition-all group",
                  "hover:bg-white/10 active:scale-95",
                  showParticipants ? "bg-white/20" : "bg-transparent"
                )}
              >
                <Users 
                  size={20} 
                  className={cn(
                    "text-white",
                    "group-hover:scale-110 transition-transform"
                  )} 
                />
              </button>
            </Tooltip>

            <Tooltip content={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}>
              <button
                onClick={toggleFullscreen}
                className={cn(
                  "p-3 rounded-full transition-all group",
                  "hover:bg-white/10 active:scale-95",
                  isFullscreen ? "bg-white/20" : "bg-transparent"
                )}
              >
                {isFullscreen ? (
                  <Minimize2 
                    size={20} 
                    className={cn(
                      "text-white",
                      "group-hover:-rotate-6 transition-transform"
                    )} 
                  />
                ) : (
                  <Maximize2 
                    size={20} 
                    className={cn(
                      "text-white",
                      "group-hover:rotate-6 transition-transform"
                    )} 
                  />
                )}
              </button>
            </Tooltip>

            <div className="flex items-center justify-center">
              <CallStatsButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingRoom;