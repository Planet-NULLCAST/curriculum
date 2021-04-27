import { useState } from 'react';

export default function Login() {
  const handleClick = (e) => {
    e.preventDefault();
    const fName = document.querySelector('#firstName').value;
    const lName = document.querySelector('#lastName').value;
    const email = document.querySelector('#email').value;
    const user = document.querySelector("#username").value;
    const pass = document.querySelector("#password").value;
    const bod = {
      firstName: fName,
      lastName: lName,
      email: email,
      username: user,
      password: pass
    }
    fetch('http://localhost:8080/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bod)
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if(data.message === 'User was registered successfully!'){
          console.log(data);
          window.location.replace("http://localhost:3000/login");
        }
        console.log(data);
      });
  }
  return (
    <div class="max-w-lg max-w-xs bg-blue-800 shadow-2xl rounded-lg mx-auto text-center py-12 mt-12 rounded-xl">
      <h1 class="text-gray-200 text-center font-extrabold -mt-3 text-3xl">Sign Up</h1>
      <div class="container py-5 max-w-md mx-auto">
        <form method="" action="">
        <div class="mb-4">
            <input placeholder="First Name"
              class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName" type="text" />
          </div>
          <div class="mb-4">
            <input placeholder="Last Name"
              class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName" type="text" />
          </div>
          <div class="mb-4">
            <input placeholder="Email"
              class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email" type="email" />
          </div>
          <div class="mb-4">
            <input placeholder="Username"
              class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username" type="text" />
          </div>
          <div class="mb-6">

            <input placeholder="Password"
              class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password" type="password" />

          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit" onClick={(e) => handleClick(e)}>
              Sign Up
                    </button>
            <a class="inline-block align-baseline font-bold text-sm text-gray-400 " href="/login">
              Already have account?
                    </a>
          </div>
        </form>
      </div>
    </div>
  );
}