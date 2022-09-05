import React from 'react'

const Header = (props) => {
  return (
    <nav className="navbar bg-secondary mb-3">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1 text-light">To do list</span>

      <button type="button" className="btn btn-light" onClick={props.show}>Add new note</button>
    </div>
  </nav>
  )
}

export default Header
