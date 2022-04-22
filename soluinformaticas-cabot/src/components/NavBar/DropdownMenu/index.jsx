import { Link } from "react-router-dom";
import Cart from "../Cart";

export default function DropdownMenu({handleOpenCloseNew}) {
    return (
        <div className="flex justify-end grid grid-rows-3 text-right items-center bg-yellow-600" onClick={handleOpenCloseNew}>
            <Link to={`/products`} className="p-4 hover:bg-yellow-600">
                Productos
            </Link>

            <Link to={"/category/frontend"} className="p-4 hover:bg-yellow-600">
                Frontend
            </Link>

            <Link to={"/category/backend"} className="p-4 hover:bg-yellow-600">
                Backend
            </Link>

            <Link to={"/category/diseño-grafico"} className="p-4 hover:bg-yellow-600">
                Diseño Grafico
            </Link>

            <Link to={"/category/marketing-digital"} className="p-4 hover:bg-yellow-600">
                Marketing Digital
            </Link>

            <Link to={`/services`} className="p-4">
                Servicios
            </Link>

            <Link to={`/portfolio`} className="p-4">
                Portfolio
            </Link>

            <Link to={`/contact`} className="p-4">
                Contacto
            </Link>

            <Link to={`/cart`} className="p-4">
                <Cart />
            </Link>
        </div>
    );
}