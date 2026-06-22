import { Card } from '@heroui/react';
import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

const MySchedulesCard = ({schedule}) => {
    return (
        <Card className="rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h3>{schedule.day}</h3>
              <p className="text-primary">{schedule.startTime} - {schedule.endTime}</p>
            </div>
            <div className="flex items-center gap-2">
              <FiEdit></FiEdit>
              <RiDeleteBin6Line></RiDeleteBin6Line>
            </div>
          </div>
        </Card>
    );
};

export default MySchedulesCard;