import { useForm, SubmitHandler } from 'react-hook-form'
import { MyFormData } from './MyForm.types'
import { zodResolver } from '@hookform/resolvers/zod'
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
    watch,
  } = methods

  const dateOfBirth = watch('dateOfBirth')
  const isOld = isSixtyOrOlder(dateOfBirth)

  const onSubmit: SubmitHandler<MyFormData> = () => {
    showAlert('sukces')
  }
  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
    methods,
    isOld,
  }
}

export default useMyForm
