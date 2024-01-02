import { createStitches } from '@stitches/react'

/**
 * Creates Stitches instance with configured theme and exports helpers
 * like `styled`, `css`, `theme`, etc.
 */
export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            gray400: 'gainsboro',
            gray500: 'lightgray',
        },
        fonts: {
            body: 'Plus Jakarta Sans Variable, sans-serif',
        },
    },
})

/**
 * Global CSS styles that apply to the entire app.
 */
const GlobalStyles = globalCss({
    '*': { margin: 0, padding: 0 },
    body: {
        fontFamily: '$body',
    },
})

GlobalStyles()
