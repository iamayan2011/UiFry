"use client";
import { useTheme } from "next-themes";

import Image from "next/image";
type EllipseProps = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

const EllipseRev = ({ top, bottom, left, right }: EllipseProps) => {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <Image
      src={resolvedTheme === "dark" ?  "/elipse-dark.svg" : "/ellipsewhite.svg"}
      alt="ellipse"
      width={500}
      height={383}
      style={{
        position: "absolute",
        justifyContent: "center",
        top,
        left,
        right,
        bottom,
      }}
      className="flex"
    ></Image>
  );
};

export default EllipseRev;
