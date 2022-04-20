import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../Shared/Css/SignForm.css";
import gooogleIcon from "../../../asset/icons/google-icon.png";
import facebookIcon from "../../../asset/icons/facebook-icon.png";
// import {
//   createUserWithEmailPassword,
//   handelSignInFacebook,
//   handleSignInGoogle,
//   initializeLoginFramework,
// } from "../SigningManager";

// initializeLoginFramework();

const Signup = () => {
  // const navigate = useNavigate();
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

  //Google
  // const googleSignIn = () => {
  //   handleSignInGoogle().then((res) => {
  //     handelResponse(res, true);
  //   });
  // };

  // //Facebook
  // const facebookSignIn = () => {
  //   handelSignInFacebook().then((res) => {
  //     handelResponse(res, true);
  //   });
  // };

  const handelResponse = (res, redirect) => {
    setUser(res);
  };

  const handelOnBlur = (event) => {
    let isFormValid = true;

    if (event.target.name === "name") {
      isFormValid = /^[a-zA-Z ]+$/.test(event.target.value);
    }

    if (event.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
    }

    if (
      event.target.name === "password" &&
      event.target.name === "confirm_password"
    ) {
      const isPasswordValid = event.target.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;
    }

    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };

  //Sign up
  // const handelSubmit = (event) => {
  //   //sign up
  //   if (user.name && user.email && user.password) {
  //     createUserWithEmailPassword(user.name, user.email, user.password).then(
  //       (res) => {
  //         handelResponse(res, true);
  //       }
  //     );
  //     navigate("/login");
  //   }
  //   event.preventDefault();
  // };

  return (
    <div className="sign_form mb-5">
      <div className="sign__wrapper">
        <div className="sign__email">
          <div className="sign__title">
            <h1>Create an account</h1>
          </div>
          <form onSubmit={""} action="">
            <div className="sign__input">
              <input
                onBlur={handelOnBlur}
                type="text"
                name="email"
                placeholder="Email"
              />
              <br />
              <input
                onBlur={handelOnBlur}
                type="text"
                name="name"
                placeholder="Name"
              />
              <br />
              <input
                onBlur={handelOnBlur}
                type="password"
                name="password"
                placeholder="Password"
              />
              <input
                onBlur={handelOnBlur}
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="sign__email__rememberme_forget_password"></div>
            <input type="submit" value="Sign Up" />
          </form>
          <p>
            Already have an account?&nbsp;<Link to="/signin">Login</Link>
          </p>
          <br />
          <p style={{ color: "red" }}>{user.error}</p>
          {user.success && (
            <p style={{ color: "green" }}>User Created Successfully</p>
          )}
        </div>
        <div className="sign__divider">
          <p>
            <span>Or</span>
          </p>
        </div>
        <div className="sign__facebook_google">
          <button onClick={""}>
            <img src={gooogleIcon} alt="" />
            <span>Continue with Google</span>
            <span className="sign__facebook_google-space"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
