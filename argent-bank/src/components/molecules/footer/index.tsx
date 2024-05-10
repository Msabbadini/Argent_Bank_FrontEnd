import Typography from "../../atoms/typography";
import './index.css'
export interface FooterProps {
    text: string;
}
const Footer = ({text}:FooterProps) => {
  return (
    <div className="footer">
        <Typography component="p" align="center"  >{text}</Typography>
    </div>
  )
}

export default Footer