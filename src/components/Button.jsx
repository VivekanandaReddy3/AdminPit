import React from 'react'

const Button = ({bgcolor, color, size,text,borderRadius}) => {
  return (
    <button type='button' style={{backgroundColor: bgcolor, color, borderRadius}} className={`text-${size} p-3 hover:drop-shadow-x1`}>
      {text}
    </button>

    )
}

export default Button