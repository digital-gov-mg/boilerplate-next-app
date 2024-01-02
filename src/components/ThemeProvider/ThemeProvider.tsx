'use client'

import { useServerInsertedHTML } from 'next/navigation'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { getCssText } from '@/core'
import React from 'react'

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    useServerInsertedHTML(() => {
        return (
            <style
                id="stitches"
                dangerouslySetInnerHTML={{ __html: getCssText() }}
            />
        )
    })

    return (
        <NextThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </NextThemeProvider>
    )
}

ThemeProvider.displayName = 'ThemeProvider'
