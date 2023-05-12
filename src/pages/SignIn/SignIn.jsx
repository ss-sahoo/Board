import React from "react";
import SigninForm from "./components/SigninForm";

const SignIn = () => {
  return (
    <div className="signin-page flex flex-row justify-center items-center h-screen">
      <div className="left-side bg-black h-full w-2/5 flex justify-center items-center">
        <h1 className="font-montserrat font-bold text-6xl text-white">
          Board.
        </h1>
      </div>
      <div className="right-side bg-gray-200  h-screen w-3/5 flex-1 flex justify-center items-center">
        <SigninForm />
      </div>
    </div>
  );
};

export default SignIn;
