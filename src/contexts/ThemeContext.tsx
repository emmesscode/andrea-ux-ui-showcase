
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isColorTheme: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isColorTheme, setIsColorTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('colorTheme');
    if (savedTheme) {
      setIsColorTheme(savedTheme === 'true');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isColorTheme;
    setIsColorTheme(newTheme);
    localStorage.setItem('colorTheme', newTheme.toString());
  };

  return (
    <ThemeContext.Provider value={{ isColorTheme, toggleTheme }}>
      <div className={isColorTheme ? 'color-theme' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
