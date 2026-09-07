import dns from "node:dns"
dns.setServers(['1.1.1.1', '1.0.0.1']);

import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Medicare Connect",
  description: "Hospital Appointment & Healthcare Management System",
};



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme = 'light'
      className="h-full antialiased"
    >
      <body className="min-h-full">

        {children}
        
        <Toaster></Toaster>
        </body>
    </html>
  );
}
