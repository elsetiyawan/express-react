import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState();
  const handleChange = (e) => {
    e.preventDefault();
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const targetUrl = process.env.REACT_APP_API_URL;
    console.log(targetUrl);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    };

    fetch(`${targetUrl}/api/users/login`, requestOptions)
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  };

  return (
    <center>
      {!message ? (
        <>
          <div>Login page</div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Username / Email:
                <input type="text" name="email" onChange={handleChange} />
              </label>
            </div>
            <div>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
              </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </>
      ) : (
        <>
          <div>{message}</div>
          <div>
            Register <Link to="register">here</Link>!
          </div>
        </>
      )}
    </center>
  );
}

export default Login;
