import React from 'react'

function Alert(props) {
    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div className='container '>
            <div className={`alert alert-${props.alert.type} w-50 mt-5`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
            </div>
        </div>
    )
}

export default Alert
