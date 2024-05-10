import Typography from '../../atoms/typography'
import './card.css'

interface CardProps {
    urlImage: string;
    alt: string;
    title: string;
    subtitle: string;
}

const Card = ({ ...props }: CardProps) => {
    return (
        <div className="feature-item">
            <img
                src={props.urlImage}
                alt={props.alt}
                className="feature-icon"
            />
            <Typography component="h3" fontWeight='bold' variant='body-xl' align='center'  >{props.title}</Typography>
            <Typography component="p" align='center'  style={{paddingBottom:"1rem"}}>{props.subtitle}</Typography>
        </div>
    )
}

export default Card