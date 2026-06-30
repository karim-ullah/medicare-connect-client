"use client";
import { deleteSchedule, updateSchedule } from "@/lib/doctor/action";
import { Button, Card, Input, Label, ListBox , Select, TextField} from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const MySchedulesCard = ({ schedule }) => {

const router = useRouter()
const daySlots = schedule.daySlots
const timeSlots = schedule.timeSlots
const scheduleId = schedule._id

// console.log(scheduleId, 'scheee');


  const [open, setOpen] = useState(false);

  const handleEdit = () => {
    setOpen(true);
  };

  const onSubmit =async(e)=>{
    e.preventDefault()
    const form = new FormData(e.target)
    const data = Object.fromEntries(form.entries())
    const res = await updateSchedule(scheduleId, data)

    if(res.modifiedCount > 0){
      toast.success('Schedule updated!')
      router.push('/dashboard/doctor/schedule')
      
    }
  }

  const handleDelete = async()=>{
    const res = await deleteSchedule(scheduleId)

    if(res.deletedCount >0){
      toast.success('Schedule deleted successfully..')
      router.push('/dashboard/doctor/schedule')
    }
  }
  return (
    <div>
      {open && (
        <Card className="mb-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-xl">Update Schedule</h3>
            <div
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            >
              <RxCross2></RxCross2>
            </div>
          </div>
          <div>
            <form className="flex flex-col gap-4" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                  name="day"
                  className="w-full"
                  placeholder={schedule.day}
                  variant="secondary"
                >
                  <Label>Day</Label>
                  <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      {daySlots &&
                        daySlots.map((slot,index) => (
                          <ListBox.Item key={index} id={slot} textValue={slot}>
                            {slot}
                          </ListBox.Item>
                        ))}
                    </ListBox>
                  </Select.Popover>
                </Select>

                <TextField
                  className="w-full"
                  name="patientNumber"
                  type="number"
                  variant="secondary"
                >
                  <Label>Max</Label>
                  <Input placeholder={schedule.patientNumber} />
                </TextField>

                <Select
                  name="startTime"
                  className="w-full"
                  placeholder={schedule.startTime}
                  variant="secondary"
                >
                  <Label>Start Time</Label>
                  <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      {timeSlots &&
                        timeSlots.map((slot,index) => (
                          <ListBox.Item key={index} id={slot} textValue={slot}>
                            {slot}
                          </ListBox.Item>
                        ))}
                    </ListBox>
                  </Select.Popover>
                </Select>

                <Select
                  name="endTime"
                  className="w-full"
                  placeholder={schedule.endTime}
                  variant="secondary"
                >
                  <Label>End Time</Label>
                  <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      {timeSlots &&
                        timeSlots.map((slot,index) => (
                          <ListBox.Item key={index} id={slot} textValue={slot}>
                            {slot}
                          </ListBox.Item>
                        ))}
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              <div>
                <Button slot="close" type="submit">
                  Update Schedule
                </Button>
              </div>
            </form>
          </div>
          <div></div>
        </Card>
      )}



      {/* this is always */}
      <Card className="rounded-2xl shadow">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-xl">{schedule.day}</h3>
            <p className="text-primary">
              {schedule.startTime} - {schedule.endTime}
            </p>
          </div>
          <div className="flex items-center gap-4">

            <div className="cursor-pointer border border-accent p-2 rounded-lg hover:bg-accent/50">
            <FiEdit onClick={handleEdit}></FiEdit>
            </div>
            <div className="cursor-pointer border border-accent p-2 rounded-lg hover:bg-accent/50">

            <RiDeleteBin6Line onClick={handleDelete} className="cursor-pointer"></RiDeleteBin6Line>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MySchedulesCard;
