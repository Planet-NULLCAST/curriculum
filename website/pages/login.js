import { useState } from 'react';
import Loading from '../component/layout/common/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const notify = (err) => toast.error(err.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    const handleClick = (e) => {
        e.preventDefault();
        const pass = document.querySelector("#password").value;
        const user = document.querySelector("#username").value;
        const bod = {
            username: user,
            password: pass
        }
        const err = fetch('http://localhost:8080/api/auth/signin', {
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
                if (data.accessToken) {
                    document.cookie = `user=${JSON.stringify(data)}`
                    window.location.replace("http://localhost:3000/javascript/Introduction");
                }
                else {
                    notify(data);
                }
            });
    }
    return (
        <div class="max-w-lg max-w-xs bg-blue-800 shadow-2xl rounded-lg mx-auto text-center py-12 mt-12 rounded-xl">
            <h1 class="text-gray-200 text-center font-extrabold -mt-3 text-3xl">Login Box</h1>
            <div class="container py-5 max-w-md mx-auto">
                <form method="" action="">
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
                            Sign In
                    </button>
                        <a class="inline-block align-baseline font-bold text-sm text-gray-400 " href="/signup">
                            Don't have account?
                    </a>
                    </div>
                </form>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </div>
    );
}