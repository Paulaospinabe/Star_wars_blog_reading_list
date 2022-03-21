import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../store/appContext'


const Personajeinfo = () => {
    const params = useParams()
    console.log(params)
    const { store, actions } = useContext(Context)
    console.log(store)

    useEffect(() => {
        actions.GetDetallePersonaje(params.uid)
    }, [])
  
    return (
        
        <div style={{ padding: "1em 5rem 5%" }}>
             <><img className="rounded float-left" src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} style={{ width: "330px", height: "450px", float: "left", padding: ""}} alt="..."></img></>
            {store.Detallepersonaje.length !== 0 && store.Detallepersonaje.uid === params.uid ? (
               
               <div >
                
                    <h4 style={{ color: "red", textAlign: "center", paddingcenter: "25%" }}> Name </h4><h6 style={{textAlign: "center", paddingcenter: "25%"}}>{store.Detallepersonaje.properties.name}  </h6>
                    <h4 style={{ color: "red", textAlign: "center", paddingcenter: "25%"  }}> Description </h4><h6 style={{textAlign: "center", paddingcenter: "25%"}}>{store.Detallepersonaje.description}  </h6>
                    <h4 style={{ color: "red", textAlign: "center", paddingcenter: "25%"  }}> Created </h4><h6 style={{textAlign: "center", paddingcenter: "25%"}}>{store.Detallepersonaje.properties.created}  </h6>
                    <h4 style={{ color: "red", textAlign: "center", paddingcenter: "25%"  }}> Gender </h4><h6 style={{textAlign: "center", paddingcenter: "25%"}}>{store.Detallepersonaje.properties.gender}  </h6>
                    <h4 style={{ color: "red", textAlign: "center", paddingcenter: "25%"  }}> Eye-Color </h4><h6 style={{textAlign: "center", paddingcenter: "25%"}}>{store.Detallepersonaje.properties.eye_color}  </h6>
                    <h4 style={{ color: "red", textAlign: "center", paddingcenter: "25%"  }}> Hair-Color </h4> <h6 style={{textAlign: "center", paddingcenter: "25%"}}> {store.Detallepersonaje.properties.hair_color}  </h6>
                    <h4 style={{ color: "red", textAlign: "center", paddingcenter: "25%"  }}> Birth-Year </h4> <h6 style={{textAlign: "center", paddingcenter: "25%"}}>{store.Detallepersonaje.properties.birth_year}  </h6>
                   
                </div>
            ) : (
               <div style={{textAlign: "center"}}>Cargando...</div> 
            )}

        </div>
    )
}

export default Personajeinfo
