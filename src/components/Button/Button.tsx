import { FC, ReactNode } from "react";

type Props = {
  variant?: "outlined" | "contained";
  children: ReactNode;
};

export const Button: FC<Props> = ({ variant = "outlined", children }) => {
  switch (variant) {
    case "outlined":
      return (
        <a className="inline-block px-12 py-3 text-sm font-medium text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
          {children}
        </a>
      );
    case "contained":
      return (
        <a className="inline-block px-12 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring">
          {children}
        </a>
      );
    default:
      const _variant: never = variant;
      throw new Error(`${_variant} is invalid`);
  }
};
