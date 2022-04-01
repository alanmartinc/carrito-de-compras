import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <nav className="flex justify-between items-center h-16 bg-black text-white relative shadow-sm">
            <p className="pl-8">© All Rights Reserved. Created by Alan Martin Cabot</p>

            <div className="pr-8 hidden md:block">
                <Link to="/" className="p-4">
                    Inicio
                </Link>

                <Link to="/portfolio" className="p-4">
                    Portfolio
                </Link>

                <Link to="/contact" className="p-4">
                    Contacto
                </Link>
            </div>
        </nav>
    );
}