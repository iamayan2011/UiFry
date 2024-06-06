import React from 'react'
import Image from 'next/image'

type PremCardProps = {
    icon:string;
    head:string;
    des:string;

};

const Premiumcard = ({icon, head, des }: PremCardProps) => {
  return (
    <div>
      <div className="capitalize flex gap-2 mt-3 feathead">
        <Image src={icon} alt='star' width={22} height={24}>

        </Image>

        {head}

      </div>
      <p className='capitalize mt-1'>
      {des}
      </p>
    </div>
  )
}

export default Premiumcard
