import React from "react";
import { useState } from "react";
import Board3 from "./Board3";

function Form3() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const [user, setUser] = useState({
    name: "",
    bruto: "",
    deducciones: "",
    ret: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.name.trim() !== "" &&
      user.bruto.trim() !== "" &&
      user.deducciones.trim() !== ""
    ) {
      const bruto = parseFloat(user.bruto);
      const deducciones = parseFloat(user.deducciones);
      const ret = bruto - deducciones;

      setUsers((prevUsers) => {
        const updatedUsers = [...prevUsers, { ...user, ret }];
        // console.log(updatedUsers);
        return updatedUsers;
      });

      setUser({
        name: "",
        bruto: "",
        deducciones: "",
        ret: "",
      });

      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
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
          placeholder="[$] Sueldo bruto"
          className="input input-bordered w-full max-w-xs"
          name="bruto"
          value={user.bruto}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="[$] Deducciones"
          className="input input-bordered w-full max-w-xs"
          name="deducciones"
          value={user.deducciones}
          onChange={handleInputChange}
          required
        />
        <button
          className="btn"
          style={{
            outline: "none",
            backgroundColor: "#dfdfdf",
            marginTop: "78px",
          }}
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
          <Board3 users={users} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default Form3;
