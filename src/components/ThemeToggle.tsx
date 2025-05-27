
import React from 'react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/contexts/ThemeContext';
import { Palette } from 'lucide-react';

const ThemeToggle = () => {
  const { isColorTheme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center space-x-3 p-2 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm">
      <span className="text-sm font-light text-gray-600">B&W</span>
      <Switch
        checked={isColorTheme}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-primary"
      />
      <div className="flex items-center space-x-1">
        <Palette size={16} className="text-gray-600" />
        <span className="text-sm font-light text-gray-600">Color</span>
      </div>
    </div>
  );
};

export default ThemeToggle;
