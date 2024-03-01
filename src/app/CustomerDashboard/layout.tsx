import DashboardTabs from "./DashboardTabs";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
      <div className="flex m-10">
        <div className="md:w-[25%] w-full">
            <DashboardTabs/>
        </div>
        <div className="md:w-[75%] w-full">
            {children}
        </div>
      </div>
 
  );
}
