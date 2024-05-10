import './header.css'
const ArgentLogo = "/assets/argentBankLogo.png";
import NavLinkItem from '../navlink'
import { useEffect, useState } from 'react';
import Button from '../../atoms/button';

const Header = ({auth, user, onLogout=()=>{}}) => {
  // Obtenez la largeur de l'écran
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isVisible,setIsVisible] = useState(true)

  

  useEffect(() => {
      const handleResize = () => {
          setScreenWidth(window.innerWidth)
          if (window.innerWidth<425) {
              
          } else {
            setIsVisible(false)
              
          }
      }
      window.addEventListener('resize', handleResize)
      return () => {
          window.removeEventListener('resize', handleResize)
      }
  }, [])
  return (
    <nav className="main-nav">
      <NavLinkItem url='/' type='logo' linkImg={ArgentLogo}/>
      <div>
        {/* <NavLinkItem type='logo' linkImg={ArgentLogo}/> */}
        {!auth && <NavLinkItem url='/login' type='icon' nameIcon='fa fa-user-circle' text='sign-in'/>}
        {auth && (<>
          <NavLinkItem  type='icon' nameIcon='fa fa-user-circle' text={screenWidth > 425 ? `${user}` : ""}/>
          <Button className='sign-in-button' onClick={onLogout} align='center' > 
          {screenWidth >425 ? "Logout":<i className={"fa fa-sign-out"} />}</Button>
        </>)}
      </div>
    </nav>
  )
}

export default Header