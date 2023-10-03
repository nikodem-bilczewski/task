import { useForm, SubmitHandler } from 'react-hook-form'
import { MyFormData } from './MyForm.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { isSixtyOrOlder, showAlert } from '../../helpers'
import { MyFormSchema } from './MyFormSchema'

const useMyForm = () => {
  const methods = useForm<MyFormData>({
    resolver: zodResolver(MyFormSchema),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = methods

  const dateOfBirth = watch('dateOfBirth')

  useEffect(() => {
    const isOld = isSixtyOrOlder(dateOfBirth)

    if (isOld) {
      document.body.style.fontSize = '4rem'
    } else {
      document.body.style.fontSize = '2rem'
    }
  }, [dateOfBirth])

  const onSubmit: SubmitHandler<MyFormData> = (data) => {
    const { continent, name } = data

    if (continent === 'Europe' && name.length < 2) {
      setError('continent', {
        message: 'Nie spełnione kryteria',
      })
      return
    }

    showAlert('sukces')
  }
  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
    methods,
  }
}

export default useMyForm
