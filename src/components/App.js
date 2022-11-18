import '../style/App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../page/Home';
import Layout from '../page/Layout';
import Game from '../page/Game';
import MonCompte from '../page/MonCompte';
import Eshop from '../page/Eshop';
function App() {
    return ( 
         <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}> 
                        <Route index element={<Home/>} />
                        <Route path='home' element={<Home/>} />
                        <Route path='game' element={<Game/>} />
                        <Route path='eshop' element={<Eshop/>} />
                        <Route path='MonCompte' element={<MonCompte/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
    );
}

export default App;