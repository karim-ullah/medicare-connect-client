import { Button, Card } from "@heroui/react";
import Image from "next/image";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder, MdOutlineVerifiedUser } from "react-icons/md";

const LeftSide = ({ schedule }) => {
  return (
    <div className="min-w-0 flex-1 space-y-6">
      {/* Profile Card */}
      <Card className="overflow-hidden p-0">
        {/* Cover */}
        <div className="relative h-48 w-full sm:h-56">
          <Image
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200"
            alt="Hospital interior"
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover"
          />

          {/* Doctor Image */}
          <div className="absolute -bottom-14 left-6">
            <div className="relative h-28 w-28 overflow-hidden rounded-3xl border-4 border-background bg-background shadow-xl">
              <Image
                src={schedule.imgUrl}
                alt={`Dr. ${schedule.name}`}
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 pt-20">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h1 className="flex items-center gap-2 text-3xl font-bold">
                Dr. {schedule.name} <MdOutlineVerifiedUser size={18} />
              </h1>

              <p className="mt-1 font-medium text-accent">
                {schedule.specialization}
              </p>

              <p className="text-muted">{schedule.hospital}</p>

              <div className="mt-3 flex items-center gap-2">
                ⭐ 4.9
                <span className="text-muted">(324 Reviews)</span>
              </div>
            </div>

            <div className="flex shrink-0 gap-2">
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
              <h3 className="text-3xl font-bold text-accent">
                {schedule.experience}+
              </h3>
              <p className="text-sm text-muted">Years Experience</p>
            </div>

            <div className="rounded-2xl border p-4 text-center">
              <h3 className="text-3xl font-bold text-accent">2.3K+</h3>
              <p className="text-sm text-muted">Patients</p>
            </div>

            <div className="rounded-2xl border p-4 text-center">
              <h3 className="text-3xl font-bold text-accent">324+</h3>
              <p className="text-sm text-muted">Reviews</p>
            </div>
          </div>
        </div>
      </Card>

      {/* About */}
      <Card className="p-6">
        <h2 className="mb-4 text-xl font-semibold">
          About Dr. {schedule.name}
        </h2>

        <p className="leading-8 text-muted">{schedule.bio}</p>
      </Card>

      {/* Qualifications */}
      <Card className="p-6">
        <h2 className="mb-4 text-xl font-semibold">Qualifications</h2>

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
        <h2 className="mb-4 text-xl font-semibold">Contact Information</h2>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
          <p className="break-words">🏥 {schedule.hospital}</p>
          <p>📞 {schedule.phone}</p>
          <p className="break-all">✉️ {schedule.email}</p>
        </div>
      </Card>
    </div>
  );
};

export default LeftSide;
