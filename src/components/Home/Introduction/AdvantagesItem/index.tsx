import React from "react";
import { AdvantagesItemStyle, IAdvantagesItemStyleProps } from "./style";

interface IAdvantagesItemProps
  extends React.ComponentProps<"div">,
    IAdvantagesItemStyleProps {
  icon: React.ReactNode;
}

export default function AdvantagesItem({
  children,
  $colorBox,
  icon,
  ...props
}: IAdvantagesItemProps) {
  return (
    <AdvantagesItemStyle $colorBox={$colorBox} {...props}>
      <span className="advantages-icon">{icon}</span>
      {children}
    </AdvantagesItemStyle>
  );
}
