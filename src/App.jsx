// Vamos a poner en práctica los conocimientos que hemos adquirido acerca de la creación y manejo de formularios utilizando React. Para ello, te pediremos que crees un pequeño formulario, el cual deberá permitir a cualquier persona interactuar con el mismo ingresando los datos que se solicitan. Una vez ingresados dichos datos, al hacer clic en el botón de Enviar, se deberán llevar a cabo ciertas validaciones para corroborar que la información ingresada coincida con los datos esperados. Si ello es así, mostraremos en pantalla un componente que contendrá toda la información recibida. Caso contrario, deberás mostrar un mensaje de error.

import { useState } from "react";
import Card from "./Card";

const App = () => {
	//Aquí deberías agregar los estados y los handlers para los inputs
	const [userDataList, setUserDataList] = useState([]);
	const [userData, setUserData] = useState({ id: "", name: "", birthDate: "" });
	const [errorNameLength, setErrorNameLength] = useState("");
	const [errorBirthDateLength, setErrorBirthDateLength] = useState("");

	const handleChangeInputName = (e) => {
		if (e.target.value.length < 3) setErrorNameLength("Campo obligatorio de al menos 3 caracteres");
		else setErrorNameLength("");
		setUserData({ ...userData, name: e.target.value });
	};

	const handleChangeInputBirthday = (e) => {
		if (e.target.value.length < 6)
			setErrorBirthDateLength("Campo obligatorio de al menos 6 caracteres");
		else setErrorBirthDateLength("");
		setUserData({ ...userData, birthDate: e.target.value });
	};

	const handleButtonSubmit = (e) => {
		e.preventDefault();

		const userName = userData.name.trim();
		const userBirthDate = userData.birthDate.trim();
		if (userName.length < 3 || userBirthDate.length < 6) return;
		else setUserData({ id: crypto.randomUUID(), name: userName, birthDate: userBirthDate });

		setUserDataList([
			...userDataList,
			{
				...userData,
				id: crypto.randomUUID(),
				name: userName,
				birthDate: userBirthDate,
			},
		]);
		console.log(userDataList);

		setUserData({ id: "", name: "", birthDate: "" });
	};

	return (
		<div className="App">
			<h1>Ingresa tus datos por favor</h1>
			<form onSubmit={handleButtonSubmit}>
				<div>
					<label htmlFor="userName">Ingresa tu nombre:</label>
					<input
						value={userData.name}
						onChange={handleChangeInputName}
						type="text"
						name="userName"
						id="userName"
					/>
					{errorNameLength && <p>{errorNameLength}</p>}
				</div>
				<div>
					<label htmlFor="userBirthday">Ingresa tu fecha de nacimiento(DDMMAAAA)</label>
					<input
						value={userData.birthDate}
						onChange={handleChangeInputBirthday}
						type="text"
						id="userBirthday"
						name="userBirthday"
					/>
					{errorBirthDateLength && <p>{errorBirthDateLength}</p>}
				</div>
				<button type="submit">Enviar</button>
			</form>
			<Card userDataList={userDataList} />
		</div>
	);
};

export default App;
