import { UserPlus } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from 'next/navigation';




export function JoinMeeting() {

    const [value, setValue] = useState("")

    const router = useRouter();
  return (
    <Dialog>
      <DialogTrigger asChild>
      <UserPlus className="text-white cursor-pointer" size="60" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] flex flex-col items-center gap-4 justify-center">
        <DialogHeader>
          <DialogTitle className='mb-4 text-center'>Enter meeting link</DialogTitle>
            <Input placeholder="Meeting link" value={value} onChange={(e) => setValue(e.target.value)}  className='w-[20vw]' />
        </DialogHeader>

        <DialogFooter >
          <Button type="submit" onClick={() => {
            router.push(value);

          }} className="mt-4" >Join Meeting</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}