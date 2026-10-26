import { useRef, useState } from "react";
export default function App() {
  const userRef = useRef();
  const passRef = useRef();
  const [data, setData] = useState(null);
  const submit = (e) => {
    e.preventDefault();
    setData({ username: userRef.current.value, password: passRef.current.value });
  };
  return (
    <div className="app">
      <h1>Login (Uncontrolled)</h1>
      <form className="card" onSubmit={submit}>
        <input ref={userRef} placeholder="Username" required />
        <input ref={passRef} type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      {data && (
        <div className="card">
          <h2>Submitted Information</h2>
          <p>Username: {data.username}</p>
          <p>Password: {data.password}</p>
        </div>
      )}
    </div>
  );
}
