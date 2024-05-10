import "./hero.css"
export interface HeroProps {
    imgURL: string;
    imgAlt?: string;
    children: React.ReactNode;
}

const Hero = ({ imgURL,imgAlt, children }: HeroProps) => {
    return (
        <div className="hero">
            <img className="background" src={imgURL} alt={imgAlt?imgAlt:"photo principale"} />
            <div className="hero-card">
                {children}
            </div>

        </div>
    )
}

export default Hero