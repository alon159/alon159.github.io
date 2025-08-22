import { GoogleTagManager } from '@next/third-parties/google';
import { ThemeProvider } from 'next-themes'
import '../index.css'

export const viewport = {
    themeColor: '#1a202c',
}

export const metadata = {
    title: 'Alonso Crespo Fernández - Portfolio',
    description: 'Soy Alonso Crespo y este es mi portfolio! Aquí podrás encontrar información sobre mi experiencia y mis proyectos realizados como Ingeniero Informático.',
    author: 'Alonso Crespo Fernández',
    keywords: 'Alonso Crespo Fernández, Alonso Crespo Fernandez, alonso.crespo, Ingeniero Informático, UCLM, Web, Ciudad Real, ESI, Escuela Superior de Informática, Tecnología, Información',
    verification: {
        google: '_iFFSbxa_QptjLCfBXKlAFrhr30zjgJrXxWJihbM0xo', // Add your verification code
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
