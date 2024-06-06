'use client'
import Image from "next/image";
import { useTheme } from "next-themes";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon: boolean;
  variant: "btn-normal";
};

const Buttons = ({ type, title, icon, variant }: ButtonProps) => {
  const {resolvedTheme} = useTheme()
  return (
    <button className={`${variant} flexCenter gap-3`} type={type}>
      <label className="font-custom font-medium cursor-pointer">{title}</label>
      {icon && <Image src={resolvedTheme==='dark' ? "/rightarrowdark.svg": "/rightarrow.svg"} alt="rightarrow" width={24} height={1} />}

    </button>
  );
};

export default Buttons;
