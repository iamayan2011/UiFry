import React from 'react'
import Image from 'next/image'

type AdvCardProps = {
    icon?:string;
    head:string;
    des:string;
    isVisible?: boolean;

};

const AdvantageCard = ({icon, head, des, isVisible }: AdvCardProps) => {
  if (!isVisible) return null;
  return (
    <div>
      <div>
      <div className="capitalize flex gap-3 mt-3 advhead">
        {icon && <Image src={icon} alt='star' width={42} height={44} />}

       

        {head}

      </div>
      <p className='capitalize mt-3'>
      {des}
      </p>
    </div>
    </div>
  )
}

export default AdvantageCard
