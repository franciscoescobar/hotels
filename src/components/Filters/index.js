import React from 'react'
import {DateFilter} from '../DateFilter'
import {OptionsFilter} from '../OptionsFilter'

export const Filters = (props) => {
    
    const handleDateChange = (event) => {
        const {filters, onFilterChange} = props
        const newDate = new Date(event.target.value+ 'T01:00:00')
        if(event.target.name === 'dateFrom' && filters['dateTo'] > newDate) {
            const payload = { ...filters, [event.target.name]: newDate}
            onFilterChange(payload)
        }
        else if (event.target.name === 'dateTo' && filters['dateFrom'] > newDate) {
            const payload = { ...filters, [event.target.name]: newDate, ['dateFrom']: newDate}
            onFilterChange(payload)
        }
        else if (event.target.name === 'dateTo') {
            const payload = { ...filters, [event.target.name]: newDate}
            onFilterChange(payload)
        }
        
    }
    const handleOptionChange = (event) => {
        const { filters, onFilterChange } = props
        const payload = { ...filters, [event.target.name]: event.target.value }

        onFilterChange(payload)
    }

    const {dateFrom, dateTo, country, price, rooms} = props.filters
    return (
        <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
            <div className="navbar-item">
            <DateFilter
                date={dateFrom}
                icon="sign-in-alt"
                onDateChange={handleDateChange}
                name="dateFrom" />
            </div>
            <div className="navbar-item">
            <DateFilter
                date={dateTo}
                icon="sign-out-alt"
                onDateChange={handleDateChange}
                name="dateTo" />
            </div>
            <div className="navbar-item">
            <OptionsFilter
                options={ [ {value: undefined, name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] }
                selected={country}
                icon="globe"
                onOptionsChange={handleOptionChange}
                name="country" />
            </div>
            <div className="navbar-item">
            <OptionsFilter
                options={ [ {value: undefined, name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
                selected={price}
                icon="dollar-sign"
                onOptionsChange={handleOptionChange}
                name="price" />
            </div>
            <div className="navbar-item">
            <OptionsFilter
                options={ [ {value: undefined, name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 40, name: 'Hotel grande'} ] }
                selected={rooms}
                icon="bed"
                onOptionsChange={handleOptionChange}
                name="rooms" />
            </div>
        </nav>
    ) 
}