import React from 'react'

export const OptionsFilter = (props) =>{
    const {icon, options, selected, onOptionsChange, name} = props
    return (
        <div className="field">
            <div className="control has-icons-left">
                <div className="select" style={ {width: '100%'} }>
                <select style={ {width: '100%'} } value={selected} onChange={onOptionsChange} name={name} >
                    {options.map( option => {
                        return (
                            <option key={option.name+option.value} value={option.value}>{option.name}</option>
                        )
                    })}
                </select>
                </div>
                <div className="icon is-small is-left">
                    <i className={`fas fa-${icon}`}></i>
                </div>
            </div>
        </div>
    )
}