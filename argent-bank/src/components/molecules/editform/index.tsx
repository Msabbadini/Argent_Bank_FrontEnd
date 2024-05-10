import React, { useState } from 'react'
import Button from '../../atoms/button';
import ErrorMsg from '../error';
import LabeledTextField from '../labeledtextfield';
import './index.css'
export interface EditProps {
    firstname: string;
    lastname: string;
}

export interface EditFormProps {
    keyId: string;
    onSubmit: (user: EditProps) => void;
    OnCancel: () => void;
}


const EditForm = ({ keyId = "", onSubmit, OnCancel }: EditFormProps) => {
    const [firstnameError, setFirstnameError] = useState('')
    const [lastnameError, setLastnameError] = useState('')
    return (
        <form
            onSubmit={
                (ev) => {
                    ev.preventDefault()
                    ev.stopPropagation()
                    let validate = true
                    const firstname = (document.getElementById(`${keyId}-firstname`) as HTMLInputElement).value
                    setFirstnameError('')
                    if (firstname === '') {
                        setFirstnameError('Firstname is required')
                        console.log("Firstname is required")
                        validate = false
                    }
                    const lastname = (document.getElementById(`${keyId}-lastname`) as HTMLInputElement).value
                    setLastnameError('')
                    if (lastname === '') {
                        setLastnameError('Lastname is required')
                        console.log("Lastname is required")
                        validate = false
                    }
                    if (!validate) {
                        return
                    }
                    console.log("validated", firstname, lastname)
                    onSubmit({
                        firstname: firstname,
                        lastname: lastname,
                    })
                }
            }
            className='form'
        >
            <div className='edit-bloc'>
                <div>
                    <LabeledTextField className={"textLabel"} label='Firstname' id={`${keyId}-firstname`} name='firstname' type='text' />
                    {firstnameError && <ErrorMsg message={firstnameError} />}

                </div>
                <div>
                    <LabeledTextField className={"textLabel"} label='Lastname' id={`${keyId}-lastname`} name='lastname' type='text' />
                    {lastnameError && <ErrorMsg message={lastnameError} />}
                </div>
            </div>

            <div className='edit-bloc'>
                <Button className='edit-btn' type='submit' align='center'>Save</Button>
                <Button className='edit-btn' type='button' onClick={OnCancel} align='center'>Cancel</Button>
            </div>
        </form>
    )
}

export default EditForm