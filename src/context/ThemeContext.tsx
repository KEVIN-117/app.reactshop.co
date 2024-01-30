"use client";
import { Moon } from '@/icons/Moon';
import { Sun } from '@/icons/Sun';
import { createContext, useState, ReactNode, useEffect } from 'react'

export const ThemeContext = createContext({
    currentTheme: 'light',
    setTheme: (theme: string) => { },
    icon: <Sun />,
    handleTheme: () => { }
})
export function ThemeProvider({ children }: { children: ReactNode }) {
    const [currentTheme, setTheme] = useState('light')
    const [icon, setIcon] = useState(currentTheme!! !== 'light' ? <Moon /> : <Sun />)


    useEffect(() => {
        const currentThemeName = localStorage.getItem('theme')
        setTheme(currentThemeName!!!)
    }, []);

    const handleTheme = () => {
        if (currentTheme === 'light') {
            setTheme('dark')
            setIcon(<Sun />)
            localStorage.setItem('theme', 'dark')
        } else {
            setTheme('light')
            setIcon(<Moon />)
            localStorage.setItem('theme', 'light')
        }
    }

    const value = { currentTheme, setTheme, handleTheme, icon, setIcon }
    return (
        <ThemeContext.Provider value={value}>
            <div className={`${currentTheme} h-auto  delay-700`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}
