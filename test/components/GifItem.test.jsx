import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('Pruebas en <GifItem />', () => {

  const title = 'Attack on titan'
  const url = 'https://attack-on-titan/levi.jpg'

  test('Debe hacer match con el snapshot', () => {

    const { container } = render( <GifItem title={ title } url={ url } /> )
    expect( container ).toMatchSnapshot()
  })

  test('Debe mostrar la imagen con el URL y el ATL indicado', () => {

    render( <GifItem title={ title } url={ url } /> )
    // screen.debug()
    const { src, alt } = screen.getByRole('img')
    expect( src ).toBe( url )
    expect( alt ).toBe( title )
  })

  test('Debe mostar el titulo en el componente', () => {

    render( <GifItem title={ title } url={ url } /> )
    expect( screen.getByText( title ) ).toBeTruthy()

  })
})