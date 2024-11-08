// Vamos a poner en práctica los conocimientos que hemos adquirido acerca de la creación y manejo de formularios utilizando React. Para ello, te pediremos que crees un pequeño formulario, el cual deberá permitir a cualquier persona interactuar con el mismo ingresando los datos que se solicitan. Una vez ingresados dichos datos, al hacer clic en el botón de Enviar, se deberán llevar a cabo ciertas validaciones para corroborar que la información ingresada coincida con los datos esperados. Si ello es así, mostraremos en pantalla un componente que contendrá toda la información recibida. Caso contrario, deberás mostrar un mensaje de error.

import { useState } from "react";

function App() {
	//Aquí deberías agregar los estados y los handlers para los inputs
	const [dataContent, setDataContent] = useState([]);
	const [dataName, setDataName] = useState("");
	const [dataBirthday, setDataBirthday] = useState("");
	const [errorName, setErrorName] = useState("");
	const [errorBirthday, setErrorBirthday] = useState("");

	const handleChangeName = (e) => setDataName(e.target.value);
	const handleChangeBirthday = (e) => setDataBirthday(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (dataName.trim().length < 3) {
			setErrorName("Campo obligatorio de al menos 3 caracteres");
		} else if (dataBirthday.trim().length < 6) {
			setErrorBirthday("Campo obligatorio de al menos 6 caracteres");
			return;
		}
		if (dataName.trim().length >= 3) {
			setDataName(dataName.trim());
			setErrorName("");
		} else if (dataBirthday.trim().length >= 6) {
			setDataBirthday(dataBirthday.trim());
			setErrorBirthday("");
		}

		setDataContent(dataContent.push({ dataName, dataBirthday }));
		console.log(dataContent);

		setDataName("");
		setDataBirthday("");
	};

	return (
		<div className="App">
			<h1>¿De dónde nos visitas?</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="userName">Ingresa tu nombre</label>
					<input
						value={dataName}
						onChange={handleChangeName}
						type="text"
						name="userName"
						id="userName"
					/>
					{errorName && <p>{errorName}</p>}
				</div>
				<div>
					<label htmlFor="userBirthday">Ingresa tu fecha de nacimiento(DDMMAAAA)</label>
					<input
						value={dataBirthday}
						onChange={handleChangeBirthday}
						type="text"
						id="userBirthday"
						name="userBirthday"
					/>
					{errorBirthday && <p>{errorBirthday}</p>}
				</div>
				<button type="submit">Enviar</button>
			</form>
			{dataContent.map((data, index) => (
				<div key={index}>
					<h2>{data.dataName}</h2>
					<p>{data.dataBirthday}</p>
				</div>
			))}
		</div>
	);
}

export default App;
