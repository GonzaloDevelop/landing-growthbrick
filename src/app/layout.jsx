import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata = {
    metadataBase: new URL('https://growthbrick.tech'),
    title: {
        default: 'GrowthBrick — Agencia digital para inmobiliarias y desarrolladoras',
        template: '%s | GrowthBrick',
    },
    description:
        'Ayudamos a inmobiliarias y desarrolladoras a convertir más metros cuadrados con Meta Ads, WhatsApp centralizado y un CRM diseñado para real estate.',
    keywords: [
        'agencia real estate',
        'marketing inmobiliario',
        'CRM inmobiliaria',
        'CRM desarrolladora',
        'Meta Ads inmobiliaria',
        'WhatsApp Business inmobiliaria',
        'leads inmobiliarios',
        'GrowthBrick',
    ],
    authors: [{ name: 'GrowthBrick' }],
    creator: 'GrowthBrick',
    openGraph: {
        type: 'website',
        locale: 'es_AR',
        url: 'https://growthbrick.tech',
        siteName: 'GrowthBrick',
        title: 'GrowthBrick — Agencia digital para inmobiliarias y desarrolladoras',
        description:
            'Meta Ads, WhatsApp centralizado y CRM para operar más leads con menos fricción.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'GrowthBrick',
        description:
            'Agencia digital para inmobiliarias y desarrolladoras. Meta Ads, WhatsApp y CRM propio.',
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
        <html lang="es-AR" className={inter.variable}>
            <body>{children}</body>
        </html>
    );
}
