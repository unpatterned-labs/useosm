import { APP_CONFIG } from "@/config/Content"
import UseOSMLogo from '@/assets/useosm_logo.svg';
import { APP_ROUTES } from "@/config/Routes";
import { Button } from "@/components/ui/react/button";
import { useState } from "react";


export const NavBar = () => {

    const [hoveredNav, setHoveredNav] = useState<string | null>(null);

    return (
        <nav className="flex px-14 py-4 justify-between items-center">
            <div className="flex gap-x-40 items-center">
                <a href={APP_ROUTES.HOME}>
                    <img src={UseOSMLogo.src} alt="useOSM navigation Logo" loading="lazy" decoding="async" />
                </a>
                <ul className="flex gap-x-10">
                    {
                        Object.keys(APP_CONFIG.NAVBAR).map(route =>
                            <li
                                key={`route-${route}`}
                                className="relative"
                            >
                                <div
                                    onMouseEnter={() => setHoveredNav(route)}
                                    onMouseLeave={() => setHoveredNav(null)}
                                    className="relative"
                                >
                                    <Button
                                        variant={hoveredNav === route ? "navlinkHovered" : "navlink"}
                                        id="nav-link-button"
                                        size="lg" href={APP_CONFIG.NAVBAR[route].route}
                                    >
                                        {route}
                                    </Button>

                                    <div className={`${APP_CONFIG.NAVBAR[route].children.length > 0 && hoveredNav === route ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity duration-300 absolute z-10 translate-x-1/2 right-1/2 bg-white`}>
                                        {/* This is acting as the gap between the nav and the children. This is to prevent the container from dissappearing when the cursor is not on the nav. */}
                                        <span className="block w-full invisible h-4"></span>
                                        <ul
                                            className={`grid grid-cols-2 w-3xl gap-x-2 p-4 border border-grey-50 rounded-2xl shadow-2xl`}
                                        >
                                            {APP_CONFIG.NAVBAR[route].children.map((child) => (
                                                <a className="text-grey-400 font-semibold text-sm" href={child.route} key={child.title}>
                                                    <li  className="transition-colors duration-300 p-4 flex flex-col gap-2 rounded-2xl hover:bg-white-2">
                                                        <h1 className="text-grey-400 font-semibold text-sm">{child.title}</h1>
                                                        <p className="text-xs text-grey-200">{child.description}</p>
                                                    </li>
                                                </a>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div>
                {/* Todo - Add target=_blank to Button props */}
                <Button id="nav-cta-button" size="lg" href="https://openstreetmap.org" target='_blank'>
                    Get Started
                </Button>
            </div>
        </nav>
    )
}