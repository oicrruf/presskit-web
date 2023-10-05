import React from 'react'
import './InfoBox.css'


const InfoBox = ({titulo, descripcion}) => {
  return (
    <div className='InfoBox'>
    <h2>{titulo}</h2>
    <svg className='SvgLine'>
    <line x1={0} y1={0} x2={1000} y2={0} strokeWidth={2} stroke="white"></line>
    </svg>
    <h2>{descripcion}</h2>
  </div>
  )
}

export default InfoBox