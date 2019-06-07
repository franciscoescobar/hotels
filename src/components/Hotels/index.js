import React from 'react'
import {Hotel} from '../Hotel'

export const Hotels = (props) => {
    
    const {hotels, loading} = props
    return(
        <div>
            {loading ? <a className="button loading is-large is-loading">loading</a> : null}
            <section className="section" style={ {marginTop: '3em'} }>
                <div className="container">
                    <div className="columns is-multiline">
                        {   
                            hotels ? hotels.map(hotel => <div className="column is-one-third" key={hotel.name+hotel.city}><Hotel data={ hotel } /></div>) : <article className="message is-warning">
                                <div className="message-body">
                                    No se han encontrado hoteles que coincidan con los parámetros de búsqueda.
                                </div>
                            </article>
                            
                        }
                    </div>
                </div>
            </section>
        </div>
    )
} 