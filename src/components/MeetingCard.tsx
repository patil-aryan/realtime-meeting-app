

// "use client";

// import { cn } from "@/lib/utils";
// import { Button } from "./ui/button";
// import { useToast } from "@/hooks/use-toast";
// import { User, Copy, Calendar, Video, Plus } from "lucide-react"; // Import Lucide icons

// interface MeetingCardProps {
//   title: string;
//   date: string;
//   icon: string; // This can now be a string representing the icon name
//   isPreviousMeeting?: boolean;
//   buttonIcon1?: string; // This can now be a string representing the icon name
//   buttonText?: string;
//   handleClick: () => void;
//   link: string;
// }

// const MeetingCard = ({
//   icon,
//   title,
//   date,
//   isPreviousMeeting,
//   buttonIcon1,
//   handleClick,
//   link,
//   buttonText,
// }: MeetingCardProps) => {
//   const { toast } = useToast();

//   // Map icon names to Lucide icons
//   const iconMap: { [key: string]: JSX.Element } = {
//     calendar: <Calendar className="size-7 text-white" />,
//     video: <Video className="size-7 text-white" />,
//     plus: <Plus className="size-7 text-white" />,
//     default: <Calendar className="size-7 text-white" />, // Fallback icon
//   };

//   // Get the icon based on the `icon` prop
//   const renderIcon = iconMap[icon] || iconMap.default;

//   return (
//     <section className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-dark-1 px-5 py-8 xl:max-w-[568px]">
//       {/* Top Section: Icon, Title, and Date */}
//       <article className="flex flex-col gap-5">
//         <div className="flex items-center justify-center size-10 rounded-full bg-blue-1">
//           {renderIcon}
//         </div>
//         <div className="flex justify-between">
//           <div className="flex flex-col gap-2">
//             <h1 className="text-2xl font-bold">{title}</h1>
//             <p className="text-base font-normal">{date}</p>
//           </div>
//         </div>
//       </article>

//       {/* Bottom Section: Attendees Icons and Buttons */}
//       <article className={cn("flex justify-center relative", {})}>
//         {/* Attendees Icons */}
//         <div className="relative flex w-full max-sm:hidden">
//           {[...Array(5)].map((_, index) => (
//             <div
//               key={index}
//               className={cn(
//                 "flex items-center justify-center size-10 rounded-full bg-dark-4 border-2 border-dark-3",
//                 { absolute: index > 0 }
//               )}
//               style={{ top: 0, left: index * 28 }}
//             >
//               <User className="size-5 text-white" />
//             </div>
//           ))}
//           <div className="flex-center absolute left-[136px] size-10 rounded-full border-[5px] border-dark-3 bg-dark-4">
//             +5
//           </div>
//         </div>

//         {/* Buttons */}
//         {!isPreviousMeeting && (
//           <div className="flex gap-2">
//             <Button onClick={handleClick} className="rounded bg-blue-1 px-6">
//               {buttonIcon1 && (
//                 <Plus className="size-5 text-white" /> // Replace with dynamic icon if needed
//               )}
//               &nbsp; {buttonText}
//             </Button>
//             <Button
//               onClick={() => {
//                 navigator.clipboard.writeText(link);
//                 toast({
//                   title: "Link Copied",
//                 });
//               }}
//               className="bg-dark-4 px-6"
//             >
//               <Copy className="size-5 text-white" /> {/* Replaced Image with Copy icon */}
//               &nbsp; Copy Link
//             </Button>
//           </div>
//         )}
//       </article>
//     </section>
//   );
// };

// export default MeetingCard;

"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { avatarImages } from "../app/constants";
import { useToast } from "@/hooks/use-toast";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {
  const { toast } = useToast();

  //bg-[#1c1a1a]
  return (
    <section className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-dark-1 px-5 py-8 xl:max-w-[568px] text-white bg-[#171010] ">
      <article className="flex flex-col gap-5">
        <Image src={icon} alt="upcoming" width={28} height={28} />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-base font-normal">{date}</p>
          </div>
        </div>
      </article>
      <article className={cn("flex justify-center relative", {})}>
        <div className="relative flex w-full max-sm:hidden">
          {avatarImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="attendees"
              width={40}
              height={40}
              className={cn("rounded-full", { absolute: index > 0 })}
              style={{ top: 0, left: index * 28 }}
            />
          ))}
          <div className="flex-center absolute left-[136px] size-10 rounded-full border-[5px] border-dark-3 bg-dark-4">
            +5
          </div>
        </div>
        {!isPreviousMeeting && (
          <div className="flex gap-2">
            <Button onClick={handleClick} className="rounded bg-blue-1 border px-6">
              {buttonIcon1 && (
                <Image src={buttonIcon1} alt="feature" width={20} height={20} />
              )}
               {buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast({
                  title: "Link Copied",
                });
              }}
              className="bg-dark-4 px-6 border"
            >
              <Image
                src="/icons/copy.svg"
                alt="feature"
                width={20}
                height={20}
              />
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;