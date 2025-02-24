import React from 'react'

const SpareServices = () => {
  return (
   <>
   <div className="flex justify-center mt-20">
        <img src="/images/sparehand.png" alt="Spare Hand" className="h-[54px] w-auto" />
      </div>

      {/* Section Title */}
      <div className="flex items-center my-7 px-60">
        <hr className="flex-grow border-t-3 border-red-500" />
        <span className="mx-4 text-3xl text-red-500 font-bold">Services</span>
        <hr className="flex-grow border-t-3 border-red-500" />
      </div>

      <div className="text-center mt-10 text-4xl font-bold">
        <p>Services we Provide</p>
      </div>
   </>
  )
}

export default SpareServices
