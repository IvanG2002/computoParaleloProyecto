import React, { useState, useEffect } from "react";
import Board2 from "./Board2";

function Form2() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    ISR: "",
    IMSS: "",
    sub: "",
    cuenta: "",
    salary: "",
    neta: 0,
    payed: false,
    ahorro: 0, // Nuevo campo para el ahorro
    vacaciones: 0, // Nuevo campo para las vacaciones
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const calculateNetSalary = (salary, isr, imss, sub) => {
    const isrAmount = parseFloat(isr) || 0;
    const imssAmount = parseFloat(imss) || 0;
    const subAmount = parseFloat(sub) || 0;

    return salary - isrAmount - imssAmount + subAmount;
  };

  const calculateAhorro = (salary) => {
    // Puedes ajustar el porcentaje de ahorro según tus necesidades
    return parseFloat(salary) * 0.1 || 0;
  };

  const calculateVacaciones = () => {
    // Puedes ajustar la lógica de cálculo de las vacaciones según tus necesidades
    // En este ejemplo, se asume 1 día de vacaciones por cada 20 horas trabajadas
    return Math.floor(parseFloat(user.workedHours) / 20) || 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const netSalary = calculateNetSalary(
        user.salary,
        user.ISR,
        user.IMSS,
        user.sub
      );

      // Calcular ahorro y vacaciones
      const ahorro = calculateAhorro(user.salary);
      const vacaciones = calculateVacaciones();

      setUsers((prevUsers) => [
        ...prevUsers,
        {
          ...user,
          neta: netSalary,
          payed: true,
          ahorro: ahorro,
          vacaciones: vacaciones,
        },
      ]);

      setUser({
        ISR: "",
        IMSS: "",
        sub: "",
        cuenta: "",
        salary: "",
        neta: 0,
        ahorro: 0,
        vacaciones: 0,
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("Usuario actual:", user);
  }, [user]);

  useEffect(() => {
    console.log("Arreglo de usuarios actual:", users);
  }, [users]);

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
          placeholder="[$] ISR"
          className="input input-bordered w-full max-w-xs"
          name="ISR"
          value={user.ISR}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="[$] IMSS"
          className="input input-bordered w-full max-w-xs"
          name="IMSS"
          value={user.IMSS}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="[$] Subsidio"
          className="input input-bordered w-full max-w-xs"
          name="sub"
          value={user.sub}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          placeholder="[$] Salario"
          className="input input-bordered w-full max-w-xs"
          name="salary"
          value={user.salary}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Número de cuenta"
          className="input input-bordered w-full max-w-xs"
          name="cuenta"
          value={user.cuenta}
          onChange={handleInputChange}
          required
        />
        <button
          className="btn"
          style={{
            outline: "none",
            backgroundColor: "#dfdfdf",
          }}
          type="submit"
        >
          <span
            className={`loading-spinner ${isLoading ? "loading" : ""}`}
          ></span>
          {isLoading ? "Pagando..." : "Pagar"}
        </button>
      </form>
      <button
        className="btn"
        style={{ width: "100%" }}
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Ver todos los usuarios
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <Board2 users={users} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>cerrar</button>
        </form>
      </dialog>
    </>
  );
}

export default Form2;
