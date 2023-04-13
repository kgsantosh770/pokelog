import { Close, GitHub, Menu } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react'

const Navbar = () => {

    const APP_NAME = process?.env?.NEXT_PUBLIC_APPNAME ?? 'Pokemons'
    
    const navigationRoutes: string[] = [APP_NAME, 'about']
    const router = useRouter();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    function NavigationLink({ href, text }: { href: string, text: string }) {
        const path = (href === `/${APP_NAME}`) ? '/' : href
        const isActive = router.asPath === path
        return (
            <Link
                href={href === "/home" ? "/" : path}
                type='button'
                className={`
                    ${isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} 
                    rounded-md px-3 py-2 text-sm font-medium block sm:px-3 sm:py-2 sm:text-base capitalize
                `}
            >

                {text}
            </Link>
        );
    }

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <Close className="block h-6 w-6" aria-hidden="true" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                            )}
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                className="block h-8 w-auto"
                                src="/pokeball.png"
                                alt="Pokemon"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {
                                    navigationRoutes.map((singleRoute) => (
                                        <NavigationLink
                                            key={singleRoute}
                                            href={`/${singleRoute}`}
                                            text={singleRoute}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <a
                            href={process.env?.NEXT_PUBLIC_GITHUB_LINK ?? ''}
                            target='blank'
                            type="button"
                            className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="sr-only">Developed by</span>
                            <GitHub className="h-6 w-6" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>

            <div className={`sm:hidden transition-all duration-500 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {
                        navigationRoutes.map((singleRoute) => (
                            <NavigationLink
                                key={singleRoute}
                                href={`/${singleRoute}`}
                                text={singleRoute}
                            />
                        ))
                    }
                </div>
            </div>

        </nav>
    )
}

export default Navbar