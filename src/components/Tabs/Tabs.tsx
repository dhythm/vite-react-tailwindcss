import { FC } from "react";

type Props = {
  tabs: string[];
  tabIndex: number;
};

export const Tabs: FC<Props> = ({ tabs, tabIndex }) => (
  <ul className="flex text-center border-b border-gray-200">
    {tabs.map((tab, index) => {
      if (index === tabIndex) {
        return (
          <li className="flex-1">
            <a
              className="relative block p-4 text-sm font-medium bg-white border-t border-l border-r border-gray-200"
              href=""
            >
              <span className="absolute inset-x-0 w-full h-px bg-white -bottom-px"></span>
              {tab}
            </a>
          </li>
        );
      }
      return (
        <li className="flex-1">
          <a
            className="block p-4 text-sm font-medium text-gray-500 bg-gray-100 ring-1 ring-inset ring-white"
            href=""
          >
            {tab}
          </a>
        </li>
      );
    })}
  </ul>
);
