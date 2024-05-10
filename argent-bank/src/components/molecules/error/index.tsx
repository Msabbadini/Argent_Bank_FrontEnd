import React from 'react'
import Typography from '../../atoms/typography'

interface ErrorProps {
    message?: string
}

const ErrorMsg = ({message}:ErrorProps) => {
  return (
    <Typography component="p" variant="body-lg" align="left" theme='red'>{message}</Typography>
  )
}

export default ErrorMsg