import React, { useState } from 'react';
import LoginRegisterPresentation from '../components/LoginRegisterPresentation.jsx';


const RegisterContainer = () => {
    
    const [name, setName] = useState('');
    const [birthdayDate, setBirthdayDate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [users, setUsers] = useState();
    const [isFormValid, setIsFormValid] = useState(false);
    

    const registerUser = async (event) => {
        event.preventDefault();

        // Está salvando agora, preciso achar um jeito mais bonito de criar esse JsonData;

        const jsonData = {
            'nome': name,
            'email': email,
            'dataNascimento': birthdayDate,
            'senha': password
        }


        try {
            const response = await fetch('http://192.168.15.95:45455/api/registrarUsuario', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(jsonData),
            });
            const data = await response;
            console.log(data);
            //setUsers([...users, data]);
        } catch (error) {
            console.error(error);
        }
    }

    const changeName = (event) => {
        setName(event.target.value);
        console.log(name);
        if (name.trim().length < 3)
            setIsFormValid(false);
    }

    const changeBirthdayDate = (event) => {
        setBirthdayDate(event.target.value);
    }

    const changeEmail = (event) => {
        setEmail(event.target.value);

        if (name.trim().length < 1 && !email.includes('@'))
            setIsFormValid(false);
    }
    const changePassword = (event) => {
        setPassword(event.target.value);

        if (name.length < 8)
            setIsFormValid(false);
    }

    const validationEmailUser = (event) => {
        const emailVerify = event.target.value;

        if (email.length > 0) {
            if (email == emailVerify) {
                setIsFormValid(true);
            }
            console.log("Os emails não coincidem");
        }
    }


    const validationPasswordUser = (event) => {
        const passwordVerify = event.target.value;

        if (password.length > 0)
        {
            if (password == passwordVerify) {
                setIsFormValid(true);
            }
            console.log("As senhas não coincidem.")
        }
    }

    return (
        <LoginRegisterPresentation
            onRegister={registerUser}
            onChangeNome={changeName}
            onChangeBirthdayDate={changeBirthdayDate}
            onChangeEmail={changeEmail}
            onChangePassword={changePassword}
            onValidationEmailUser={validationEmailUser}
            onValidationPasswordUser={validationPasswordUser}
            disabled={!isFormValid}
        />
    )
};

export default RegisterContainer;
