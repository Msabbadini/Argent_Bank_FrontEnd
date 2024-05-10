import React from 'react'
import { AtomProps } from '..';

interface BadgeProps extends AtomProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  urlImage: string;
  alt: string;
}

const Badge = ({ urlImage, ...props }: BadgeProps) => {
  return (
    <img
      src={urlImage}
      alt={props.alt}
      className="feature-icon"
    />
  )
}

export default Badge