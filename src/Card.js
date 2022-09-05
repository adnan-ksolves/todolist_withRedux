
import React from 'react'

const Card = (props) => {
  return (
<div className="card" style={{border:"1px solid rgba(0,0,0,0.5)",height:"150px"}}>
  <div className="card-body">
    <p className="card-text">{props.note}</p>
    <button className="btn btn-outline-danger btn-sm position-absolute bottom-0 mb-3" onClick={props.delete} name={props.id}>Delete</button>
  </div>
</div>
  )
}

export default Card
