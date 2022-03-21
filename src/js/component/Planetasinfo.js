import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../store/appContext'

const Planetasinfo = () => {
  const params = useParams()
  console.log(params)
  const { store, actions } = useContext(Context)
  console.log(store)

  useEffect(() => {
    actions.GetDetallePlaneta(params.uid)
  }, [])
  return (
    <div>
      <div style={{ padding: "1em 5rem 5%" }}>
        <><img className="rounded float-left" src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
          }} style={{ width: "450px", height: "450px", float: "left", padding: "" }} ></img></>
        {store.Detalleplaneta.length !== 0 && store.Detalleplaneta.uid === params.uid ? (
          <>


            <h4 style={{ color: "red", textAlign: "center", paddingcenter: "25%" }}> Name </h4><h6 style={{ textAlign: "center", paddingcenter: "25%" }}>{store.Detalleplaneta.properties.name}  </h6>
            <h4 style={{ color: "red", textAlign: "center", paddingcenter: "25%" }}> Description </h4> <h6 style={{ textAlign: "center", paddingcenter: "25%" }}> {store.Detalleplaneta.description}  </h6>
            <h4 style={{ color: "red", textAlign: "center", paddingcenter: "25%" }}> Climate </h4> <h6 style={{ textAlign: "center", paddingcenter: "25%" }}>{store.Detalleplaneta.properties.climate}  </h6>
            <h4 style={{ color: "red", textAlign: "center", paddingcenter: "25%" }}> Created </h4> <h6 style={{ textAlign: "center", paddingcenter: "25%" }}>{store.Detalleplaneta.properties.created}  </h6>
            <h4 style={{ color: "red", textAlign: "center", paddingcenter: "25%" }}> Orbital-Period </h4><h6 style={{ textAlign: "center", paddingcenter: "25%" }}>{store.Detalleplaneta.properties.orbital_period}  </h6>
            <h4 style={{ color: "red", textAlign: "center", paddingcenter: "25%" }}> Rotation-Period </h4><h6 style={{ textAlign: "center", paddingcenter: "25%" }}>{store.Detalleplaneta.properties.rotation_period}  </h6>
            <h4 style={{ color: "red", textAlign: "center", paddingcenter: "25%" }}> Terrain </h4> <h6 style={{ textAlign: "center", paddingcenter: "25%" }}>{store.Detalleplaneta.properties.terrain}  </h6>

          </>
        ) : (
          "Cargando..."
        )}
      </div>
    </div>
  )
}



export default Planetasinfo