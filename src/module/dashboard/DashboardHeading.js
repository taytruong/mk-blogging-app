import React from "react";

const DashboardHeading = ({
  title = "",
  desc = "",
  children,
  categoryId = "",
}) => {
  return (
    <div className="mb-10 flex items-start justify-between">
      <div>
        <h1 className="dashboard-heading">{title}</h1>
        <p className="dashboard-short-desc">
          {desc}
          <span className="text-[#1DC071]">{categoryId}</span>
        </p>
      </div>
      {children}
    </div>
  );
};

export default DashboardHeading;
