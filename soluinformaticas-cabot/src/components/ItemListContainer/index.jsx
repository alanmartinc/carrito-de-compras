import { useEffect, useState } from "react";
import ItemList from "./ItemList";

export default function ItemListContainer() {
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        const pago = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {id: "0", name: "DESARROLLO WEB", description: "Diseño UI/UX, maquetación, responsive web design y lógica del lado del cliente."},
                    {id: "1", name: "DISEÑO GRÁFICO", description: "Diseño de logotipos, flyers, banners, tarjetas personales, publicitario, editorial, redes sociales."},
                    {id: "2", name: "MARKETING DIGITAL", description: "Implementamos estrategias digitales para dar a conocer marcas utilizando los recursos que nos brinda internet."},
                    {id: "3", name: "RESPONSIVE WEB DESIGN", description: "Sitios web adaptados a diferentes tamaños de pantallas para facilitar la navegación."},
                    {id: "4", name: "POSICIONAMIENTO SEO", description: "Nos enfocamos en posicionar su empresa en la web (Optimización para motores de búsqueda)."},
                    {id: "5", name: "AUTOMATIZACIÓN", description: "Automatización y digitalización de procesos manuales / generación de reportes."},
                    {id: "6", name: "DESARROLLO BACKEND", description: "Desarrollo de APPs, analisis, seguridad, rendimiento y lógica del lado del servidor."},
                    {id: "7", name: "INTELIGENCIA ARTIFICIAL", description: "Con Data Science optimizamos la información para un mejor rendimiento del negocio."},
                    {id: "8", name: "SOPORTE", description: "Brindamos soporte y mantenimiento post venta a nuestros clientes sobre trabajos realizados."}
                ])
            }, 3000);
        });

        pago
        .then((res) => {
            setProducto(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <>
            {producto.map(item => <li key={item.id}>{item.name + " " + item.description}</li>)}
            <ItemList />
        </>
    );
}