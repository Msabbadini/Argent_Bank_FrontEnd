import React, { useEffect, useState } from 'react'
import Typography from '../../atoms/typography'
import { AtomProps } from '../../atoms'
import './textcard.css'

export interface TextCardProps {
    title: string;
    subtitles: string[];
    content: string;
}

const TextCard = ({title, subtitles, content}:TextCardProps ) => {

    // Obtenez la largeur de l'écran
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [variant, setVariant] = useState<AtomProps['variant']>('lead')
    const [fontWeight, setFontWeight] = useState<AtomProps['fontWeight']>('bold')

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
            if (window.innerWidth<920) {
                setVariant(undefined)
                setFontWeight(undefined)
            } else {
                setVariant('lead')
                setFontWeight('bold')
            }
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className="textcard">
            {/* {title && <Typography component={"h2"} variant='h2' theme='red' className='sr-only'>{title}</Typography>} */}
            {subtitles.length && (
                <div className="text-subtitles">
                    {subtitles.map(t=>
                        <Typography component={"p"} variant={variant} fontWeight={fontWeight}>{t}</Typography>)
                    }
                </div>
            )}
            {content && <Typography component={"p"} variant={screenWidth < 920 ?'body-xs':'body-lg'} >{content}</Typography>}
        </div>
    )
}

export default TextCard