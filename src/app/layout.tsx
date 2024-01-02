import type { Metadata } from 'next'
import '@fontsource-variable/plus-jakarta-sans'
import { ThemeProvider } from '@/components'

export const metadata: Metadata = {
    title: 'Next App Boilerplate - Unité de Gouvernance Digitale',
    description:
        "Ce modèle embrasse la philosophie du Développement Axé sur les Composants, mettant l'accent sur la modularité, la réutilisabilité et la clarté dans la structure de votre application.",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    )
}
