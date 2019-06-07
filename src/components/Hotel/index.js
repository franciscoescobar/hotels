import React from 'react'

export const Hotel = (props) => {
    const {name,photo,description,rooms,country,city,price} = props.data
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                <img src={photo} alt="Sainte Jeanne Boutique & Spa" />
                </figure>
            </div>
            <div className="card-content">
                <p className="title is-4">{name}</p>
                <p>{description}</p>
                <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
                <div className="control">
                    <div className="tags has-addons">
                    <span className="tag is-medium is-info"><i className="fas fa-map-marker"></i></span>
                    <span className="tag is-medium">{city}, {country}</span>
                    </div>
                </div>
                <div className="control">
                    <div className="tags has-addons">
                    <span className="tag is-medium is-info"><i className="fas fa-bed"></i></span>
                    <span className="tag is-medium">{rooms} Habitaciones</span>
                    </div>
                </div>
                <div className="control">
                    <div className="tags">
                    <span className="tag is-medium is-info">
                        <i className="fas fa-dollar-sign" style={{margin: '0 .125em'}}></i>
                        <i className="fas fa-dollar-sign" style={price > 1 ? {margin: '0 .125em'} : {margin: '0 .125em', opacity: '.25'}}></i>
                        <i className="fas fa-dollar-sign" style={price > 2 ? {margin: '0 .125em'} : {margin: '0 .125em', opacity: '.25'}}></i>
                        <i className="fas fa-dollar-sign" style={price > 3 ? {margin: '0 .125em'} : {margin: '0 .125em', opacity: '.25'}}></i>
                    </span>
                    </div>
                </div>
                </div>
            </div>
            <div className="card-footer">
                <a href="https://www.google.com" className="card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</a>
            </div>
        </div>
    )
}