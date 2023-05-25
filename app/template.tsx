import TransitionEffect from "@/app/components/TransitionEffect";
export default function RootTemplate(
    {
        children
    }:
        {
            children: React.ReactNode
        }
) {
    return (
        <>
            <TransitionEffect />
            {children}
        </>
    )
}
