import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')


describe('Pruebas en <GifGrid />', () => {

  const category = 'Attack on titan'

  test('Debe de mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({ 
      images: [], 
      isLoading: true
    })

    render( <GifGrid category={ category } /> )
    expect( screen.getByText('Cargando...') )
    expect( screen.getByText( category ) )
  })


  test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

    const gifs = [{
      id: '123',
      title: 'Attack on titan',
      url: 'https://attack-on-titan'
    },{
      id: '456',
      title: 'Tokyo Ghoul',
      url: 'https://tokyo-ghoul'
    }]

    useFetchGifs.mockReturnValue({ 
      images: gifs, 
      isLoading: false
    })

    render( <GifGrid category={ category } /> )

    expect( screen.getAllByRole('img').length ).toBe( gifs.length ) // gifs.length == 2

  })
})