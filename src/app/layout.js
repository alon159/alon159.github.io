import { GoogleTagManager } from '@next/third-parties/google';
import { ThemeProvider } from 'next-themes'
import '../index.css'

export const viewport = {
    themeColor: '#1a202c',
}

export const metadata = {
    metadataBase: new URL('https://alon159.github.io/'),
    title: 'Alonso Crespo Fernández - Portfolio',
    description: 'Soy Alonso Crespo y este es mi portfolio! Aquí podrás encontrar información sobre mi experiencia y mis proyectos realizados como Ingeniero Informático.',
    authors: [{ name: "Alonso Crespo", url: "https://alon159.github.io/" }],
    keywords: 'Alonso Crespo Fernández, Alonso Crespo Fernandez, alonso.crespo, Ingeniero Informático, UCLM, Web, Ciudad Real, ESI, Escuela Superior de Informática, Tecnología, Información',
    verification: {
        google: '_iFFSbxa_QptjLCfBXKlAFrhr30zjgJrXxWJihbM0xo', // Add your verification code
    },
    referrer: 'strict-origin-when-cross-origin',
    openGraph: {
        url: 'https://alon159.github.io/',
        type: 'website',
        siteName: 'Alonso Crespo Fernández - Portfolio',
        locale: "es_ES",
    },
    twitter: {
        card: 'summary_large_image'
    },
    alternates: {
        canonical: 'https://alon159.github.io/',
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body>
                <GoogleTagManager gtmId="GTM-PFBKJH8Q" />
                <ThemeProvider id="root" attribute="class">{children}</ThemeProvider>
            </body>
        </html>

    )
}
