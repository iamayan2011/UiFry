"use client";
import { useTheme } from "next-themes";

import Image from "next/image";
type EllipseProps = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

const Ellipse = ({ top, bottom, left, right }: EllipseProps) => {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <Image
      src={resolvedTheme === "dark" ? "/ellipsewhite.svg" : "/ellipse.svg"}
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

export default Ellipse;
