import React from 'react'

export default function TextField({ type="text",...props }) {
  return (
    <input {...props} type={type} />
  )
}
