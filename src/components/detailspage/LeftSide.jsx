import { Button, Card } from '@heroui/react';
import React from 'react';
import { IoShareSocialOutline } from 'react-icons/io5';
import { MdOutlineFavoriteBorder, MdOutlineVerifiedUser } from 'react-icons/md';

const LeftSide = ({schedule}) => {
    return (
        <div className="lg:col-span-2 space-y-6 w-full md:w-3xl">
                {/* Profile Card */}
                <Card className="overflow-hidden p-0">
                  {/* Cover */}
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200"
                      alt="cover"
                      className="h-56 w-full object-cover"
                    />
        
                    {/* Doctor Image */}
                    <div className="absolute -bottom-14 left-6">
                      <div className="h-28 w-28 overflow-hidden rounded-3xl border-4 border-background bg-background shadow-xl">
                        <img
                          src={schedule.imgUrl}
                          alt={schedule.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
        
                  {/* Content */}
                  <div className="pt-20 pb-6 px-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h1 className="text-3xl font-bold flex items-center gap-2">Dr. {schedule.name} <MdOutlineVerifiedUser size={18}/></h1>
        
                        <p className="text-primary font-medium mt-1">
                          {schedule.specialization}
                        </p>
        
                        <p className="text-default-500">{schedule.hospital}</p>
        
                        <div className="mt-3 flex items-center gap-2">
                          ⭐ 4.9
                          <span className="text-default-500">(324 Reviews)</span>
                        </div>
                      </div>
        
                      <div className="flex gap-2">
                        <Button isIconOnly variant="outline">
                          <MdOutlineFavoriteBorder />
                        </Button>
        
                        <Button isIconOnly variant="outline">
                          <IoShareSocialOutline />
                        </Button>
                      </div>
                    </div>
        
                    {/* Stats */}
                    <div className="mt-8 grid grid-cols-3 gap-4">
                      <div className="rounded-2xl border p-4 text-center">
                        <h3 className="text-3xl font-bold text-primary">
                          {schedule.experience}+
                        </h3>
                        <p className="text-sm text-default-500">Years Experience</p>
                      </div>
        
                      <div className="rounded-2xl border p-4 text-center">
                        <h3 className="text-3xl font-bold text-primary">2.3K+</h3>
                        <p className="text-sm text-default-500">Patients</p>
                      </div>
        
                      <div className="rounded-2xl border p-4 text-center">
                        <h3 className="text-3xl font-bold text-primary">324+</h3>
                        <p className="text-sm text-default-500">Reviews</p>
                      </div>
                    </div>
                  </div>
                </Card>
        
                {/* About */}
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    About Dr. {schedule.name} 
                  </h2>
        
                  <p className="leading-8 text-default-600">{schedule.bio}</p>
                </Card>
        
                {/* Qualifications */}
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Qualifications</h2>
        
                  <div className="flex flex-wrap gap-2">
                    {schedule.qualifications?.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-accent/10 px-4 py-1 text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
        
                {/* Contact */}
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        
                  <div className="flex items-center gap-4">
                    <p>🏥 {schedule.hospital}</p>
                    <p>📞 {schedule.phone}</p>
                    <p>✉️ {schedule.email}</p>
                  </div>
                </Card>
              </div>
    );
};

export default LeftSide;