import React, { useState } from "react";

export const AccountSetup = () => {
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [consumption, setConsumption] = useState(0);
    const [objective, setObjective] = useState(0);
    const [sexe, setSexe] = useState("");
    const [adresse, setAdresse] = useState("");
    const [pays, setPays] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(consumption, objective, sexe);
    }

    return (
        <div className="AccountParameters">
            <h2>Paramètres du compte</h2>
            <form className="AccountParametersForm" onSubmit={handleSubmit}>
                <label for="name">Nom</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Votre nom" id="name" name="name"/>

                <label for="firstName">Prénom</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Votre prénom" id="firstName" name="firstName"/>

                <label for="sexe">Sexe</label>
                <select value={sexe} onChange={(e) => setSexe(e.target.value)}>
                    <option value="Homme">Homme</option>
                    <option value="Femme">Femme</option>
                </select>

                <label for="adresse">Adresse</label>
                <input value={adresse} onChange={(e) => setAdresse(e.target.value)} type="text" placeholder="Votre adresse" id="adresse" name="adresse"/>

                <label for="pays">Pays</label>
                <input value={pays} onChange={(e) => setPays(e.target.value)} type="text" placeholder="Votre pays" id="pays" name="pays"/>

                {/* <input value={consumption} onChange={(e) => setConsumption(e.target.value)} type="number" id="consumption" name="consumption" min="0" max="10000000"></input>

                <input value={objective} onChange={(e) => setObjective(e.target.value)} type="number" id="objective" name="objective" min="0" max="10000000"></input> */}

                <button className="btn-register" type="submit">Enregistrer</button>
            </form>
        </div>
    )
}