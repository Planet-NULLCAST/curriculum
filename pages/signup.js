import { useState } from "react";

export default function Login() {
  const handleClick = (e) => {
    e.preventDefault();
    const fName = document.querySelector("#firstName").value;
    const lName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;
    const user = document.querySelector("#username").value;
    const pass = document.querySelector("#password").value;
    const bod = {
      firstName: fName,
      lastName: lName,
      email: email,
      username: user,
      password: pass
    };
    fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bod)
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.message === "User was registered successfully!") {
          console.log(data);
          window.location.replace("http://localhost:3000/login");
        }
        console.log(data);
      });
  };
  return (
    <div className="max-w-lg bg-blue-800 shadow-2xl mx-auto text-center py-12 mt-12 rounded-xl">
      <h1 className="text-gray-200 text-center font-extrabold -mt-3 text-3xl">
        Sign Up
      </h1>
      <div className="container py-5 max-w-md mx-auto">
        <form method="" action="">
          <div className="mb-4">
            <input
              placeholder="First Name"
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Last Name"
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Email"
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Username"
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
            />
          </div>
          <div className="mb-6">
            <input
              placeholder="Password"
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={(e) => handleClick(e)}
            >
              Sign Up
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-gray-400 "
              href="/login"
            >
              Already have account?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
