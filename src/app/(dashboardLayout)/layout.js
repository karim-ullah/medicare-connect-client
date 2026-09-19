import Sidebar from "@/components/dashboard/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar />
      <div className="min-w-0 flex-1 bg-background">{children}</div>
    </div>
  );
};

export default DashboardLayout;
