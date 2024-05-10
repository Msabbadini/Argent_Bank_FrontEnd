import Header from '../../molecules/header'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../../redux/reducers/auth.reducer'
import { RootState } from '../../../redux/store'


const AppHeader = () => {
    const auth = useSelector((state: RootState) => state.auth.isLoggedin)
    const user = useSelector((state: RootState) => state.user.firstName)
    const dispatch = useDispatch()
    const navigate = useNavigate()

  return (
    <Header
        auth={auth}
        user={user}
        onLogout={() => {
            dispatch(logout())
            navigate('/')
        }}
    />
  )
}

export default AppHeader