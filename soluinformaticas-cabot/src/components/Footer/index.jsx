import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <nav className="flex justify-between items-center h-16 bg-black text-white relative shadow-sm">
            <p className="pl-8 text-xs">© All Rights Reserved. Created by Alan Martin Cabot</p>

            <div className="pr-8 hidden md:block">
                <Link to="/prices" className="p-4">
                    Precios
                </Link>

                <Link to="/services" className="p-4">
                    Servicios
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