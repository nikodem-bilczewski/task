import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MyForm from './'

describe('MyForm component', () => {
  it('renders the form fields', () => {
    render(<MyForm />)

    expect(screen.getByLabelText('Imię')).toBeInTheDocument()
    expect(screen.getByLabelText('Nazwisko')).toBeInTheDocument()
    expect(screen.getByLabelText('Kontynent')).toBeInTheDocument()
    expect(screen.getByLabelText('Data Urodzenia')).toBeInTheDocument()
    expect(screen.getByText('Wyślij')).toBeInTheDocument()
  })

  it('validates the Name field', async () => {
    render(<MyForm />)

    fireEvent.click(screen.getByText('Wyślij'))

    expect(await screen.findByText('To pole jest wymagane')).toBeInTheDocument()
  })

  it('submits the form with valid data', async () => {
    render(<MyForm />)

    userEvent.type(screen.getByLabelText('Imię'), 'John')
    userEvent.type(screen.getByLabelText('Nazwisko'), 'Doe')
    userEvent.type(screen.getByLabelText('Kontynent'), 'Afryka')
    userEvent.type(screen.getByLabelText('Data Urodzenia'), '01/01/2022')

    fireEvent.click(screen.getByText('Wyślij'))
  })
})
