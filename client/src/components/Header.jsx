import {NavLink} from "react-router";

export  default function Header() {
    return (
        <>
            <header className="App-header flex items-center justify-between p-4 ">
                <h1 className="text-3xl font-bold"><NavLink to="/" className={({isActive}) => `${ isActive ? "text-emerald-700" : "text-slate-700"} 
                hover:text-4xl transition-all duration-100 ease-linear`}>Logo</NavLink></h1>
                <ul className="flex items-center justify-center gap-4 text-lg font-sans ">
                    <li><NavLink to="/login" className={({isActive}) => `${ isActive ? "text-emerald-700" : "text-slate-700"}
                     hover:text-xl transition-all duration-100 ease-linear`}>
                        Login</NavLink></li>
                    <li><NavLink to="/signup" className={({isActive}) => `${ isActive ? "text-emerald-700" : "text-slate-700"} 
                    hover:text-xl transition-all duration-100 ease-linear `}>Signup</NavLink></li>
                </ul>
            </header>
        </>
    )
}
