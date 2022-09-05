import React from 'react';
import { useState } from 'react';
import Card from './Card';
import Header from './Header';
import {useSelector,useDispatch} from "react-redux"
import { addNote,delNote } from './actions/actions';


const App = () => {
const myState=useSelector((state)=>state.update);
const dispatch=useDispatch();

const[display,setDisplay]=useState({display:"none"});
const [note,setNote]=useState();

const add = () => {
dispatch(addNote(note));
  setNote("");
  hide();
}

const del = (e) => {
  let i=parseInt(e.target.name);
 dispatch(delNote(i));
}

const handleNote = (e) => {
  setNote(e.target.value);
}


const show = () => {
  setDisplay({display:"block"})
}

const hide = () => {
  setDisplay({display:"none"});
  setNote("");
}


  return (
  <>
  <Header show={show}/>


 <div className="card text-center" style={display}>
  <div className="card-body text-center">
    <p className="card-text">
      <textarea maxLength="80" className="w-75 rounded" value={note} onChange={handleNote} placeholder="Type here" autoFocus></textarea>
      </p>
    <button className="btn btn-outline-success btn-sm" onClick={add}>Save </button>
    <button className="btn btn-outline-danger btn-sm mx-1" onClick={hide}>Cancel</button>
  </div></div>
  

<div className="container">
  <div className="row gy-2">
{myState.map((val,i)=>{
   return( <div key={i} className='col col-6'> 
   <Card note={val} id={i} delete={del}/>
   </div>)
})}  
  </div>
</div>
  </>  
  
  )
}

export default App
