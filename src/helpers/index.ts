import { subYears } from 'date-fns'

export const isDateOfBirthValid = (date: Date | null) => {
  if (!date) return true
  const currentDate = new Date()
  return date <= currentDate
}

export function isSixtyOrOlder(date: Date | null) {
  if (!date) return false

  const birthDate = new Date(date).getTime()
  const sixtyYearsAgo = subYears(new Date(), 60).getTime()

  return birthDate < sixtyYearsAgo
}
