import React from 'react'
import TextField from '../../atoms/textfield'
import Label from '../../atoms/label'

interface LabeledTextFieldProps {
  label: string;
  name: string;
  id: string;
  className?: string;
  type?: string;
}

export default function LabeledTextField({label,id,className,...props}:LabeledTextFieldProps) {
  return (
    <div
      className={className}
    >
        <Label htmlFor={id}>{label}</Label>
        <TextField id={id} {...props}/>
    </div>
  )
}
