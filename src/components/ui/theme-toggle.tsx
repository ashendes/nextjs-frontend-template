'use client';

import * as React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled>
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const cycleTheme = () => {
    switch (theme) {
      case 'light':
        setTheme('dark');
        break;
      case 'dark':
        setTheme('system');
        break;
      case 'system':
      default:
        setTheme('light');
        break;
    }
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-[1.2rem] w-[1.2rem]" />;
      case 'dark':
        return <Moon className="h-[1.2rem] w-[1.2rem]" />;
      case 'system':
      default:
        return <Monitor className="h-[1.2rem] w-[1.2rem]" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Switch to dark mode';
      case 'dark':
        return 'Switch to system mode';
      case 'system':
      default:
        return 'Switch to light mode';
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={cycleTheme}
      className="relative"
      aria-label={getLabel()}
    >
      {getIcon()}
      <span className="sr-only">{getLabel()}</span>
    </Button>
  );
}

export function ThemeToggleDropdown() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" disabled>
          <Sun className="mr-2 h-4 w-4" />
          Light
        </Button>
        <Button variant="outline" size="sm" disabled>
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </Button>
        <Button variant="outline" size="sm" disabled>
          <Monitor className="mr-2 h-4 w-4" />
          System
        </Button>
      </div>
    );
  }

  const themes = [
    { name: 'light', label: 'Light', icon: Sun },
    { name: 'dark', label: 'Dark', icon: Moon },
    { name: 'system', label: 'System', icon: Monitor },
  ];

  return (
    <div className="flex items-center gap-2">
      {themes.map((themeOption) => (
        <Button
          key={themeOption.name}
          variant={theme === themeOption.name ? 'default' : 'outline'}
          size="sm"
          onClick={() => setTheme(themeOption.name)}
          className={cn(
            'transition-all duration-200',
            theme === themeOption.name && 'ring-2 ring-primary/20'
          )}
        >
          <themeOption.icon className="mr-2 h-4 w-4" />
          {themeOption.label}
        </Button>
      ))}
    </div>
  );
} 