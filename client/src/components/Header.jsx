import {NavLink} from "react-router";

export  default function Header() {
    return (
        <>
            <header className="App-header flex items-center justify-between p-4 ">
                <h1 className="text-3xl font-bold"><NavLink to="/">Logo</NavLink></h1>
                <ul className="flex items-center justify-center gap-4 text-lg font-sans ">
                    <li><NavLink to="/login" >Login</NavLink></li>
                    <li><NavLink to="/signup">Signup</NavLink></li>
                </ul>
            </header>
        </>
    )
}
