import React, { useState } from "react";
import axios from "axios";

export default function Registration () {
   
    const [_email, _setEmail] = useState("")
    const [_password, _setPassword] = useState("")
    const [_confirmation, _setConfirmation] = useState("")
    const [_registration, _setRegistration] = useState({ success: false, log: "" })
    const [_validation, _setValidation] = useState({ isEmailValid: false, isPasswordMatching: false, isFormComplete: false })

    const handleValidation = () => {
        // email
        const email = document.querySelector('#registration_user_email').value.trim()
        const password = document.querySelector('#registration_user_password').value.trim()
        const confirmation = document.querySelector('#registration_user_password_confirmation').value.trim()

        // create a condition to check whether email is a valid email using regEx
        const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        _setValidation({
            ..._validation,
            ['isPasswordMatching']: password !== "" && password === confirmation ? true : false,
            ['isFormComplete']: email !== "" && regEmail.test(email) && password !== "" && password === confirmation ? true : false 
        })
    }

    const handleChange = (event) => {
        // console.log("handle change", event);

        console.log(event.target.name)

        handleValidation()

        switch (event.target.name) {
            case 'email':
                _setEmail(event.target.value)
                break;
            case 'password':
                _setPassword(event.target.value)
                break;
            case 'confirmation':
                _setConfirmation(event.target.value)
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("form submitted");

        axios.post("api/users/register",{
            user: {
                email: _email,
                password: _password,

            }
        },

        { withCredentials: true }

        ).then(response =>{
            const { message, status, email, error = null } = response.data
            console.log("registration res", response);
            if (error) {
                console.log("registration error", message);
    
                _setRegistration({
                    success: false,
                    log: message
                })
                throw new Error(`Status Code: ${status}`)
            } else {
                _setRegistration({
                    success: true,
                    log:`Successfully created a new employee with email: ${email}`
                })
            }
        })
        
        .catch(err => {
            console.error(`Registration ${err}`);
        })
    }
    return(
        <div>
            <form>
                <input 
                    id="registration_user_email"
                    type = "email" 
                    name = "email" 
                    placeholder = "Email" 
                    value = { _email } 
                    onChange = { handleChange } 
                    required 
                />
                <input 
                    id="registration_user_password"
                    type = "password" 
                    name = "password" 
                    placeholder = "Password" 
                    value = { _password } 
                    onChange = { handleChange } 
                    required 
                />
                <input 
                    id="registration_user_password_confirmation"
                    type = "password" 
                    name = "confirmation" 
                    placeholder = "Password confirmation" 
                    value = { _confirmation } 
                    onChange = { handleChange } 
                    required 
                />

                <p style={{color: _registration.success ? "green" : "red"}}>{ _registration.log }</p>

                <input className={"btn btn-info" + !_validation.isFormComplete ? "disabled" : "" } disabled={!_validation.isFormComplete ? true : false } type="submit" onClick={handleSubmit} value="submit"/>
            </form>
        </div>
    );
}