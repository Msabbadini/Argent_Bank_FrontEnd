import Flex from '../../components/layouts/flex'
import SignForm from '../../components/organisms/signForm'
import AppHeader from '../../components/organisms/header'
import AppFooter from '../../components/organisms/footer'
import './index.css'

function Layout({content}){
    return (
        <Flex>
            <div className='sign-in-content'>
                {content}
            </div>
        </Flex>
    )
}

const Login = () => {
    
  return (
    <div>
        <AppHeader />
        <Layout
            content={
                <Flex>
                    <SignForm/>
                </Flex>
            }
        />
        <AppFooter />
    </div>
  )
}

export default Login