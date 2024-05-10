import './navlink.css';
import Typography from '../../atoms/typography';

export interface NavLinkProps  {
    url?: string;
    type?: string;
    nameIcon?: string;
    linkImg?: string;
    text?: string;
}

const NavLinkItem = ({
    url ="#",
    type="icon",
    nameIcon="",
    linkImg="",
    text="",
    ...props
}:NavLinkProps) => {
    if(type === "icon"){
        return (
            <a href={url} className='main-nav-item' {...props}>
                 <Typography component="span" theme='black'>
                    <i className={nameIcon} />
                 </Typography>
                <Typography component="span">{text}</Typography>
            </a>
        )
    }
    return (
        <a href={url} className='main-nav-logo'>
         <img
          className="main-nav-logo-image"
          src={linkImg}
          alt="Argent Bank Logo"
        />
        <Typography component="h1" className='sr-only'>{text}</Typography>
        </a>
  )
}

export default NavLinkItem