import { Avatar, Card, Chip } from "@heroui/react";
import { MdPending, MdVerified } from "react-icons/md";
import RevokeAlert from "./RevokeAlert";

const ManageDoctorsCard = ({ doctor }) => {
  const qualifications = doctor.qualifications ?? [];
  const isVerified = doctor.status === "verified";

  return (
    <Card className="w-full border p-0 shadow">
      <div className="flex flex-col gap-4 p-6 md:flex-row md:items-start md:justify-between">
        {/* Left */}
        <div className="flex gap-4">
          <Avatar className="h-20 w-20 rounded-2xl">
            <Avatar.Image alt={doctor.name} src={doctor.imgUrl} />
            <Avatar.Fallback>
              {doctor.name?.slice(0, 2).toUpperCase()}
            </Avatar.Fallback>
          </Avatar>

          <div>
            {/* Name + Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-xl font-bold">{doctor.name}</h2>

              <Chip
                color={isVerified ? "success" : "warning"}
                variant="soft"
              >
                <span className="inline-flex items-center gap-1 capitalize">
                  {doctor.status} {isVerified ? <MdVerified /> : <MdPending />}
                </span>
              </Chip>
            </div>

            {/* Specialization */}
            <p className="text-lg text-accent">{doctor.specialization}</p>

            {/* Hospital */}
            <p className="mt-1 text-sm text-muted">{doctor.hospital}</p>

            {/* Statistics */}
            <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm">
              {doctor.experience != null && (
                <span>{doctor.experience} years exp</span>
              )}
              {doctor.fee != null && <span>${doctor.fee}/visit</span>}
            </div>

            {/* Qualifications */}
            {qualifications.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {qualifications.map((qua, index) => (
                  <Chip key={index} variant="soft" color="accent">
                    {qua}
                  </Chip>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right */}
        <RevokeAlert doctor={doctor} />
      </div>
    </Card>
  );
};

export default ManageDoctorsCard;
