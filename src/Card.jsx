// Este componente debería recibir por props y mostrar en pantalla la información que envía el usuario
const Card = ({ userDataList }) => {
	return (
		<div>
			{userDataList.map((userData) => (
				<div key={userData.id}>
					<h2>Datos registrados</h2>
					<ul>
						<li>Nombre: {userData.name}</li>
						<li>Fecha Nacimiento: {userData.birthDate}</li>
					</ul>
				</div>
			))}
		</div>
	);
};

export default Card;
