import React from "react"
import axios from "axios"
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../styles/login.css'

const URL="http://localhost:8080/login"

export default function Login() {

    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate()

    const sendLoginRequest = (e) => {
        e.preventDefault()

        //Sending login request
        axios.post(URL, {},
            {params: {userName,passWord}
            }).then(res => {
                const token = res.data
                localStorage.setItem("token", token)
                navigate('/')
                window.location.reload(false);
            }).catch(err => {
                console.log(err)
                setMessage("Wrong password or username")
            })}


    return (

        <>
           <div class="login">
                <form class="login-form" onSubmit={sendLoginRequest}>
                    <div class="block">
                        <label>Username</label>
                        <input class="input" type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                    <div class="block">
                        <label>Password</label>
                        <input class="input" type="text" value={passWord} secureTextEntry={false} onChange={(e) => setPassWord(e.target.value)}/>
                    </div>
                    <button class='button' type='submit'>Login</button>
                    <div>
                        <Link class='link' to='/Signin'>Sign up</Link>
                    </div>
                </form> 
                <p>{message}</p>
            </div>
        </>
    )
}

