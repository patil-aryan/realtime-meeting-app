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
import { Calendar, SquarePlus } from "lucide-react";
import { Textarea } from "./ui/textarea";
import ReactDatePicker from "react-datepicker";

interface MeetingValues {
    // title?: string;
    dateTime?: Date;
    description?: string;
    link?: string;
  }
  
  interface ScheduleMeetingProps {
    values: MeetingValues;
    setValues: (values: MeetingValues) => void;
    handleClick: () => void;
  }

export function ScheduleMeeting({ values, setValues, handleClick }: ScheduleMeetingProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Calendar className="text-white cursor-pointer" size="60" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] flex flex-col">
        <DialogHeader className="space-y-5">
          <DialogTitle>Create a meeting</DialogTitle>
          <DialogDescription>
            Add a description and schedule a meeting
            <Textarea onChange={(e) => {
                setValues({...values, description: e.target.value})
            }}  className="mt-2" />

            
          </DialogDescription>
          <div> Select Date and Time : {""}  </div>
                <ReactDatePicker
                
                selected={values.dateTime}
                onChange={(date) => setValues({...values, dateTime: date!})}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                className="w-full rounded-md border mb-2 border-gray-300 p-2"
                 />
          
        </DialogHeader>

        <DialogFooter >
          <Button type="submit" onClick={() => {
            handleClick(),
            console.log("clicked")
          }} className="w-max" >Schedule Meeting</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
