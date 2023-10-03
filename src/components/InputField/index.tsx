import { TextField } from '@mui/material'
import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputProps } from './InputField.types'

const InputField = ({ label, name, isRequired }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <TextField
      fullWidth
      label={label}
      margin='normal'
      {...register(name)}
      error={isRequired && !!errors.name}
      helperText={isRequired && (errors.name?.message as ReactNode)}
    />
  )
}

export default InputField
