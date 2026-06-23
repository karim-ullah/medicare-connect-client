"use client";
import { Button, Card, Input, Label, ListBox , Select, TextField} from "@heroui/react";
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const MySchedulesCard = ({ schedule }) => {

console.log(schedule);
const daySlots = schedule.daySlots
const timeSlots = schedule.timeSlots

  const [open, setOpen] = useState(false);

  const handleEdit = () => {
    setOpen(true);
  };

  const onSubmit =()=>{
    e.preventDefault()
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
                        daySlots.map((slot) => (
                          <ListBox.Item id={slot} textValue={slot}>
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
                        timeSlots.map((slot) => (
                          <ListBox.Item id={slot} textValue={slot}>
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
                        timeSlots.map((slot) => (
                          <ListBox.Item id={slot} textValue={slot}>
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
          <div className="flex items-center gap-2">
            <FiEdit onClick={handleEdit}></FiEdit>
            <RiDeleteBin6Line></RiDeleteBin6Line>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MySchedulesCard;
