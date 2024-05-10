import { useState } from 'react'
import Typography from '../../atoms/typography'
import EditForm, { EditProps } from '../../molecules/editform'
import UserApiService from '../../../api/user.api'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { editUser } from '../../../redux/reducers/user.reducer'


const HeroProfil = () => {
    const [editProfile, setEditProfile] = useState(false)
    const userFirstname = useSelector((state: RootState) => state.user.firstName)
    const userLastname = useSelector((state: RootState) => state.user.lastName)
    const userToken = useSelector((state: RootState) => state.auth.token)
    const dispatch = useDispatch()
    const userApi = new UserApiService()

    const handleEdit = () => {
        setEditProfile(!editProfile)
    }

    const handleSubmit = (pUser: EditProps) => {
        // setError(null)
        if (userToken === null) {
            return;
        }
        userApi.editProfile(userToken, pUser.firstname, pUser.lastname)
            .then(response => {
                console.log(response);

                if (response.status === 400) {
                    // setError(response.message)
                    return
                }
                // setError(null)
                dispatch(editUser({ firstName: pUser.firstname, lastName: pUser.lastname }))
                // navigate('/user')
                console.log(response.body.token)
                setEditProfile(false)
            })
            .catch(error => {

                console.error(error)
            });
    }
    return (
        <div className='hero-profil'>
            <Typography
                component="h1"
                variant="body-lg"
                theme='white'
                align='center'
                fontWeight="bold">
                Welcome back
            </Typography>
            {!editProfile && <Typography
                component="h1"
                variant="body-lg"
                theme='white'
                align='center'
                fontWeight="bold">
                {userFirstname} {userLastname}
            </Typography>}
            {!editProfile && <button className='edit-name' type='button' onClick={handleEdit}>Edit name</button>}
            {editProfile && <EditForm keyId="user" onSubmit={handleSubmit} OnCancel={handleEdit} />}
        </div>
    )
}

export default HeroProfil