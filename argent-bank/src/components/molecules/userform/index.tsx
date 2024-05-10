import React, { useState } from 'react'
import LabeledTextField from '../labeledtextfield'
import Button from '../../atoms/button'
import './index.css'
import ErrorMsg from '../error';

export interface UserProps {
    email: string;
    password: string;
    checkBox: boolean;
}

export interface UserFormProps {
    keyId: string;
    onSubmit: (user: UserProps) => void;
}

const UserForm = ({keyId="", onSubmit}:UserFormProps) => {
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    return (
        <form
            onSubmit={
                (ev)=> {
                    ev.preventDefault()
                    ev.stopPropagation()
                    let validate = true
                    const email = (document.getElementById(`${keyId}-email`) as HTMLInputElement).value
                    setEmailError('')
                    if(email === ''){
                        setEmailError('Email is required')
                        console.log("email is required")
                        validate = false
                    }
                    const password = (document.getElementById(`${keyId}-password`) as HTMLInputElement).value
                    setPasswordError('')
                    if(password === ''){
                        setPasswordError('Password is required')
                        console.log("password is required")
                        validate = false
                    }
                    if (!validate) {
                        return
                    }
                    console.log("validated", email, password)
                    onSubmit({
                        email: email,
                        password: password,
                        checkBox: (document.getElementById(`${keyId}-checkbox`) as HTMLInputElement).checked
                    })
                }
            }
            className='form'
        >
            <LabeledTextField className={"textInput"} label='Email' id={`${keyId}-email`} name='email' type='email'  />
            {emailError && <ErrorMsg message={emailError}/>}
            <LabeledTextField className={"textInput"} label='Password' id={`${keyId}-password`} name='password' type='password'  />
            {passwordError && <ErrorMsg message={passwordError}/>}
            <LabeledTextField className={"textCheck"} label='Remember me' id={`${keyId}-checkbox`} name='remeberme' type='checkbox'  />
            <Button className='sign-in-button' type='submit' align='center'>Sign in</Button>
        </form>
    )
}

export default UserForm