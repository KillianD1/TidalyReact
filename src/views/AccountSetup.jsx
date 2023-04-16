import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export const AccountSetup = () => {
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [sexe, setSexe] = useState("");
    const [adresse, setAdresse] = useState("");
    const [pays, setPays] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log();
    }

    return (
        <div className="AccountParameters">
            <h2>Paramétrage du compte</h2>
            <form className="AccountParametersForm" onSubmit={handleSubmit}>
                <label for="name">Nom</label>
                <input className="inputClass" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Votre nom" id="name" name="name"/>

                <label for="firstName">Prénom</label>
                <input className="inputClass" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Votre prénom" id="firstName" name="firstName"/>

                <label for="sexe">Sexe</label>
                <select className="inputClass" value={sexe} onChange={(e) => setSexe(e.target.value)}>
                    <option value="Homme">Homme</option>
                    <option value="Femme">Femme</option>
                </select>

                <label for="adresse">Adresse</label>
                <input className="inputClass" value={adresse} onChange={(e) => setAdresse(e.target.value)} type="text" placeholder="Votre adresse" id="adresse" name="adresse"/>

                <label for="pays">Pays</label>
                <input className="inputClass" value={pays} onChange={(e) => setPays(e.target.value)} type="text" placeholder="Votre pays" id="pays" name="pays"/>

                <Link to="/WaterMeterSetup">
                    <button className="btn-register" type="submit">Continuer</button>
                </Link>
            </form>
        </div>
    )
}