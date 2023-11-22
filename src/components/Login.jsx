import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const inputs = document.querySelectorAll(".input");
    setIsLoading(true);

    try {
      // Simulate an asynchronous login process
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Check credentials
      if (username === "admin" && password === "admin") {
        // Set the state of authentication to true
        setAuthenticated(true);
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      // Disable isLoading after the operation is complete
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (authenticated) {
      // Redirect after authentication
      navigate("/components/UserDataInsert");
    }
  }, [authenticated, navigate]);

  return (
    <>
      <form className="card w-70">
        <div className="card-body">
          <input
            placeholder="Email"
            type="email"
            className="input input-bordered"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            placeholder="Password"
            type="password"
            className="input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className="label cursor-pointer">
            Accept terms of use
            <input type="checkbox" className="toggle" />
          </label>
          <label className="label cursor-pointer">
            Submit to newsletter
            <input type="checkbox" className="toggle" />
          </label>
          <button
            className="btn"
            style={{ outline: "none" }}
            onClick={handleLogin}
          >
            <span
              className={`loading-spinner ${isLoading ? "loading" : ""}`}
            ></span>
            {isLoading ? "" : "Log in"}
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
