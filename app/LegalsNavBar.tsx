import React from 'react'
import NavLink from '@/app/NavLink'

const LegalsNavBar: React.FC = () => {
    return (
        <div
            className="w-full px-32 py-8 font-medium flex items-center justify-between text-xs"
        >
            <p>

                &copy; Copyright {new Date().getFullYear()} Matthias Matthies. All rights reserved.
            </p>
            <nav className="flex flex-row">
                <NavLink href="/imprint" title="Imprint" className="mr-4" />
                <NavLink href="/privacy-policy" title="Privacy Policy" className="ml-4" />
            </nav>
        </div>
    )
}

export default LegalsNavBar