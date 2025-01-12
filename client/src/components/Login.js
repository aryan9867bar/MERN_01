import { NavLink, useNavigate } from "react-router-dom";
import loginpic from "../Images/login.jpg";
import { useState, useContext } from "react";
import { UserContext } from "../App";


function Login() {
    const {state, dispatch} = useContext(UserContext);

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async (e) => {
      e.preventDefault();

      const res = await fetch("/signin", {
        method: "POST",
        headers: {
          "Content-Type" :  "application/json",
        },
        body:JSON.stringify ({
          email, 
          password
        }),
      });

      const data = res.json();

      if(res.status === 400 || !data) {
        window.alert("Invalid Credentials");
      } else {
        dispatch({type:"USER", payload:true});
        window.alert("Login Successful");
        navigate("/home");
      }

    };

    return (
      <>
        <section className="signin">
          <div className="container mt-5">
            <div className="signin-content">
              <div className="signing-image">
                  <figure>
                    <img src={loginpic} alt="Login pic" />
                  </figure>
                  <NavLink to="/signup" className="signing-image-link">Create an Account</NavLink>
              </div>
              <div className="signin-form">
                <h2 className="form-title">Sign In</h2>
                <form method="POST" className="register-form" id="register-form">
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-email material-icons-name"></i>
                    </label>
                    <input type="email" name="email" id="email" autocomplete="off" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">
                      <i className="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input type="password" name="password" id="password" autocomplete="off" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" />
                  </div>
                  <div className="form-group form-button">
                    <input type="submit" name="signin" id="signin" className="form-submit" value="Log In" onClick={loginUser}/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Login;
  