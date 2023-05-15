import './globals.css'
import { Montserrat_Alternates } from 'next/font/google'
import LayoutHeader from '@/app/LayoutHeader'
import LayoutFooter from '@/app/LayoutFooter'

const mont = Montserrat_Alternates({
    weight: "500",
    subsets: ["latin"]
})

export const metadata = {
    title: 'Website Title',
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
            <body className={mont.className}>
            <LayoutHeader />
            {children}
            <LayoutFooter />
            </body>
        </html>
    )
}
