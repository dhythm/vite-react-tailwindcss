import { FC } from "react";

// This Switch is not from HyperUI because Toggle in HyperUI doesn't work.
export const Switch: FC = () => (
  <label
    htmlFor="default-toggle"
    className="inline-flex relative items-center cursor-pointer"
  >
    <input
      type="checkbox"
      value=""
      id="default-toggle"
      className="sr-only peer"
    />
    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
      Toggle me
    </span>
  </label>
);

// export const Switch: FC = () => (
//   <label
//     htmlFor="AcceptConditions"
//     className="relative w-16 h-8 cursor-pointer"
//   >
//     <input type="checkbox" id="AcceptConditions" className="sr-only peer" />
//     <span className="absolute inset-0 bg-blue-400 rounded-full transition peer-checked:bg-blue-600"></span>
//     <span className="absolute inset-0 w-6 h-6 m-1 bg-white rounded-full transition peer-checked:translate-x-8"></span>
//   </label>
// );
