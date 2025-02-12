import { InformationSuccessStyle } from "./style";
import React from "react";

interface IInformationSuccessProps {
  icon: React.ReactNode;
  $backgroundIconColor: string;
  children: React.ReactNode;
}

export default function InformationSuccess({
  icon,
  $backgroundIconColor,
  children,
}: IInformationSuccessProps) {
  return (
    <InformationSuccessStyle $backgroundIconColor={$backgroundIconColor}>
      <div className="icon">{icon}</div>
      <div className="text">{children}</div>
    </InformationSuccessStyle>
  );
}
