import './blog.css'
export const metadata = {
    title: 'Blog Title',
    description: 'Website Blog Description',
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
        <div className={`container`}>
            {children}
        </div>
    )
}
