import React from 'react';
import '../style/compteConnected.css';
import { NavLink } from 'react-router-dom';
function compteConnected() {
  return (
    <>
      <section id="hero">
        <div className="hero-content">
          <div className="container">
            <h1 className="hero-title text-uppercase">Votre identité <br/> secrète</h1>
          </div>
        </div>
      </section>
      <section>
        <div className='compte-info'>
          <div className="row m-0">
            <div className="col-4 bg-primary">
              <div className='LinkInfo'>
                <NavLink to={''} className='py-3' >Mes informations</NavLink>
                <NavLink to={''} className='py-3' >Historique des commandes</NavLink>
                <NavLink to={''} className='py-3' >Mes avis</NavLink>
                <NavLink to={''} className='py-3' >Mes favoris</NavLink>
                <button className='mb-3'>DECONNEXION</button>
              </div>
            </div>
            <div className="col-8 bg-danger p-2">
              <h1>Informatons personnels</h1>
              <div className='w-100 border'></div>
              <p>Nom: <span>jean</span></p>
              <p>Prénom: <span>Doe</span></p>
              <p>Mot de passe: <span>1234</span></p>
              <p>Email: <span>jean@gmail.com</span></p>
              <p>Numéro de téléphone: <span>000 00 00 00</span></p>
              <p>Adresse de livraison: <span>paris 123</span></p>
              <p>Adresse  de facturation : <span>00 00 00 00 00 00</span></p>
              <button className='mb-3' >MODIFIER</button>
            </div>
          </div>
        </div>
        <div className='compte-info'>
          <div className="row m-0">
            <div className="col-4 bg-primary">
              
            </div>
            <div className="col-8 bg-danger p-2">
              <h1>Newsletter</h1>
              <div className='w-100 border'></div>
              <p className='pt-3'>Abonnez vous à la newsletter ! Ne ratez pas nos offres sur votre article préféré !</p>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Oui
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Non
                  </label>
                </div>
              <button className='m-3 ms-0' >ENREGISTRER</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default compteConnected