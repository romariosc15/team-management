export default function Container (props) {
    const getSelectedIconClass = (path) => props.currentPath === path ? 'border-r-yellow-500 bg-blue-950' : 'hover:border-r-yellow-500 hover:bg-blue-950'
    const getSelecteTextClass = (path) => props.currentPath === path ? 'font-semibold' : ''
    return (
        <div className="flex flex-row h-screen">
            <div className="bg-blue-900 pl-1 pt-24">
                <ul className="space-y-1">
                    <li>
                        <a href="/" className={`block p-2 transition-colors duration-300 border-r-[3px] border-r-transparent ${getSelectedIconClass('home')}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                <path d="M10 12h4v4h-4z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="/people" className={`block p-2 transition-colors duration-300 border-r-[3px] border-r-transparent ${getSelectedIconClass('people')}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clipboard-text" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                                <path d="M9 12h6" />
                                <path d="M9 16h6" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <button className="block p-2 transition-colors duration-300 border-r-[3px] border-r-transparent hover:border-r-yellow-500 hover:bg-blue-950">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-down" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4c.342 0 .674 .043 .99 .124" />
                                <path d="M19 16v6" />
                                <path d="M22 19l-3 3l-3 -3" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="bg-blue-800 text-white w-full rounded-r-lg">
                <div className="text-center mt-4 mb-8">
                    <h1 className="text-white text-5xl font-bold">buk</h1>
                </div>
                <ul className="px-2 space-y-1">
                    <li>
                        <a href="/" className={`hover:bg-blue-900 transition-colors duration-300 block px-4 py-2 rounded-lg ${getSelecteTextClass('home')}`}>
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="/people" className={`hover:bg-blue-900 transition-colors duration-300 block px-4 py-2 rounded-lg ${getSelecteTextClass('people')}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users inline-block mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                            </svg>
                            <span>Personas</span>
                        </a>
                    </li>
                    <li>
                        <button className="hover:bg-blue-900 transition-colors duration-300 block w-full text-left px-4 py-2 rounded-lg">
                            <span>Cerrar sesión</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}