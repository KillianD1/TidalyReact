import React, { useState } from "react";

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
            <h2>Page de connexion</h2>

            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email"> E-mail </label>
                <input className ="BtnRegisterConnexion" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="votremail@gmail.com" id="email" name="email" />

                <label htmlFor="password"> Mot de passe </label>
                <input className ="BtnRegisterConnexion" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="************" id="password" name="password" />

                <button className="btn-submit" type="submit">Se connecter</button>
            </form>

            <button className="link-button" onClick={() => props.onFormSwitch("register")}>Pas de compte? Créez en un !</button>
        </div>
    )
}