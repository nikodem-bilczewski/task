import { date, object, string } from 'zod'
import { isDateOfBirthValid } from '../../helpers'

export const MyFormSchema = object({
  name: string().nonempty('To pole jest wymagane'),
  surname: string().optional(),
  continent: string().optional(),
  dateOfBirth: date().nullable().refine(isDateOfBirthValid),
})
