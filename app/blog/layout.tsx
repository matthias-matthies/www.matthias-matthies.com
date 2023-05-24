import './blog.css'
export const metadata = {
    title: 'Blog Title',
    description: 'Website Blog Description',
}

export default function BlogLayout(
    {
        children
    }:
        {
            children: React.ReactNode
        }
) {
    return (
        <div className={`container mx-auto`}>
            {children}
        </div>
    )
}