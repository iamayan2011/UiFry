'use client'
import Image from "next/image";
import { useTheme } from "next-themes";

const MainLogo = () => {
    const {resolvedTheme} = useTheme()
  return (
    <Image src={resolvedTheme==='dark' ? '/logodark.svg' : '/logo.svg'} alt="logo" width={117} height={34}></Image>
  )
}

export default MainLogo
