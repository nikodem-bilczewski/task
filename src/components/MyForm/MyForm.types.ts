import { TypeOf } from 'zod'

import { MyFormSchema } from './MyFormSchema'

export type MyFormData = TypeOf<typeof MyFormSchema>
