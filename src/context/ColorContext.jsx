import React, { createContext, useState, useMemo } from 'react';

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => ({
    mode,
    bg: mode === 'light' ? 'bg-white' : 'bg-gray-900',
    modes: mode === 'light' ? 'light' : 'dark',
    text: mode === 'light' ? 'text-black' : 'text-white',
    btn: mode === 'light'
      ? 'bg-green-100 hover:bg-green-200 transition duration-300'
      : 'bg-green-700 hover:bg-green-900 transition duration-300',
    placeholder: mode === 'light' ? 'placeholder-gray-700' : 'text-gray-100',

    borderColor: mode === 'light' ? '#ccc' : '#444', // Added borderColor for dynamic borders
    dbg : mode === 'light' ? '#AFD9E7' : '#212121',
  }), [mode]);

  const value = useMemo(() => ({
    theme,
    mode,
    toggleTheme,
  }), [theme]);

  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  );
};
