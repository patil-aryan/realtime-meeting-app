// import {
//     AlertDialog,
//     AlertDialogAction,
//     AlertDialogCancel,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogTitle,
//     AlertDialogTrigger,
//   } from "@/components/ui/alert-dialog"
//   import { Button } from "@/components/ui/button"
// import { SquarePlus } from "lucide-react"

//   export function MeetingModal() {
//     return (
//       <AlertDialog >
//         <AlertDialogTrigger asChild>
//           {/* <Button variant="outline">Show Dialog</Button> */}
//           <SquarePlus className="text-white cursor-pointer" size="60" />
//         </AlertDialogTrigger>
//         <AlertDialogContent className="flex flex-col items-center gap-4 justify-center">
//           <AlertDialogHeader>
//             <AlertDialogTitle>Start an instant Meeting</AlertDialogTitle>
//             {/* <AlertDialogDescription>
//               This action cannot be undone. This will permanently delete your
//               account and remove your data from our servers.
//             </AlertDialogDescription> */}
//           </AlertDialogHeader>
//           <AlertDialogFooter>
//             <AlertDialogCancel>Cancel</AlertDialogCancel>
//             <AlertDialogAction>Start</AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     )
//   }

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SquarePlus } from "lucide-react";

export function MeetingModal({handlesubmit}: {handlesubmit: () => void}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <SquarePlus className="text-white cursor-pointer" size="60" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] flex flex-col items-center gap-4 justify-center">
        <DialogHeader>
          <DialogTitle>Start an instant meeting</DialogTitle>
          {/* <DialogDescription>
            Click start to .
          </DialogDescription> */}
        </DialogHeader>

        <DialogFooter >
          <Button type="submit" onClick={() => {
            handlesubmit(),
            console.log("clicked")
          }} className="w-max" >Start Meeting</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
