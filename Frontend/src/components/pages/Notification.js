import React from 'react'
import MobileNav from '../navigation/mobilenav'

const Notification = () => {
  return (
   <section className="flex  xl:w-[80%] w-[100%]  md:h-full h-screen">
        <h1 className='text-center justify-center w-full mt-10 text-sm text-white font-light'>No Notifications</h1>
        <MobileNav/>
    </section>
  )
}

export default Notification