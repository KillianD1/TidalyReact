import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from '../assets/LogoTidalyTest1.png';

export const Login = (props) => {

    const [email, setEmail] = useState('')
    const [pass,  setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass);
    }

    return (
        <div className="auth-form-container">

            <div className="circle-Container">
                <div className="circle">
                    <img className="logo" src={logo} alt="Cloudy Sky"></img>
                </div>
            </div>

            <h2>Page de connexion</h2>

            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email"> E-mail </label>
                <input className ="inputClass" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="votremail@gmail.com" id="email" name="email" />

                <label htmlFor="password"> Mot de passe </label>
                <input className ="inputClass" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="************" id="password" name="password" />

                <Link to="/AccountSetup">
                    <button className="btn-submit" type="submit">Se connecter</button>
                </Link>

            </form>

            <Link to="/Register">
                <button className="link-button" >Pas de compte? Créez en un !</button>
            </Link>
        </div>
    )
}