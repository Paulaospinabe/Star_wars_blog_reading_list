const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			Favoritos: [],
			Personajeinfo: [],
			Planetasinfo: [],
			Detallepersonaje: [],
			Detalleplaneta: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			MostrarPesonajes: () => {
				fetch("https://www.swapi.tech/api/people/")
				.then((Response) => Response.json())
				.then((data) => setStore({Personajeinfo: data.results}))
			},
			MostrarPlanetas: () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then((Response) => Response.json())
				.then((data) => setStore({Planetasinfo: data.results}))
			},
			GetDetallePersonaje: (uid) => {
				fetch("https://www.swapi.tech/api/people/" + uid)
				.then((Response) => Response.json())
				.then((data) => setStore({Detallepersonaje: data.result}))
			},
			GetDetallePlaneta: (uid) => {
				fetch("https://www.swapi.tech/api/planets/" + uid)
				.then((Response) => Response.json())
				.then((data) => setStore({Detalleplaneta: data.result}))
			},
			AgregarFavorito: (favorito) => {
				const store = getStore();
				setStore({Favoritos: [...store.Favoritos,favorito]})
			},
			EliminarFavorito: (favorito) => {
				const store = getStore();
				let NuevoFavorito = store.Favoritos.filter( (item) => {
					return item !== favorito

				})
				setStore({Favoritos: NuevoFavorito})
			},



			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
