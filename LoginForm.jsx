import { useState } from "react";
import PropTypes from "prop-types";

function LoginForm({ initialLogin = "", initialPassword = "" }) {
  const [login, setLogin] = useState(initialLogin);
  const [password, setPassword] = useState(initialPassword);
  const [saved, setSaved] = useState({
    login: initialLogin,
    password: initialPassword,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved({ login, password });
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <p>
          Логін:{" "}
          <input value={login} onChange={(e) => setLogin(e.target.value)} />
        </p>
        <p>
          Пароль:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <button type="submit">Зберегти</button>
      </form>

      <h3>Збережені дані</h3>
      <p>Логін: {saved.login || "—"}</p>
      <p>Пароль: {saved.password || "—"}</p>
    </div>
  );
}

LoginForm.propTypes = {
  initialLogin: PropTypes.string,
  initialPassword: PropTypes.string,
};

export default LoginForm;
