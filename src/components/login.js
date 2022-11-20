import React, { useEffect, useState, useRef } from 'react';
import '../style/login.css';
import icon4 from "../assets/logos/icone_4.png";
import icon5 from "../assets/logos/icone_5.png";
import facebook from '../assets/logos/logo_4.1.png'
import google from '../assets/logos/logo_7.png'
import apple from '../assets/logos/logo_8.png'
import { NavLink } from 'react-router-dom';


function Login() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const userRef = useRef();
    const errRef = useRef();
    const [errMsg, seterrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        console.log(user, pwd)

    }

    useEffect(() => {
        let componentMounted = true;
        const getUser = async () => {
            setLoading(true);
            const response = await fetch('http://localhost:4200/user');
            if (componentMounted) {
                setData(await response.clone().json());
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getUser();
    }, [])
    
    return (
        <>
            <div className="container_count">
                <div className='border_count mx-auto'>
                    <div className="d-flex justify-content-center">
                        <div className=" user_card">
                            <div className="d-flex justify-content-center user_card">
                                <div className='text-center p-4'>
                                    <h1>Connexion</h1>
                                    <p>Vous n'avez pas encore de compte ?</p><NavLink className="text-reset" to={'/register'}>Inscrivez-vous!</NavLink>
                                </div>
                                <div>
                                    <p ref={errRef} className={errMsg ? "errmsg" :
                                        "offscreen"} aria-live="assertive" >{errMsg} </p>
                                </div>

                                <div className='pb-4 px-5'>

                                    <div className='bg-ajust-2 p-5'>
                                        <form onSubmit={handleSubmit}>
                                            <label className='text-white mb-3'>Identifiant</label>
                                            <div className="input-group mb-3 border-ajust">
                                                <div className="input-group-append">
                                                    <span className="input-group-text"><img src={icon4} className="brand_logo" alt="Logo" /></span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control input_user text-white"
                                                    placeholder="identifiant"
                                                    id='username'
                                                    autoComplete="off"
                                                    onChange={(e) => setUser(e.target.value)}
                                                    value={user}
                                                    required
                                                />
                                            </div>
                                            <label className='text-white mb-3'>Mot de passe</label>
                                            <div className="input-group mb-2 border-ajust">
                                                <div className="input-group-append">
                                                    <span className="input-group-text"><img src={icon5} className="brand_logo" alt="Logo" /></span>
                                                </div>
                                                <input type="password"
                                                    className="form-control input_pass text-white"
                                                    autoComplete="off"
                                                    placeholder="Mot de passe"
                                                    onChange={(e) => setPwd(e.target.value)}
                                                    value={pwd}
                                                    required
                                                />
                                            </div>
                                            <div className='d-flex justify-content-between'>
                                                <span className='text-white'>Mot de passe oublié</span>
                                                <span className='divider w-50 border_bas'></span>
                                            </div>
                                        </form>

                                        <button
                                            onClick={handleSubmit}
                                            name="button"
                                            className="btn login_btn py-3 mt-3"
                                        >VALIDER</button>
                                        <div className='d-flex justify-content-between'>
                                            <span className='text-white'>Connecter vous avec</span>
                                            <span className='divider w-50 border_bas'></span>
                                        </div>
                                        <div className='d-flex flex-row bd-highlight mt-3'>
                                            <div className='d-flex flex-column p-2'><img src={google} width="28px" alt="" /></div>
                                            <div className='d-flex flex-column p-2'><img src={facebook} width="30px" alt="" /></div>
                                            <div className='d-flex flex-column p-2'><img src={apple} width="40px" alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login