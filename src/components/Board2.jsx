import React from "react";

function Board2({ users }) {
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
            <p>ISR: ${user.ISR}</p>
            <p>IMSS: ${user.IMSS}</p>
            <p>Sub: ${user.sub}</p>
            <p>Número de cuenta: {user.cuenta}</p>
            <p>Salario: ${user.salary}</p>
            <p>Nómina Neta: ${user.neta}</p>
            <p>Ahorro: ${user.ahorro}</p>
            <p>Folio: {user.payed ? "Pagado" : "Sin pagar"}</p>
          </div>
        ))
      ) : (
        <p>No hay usuarios para mostrar.</p>
      )}
    </div>
  );
}

export default Board2;
