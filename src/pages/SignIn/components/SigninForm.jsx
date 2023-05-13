import React, { useRef } from "react";
import { auth} from "./firebase"
import googleIcon from "../../../assests/icons/google-icon 1.svg";
import appleIcon from "../../../assests/icons/apple 1.svg";


const SigninForm = () => {
  const emailRef=useRef(null);
  const passwordRef=useRef(null);

  

 const signIn=(e)=>{
     e.preventDefault();
     auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
        console.log(authUser)
    }).catch((error)=>{
      alert(error.message)
    })
 } 
 const register=(e)=>{
  e.preventDefault();
  auth.createUserWithEmailAndPassword(
    emailRef.current.value,
    passwordRef.current.value
  ).then((authUser)=>{
      console.log(authUser)
  }).catch((error)=>{
    alert(error.message)
  })
 }
  return (
    <div>
      <div className="form-header mt-8 mb-6 text-center">
        <h1 className="text-3xl font-bold mb-2">Sign In</h1>
        <h3 className="text-base">Sign in to your account</h3>
      </div>
      <div className="buttons flex flex-col gap-6 md:flex-row md:justify-center">
        <div
          className="signin-google flex items-center gap-2 cursor-pointer bg-white rounded-lg w-52 h-12 px-4 font-medium text-sm text-gray-700"
          
        >
          <img src={googleIcon} alt="" className="w-4 h-4 " />
          Sign in with Google
        </div>
        <div className="signin-apple flex items-center gap-2 cursor-pointer bg-white rounded-lg w-52 h-12 px-4 font-medium text-sm text-gray-700">
          <img src={appleIcon} alt="" className="w-4 h-4 " />
          Sign in with Apple
        </div>
      </div>
      <div className="form flex flex-col gap-5 bg-white rounded-lg w-full max-w-md mx-auto py-6 px-8 mt-8">
        <div className="email-input flex flex-col gap-4">
          <label htmlFor="email" className="font-medium">
            Email address
          </label>
          <input
          ref={emailRef}
            type="email"
            name="email"
            id="email"
            className="bg-gray-100 rounded-lg w-full h-10 px-4"
          />
        </div>
        <div className="password-input flex flex-col gap-4">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
          ref={passwordRef}
            type="password"
            name="password"
            id="password"
            className="bg-gray-100 rounded-lg w-full h-10 px-4"
          />
        </div>
        <p className="forgot-password text-blue-500 text-sm">
          Forgot password?
        </p>
        <button className="signin-button bg-black rounded-lg text-white font-bold text-base py-2 px-4 mt-4" onClick={signIn}>
          Sign In
        </button>
      </div>
      <h3 className="register text-center text-sm text-gray-700 mt-8">
        Don’t have an account?{" "}
        <span className="register-button text-blue-500 cursor-pointer" onClick={register}>Register here</span>
      </h3>
    </div>
  );
};

export default SigninForm;
