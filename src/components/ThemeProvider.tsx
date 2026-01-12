'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'portfolio-theme';

/**
 * ThemeProvider Component
 * 
 * CURRENTLY DISABLED: Forces dark mode only.
 * 
 * Original behavior (commented out):
 * 1. On first visit: checks localStorage, then system preference, defaults to light
 * 2. On toggle: immediately updates UI and persists to localStorage
 * 3. On return visits: uses stored preference
 * 
 * To re-enable light/dark mode toggle:
 * 1. Uncomment the theme detection logic in the first useEffect
 * 2. Uncomment ThemeToggle in Navigation.tsx
 * 
 * To adjust colors: modify CSS variables in globals.css under :root (light) and [data-theme="dark"]
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    // DISABLED: Always start with dark mode
    const [theme, setThemeState] = useState<Theme>('dark');
    const [mounted, setMounted] = useState(false);

    // DISABLED: Original theme detection logic - uncomment when ready to enable light mode
    // Initialize theme on client side only to avoid hydration mismatch
    useEffect(() => {
        // DISABLED: Theme detection - always use dark mode
        /*
        const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;

        if (storedTheme) {
            // User has a saved preference
            setThemeState(storedTheme);
        } else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setThemeState(prefersDark ? 'dark' : 'light');
        }
        */

        // Force dark mode
        setThemeState('dark');
        setMounted(true);
    }, []);

    // Apply theme to document
    useEffect(() => {
        if (!mounted) return;

        const root = document.documentElement;
        root.setAttribute('data-theme', theme);

        // Also set/remove 'dark' class for potential Tailwind dark: utilities
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        // DISABLED: Don't persist to localStorage when forcing dark mode
        // localStorage.setItem(THEME_STORAGE_KEY, theme);
    }, [theme, mounted]);

    const toggleTheme = () => {
        // DISABLED: Toggle functionality
        // setThemeState(prev => prev === 'light' ? 'dark' : 'light');
    };

    const setTheme = (newTheme: Theme) => {
        // DISABLED: Manual theme setting
        // setThemeState(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
