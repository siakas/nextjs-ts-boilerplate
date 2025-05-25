import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const WholeLayout = ({ children }: Props) => {
  return <div className="h-screen w-full bg-stone-50 p-10">{children}</div>;
};
