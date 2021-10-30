import React from 'react';
import { Switch } from '@headlessui/react';
import classNames from 'classnames';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

type Props = {
  enabled: boolean;
  setEnabled: (value: boolean) => void;
};
export default function DarkToggle({ enabled, setEnabled }: Props) {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classNames(
        enabled ? 'bg-blue-400 dark:bg-gray-400' : 'bg-gray-200',
        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
      )}>
      <span className="sr-only">Use setting</span>
      <span
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
        )}>
        <span
          className={classNames(
            enabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
            'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
          )}
          aria-hidden="true">
          <SunIcon className="w-3 h-3 text-gray-500" />
        </span>
        <span
          className={classNames(
            enabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
            'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
          )}
          aria-hidden="true">
          <MoonIcon className="w-3 h-3 text-gray-500" />
        </span>
      </span>
    </Switch>
  );
}
