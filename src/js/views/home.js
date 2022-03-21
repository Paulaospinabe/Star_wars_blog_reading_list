import React, { useContext } from "react";
import Cards from "../component/Cards";


import "../../styles/home.css";
import { Context } from "../store/appContext";
import propTypes from "prop-types";


export const Home = () => {
	const { store, actions } = useContext(Context)
	console.log(store)
	return (
		<div>
			<div className="container-fluid" style={{ padding: "1em 5rem 5%" }}>
				<h1 style={{ color: "red" }}>Characters</h1>
				<br></br>
				<div className="row flex-nowrap, d-flex flex-row flex-nowrap overflow-auto w-auto">
					{store.Personajeinfo.map((item, index) => {

					return (

						<div className="col-3" key={index} >



							<Cards type={"Personaje"} uid={item.uid} name={item.name} />

						</div>)
				})}
				</div>
				<br></br>
				<h1 style={{ color: "red" }}>Planets</h1>
				<br></br>
				<div className="row flex-nowrap, d-flex flex-row flex-nowrap overflow-auto w-auto">
					{store.Planetasinfo.map((item, index) => {
					return (
						<div className="col-3" key={index} >



							<Cards type={"Planetas"} uid={item.uid} name={item.name} />

						</div>)
				})}
				</div>
			</div></div>



	);
}
