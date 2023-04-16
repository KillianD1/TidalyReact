import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from '../assets/LogoTidalyTest1.png';

export const Register = (props) => {
    const [email, setEmail] = useState('')
    const [pass,  setPass] = useState('')
    const [name,  setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass);
    }

    return (
        <div className="auth-form-container">

            <div className="circle-Container">
                <div className="circleRegister">
                    <img className="logo" src={logo} alt="Cloudy Sky"></img>
                </div>
            </div>

            <h2>Page d'inscription</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name"> Nom de l'utilisateur </label>
                <input className ="BtnRegisterConnexion" value={name} onChange={(e) => setName(e.target.value)} placeholder="Exemple:Lucas..." id="name" name="name" />

                <label htmlFor="email"> E-mail </label>
                <input className ="BtnRegisterConnexion" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="votremail@gmail.com" id="email" name="email" />

                <label htmlFor="password"> Mot de passe </label>
                <input className ="BtnRegisterConnexion" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="************" id="password" name="password" />

                <button className="btn-submit" type="submit">S'inscrire</button>
            </form>

            <Link to="/">
                <button className="link-button" >J'ai déjà un compte !</button>
            </Link>
        </div>
    )
}