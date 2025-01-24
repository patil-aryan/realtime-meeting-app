// "use client";

// import { Button } from "@/components/ui/button";
// import { useGetCall } from "@/hooks/use-getcall";
// import { useToast } from "@/hooks/use-toast";

// import { useUser } from "@clerk/nextjs";
// import { useStreamVideoClient } from "@stream-io/video-react-sdk";
// import { useRouter } from "next/navigation";
// import React from "react";

// const Table = ({
//   title,
//   description,
// }: {
//   title: string;
//   description: string;
// }) => {
//   return (
//     <div className= text-black flex flex-col items-start gap-2 lg:flex-row">
//       <h1 className="text-base font-medium text-sky-500 lg:text-xl">{title}</h1>
//       <h1 className="truncate text-sm font-bold lg:text-xl">{description}</h1>
//     </div>
//   );
// };

// const Personal = () => {
//   const { user } = useUser();
//   const { toast } = useToast();
//   const meetingId = user?.id;
//   const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meetings/${meetingId}?personal=true`;
//   const client = useStreamVideoClient();
//   const router = useRouter();

//   const { call } = useGetCall(meetingId!);

//   const startRoom = async () => {

//     if (!client || !user) return

    

//     if (!call) {

//     const newCall = client.call('default', meetingId!);

//     await newCall.getOrCreate({
//         data: {
//           starts_at: new Date().toISOString(),
//         },
//       });
//     }

//     router.push(`/meetings/${meetingId}?personal=true`);

//   };

//   return (
//     <>
//       <div className="m-10">
//         <h1 className="font-bold text-2xl text-center text-black mb-12 -mt-6">
//           Personal Room
//         </h1>

//         <div className=" flex flex-col gap-8 ">
//           <Table
//             title="Topic:"
//             description={`${user?.username}'s Meeting Room`}
//           />
//           <Table title="Meeting ID:" description={meetingId!} />
//           <Table title="Invite Link:" description={meetingLink} />
//         </div>

//         <div className="flex mt-8 gap-5">
//           <Button className="bg-blue-700" onClick={startRoom}>
//             Start Meeting
//           </Button>
//           <Button
//             className="bg-blue-700"
//             onClick={() => {
//               navigator.clipboard.writeText(meetingLink);
//               toast({
//                 title: "Link Copied",
//               });
//             }}
//           >
//             Copy Invitation
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Personal;


"use client";

import { Button } from "@/components/ui/button";
import { useGetCall } from "@/hooks/use-getcall";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React from "react";

const Personal = () => {
  const { user } = useUser();
  const { toast } = useToast();
  const meetingId = user?.id;
  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meetings/${meetingId}?personal=true`;
  const client = useStreamVideoClient();
  const router = useRouter();

  const { call } = useGetCall(meetingId!);

  const startRoom = async () => {
    if (!client || !user) return;

    if (!call) {
      const newCall = client.call("default", meetingId!);
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }

    router.push(`/meetings/${meetingId}?personal=true`);
  };

  return (
    <div className="m-10">
      <h1 className="font-bold text-2xl text-center mb-12 -mt-6">
        Personal Room
      </h1>

      {/* Table */}
      <table className="w-full text-black border-collapse">
        <thead>
          <tr>
            <th className="text-left p-2 border-b border-gray-700">Title</th>
            <th className="text-left p-2 border-b border-gray-700">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border-b border-gray-700 text-black font-bold">Topic:</td>
            <td className="p-2 border-b border-gray-700 font-bold">
              {user?.username}'s Meeting Room
            </td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-700 text-black font-bold">
              Meeting ID:
            </td>
            <td className="p-2 border-b border-gray-700 font-bold">
              {meetingId}
            </td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-700 text-black font-bold">
              Invite Link:
            </td>
            <td className="p-2 border-b border-gray-700 font-bold">
              {meetingLink}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Buttons */}
      <div className="flex mt-8 gap-5">
        <Button className="bg-blue-700" onClick={startRoom}>
          Start Meeting
        </Button>
        <Button
          className="bg-blue-700"
          onClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({
              title: "Link Copied",
            });
          }}
        >
          Copy Invitation
        </Button>
      </div>
    </div>
  );
};

export default Personal;