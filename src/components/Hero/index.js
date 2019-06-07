import React from 'react'
export const Hero = (props) => {
    const {filters} = props
    return (
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                <h1 className="title">Hoteles</h1>
                <h2 className="subtitle">
                    desde el <strong>{filters.dateFrom.toLocaleDateString()}</strong> hasta el <strong>{filters.dateTo.toLocaleDateString()}</strong>
                    {filters.country && filters.country !== 'Todos los países' ? ` en ${filters.country}` : ''}
                    {filters.price && filters.price !== 'Cualquier precio' ? ` por  ${filters.price}` : ''}
                    {filters.rooms && filters.rooms !== 'Cualquier tamaño' ? ` de hasta ${filters.rooms} habitaciones` : ''}
                </h2>
                </div>
            </div>
        </section>
    )
}