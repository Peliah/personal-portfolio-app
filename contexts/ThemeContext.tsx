import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

export type ThemeMode = 'light' | 'dark' | 'system' | 'neo-brutalism';

interface ThemeContextType {
    themeMode: ThemeMode;
    isDark: boolean;
    isNeoBrutalism: boolean;
    toggleTheme: () => void;
    setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = '@theme_mode';

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const systemColorScheme = useRNColorScheme();
    const [themeMode, setThemeModeState] = useState<ThemeMode>('system');
    const [isDark, setIsDark] = useState(systemColorScheme === 'dark');
    const [isNeoBrutalism, setIsNeoBrutalism] = useState(false);

    // Load saved theme preference on app start
    useEffect(() => {
        const loadThemePreference = async () => {
            try {
                const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
                if (savedTheme && ['light', 'dark', 'system', 'neo-brutalism'].includes(savedTheme)) {
                    setThemeModeState(savedTheme as ThemeMode);
                }
            } catch (error) {
                console.log('Error loading theme preference:', error);
            }
        };
        loadThemePreference();
    }, []);

    // Update theme states based on theme mode
    useEffect(() => {
        if (themeMode === 'neo-brutalism') {
            setIsNeoBrutalism(true);
            setIsDark(false); // Neo-brutalism uses its own color scheme
        } else {
            setIsNeoBrutalism(false);
            if (themeMode === 'system') {
                setIsDark(systemColorScheme === 'dark');
            } else {
                setIsDark(themeMode === 'dark');
            }
        }
    }, [themeMode, systemColorScheme]);

    const toggleTheme = () => {
        if (themeMode === 'neo-brutalism') {
            setThemeMode('light');
        } else if (isDark) {
            setThemeMode('light');
        } else {
            setThemeMode('dark');
        }
    };

    const setThemeMode = async (mode: ThemeMode) => {
        try {
            await AsyncStorage.setItem(THEME_STORAGE_KEY, mode);
            setThemeModeState(mode);
        } catch (error) {
            console.log('Error saving theme preference:', error);
        }
    };

    const value: ThemeContextType = {
        themeMode,
        isDark,
        isNeoBrutalism,
        toggleTheme,
        setThemeMode,
    };

    return (
        <ThemeContext.Provider value={value}>
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
