'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Monitor, MoonStars, SunDim } from '@phosphor-icons/react'
import { ToggleGroupItem, ToggleGroupRoot } from './ThemeSwitcher.style'

interface ThemeSwitcherProps{
    defaultTheme?: 'light' | 'system' | 'dark',
}

export const ThemeSwitcher = ({defaultTheme = 'system'}: ThemeSwitcherProps) => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
        setTheme(defaultTheme)
    }, [])

    if (!mounted) {
        return null
    }
    
    const handleValueChange = (value: string) => {
        setTheme(value)
    }

    return (
        <ToggleGroupRoot
            type="single"
            value={theme}
            defaultValue={defaultTheme}
            onValueChange={value => handleValueChange(value)}
            aria-label="Theme switcher"
		>
            <ToggleGroupItem value="light" aria-label="Light theme">
                <SunDim size={24} weight="duotone"/> Clair
            </ToggleGroupItem>
            
            <ToggleGroupItem value="system" aria-label="System theme">
                <Monitor size={24} weight="duotone"/> Auto
            </ToggleGroupItem>
            
            <ToggleGroupItem value="dark" aria-label="Dark theme">
                <MoonStars size={24} weight="duotone"/> Sombre
            </ToggleGroupItem>
        </ToggleGroupRoot>
    )
}
