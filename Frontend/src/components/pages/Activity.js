import MobileNav from "../navigation/mobilenav"
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import React from "react";
import UserActivity from "../../utils/UserActivity";

export default function Saved() {
  
 
    return (
       <section className="flex flex-col xl:w-[80%] w-[100%] h-[100%] gap-4">
            <div className='flex justify-center p-4'>
              

                <Header />
            </div>
            <div className="flex flex-col items-center justify-center ">
               <UserActivity />
            </div>
            <Footer />
            <MobileNav />
        </section>
    )
}