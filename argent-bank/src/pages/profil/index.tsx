import Flex from '../../components/layouts/flex'
import ListTransaction from '../../components/organisms/listTransaction'
import HeroProfil from '../../components/organisms/heroProfil'
import './index.css'
import AppHeader from '../../components/organisms/header'
import AppFooter from '../../components/organisms/footer'

function Layout({ content }) {
    return (
        <Flex>
            <div className='profil-content'>
                {content}
            </div>
        </Flex>
    )
}

const Profil = () => {
    return (
        <div>
            <AppHeader />
            <Layout
                content={
                    <Flex>
                        <HeroProfil />
                        <ListTransaction />
                    </Flex>
                }
            />
            <AppFooter />
        </div>
    )
}

export default Profil