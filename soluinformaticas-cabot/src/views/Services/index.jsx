const services = [
    {
        id: 1,
        name: 'Landing Page',
        description:
        <ul>
            <li>Página web estática</li>
            <li>Secciones: 1</li>
            <li>Fotos sin Cargo: Hasta 10</li>
            <li>Adaptable a cualquier dispositivo</li>
            <li>Vinculación a Redes Sociales</li>
            <li>Vinculación a PDF</li>
            <li>Dominio: Gratis x 1 año</li>
            Incluye servicio de hosting y dominio.
        </ul>,
    },
    {
        id: 2,
        name: 'Sitio Web',
        description:
        <ul>
            <li>Secciones: hasta 8</li>
            <li>Fotos sin Cargo: Hasta 10</li>
            <li>Adaptable a cualquier dispositivo</li>
            <li>Vinculación a Redes Sociales</li>
            <li>Vinculación a PDF</li>
            <li>[GRATIS] SITIO SEGURO - CERTIFICADO SSL</li>
            <li>Formulario de Contacto</li>
            <li>Mapa de ubicación</li>
            <li>Mail Corporativo</li>
            <li>Banners animados</li>
            <li>Dominio: Gratis x 1 año</li>
            Incluye servicio de hosting y dominio.
        </ul>,
    },
    {
        id: 3,
        name: 'Autoadministrable',
        description:
        <ul>
            <li>Secciones: hasta 8</li>
            <li>Fotos sin Cargo: Hasta 15</li>
            <li>Adaptable a cualquier dispositivo</li>
            <li>Vinculación a Redes Sociales</li>
            <li>Vinculación a PDF</li>
            <li>[GRATIS] SITIO SEGURO - CERTIFICADO SSL</li>
            <li>Formulario de Contacto</li>
            <li>Mapa de ubicación</li>
            <li>Mail Corporativo</li>
            <li>Banners animados</li>
            <li>Autogestión de Contenido</li>
            <li>Dominio: Gratis x 1 año</li>
            Incluye servicio de hosting y dominio.
        </ul>,
    },
    {
        id: 4,
        name: 'Ecommerce',
        description:
        <ul>
            <li>Secciones: hasta 10</li>
            <li>Fotos sin Cargo: Hasta 25</li>
            <li>Adaptable a cualquier dispositivo</li>
            <li>Vinculación a Redes Sociales</li>
            <li>Vinculación a PDF</li>
            <li>[GRATIS] SITIO SEGURO - CERTIFICADO SSL</li>
            <li>Formulario de Contacto</li>
            <li>Mapa de ubicación</li>
            <li>Mail Corporativo</li>
            <li>Banners animados</li>
            <li>Autogestión de Contenido</li>
            <li>Carrito de Compras</li>
            <li>Cobros Online</li>
            <li>Vinculación con Mercado Pago</li>
            <li>Dominio: Gratis x 1 año</li>
            Incluye servicio de hosting y dominio.
        </ul>,
    },
]

export default function Services() {
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h1 className="tracking-tight font-extrabold text-gray-900 text-2xl md:text-4xl mb-6">
                        Servicios
                    </h1>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {services.map((service) => (
                            <div key={service.id} className="relative bg-black p-4 rounded">
                                <dt>
                                    <p className="ml-16 text-lg leading-6 font-medium text-white">{service.name}</p>
                                </dt>

                                <ul className="mt-2 ml-16 text-base text-gray-400 pl-4">
                                    <li>
                                        {service.description}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}