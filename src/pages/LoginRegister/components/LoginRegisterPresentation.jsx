import { useRef } from 'react';
import '../LoginRegisterStyle.css';

const LoginRegisterPresentation = ({ onRegister, onChangeName, onChangeBirthdayDate, onChangeEmail, onChangePassword, onValidationEmailUser, onValidationPasswordUser, disabled }) => {

    return <div className="container">
        <div className="header">
            <h1 className="title">R<span>egistre-se</span></h1>
        </div>
        <form onSubmit={onRegister}>
            <div id="inputContainer">
                <div className="loginContainer">
                    <label htmlFor="nameUser" className="labelLoginRegister" >Nome</label>
                    <input type="text" id="nameUser" className="inputLoginRegister" inputMode="text" placeholder="Jonas Nascimento" required onChange={onChangeName}></input>
                </div>
                <div className="loginContainer">
                    <label htmlFor="birthdayDateUser" className="labelLoginRegister" >Data de nascimento</label>
                    <input type="date" id="birthdayDateUser" className="inputLoginRegister" inputMode="date" required onChange={onChangeBirthdayDate}></input>
                </div>
                <div className="loginContainer">
                    <label htmlFor="emailUser" className="labelLoginRegister" >E-mail</label>
                    <input type="email" id="emailUser" className="inputLoginRegister" inputMode="email" placeholder="exemplo@exemplo.com.br" required onChange={onChangeEmail}></input>
                </div>
                <div className="loginContainer">
                    <label htmlFor="emailVerifyUser" className="labelLoginRegister" >Digite novamente o e-mail</label>
                    <input type="email" id="emailVerifyUser" className="inputLoginRegister" inputMode="email" placeholder="exemplo@exemplo.com.br" onChange={onValidationEmailUser}></input>
                </div>
                <div className="loginContainer">
                    <label htmlFor="passwordUser" className="labelLoginRegister" >Senha</label>
                    <input type="password" id="passwordUser" className="inputLoginRegister" inputMode="text" placeholder="********" required onChange={onChangePassword}></input>
                </div>
                <div className="loginContainer">
                    <label htmlFor="passwordVerifyUser" className="labelLoginRegister" >Digite novamente a senha</label>
                    <input type="password" id="passwordVerifyUser" className="inputLoginRegister" inputMode="text" placeholder="********" onChange={onValidationPasswordUser}></input>
                </div>
            </div>
            <div className="footer">
                <div>
                    <button id="buttonRegister" type="submit" disabled={disabled}>
                        Registre-se
                    </button>
                </div>
                <div className="extraLinks">
                    <span>Já tem uma conta? <a href="#" id="alreadyHaveAccount">Clique aqui. </a></span>
                </div>
            </div>
        </form>
    </div>
}

export default LoginRegisterPresentation;