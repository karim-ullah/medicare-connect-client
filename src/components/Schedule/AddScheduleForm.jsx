"use client";
import { addDoctorSchedule } from "@/lib/doctor/action";
import {
  Button,
  Card,
  Input,
  Label,
  ListBox,
  TextField,
  Select,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";

const AddScheduleForm = ({ user, setScheduleOpen, doctor }) => {

const router = useRouter()

const daySlots = doctor.daySlots
const timeSlots = doctor.timeSlots

// console.log(doctor.daySlots);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    formData.doctorId = user?.id;
    formData.status = doctor.status;
    formData.imgUrl = doctor.imgUrl;
    formData.hospital = doctor.hospital;
    formData.fee = doctor.fee;
    formData.specialization = doctor.specialization;
    formData.experience = doctor?.experience;
    formData.name = doctor.name
    formData.email = doctor.email
    formData.bio = doctor.bio
    formData.qualifications = doctor.qualifications
    formData.phone = doctor.phone
    formData.daySlots = daySlots
    formData.timeSlots = timeSlots

    const res = await addDoctorSchedule(formData);
    // console.log(res);
    if (res.insertedId) {
      toast.success('Schedule added...')
      router.push('/dashboard/doctor/schedule')
    }
  };

 
  
  return (
    <Card className="mt-10">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-xl">Add Schedule</h3>
        <div onClick={() => setScheduleOpen(false)} className="cursor-pointer">
          <RxCross2></RxCross2>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              name="day"
              className="w-full"
              placeholder="Select one"
              variant="secondary"
            >
              <Label>Day</Label>
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>

               

                <ListBox>

                   {daySlots && (
                  daySlots.map(slot => (
                    
                      <ListBox.Item id={slot} textValue={slot}>
                        {slot}
                      </ListBox.Item>
                  
                  ))
                )}


                


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
              <Input placeholder="Max patients" />
            </TextField>

            <Select
              name="startTime"
              className="w-full"
              placeholder="Select one"
              variant="secondary"
            >
              <Label>Start Time</Label>
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>


                  {timeSlots && (
                  timeSlots.map(slot => (
                    
                      <ListBox.Item id={slot} textValue={slot}>
                        {slot}
                      </ListBox.Item>
                  
                  ))
                )}


                </ListBox>
              </Select.Popover>
            </Select>

            <Select
              name="endTime"
              className="w-full"
              placeholder="Select one"
              variant="secondary"
            >
              <Label>End Time</Label>
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  {timeSlots && (
                  timeSlots.map(slot => (
                    
                      <ListBox.Item id={slot} textValue={slot}>
                        {slot}
                      </ListBox.Item>
                  
                  ))
                )}
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          <div>
            <Button slot="close" type="submit">
              Add Schedule
            </Button>
          </div>
        </form>
      </div>
      <div></div>
    </Card>
  );
};

export default AddScheduleForm;
