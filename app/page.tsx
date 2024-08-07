import AnimatedHeading from "@/app/components/AnimatedHeading";
import AnimatedImage from "@/app/components/AnimatedImage";
import heroImage from "@/public/developer.png";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className='px-16 flex items-center justify-between h-screen'>
                <div className='w-1/2 md:block hidden'>
                    <AnimatedImage src={heroImage} alt="Digital Art - Developer created by Midjourney" />
                </div>
                <div className='md:w-1/2'>
                    <AnimatedHeading>
                        Matthias Matthies, Informatik Student, Sport-Enthusiast
                    </AnimatedHeading>
                    <p>
                        Moin! Mein Name ist Matthias und ich befinde mich aktuell im <b>4</b>.
                        Semester meines Informatikstudiums an der <Link target="_blank" className="text-blue-500" href="https://www.uni-bremen.de">Universität Bremen</Link>. Zusätzlich arbeite ich als Entwickler bei der <Link className="text-blue-500" href="https://www.k-evolution.de" target="_blank">K-Evolution GmbH</Link> in Sittensen.
                        In meiner Freizeit widme ich mich gerne sportlichen Aktivitäten und arbeite nebenbei an einigen privaten <Link className="text-blue-500" href="/projects">Programmierprojekten</Link>.
                    </p>
                </div>
            </div>
        </main>
    )

}
