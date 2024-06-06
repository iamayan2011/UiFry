import React from 'react'
import Image from "next/image";

const Herofeat = () => {
  return (
    <div className=" text-white items-center flex flex-row p-5 gap-6  dark:text-black" style={{height:"4.95rem"}}>
              <div className="sm:basis-1/6">
                <Image
                  src="/trophy.svg"
                  alt="trophy"
                  width={64}
                  height={32}
                ></Image>
              </div>
              <div className="flex-col sm:basis-5/6">
                <div className="herofeathd">Achievement</div>
                <div className="capitalize herofeatdes">
                  best finance app on playstore
                </div>
              </div>
            </div>
  )
}

export default Herofeat
