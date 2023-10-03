import { Controller, FormProvider } from 'react-hook-form'
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import InputField from '../InputField'
import { continents } from '../../constants'
import useMyForm from './useMyForm'

const MyForm = () => {
  const { control, errors, methods, onSubmit } = useMyForm()

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Controller
          name='continent'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <FormControl fullWidth margin='normal'>
              <InputLabel id='continent' htmlFor='continent'>
                Kontynent
              </InputLabel>
              <Select
                {...field}
                label='continent'
                id='continent'
                error={!!errors.continent}
              >
                {continents.map(({ name, value }) => (
                  <MenuItem key={value} value={value}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
              {errors.continent && (
                <FormHelperText error>
                  {errors.continent.message}
                </FormHelperText>
              )}
            </FormControl>
          )}
        />

        <InputField label='Imię' name='name' isRequired />
        <InputField label='Nazwisko' name='surname' isRequired={false} />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Controller
            control={control}
            defaultValue={null}
            name='dateOfBirth'
            render={({ field }) => {
              return <DatePicker label='Data Urodzenia' {...field} />
            }}
          />
        </LocalizationProvider>

        <Button
          type='submit'
          variant='contained'
          disabled={!!errors.dateOfBirth}
          fullWidth
        >
          Wyślij
        </Button>
      </form>
    </FormProvider>
  )
}

export default MyForm
