import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [isDark, setDarkMode] = useLocalStorage();
  useEffect(() => {
    if (isDark === true) { 
      document.querySelector('body').classList.add('dark-mode');
      // document.querySelector('.chart-line').classList.add('dark-mode');
    } else if (isDark === false) {
      document.querySelector('body').classList.remove('dark-mode');
      // document.querySelector('.chart-line').classList.remove('dark-mode');
    }
  }, [isDark]);
  return [isDark, setDarkMode];
}