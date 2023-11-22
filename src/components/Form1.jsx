import React, { useState, useEffect } from "react";
import Board1 from "./Board1";

function Form1() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const [user, setUser] = useState({
    name: "",
    asistence: "",
    workedHours: "",
    salary: "",
    base: 0,
    ahorro: 0,
    vacaciones: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const calculateAhorro = (salary) => {
    // Puedes realizar el cálculo del ahorro según tu lógica específica
    // En este ejemplo, simplemente se toma el 10% del salario
    return parseFloat(salary) * 0.1 || 0;
  };

  const calculateVacaciones = (workedHours) => {
    // Puedes realizar el cálculo de las vacaciones según tu lógica específica
    // En este ejemplo, se asume 1 día de vacaciones por cada 20 horas trabajadas
    return Math.floor(parseFloat(workedHours) / 20) || 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      user.name.trim() !== "" &&
      user.asistence.trim() !== "" &&
      user.workedHours.trim() !== "" &&
      user.salary.trim() !== ""
    ) {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const salary = parseFloat(user.salary);
      const baseSalary = salary / 30;

      // Calcular ahorro y vacaciones
      const ahorro = calculateAhorro(salary);
      const vacaciones = calculateVacaciones(user.workedHours);

      setUsers((prevUsers) => [
        ...prevUsers,
        {
          ...user,
          base: baseSalary,
          ahorro: ahorro,
          vacaciones: vacaciones,
        },
      ]);

      setIsLoading(false);
      setUser({
        name: "",
        asistence: "",
        workedHours: "",
        salary: "",
        base: 0,
        ahorro: 0,
        vacaciones: 0,
      });
    }
  };

  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          minHeight: "380px",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Nombre"
          className="input input-bordered w-full max-w-xs"
          name="name"
          value={user.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Asistencia Diaria"
          className="input input-bordered w-full max-w-xs"
          name="asistence"
          value={user.asistence}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Horas trabajadas"
          className="input input-bordered w-full max-w-xs"
          name="workedHours"
          value={user.workedHours}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="[$] Salario"
          className="input input-bordered w-full max-w-xs"
          name="salary"
          value={user.salary}
          onChange={handleInputChange}
          required
        />
        {/* Otros campos de formulario */}
        <button
          className="btn"
          style={{ outline: "none", backgroundColor: "#dfdfdf" }}
          type="submit"
        >
          <span
            className={`loading-spinner ${isLoading ? "loading" : ""}`}
          ></span>
          {isLoading ? "Calculando" : "Calcular"}
        </button>
      </form>

      <button
        className="btn"
        style={{ width: "100%" }}
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        See all users
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <Board1 users={users} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default Form1;
