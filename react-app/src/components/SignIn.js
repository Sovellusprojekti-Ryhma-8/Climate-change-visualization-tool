import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/registeration.css'


const URL = "http://localhost:8080/register"

export default function SignIn() {


    const [userName, setUsername] = useState('');
    const [passWord, setPassWord] = useState('');
    const [passWord2, setPassWord2] = useState('');
    const [message, setMessage] = useState('');
    const form = new FormData;
    let navigate = useNavigate();


    useEffect(() => {
        if (passWord === passWord2) {
            console.log("yeet");
        }else {
            console.log("nooo")
        }
    })


    let handleSubmit = async (e) => {
        e.preventDefault();

        form.append("userName", userName);
        form.append("passWord", passWord);

        try {
            fetch(URL, {
                method: 'POST',
                body: form
            })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.status)
                    navigate('/LogIn')
                }else {
                    setMessage("Vituiks män")
                }
            }) 
            .catch((error) => {
                console.log(error+ "  error")
                setMessage("error")
            })
        } catch(err) {
            console.log(err+ "   err");
            setMessage("err")
        }
       
    }

   

    return (

        <>
            <div class="register">
                <form class="register-form" onSubmit={handleSubmit}>
                    <div class="block">
                        <label>Käyttäjänimi</label>
                        <input class="input" type="text" value={userName} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div class="block">
                        <label>Salasana</label>
                        <input class="input" type="text" value={passWord} onChange={(e) => setPassWord(e.target.value)}/>
                    </div>
                    <div class="block">
                        <label>Salasana uudelleen</label>
                        <input class="input" type="text" value={passWord2} onChange={(e) => setPassWord2(e.target.value)}/>
                    </div>
                    <button class='button' type='submit'>Rekisteröidy</button>
                </form>
                <p>{message}</p>
            </div>
        </>
    )
}