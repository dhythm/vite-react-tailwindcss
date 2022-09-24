import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const Announcement: FC<Props> = ({ children }) => (
  <div className="px-4 py-3 text-white bg-indigo-600">
    <p className="text-sm font-medium text-center">{children}</p>
  </div>
);
