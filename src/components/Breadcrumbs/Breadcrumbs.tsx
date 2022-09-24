import { FC } from "react";

type Props = {
  pages: { name: string; path: string }[];
};

export const Breadcrumbs: FC<Props> = ({ pages }) => (
  <nav aria-label="Breadcrumb">
    <ol role="list" className="flex items-center text-sm text-gray-500 gap-1">
      {pages.map((page, index) => (
        <>
          <li>
            <a className="block transition-colors hover:text-gray-700" href="/">
              {page.name}
            </a>
          </li>

          {index + 1 < pages.length && (
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>
          )}
        </>
      ))}
    </ol>
  </nav>
);
