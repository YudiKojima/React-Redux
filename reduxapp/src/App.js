import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementar, reduzir } from "./store/contador";
import { abrir, fechar } from "./store/modal";
import { login } from "./store/login";

function App() {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { contador, modal } = useSelector((state) => state);
  const dispatch = useDispatch();
  // const { data } = useSelector((state) => state.login.user);

  const handleName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  return (
    <>
      <div>
        {modal && (
          <div>
            <h1>Total: {contador}</h1>
            <button onClick={() => dispatch(incrementar())}>Incrementar</button>
            <button onClick={() => dispatch(reduzir())}>Reduzir</button>
          </div>
        )}
        <button onClick={() => dispatch(abrir())}>Abrir</button>
        <button onClick={() => dispatch(fechar())}>Fechar</button>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label style={{ display: "block" }} htmlFor="username">
            User
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={handleName}
          />
          <label style={{ display: "block" }} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="text"
            value={password}
            onChange={handlePassword}
          />
          <button>Send</button>
          {/* <p>{data?.email}</p> */}
        </form>
      </div>
    </>
  );
}

export default App;
