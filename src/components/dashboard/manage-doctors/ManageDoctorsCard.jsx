import { Avatar, Button, Card, Chip } from "@heroui/react";
import React from "react";
import { FaStar } from "react-icons/fa";
import { MdPending, MdVerified } from "react-icons/md";
import RevokeAlert from "./RevokeAlert";

const ManageDoctorsCard = async ({ doctor }) => {

    const qualifications = doctor.qualifications
  
  return (
    <Card className="w-full border shadow bg-background p-0">
      <div className="flex flex-col md:flex-row justify-between items-start p-6">
        {/* Left */}
        <div className="flex gap-4">
          <Avatar className="w-20 h-20" radius="lg">
            <Avatar.Image alt="John Doe" src={doctor.imgUrl} />
            <Avatar.Fallback>JD</Avatar.Fallback>
          </Avatar>

          <div>
            {/* Name + Badge */}
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-xl font-bold">{doctor.name}</h2>

              <Chip color="success" variant="flat">
                {doctor.status} {doctor.status === 'verified'? <MdVerified /> : <MdPending/> }
              </Chip>
            </div>

            {/* Specialization */}
            <p className="text-primary text-lg ">{doctor.specialization}</p>

            {/* Hospital */}
            <p className="text-default-500 text-sm mt-1">
              {doctor.hospital}
            </p>

            {/* Statistics */}
            <div className="flex flex-wrap items-center gap-6  text-sm">
              <span>{doctor.experience} years exp</span>

              <span>${doctor.fee}/visit</span>

              <div className="flex items-center gap-1">
                <FaStar className="text-warning" />
                <span>4.9 (312 reviews)</span>
              </div>

              <span>2,840 patients</span>
            </div>

            {/* Qualifications */}
            <div className="flex flex-wrap gap-2 mt-2">

                {qualifications.map((qua,index) => <Chip key={index} variant="flat" color="primary">
                {qua}
              </Chip>)}
            
            </div>
          </div>
        </div>

        {/* Right */}
        <RevokeAlert doctor = {doctor}/>
      </div>
    </Card>
  );
};

export default ManageDoctorsCard;
