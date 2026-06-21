'use clinet'
import { addDoctorSchedule } from '@/lib/doctor/action';
import { Button, Card, Input, Label, ListBox, TextField, Select } from '@heroui/react';
import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const AddScheduleForm = ({user, setScheduleOpen}) => {
    const onSubmit = async(e)=>{
        e.preventDefault()
        const form = new FormData(e.target)
        const formData = Object.fromEntries(form.entries())
        formData.doctorId = user?.id
    
        const res = await addDoctorSchedule(formData)
        console.log(res);
        if(res.insertedId){
            alert('added')
        }
    
     }
    return (
        <Card className="mt-10">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-xl">Add Schedule</h3>
            <div
              onClick={() => setScheduleOpen(false)}
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
                      <ListBox.Item id="Monday" textValue="Monday">
                        Monday
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Tuesday" textValue="Tuesday">
                        Tuesday
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
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
                      <ListBox.Item id="10:00 AM" textValue="10:00 AM">
                        10:00 AM
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="delaware" textValue="Delaware">
                        Tuesday
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
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
                      <ListBox.Item id="6:00 PM" textValue="6:00 PM">
                        6:00 PM
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="delaware" textValue="Delaware">
                        Tuesday
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
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