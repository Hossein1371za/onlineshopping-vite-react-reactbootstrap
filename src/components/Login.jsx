import React from "react";
import { GoogleAuthProvider,getAuth,signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config"
const provider = new GoogleAuthProvider();


const auth = getAuth();

const Login = () => {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        alert("ثبت نام با موفقیت انجام شد")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    console.log("hi");
  };
  return (
    <div className="m-5 p-5">
      <button className="bg-primary px-4 text-white" onClick={handleLogin}>
        ورود
      </button>
    </div>
  );
};

export default Login;
