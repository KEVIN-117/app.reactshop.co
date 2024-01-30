import { useState, useContext } from 'react'
import { Sun } from '@/icons/Sun'
import { Moon } from '@/icons/Moon'
import { ThemeContext } from '@/context/ThemeContext'

export function ChnageTheme() {
    const { icon, handleTheme } = useContext(ThemeContext)

    return (
        <button className='ml-5 flex justify-center items-center' onClick={handleTheme}>
            {icon}
        </button>
    )
}