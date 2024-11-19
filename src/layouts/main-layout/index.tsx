import { Outlet } from "react-router-dom";
import SiteBar from "./menu";
import Header from "./header";

export default function MainLayout() {
  return (
    <div className="flex">
       <SiteBar/>
       <div className="bg-[#F5F5F5] w-full">
          <Header/>
         <Outlet/>
       </div>
    </div>
  )
}
