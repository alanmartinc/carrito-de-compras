import { useState, useEffect } from "react";
import NavBar from "../NavBar";
import DropdownMenu from "../NavBar/DropdownMenu";
import Footer from "../Footer";

export default function Layout({children}) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hideMenu = () => {
            if(window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", hideMenu);

        return() => {
            window.removeEventListener("resize", hideMenu);
        };
    });

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="h-screen">
            <NavBar handleOpenClose={toggleOpen} />
            {isOpen && <DropdownMenu handleOpenCloseNew={toggleOpen} />}
            {children}
            <Footer />
        </div>
    );
}
