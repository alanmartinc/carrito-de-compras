import { Link } from "react-router-dom";

export default function DropdownMenu({openCloseNew}) {
    return (
        <div className="grid grid-rows-3 text-right items-center bg-yellow-600" onClick={openCloseNew}>
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
    );
}