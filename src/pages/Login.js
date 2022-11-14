import { Link } from "react-router-dom";
import { useState } from "react";
import http from "../services/http";
import { Store } from 'react-notifications-component';
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const [error,setError]=useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Login=(e)=>{
        

        if (email.length > 0 && password.length > 0) {
            setError("");
                http.post("api/login", {
                        email: email,
                        password: password,
                    })
                    .then((response) => {
                         //set response in local storage
                         console.log(response.data);
                        //  localStorage.setItem('user', JSON.stringify(response.data));
                        localStorage.setItem('user', JSON.stringify(response.data.user));
                        
                        Store.addNotification({
                           title: response.data.title,
                           message: response.data.message,
                           type: response.data.type,
                           insert: "top",
                           container: "top-right",
                           animationIn: ["animate__animated", "animate__fadeIn"],
                           animationOut: ["animate__animated", "animate__fadeOut"],
                           dismiss: {
                             duration: 5000,
                             onScreen: true
                           }
                         });
                         navigate("/");
                         setEmail("");
                         setPassword("");
                    })
                    .catch(function (error) {
                        console.error(error);
                        if(error.response.status===400){
                            setError(error.response.data.message);
                        }else{
                            setError(error.response.data.message);
                        }

                    });
        console.log(email);
        }
    }

    return (
        <div>
            <div className="h-screen flex">
                <div className="hidden lg:flex w-full lg:w-1/2 login_img_section
          justify-around items-center">
                    <div
                        className=" 
                  bg-black 
                  opacity-20 
                  inset-0 
                  z-0"
                    >

                    </div>
                    <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
                        <h1 className="text-white font-bold text-4xl font-sans">{process.env.REACT_APP_NAME}</h1>
                        <p className="text-white mt-1">The simplest app to use</p>
                        <div className="flex justify-center lg:justify-start mt-6">
                            <Link to="#" className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">Get Started</Link>
                        </div>
                    </div>
                </div>
                <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
                    <div className="w-full px-8 md:px-32 lg:px-24">
                        <form className="bg-white rounded-md shadow-2xl p-5" onSubmit={(e)=>e.preventDefault()}>
                            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                            {email}-{password}
                            <p className="text-sm font-normal text-gray-600 mb-8">Welcome Back</p>
                            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                                <input id="email" className=" pl-2 w-full outline-none border-none" type="email" name="email" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <input className="pl-2 w-full outline-none border-none" type="password" name="password" id="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>

                            </div>
                            <div className="flex items-center mb-2 text-rose-400">
                                {error}
                            </div>
                            <button className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2" onClick={Login}>Login</button>
                            <div className="flex justify-between mt-4">
                                <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Forgot Password ?</span>

                                <Link to="/register" className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Don't have an account yet?</Link>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
}

