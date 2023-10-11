import { Controller, FormProvider } from 'react-hook-form'
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import { continents } from '../../constants'
import useMyForm from './useMyForm'
import { bigFontTheme, smallFontTheme } from '../../themes'

const MyForm = () => {
  const { control, errors, methods, onSubmit, isOld } = useMyForm()

  return (
    <ThemeProvider theme={isOld ? bigFontTheme : smallFontTheme}>
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

          <Controller
            name='name'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                label='Imię'
                fullWidth
                margin='normal'
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />

          <Controller
            name='surname'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                label='Nazwisko'
                fullWidth
                margin='normal'
              />
            )}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Controller
              control={control}
              defaultValue={null}
              name='dateOfBirth'
              render={({ field }) => {
                return <DatePicker {...field} label='Data Urodzenia' />
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
    </ThemeProvider>
  )
}

export default MyForm
