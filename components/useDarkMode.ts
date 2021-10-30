import { useEffect, useCallback, useMemo } from 'react';
import useEventListener from '@use-it/event-listener';

import { useState } from 'react';
import createPersistedState from 'use-persisted-state';

const noop = () => {};

const mockElement = {
  classList: {
    add: noop,
    remove: noop,
  },
};

const preferDarkQuery = '(prefers-color-scheme: dark)';

const initialize = (storageKey, storageProvider, glbl = global) => {
  const usePersistedDarkModeState = storageKey ? createPersistedState(storageKey, storageProvider) : useState;

  const mql: any = glbl.matchMedia ? glbl.matchMedia(preferDarkQuery) : {};

  const mediaQueryEventTarget = {
    addEventListener: (_, handler) => mql.addListener && mql.addListener(handler),
    removeEventListener: (_, handler) => mql.removeListener && mql.removeListener(handler),
  };

  const isColorSchemeQuerySupported = mql.media === preferDarkQuery;

  const getInitialValue = usersInitialState => (isColorSchemeQuerySupported ? mql.matches : usersInitialState);

  const defaultElement = (glbl.document && glbl.document.getElementsByTagName('html').item(0)) || mockElement;

  const getDefaultOnChange =
    (element = defaultElement, classNameDark = 'dark', classNameLight = 'light-mode') =>
    val => {};

  return {
    usePersistedDarkModeState,
    getDefaultOnChange,
    mediaQueryEventTarget,
    getInitialValue,
  };
};

const useDarkMode = (
  initialValue = false,
  { element, classNameDark, classNameLight, onChange, storageKey = 'darkMode', storageProvider, global }: any = {},
) => {
  const { usePersistedDarkModeState, getDefaultOnChange, getInitialValue, mediaQueryEventTarget } = useMemo(
    () => initialize(storageKey, storageProvider, global),
    [storageKey, storageProvider, global],
  );

  const [state, setState] = usePersistedDarkModeState(getInitialValue(initialValue));

  const stateChangeCallback = useMemo(
    () => onChange || getDefaultOnChange(element, classNameDark, classNameLight),
    [onChange, element, classNameDark, classNameLight, getDefaultOnChange],
  );

  // Call the onChange handler
  useEffect(() => {
    stateChangeCallback(state);
  }, [stateChangeCallback, state]);

  // Listen for media changes and set state.
  useEventListener('change', ({ matches }: any) => setState(matches), mediaQueryEventTarget as any);

  return {
    value: state,
    enable: useCallback(() => setState(true), [setState]),
    disable: useCallback(() => setState(false), [setState]),
    toggle: useCallback(() => setState(current => !current), [setState]),
  };
};

export default useDarkMode;
