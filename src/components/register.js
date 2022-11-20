import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import '../style/register.css';
import { useSelector } from 'react-redux';

function Register() {
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [identifiant, setIdentifiant] = useState("")
    const [pwd, setPwd] = useState("")
    const [checkPwd, setCheckPwd] = useState("")
    const dispacth = useDispatch;
const handleRegister=async () => {
    
}
 
    return (
        <section className="inscription py-4 bg-personaliser">
            <div className="container formulaire text-white">
                <div className="head text-center">
                    <h2>inscription</h2>
                                      <p>
                        Vous avez déjà un compte?
                        <NavLink to={"/login"}>connectez-vous ici!</NavLink>
                    </p>
                </div>
                <div className="form-body">
                    <form className="form" onSubmit={handleRegister}>
                        <div className="mb-3">
                            <label htmlFor="nom" className="form-label">Nom</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="nom"
                                 aria-describedby="emailHelp" 
                                 placeholder="nom" 
                                 value={nom}
                                 onChange={(e)=> setNom(e.target.value)}
                                 />
                            <br />
                            <span className="invalid-feedback">Name can't be blank</span>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="prenom" className="form-label">Prénom</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="prenom" 
                                aria-describedby="emailHelp" 
                                placeholder="prénom" 
                                value={prenom}
                                onChange={(e)=>setPrenom(e.target.value)}
                                />
                            <br />
                            <span className="invalid-feedback">prenom can't be blank</span>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Identifiant</label>
                            <input type="email" 
                            value={identifiant}
                            onChange={(e)=>setIdentifiant(e.target.value)}
                            className="form-control" id="email" aria-describedby="emailHelp" placeholder="email" />
                            <br />
                            <span className="invalid-feedback">Email can't be blank</span>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Mot de passe</label>
                            <input type="password" 
                            value={pwd}
                            onChange={(e)=>setPwd(e.target.value)}
                            className="form-control" id="password" placeholder="mot de passe" />
                            <br />
                            <span className="invalid-feedback">Name can't be blank</span>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirmer Mot de passe</label
                        >
                        <input type="password" 
                        value={checkPwd}
                        onChange={(e)=>setCheckPwd(e.target.value)}
                        className="form-control" id="confirmPassword" placeholder="confirmation mot de passe" />
                        <br />
                        <span className="invalid-feedback">Password must match</span>
                    </div>
                    <div className="rgpn d-flex">
                        <p>
                        Je reconnais avoir pris connaissance et j’accepte les termes des
                        <NavLink to=""> conditions générales d’utilisation.</NavLink>
                        </p>
                        <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckChecked"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                        ></label>
                        </div>
                </div>
                
                </form>
                <div className="d-grid mx-auto">
                    <button className="btn btn-primary" onClick={handleRegister}>VALIDER</button>
                </div>
            </div>
            </div>
        </section>
  )
}

export default Register