import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
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
})
