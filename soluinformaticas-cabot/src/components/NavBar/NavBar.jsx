import { Link } from "react-router-dom";
import Icono from "./Icono/Icono";
import Logo from "./Logo/Logo";

export default function NavBar({openClose}) {
    return (
        <nav className="flex justify-between items-center h-16 bg-black text-white relative shadow-sm">
            <Link to="/" className="pl-8">
                <Logo />
            </Link>

            <div className="px-8 cursor-pointer md:hidden" onClick={openClose}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>

            <div className="hidden md:block">
                <Link to="/" className="p-4 hover:bg-yellow-600">
                    Inicio
                </Link>

                <Link to="/portfolio" className="p-4 hover:bg-yellow-600">
                    Portfolio
                </Link>

                <Link to="/contact" className="p-4 hover:bg-yellow-600">
                    Contacto
                </Link>
            </div>

            <div className="pr-8 hidden md:block">
                <Link to="#">
                    <Icono />
                </Link>
            </div>
        </nav>
    );
}