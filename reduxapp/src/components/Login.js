import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/login";
import styles from "./Login.module.css";

function Login() {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="username">
        User
      </label>
      <input
        className={styles.input}
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label className={styles.label} htmlFor="password">
        Password
      </label>
      <input
        className={styles.input}
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={styles.button}>Send</button>
    </form>
  );
}

export default Login;
