import './globals.css'
import LayoutHeader from '@/app/components/LayoutHeader'
import LayoutFooter from '@/app/components/LayoutFooter'
import React from 'react'
import CookieBanner from "@/app/components/CookieBanner";
import Script from "next/script";

export const metadata = {
    title: 'Matthias Matthies',
    description: 'Website Description',
}

export default function RootLayout(
    {
        children
    }:
    {
        children: React.ReactNode
    }
) {
    return (
        <html lang="de">
            <link rel="stylesheet" href="https://app.kookietool.de.test/v1/style" />
            <Script src="https://app.kookietool.de.test/v1/script"></Script>

            <body className="font-mont">
            <CookieBanner />
            <LayoutHeader />
            {children}
            <LayoutFooter />
            </body>
        </html>
    )
}
