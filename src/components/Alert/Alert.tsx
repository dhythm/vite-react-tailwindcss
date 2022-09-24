import { FC, ReactNode } from "react";

type Props = {
  variant: "success" | "warning" | "alert" | "info";
  children: ReactNode;
};
export const Alert: FC<Props> = ({ variant, children }) => {
  switch (variant) {
    case "success":
      return (
        <div
          className="p-4 text-green-700 border rounded border-green-900/10 bg-green-50"
          role="alert"
        >
          <strong className="text-sm font-medium">{children}</strong>
        </div>
      );
    case "warning":
      return (
        <div
          className="p-4 border rounded text-amber-700 bg-amber-50 border-amber-900/10"
          role="alert"
        >
          <strong className="text-sm font-medium">{children}</strong>
        </div>
      );
    case "alert":
      return (
        <div
          className="p-4 text-red-700 border rounded border-red-900/10 bg-red-50"
          role="alert"
        >
          <strong className="text-sm font-medium">{children}</strong>
        </div>
      );
    case "info":
      return (
        <div
          className="p-4 border rounded text-sky-700 bg-sky-50 border-sky-900/10"
          role="alert"
        >
          <strong className="text-sm font-medium">{children}</strong>
        </div>
      );
    default:
      const _variant: never = variant;
      throw new Error(`${_variant} is invalid`);
  }
};
