import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("demo@email.com");
  const [password, setPassword] = useState("demo1234");
  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Enter your Email </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Enter Your Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className="cta">Login</button>
        </div>
      </form>
    </main>
  );
}

export default Login;
