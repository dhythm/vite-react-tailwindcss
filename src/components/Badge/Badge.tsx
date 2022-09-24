import { FC, ReactNode } from "react";

type Props = {
  variant?: "outlined" | "filled";
  children: ReactNode;
};

export const Badge: FC<Props> = ({ variant = "outlined", children }) => {
  switch (variant) {
    case "outlined":
      return (
        <strong className="border text-red-500 border-current uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide">
          {children}
        </strong>
      );
    case "filled":
      return (
        <strong className="border border-red-500 text-white bg-red-500 uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide">
          {children}
        </strong>
      );
    default:
      const _variant: never = variant;
      throw new Error(`${_variant} is invalid`);
  }
};
