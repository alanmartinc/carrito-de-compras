import { Fragment, useEffect, useState } from "react";
import ItemList from "./ItemList";

export default function ItemListContainer() {
    const [producto, setProducto] = useState([]);

    const products = [
        {
            id: 1,
            name: 'DESARROLLO WEB',
            description: 'Diseño UI/UX, maquetación, responsive web design y lógica del lado del cliente.',
            imageSrc: 'https://dwvisual.com.ar/wp-content/uploads/2019/09/desarrollo-web.jpg',
            imageAlt: "DESARROLLO WEB",
            price: '$250',
        },
        {
            id: 2,
            name: 'DISEÑO GRÁFICO',
            description: 'Diseño de logotipos, flyers, banners, tarjetas personales, publicitario, editorial, redes sociales.',
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFaszEDp-uCMl8GA1GluFOIQZMlwee7OhUA&usqp=CAU',
            imageAlt: "DISEÑO GRÁFICO",
            price: '$150',
        },
        {
            id: 3,
            name: 'MARKETING DIGITAL',
            description: 'Implementamos estrategias digitales para dar a conocer marcas utilizando los recursos que nos brinda internet.',
            imageSrc: 'https://www.unir.net/wp-content/uploads/2014/10/2202_empresa_fichasweb_shutterstock_1932042689_1920x10802.jpg',
            imageAlt: "MARKETING DIGITAL",
            price: '$100',
        },
        {
            id: 4,
            name: 'RESPONSIVE WEB DESIGN',
            description: 'Sitios web adaptados a diferentes tamaños de pantallas para facilitar la navegación.',
            imageSrc: 'https://accu-web.co.uk/wp-content/uploads/2021/10/pexels-negative-space-34140.jpg.webp',
            imageAlt: "RESPONSIVE WEB DESIGN",
            price: '$80',
        },
        {
            id: 5,
            name: 'POSICIONAMIENTO SEO',
            description: 'Nos enfocamos en posicionar su empresa en la web (Optimización para motores de búsqueda).',
            imageSrc: 'https://altamiraweb.net/wp-content/uploads/2019/04/Lo-que-debes-buscar-en-una-agencia-SEO-para-tu-empresa.jpg',
            imageAlt: "POSICIONAMIENTO SEO",
            price: '$100',
        },
        {
            id: 6,
            name: 'AUTOMATIZACIÓN',
            description: 'Automatización y digitalización de procesos manuales / generación de reportes.',
            imageSrc: 'https://www.auraquantic.com/wp-content/uploads/2020/03/automatio-article-blog.png',
            imageAlt: "AUTOMATIZACIÓN",
            price: '$130',
        },
        {
            id: 7,
            name: 'DESARROLLO BACKEND',
            description: 'Desarrollo de APPs, analisis, seguridad, rendimiento y lógica del lado del servidor.',
            imageSrc: 'https://storage.googleapis.com/smartninja/opciones-desarrollador-1623141334.jpeg',
            imageAlt: "DESARROLLO BACKEND",
            price: '$200',
        },
        {
            id: 8,
            name: 'INTELIGENCIA ARTIFICIAL',
            description: 'Con Data Science optimizamos la información para un mejor rendimiento del negocio',
            imageSrc: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/08/inteligencia-artificial_0.jpg?itok=ELJn5KWr',
            imageAlt: "INTELIGENCIA ARTIFICIAL",
            price: '$190',
        },
    ]

    useEffect(() => {
        const pago = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {id: "1", name: "Bienvenido, seleccione un producto para empezar"},
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
        <Fragment>
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="lg:text-center">
                    <h1 className="tracking-tight font-extrabold text-gray-900 text-2xl md:text-4xl mb-6">
                        Precios
                    </h1>

                    <p className="font-extrabold text-gray-700 mb-6">
                        {producto.map(item => item.name)}
                    </p>
                </div>
    
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id}>
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 h-80 lg:aspect-none">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>

                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm mb-4">
                                        {product.name}
                                    </h3>

                                    <p className="text-sm text-gray-700">
                                        {product.description}
                                    </p>
                                </div>

                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>

                            <div className="mt-4">
                                <ItemList />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}