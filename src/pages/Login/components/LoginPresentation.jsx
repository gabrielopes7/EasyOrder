import React from 'react';
import '../LoginStyle.css';


export default function LoginPresentation() {
    return <div className="container">
        <div className="header">
            <h1 className="title">Easy<span>Order</span></h1>
            <span>Faça seus pedidos da melhor maneira!</span>
        </div>
        <div id="inputContainer">
            <div className="loginContainer">
                <label htmlFor="emailUser" className="labelLogin" >E-mail</label>
                <input type="email" id="emailUser" className="inputLogin" inputMode="email" placeholder="exemplo@exemplo.com"></input>
            </div>
            <div className="loginContainer">
                <label htmlFor="passwordUser" className="labelLogin" >Senha</label>
                <input type="password" id="passwordUser" className="inputLogin" inputMode="text" placeholder="********"></input>
            </div>
        </div>
        <div className="footer">
            <div>
                <button id="buttonLogin">
                    Logar
                </button>
            </div>
            <div className="extraLinks">
                <span>Não tem uma conta? <a href="#" id="createAccount">Crie aqui. </a></span>
                <span>Esqueceu sua senha? <a href="#" id="recoveryAccount">Recupere aqui.</a></span>
            </div>
        </div>
    </div>
}