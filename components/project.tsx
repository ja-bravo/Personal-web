import React from 'react';
import Image from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';

type Props = {
  title: string;
  desc: string;
  techs: string[];
  url: string;
};

const Project: React.FC<Props> = ({ url, title, desc, techs }) => {
  return (
    <li className="dark:bg-gray-800 dark:text-gray-100 text-gray-500">
      <Link href={url} passHref>
        <a className="block dark:hover:bg-gray-700 hover:bg-gray-50" target="_blank" rel="noopener">
          <div className="px-4 py-4 flex items-center sm:px-6">
            <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
              <div className="">
                <div className="flex text-sm">
                  <p className="font-medium dark:text-blue-300 text-blue-600 truncate">{title}</p>
                </div>
                <div className="mt-2 flex">
                  <div className="flex items-center text-sm">
                    <p className="whitespace-pre-wrap lg:whitespace-normal dark:text-gray-100 text-gray-500">{desc}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                <div className="flex overflow-hidden space-x-1">
                  {techs.map(t => (
                    <div key={t} className="h-8 w-8 rounded-full dark:bg-gray-100 p-[4px]">
                      <Image src={t} objectFit="contain" width={64} height={64} alt={`${t.slice(1, t.length - 4)} icon`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="ml-5 flex-shrink-0">
              <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default Project;
