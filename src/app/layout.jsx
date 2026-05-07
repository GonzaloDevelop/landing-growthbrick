import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    display: 'swap',
    weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
    metadataBase: new URL('https://growthbrick.tech'),
    title: {
        default: 'GrowthBrick — Meta Ads + IA + CRM para inmobiliarias',
        template: '%s | GrowthBrick',
    },
    description:
        'Captamos compradores reales con Meta Ads, los califica la IA 24/7 y tu equipo solo cierra. Sin depender de portales. Para inmobiliarias y desarrolladoras argentinas.',
    keywords: [
        'Meta Ads inmobiliaria',
        'creativos inmobiliarios',
        'audiencias real estate',
        'CRM inmobiliario',
        'IA inmobiliaria',
        'calificación de leads',
        'WhatsApp inmobiliaria',
        'sin portales inmobiliarios',
        'GrowthBrick',
    ],
    authors: [{ name: 'GrowthBrick' }],
    creator: 'GrowthBrick',
    openGraph: {
        type: 'website',
        locale: 'es_AR',
        url: 'https://growthbrick.tech',
        siteName: 'GrowthBrick',
        title: 'GrowthBrick — Meta Ads + IA + CRM para inmobiliarias',
        description: 'Captamos. La IA califica. Tu equipo cierra. Sin portales.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'GrowthBrick',
        description: 'Captamos. La IA califica. Tu equipo cierra. Sin portales.',
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: '/logo.svg',
        shortcut: '/logo.svg',
        apple: '/logo.svg',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="es-AR" className={spaceGrotesk.variable}>
            <body>{children}</body>
        </html>
    );
}
