import React from 'react'
import '../../styles/ui/button.css'
import Path from '../../assets/frontend1/path.png'

function Button(props) {
  return (
    <button {...props}>
      <span>{props.text}</span>
      {props.icon && 
        // <img className="icon" src={Path}/>
        <img className="icon" src={require(`../../assets/frontend1/${props.icon}`)}/>
      }
    </button>
  )
}

export default Button