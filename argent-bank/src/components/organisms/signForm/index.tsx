import React, { useEffect, useState } from 'react'
import UserForm, { UserProps } from '../../molecules/userform'
import Typography from '../../atoms/typography'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { loginSuccess } from '../../../redux/reducers/auth.reducer'
import { useDispatch } from 'react-redux'
import AuthApiService from '../../../api/auth.api'
import UserApiService from '../../../api/user.api'
import ErrorMsg from '../../molecules/error'
import { editUser, fetchUser } from '../../../redux/reducers/user.reducer'
const SignForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const authApi = new AuthApiService()
    const userApi = new UserApiService()
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = (pUser: UserProps) => {
        console.log("user submitted", pUser)
        setError(null)
        authApi.login(pUser.email, pUser.password)
            .then(response => {
                console.log(response);
                
                if(response.status === 400){
                    setError(response.message)
                    return
                }
                setError(null)
                dispatch(loginSuccess({ token: response.body.token, rememberMe: pUser.checkBox }))
                return response
            })
            .then((response) => {
                userApi.auth = response.body.token
                return userApi.getProfil()
            })
            .then(res => {
                console.log('response user',res);
                
                if(res.status === 400){
                    setError(res.message)
                    return
                }
                setError(null)
                dispatch(editUser({ firstName: res.body.firstName,lastName: res.body.lastName}))
                navigate('/user')
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='sign-in-card'>
            <Typography component="span" variant='h1'>
                <i className="fa fa-user-circle" />
            </Typography>
            <Typography component="h2" variant="lead" align="center">Sign Up</Typography>
            {error && <ErrorMsg message={error} />}
            <UserForm
                onSubmit={handleSubmit}
                keyId="user"
            />
        </div>
    )
}

export default SignForm