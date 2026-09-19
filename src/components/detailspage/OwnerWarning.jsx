import { Card } from "@heroui/react";
import React from "react";

const OwnerWarning = () => {
  return (
    <Card className="h-fit w-full shrink-0 border-warning/20 bg-warning-soft p-5 md:w-80 lg:w-96">
      <div className="flex items-start gap-3">
        <div className="rounded-full bg-warning/10 p-2">⚠️</div>

        <div>
          <h3 className="font-semibold text-lg">Your Added Schedule</h3>

          <p className="mt-1 text-sm text-muted">
            This schedule belongs to your account. You cannot book an
            appointment with your own schedule.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default OwnerWarning;
