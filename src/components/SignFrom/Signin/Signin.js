import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../Shared/Css/SignForm.css";
// import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import gooogleIcon from "../../../asset/icons/google-icon.png";
import facebookIcon from "../../../asset/icons/facebook-icon.png";
import {
  handelSignInFacebook,
  handleSignInGoogle,
  initializeLoginFramework,
  signInWithEmailPassword,
} from "../SigningManager";
import axios from "axios";
import service from "../../../service";
import { async } from "q";
// import { UserContext } from "../../../App";

// initializeLoginFramework();

const Signin = () => {
  const history = useHistory();
  //const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
  });

  // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // const history = useNavigate();
  // const location = useLocation();

  // let from = location.state?.from?.pathname || "/";

  //Google
  // const googleSignIn = () => {
  //   handleSignInGoogle().then((res) => {
  //     handelResponse(res, true);
  //   });
  // };

  //Facebook
  // const facebookSignIn = () => {
  //   handelSignInFacebook().then((res) => {
  //     handelResponse(res, true);
  //   });
  // };

  // const handelResponse = (res, redirect) => {
  //   setUser(res);
  //   setLoggedInUser(res);
  //   if (redirect) {
  //     history(from, { replace: false });
  //   }
  // };

  const handelOnBlur = (event) => {
    const newUserInfo = { ...user };
    newUserInfo[event.target.name] = event.target.value;
    setUser(newUserInfo);
  };

  // sign in
  // const handelSubmit = (event) => {
  //   // sign in
  //   if (user.email && user.password) {
  //     signInWithEmailPassword(user.email, user.password).then((res) => {
  //       handelResponse(res, true);
  //     });
  //   }
  //   event.preventDefault();
  // };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    (async () => {
      try {
        const { data: response } = await service.get("/auth/current-user", {
          headers: { token: token },
        });
        console.log(response);
        history.replace("/dashboard");
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: response } = await service.post("auth/sign-in", {
        email,
        password,
      });
      localStorage.setItem("token", response.token);
      console.log(response);
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign_form mb-5 ">
      <div className="sign__wrapper">
        <div className="sign__email">
          <div className="sign__title">
            <h1>Login</h1>
          </div>
          <form onSubmit={""} action="">
            <div className="sign__input">
              <input
                onBlur={handelOnBlur}
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                onBlur={handelOnBlur}
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="sign__email__rememberme_forget_password">
              <div>
                <input type="checkbox" name="rememberMe" />
                &nbsp;Remember Me
              </div>
              <Link to="/login">Forget Password</Link>
            </div>
            <input onClick={handleLoginSubmit} type="submit" value="Login" />
          </form>
          <p>
            Don’t have an account?&nbsp;
            <Link to="/signup">Create an account</Link>
          </p>
          <br />
          <p style={{ color: "red" }}>{user.error}</p>
          {user.success && (
            <p style={{ color: "green" }}>User Logged In Successfully</p>
          )}
        </div>
        <div className="sign__divider">
          <p>
            <span>Or</span>
          </p>
        </div>
        <div className="sign__facebook_google">
          <button>
            <img src={gooogleIcon} alt="" />
            <span>Continue with Google</span>
            <span className="sign__facebook_google-space"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
