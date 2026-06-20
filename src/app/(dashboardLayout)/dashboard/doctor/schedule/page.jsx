"use client";
import { Button, Card, Input, Label, TextField,Select, ListBox } from "@heroui/react";
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const SchedulePage = () => {
  const [scheduleOpen, setScheduleOpen] = useState(false);

//   const handleAddSchedule = ()=>{
//     setScheduleOpen(true)
//   }
  return (
    <div className="py-10 px-6">
      {/* headings */}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-bold text-2xl">Manage Schedule</h2>
          <p className="text-primary text-sm">
            Set your availability and working hours
          </p>
        </div>

        <Button className={"font-medium"} onClick={()=> setScheduleOpen(true)}> + Add schedule</Button>
      </div>

      {/* Add Schedule Card */}

      {scheduleOpen && (
        <Card className="mt-10">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-xl">Add Schedule</h3>
            <div onClick={()=> setScheduleOpen(false)} className="cursor-pointer">

            <RxCross2></RxCross2>
            </div>
          </div>
          <div>
            <form className="flex flex-col gap-4">
              

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select className="w-full" placeholder="Select one" variant="secondary">
                <Label>Day</Label>
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="florida" textValue="Florida">
                      Monday
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="delaware" textValue="Delaware">
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

              <Select className="w-full" placeholder="Select one" variant="secondary">
                <Label>Start Time</Label>
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="florida" textValue="Florida">
                      Monday
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="delaware" textValue="Delaware">
                      Tuesday
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    
                    
                   
                  </ListBox>
                </Select.Popover>
              </Select>

              <Select className="w-full" placeholder="Select one" variant="secondary">
                <Label>End Time</Label>
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="florida" textValue="Florida">
                      Monday
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
      )}

      {/* card */}

      <div>
        <Card className="mt-10">
          <div className="flex items-center justify-between">
            <div>
              <h3>Monday</h3>
              <p className="text-primary">9:00 AM - 10:00 AM</p>
            </div>
            <div className="flex items-center gap-2">
              <FiEdit></FiEdit>
              <RiDeleteBin6Line></RiDeleteBin6Line>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SchedulePage;
