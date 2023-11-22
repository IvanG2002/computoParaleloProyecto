import React from "react";

function Board1({ users }) {
  return (
    <div>
      {users.length > 0 ? (
        users.map((user, index) => (
          <div
            style={{
              border: "1px solid #cecece",
              padding: "5px",
              borderRadius: "3px",
              marginBottom: "5px",
            }}
            key={index}
          >
            <p>Nombre: {user.name}</p>
            <p>Asistencia Diaria: {user.asistence}</p>
            <p>Horas trabajadas: {user.workedHours}</p>
            <p>Salario: ${user.salary}</p>
            <p>N.Base: ${user.base}</p>
            <p>Ahorro: ${user.ahorro}</p>
            <p>Vacaciones: {user.vacaciones} dias libres</p>
          </div>
        ))
      ) : (
        <p>No hay usuarios para mostrar.</p>
      )}
    </div>
  );
}

export default Board1;
