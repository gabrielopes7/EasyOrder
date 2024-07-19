import React from 'react';
import '../LoginRegisterStyle.css';


export default function LoginRegisterPresentation() {
    return <div className="container">
        <div className="header">
            <h1 className="title">R<span>egistre-se</span></h1>
        </div>
        <div id="inputContainer">
            <div className="loginContainer">
                <label htmlFor="nameUser" className="labelLoginRegister" >Senha</label>
                <input type="text" id="nameUser" className="inputLoginRegister" inputMode="text" placeholder="********"></input>
            </div>
            <div className="loginContainer">
                <label htmlFor="emailUser" className="labelLoginRegister" >E-mail</label>
                <input type="email" id="emailUser" className="inputLoginRegister" inputMode="email" placeholder="exemplo@exemplo.com.br"></input>
            </div>
            <div className="loginContainer">
                <label htmlFor="emailVerifyUser" className="labelLoginRegister" >Digite novamente o e-mail</label>
                <input type="email" id="emailVerifyUser" className="inputLoginRegister" inputMode="email" placeholder="exemplo@exemplo.com.br"></input>
            </div>
            <div className="loginContainer">
                <label htmlFor="passwordUser" className="labelLoginRegister" >Senha</label>
                <input type="password" id="passwordUser" className="inputLoginRegister" inputMode="text" placeholder="********"></input>
            </div>
            <div className="loginContainer">
                <label htmlFor="passwordVerifyUser" className="labelLoginRegister" >Digite novamente a senha</label>
                <input type="password" id="passwordVerifyUser" className="inputLoginRegister" inputMode="text" placeholder="********"></input>
            </div>
        </div>
        <div className="footer">
            <div>
                <button id="buttonRegister">
                    Registre-se
                </button>
            </div>
            <div className="extraLinks">
                <span>Já tem uma conta? <a href="#" id="alreadyHAveAccount">Clique aqui. </a></span>
            </div>
        </div>
    </div>
}