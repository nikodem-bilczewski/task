import { ZodIssueCode, date, object, string } from 'zod'
import { isDateOfBirthValid } from '../../helpers'

export const MyFormSchema = object({
  continent: string().optional(),
  name: string().nonempty('To pole jest wymagane'),
  surname: string().optional(),
  dateOfBirth: date().nullable().refine(isDateOfBirthValid),
}).superRefine(({ surname, continent }, refinementContext) => {
  if (continent === 'Europe' && (!surname || surname.length < 2)) {
    return refinementContext.addIssue({
      code: ZodIssueCode.custom,
      message: 'Nie spełnione kryteria',
      path: ['continent'],
    })
  }
})
