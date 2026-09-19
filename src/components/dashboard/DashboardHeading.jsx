import React from "react";

const DashboardHeading = ({tittle, description}) => {
  return (
    <div>
      <h2 className="font-bold text-2xl">{tittle}</h2>
      <p className="text-sm text-muted">
        {description}
      </p>
    </div>
  );
};

export default DashboardHeading;
