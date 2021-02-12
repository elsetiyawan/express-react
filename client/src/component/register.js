import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [registerData, setRegisterData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState();
  const handleChange = (e) => {
    e.preventDefault();
    setRegisterData((prevState) => ({
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
      body: JSON.stringify(registerData),
    };

    fetch(`${targetUrl}/api/users/register`, requestOptions)
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  };

  return (
    <center>
      {!message ? (
        <>
          <div>Register page</div>
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
            Login <Link to="login">here</Link>!
          </div>
        </>
      )}
    </center>
  );
}

export default Register;
