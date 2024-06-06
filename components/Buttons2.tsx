'use client'
import Image from "next/image";
import { useTheme } from "next-themes";
import { FaApple } from "react-icons/fa";
import { IconContext } from "react-icons";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon: boolean;
  variant: "btn-normal" | "btn-cont";
  icon2?: boolean;
  
};

const Buttons2 = ({ type, title, icon, variant, icon2 }: ButtonProps) => {
  const {setTheme, resolvedTheme} = useTheme()
  return (
    <button className={`${variant} flexCenter gap-3 cursor-pointer align-middle`} type={type}>
      {icon && <Image src={resolvedTheme==='dark' ? "/videodark.svg": "/video.svg"} alt="video"width={24} height={1} />}
      <label className="font-custom font-medium cursor-pointer">{title}</label>
      {icon2 && <IconContext.Provider value={{ className: "shared-class", size: "30" }}><FaApple /></IconContext.Provider>}
      

    </button>
  )
}

export default Buttons2
