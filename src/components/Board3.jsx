import React from "react";

function Board3({ users }) {
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
            <p>Salario bruto: ${user.bruto}</p>
            <p>Deducciones: ${user.deducciones}</p>
            <p>Retenciones calculadas: ${user.ret}</p>
          </div>
        ))
      ) : (
        <p>No hay usuarios para mostrar.</p>
      )}
    </div>
  );
}

export default Board3;
