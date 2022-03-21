import React, {useContext} from 'react'
import { Context } from '../store/appContext';
import PropType from 'prop-types'
import { Link } from "react-router-dom";


const Cards = (props) => {
  const {store, actions} = useContext(Context)
  return (
    <div className="card" style={{width: "18rem"}}>
  <img src={`https://starwars-visualguide.com/assets/img/${props.type == "Personaje" ? "characters" : "planets"}/${props.uid}.jpg`} onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
      }} className="card-img-top" alt="..."></img>
 
  <div className="card-body">
    <h4 className="card-title">{props.name}</h4>
    
    <p className="card-text">{props.name}</p>
    <button className='btn btn-info'><Link to={"/" + props.type + "/" + props.uid}> 
								<span>Learn more</span>
							</Link>
              
             </button>
             <button style={{float: "right"}} className="btn btn-warning" onClick={ () => {actions.AgregarFavorito(props.name)}} > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16" >
  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
</svg> </button>
               
  </div>
</div>
  )
}
Cards.propTypes={
  uid: PropType.string, name: PropType.string
}
Cards.propTypes={
  uid: PropType.string, name: PropType.string
}
export default Cards