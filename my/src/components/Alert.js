import React from 'react'

function Alert(props) {
    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div class="row" style={{ height:'50px' }}>
          { props.alert &&  <div className={`alert alert-${props.alert.type}  m-auto col-lg-6 col-sm-12`} role="alert">
                    <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
                </div>
          }
        </div>
    )
}

export default Alert
