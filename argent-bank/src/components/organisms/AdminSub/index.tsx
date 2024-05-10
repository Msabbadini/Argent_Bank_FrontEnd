import React, { useEffect, useState } from 'react'
import UserForm, { UserProps } from '../../molecules/userform'
import Typography from '../../atoms/typography'

const UserSub = () => {
    const [user, setUser] = useState<UserProps>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleSubmit = (pUser:UserProps) => {
        // validation des champs
        setUser(pUser)
    }

    useEffect(() => {
        console.log("admin sumbitted", user)
        // call api to register admin
    }, [user])

    return (
        <div>
            <Typography component={"h2"} variant='lead' theme='red'>Register Admin</Typography>
            <UserForm
                onSubmit={handleSubmit}
                keyId="admin"
            />
        </div>
    )
}

export default UserSub