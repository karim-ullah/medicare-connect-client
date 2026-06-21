"use client";
import DashboardHeading from "@/components/dashboard/DashboardHeading";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { set } from "better-auth";
import Image from "next/image";
import React, { useState } from "react";

const DoctorProfilePage = () => {

    const [qualifications, setQualifications] = useState(new Set())
    const [timeSlots, setTimeSlots] = useState(new Set())
    const [daySlots, setDaySlots] = useState(new Set())


  const { data: session } = authClient.useSession();
  const user = session?.user;
//   console.log(user);

  const onSubmit = async(e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    formData.qualifications = qualifications
    formData.timeSlots = timeSlots
    formData.daySlots = daySlots
    formData.doctorId = user?.id
    formData.imgUrl = user?.image
    // console.log(formData);

    const res = await fetch(`http://localhost:8000/api/doctors/${user?.id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(formData)

    })

    const data = await res.json()
    console.log(data);
  };
  return (
    <div className="py-10 px-6">
      <DashboardHeading
        tittle={"Profile Management"}
        description={"Update your professional information"}
      ></DashboardHeading>

      <Card className="flex flex-row mt-6 items-center">
        <div>
          {user?.image && (
            <Image
              className="rounded-xl"
              src={user.image}
              width={60}
              height={60}
              alt={user.name}
            />
          )}
        </div>
        <div>
          <h3>{user?.name}</h3>
          <p>cardiologist</p>
          <p>Dhaka metro hospital</p>
        </div>
      </Card>

      <Card className="mt-6">
        <h3 className="font-medium text-xl">Basic Information</h3>

        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TextField
              className="w-full"
              name="name"
              type="text"
              variant="secondary"
            >
              <Label>Full Name</Label>
              <Input placeholder="Enter your full name" />
            </TextField>

            <TextField
              className="w-full"
              name="email"
              type="email"
              variant="secondary"
            >
              <Label>Email</Label>
              <Input placeholder="Enter your email" />
            </TextField>

            <TextField
              className="w-full"
              name="phone"
              type="number"
              minLength={11}
              variant="secondary"
            >
              <Label>Phone</Label>
              <Input placeholder="Enter your phone number" />
            </TextField>

            <TextField
              className="w-full"
              name="hospital"
              type="text"
              variant="secondary"
            >
              <Label>Hospital Name</Label>
              <Input placeholder="Hospital Name" />
            </TextField>

            <TextField
              className="w-full"
              name="specialization"
              type="text"
              variant="secondary"
            >
              <Label>Specialization</Label>
              <Input placeholder="Enter your specialization" />
            </TextField>

            <Select
            variant="secondary"
              name="qualifications"
              selectionMode="multiple"
              selectedKeys={qualifications}
              onChange={(key)=> setQualifications(key)}
              className="w-full"
              placeholder="Select Qualifications"
              selectionMode="multiple"
            >
              <Label>Qualifications</Label>
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox selectionMode="multiple">
                  <ListBox.Item id="MBBS" textValue="MBBS">
                    MBBS
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="MD Cardiology" textValue="MD cardiology">
                    MD Cardiology
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="FACC" textValue="FACC">
                    FACC
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>

            <Select
            variant="secondary"
              name="timeSlots"
              selectionMode="multiple"
              selectedKeys={timeSlots}
              onChange={(key)=> setTimeSlots(key)}
              className="w-full"
              placeholder="Select Time"
              selectionMode="multiple"
            >
              <Label>Time Slots</Label>
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox selectionMode="multiple">
                  <ListBox.Item id="9:00 AM" textValue="9:00 AM">
                    9:00 AM
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="10:00 AM" textValue="10:00 AM">
                    10:00 AM
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="12:00 AM" textValue="12:00 AM">
                    12:00 AM
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="1:00 PM" textValue="1:00 PM">
                    1:00 PM
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="2:00 PM" textValue="2:00 PM">
                    2:00 PM
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="3:00 PM" textValue="3:00 pM">
                    3:00 PM
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="4:00 PM" textValue="4:00 PM">
                    4:00 PM
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="5:00 PM" textValue="5:00 PM">
                    5:00 PM
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="6:00 PM" textValue="6:00 PM">
                    6:00 PM
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="7:00 PM" textValue="7:00 PM">
                    7:00 PM
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
            <Select
            variant="secondary"
              name="daySlots"
              selectionMode="multiple"
              selectedKeys={daySlots}
              onChange={(key)=> setDaySlots(key)}
              className="w-full"
              placeholder="Select Day"
              selectionMode="multiple"
            >
              <Label>Day Slots</Label>
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox selectionMode="multiple">
                  <ListBox.Item id="Monday" textValue="Monday">
                    Monday
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Tuesday" textValue="Tuesday">
                    Tuesday
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Wednesday" textValue="Wednesday">
                    Wednesday
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Thursday" textValue="Thursday">
                    Thursday
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Friday" textValue="Friday">
                    Friday
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Saturday" textValue="Saturday">
                    Saturday
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Sunday" textValue="Sunday">
                    Sunday
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  
                </ListBox>
              </Select.Popover>
            </Select>

            <TextField
              className="w-full"
              name="fee"
              type="number"
              variant="secondary"
            >
              <Label>Consultation Fee($)</Label>
              <Input placeholder="Fee" />
            </TextField>
            <TextField
              className="w-full"
              name="experience"
              type="number"
              variant="secondary"
            >
              <Label>Years of Experience</Label>
              <Input placeholder="Year of experience" />
            </TextField>

            
          </div>

          <TextArea
            
              aria-label="Bio"
              name="bio"
              variant="secondary"
              className="h-26 w-96"
              placeholder="Enter your bio..."
            />

          <div>
            <Button slot="close" type="submit">
              Save Changes
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default DoctorProfilePage;
