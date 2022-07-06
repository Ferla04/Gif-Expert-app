import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Pruebas en <AddCategory />', () => {

  test('Debe cambiar el valor de la caja de texto', () => {

    render( <AddCategory onNewCategory={ () => {} } /> )
    const input = screen.getByRole('textbox')

    fireEvent.input( input, { target: { value: 'Hola' }} )

    expect( input.value ).toBe('Hola')
  })


  test('Debe de llamar OnNewCategory si el input tiene un valor', () => {

    const inputValue = 'Levi'
    const onNewCategory = jest.fn()

    render( <AddCategory onNewCategory={ onNewCategory } /> )

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    /* Eventos */
    fireEvent.input( input, { target: { value: inputValue }} ) /*cambiar el txt del input */
    fireEvent.submit( form )

    expect( input.value ).toBe('')
    expect( onNewCategory ).toHaveBeenCalled()
    expect( onNewCategory ).toHaveBeenCalledTimes(1)
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue )

  })


  test('No debe de llamar OnNewCategory si el input no tiene un valor', () => {

    const onNewCategory = jest.fn()

    render( <AddCategory onNewCategory={ onNewCategory } /> )

    const form = screen.getByRole('form')

    /* Evento */
    fireEvent.submit( form )

    expect( onNewCategory ).toHaveBeenCalledTimes(0)
    expect( onNewCategory ).not.toHaveBeenCalled()

  })
})