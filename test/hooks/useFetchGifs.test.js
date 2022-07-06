import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

describe('Pruebas en el hook <useFetchGifs />', () => {

  const category = 'Attack on titan'

  test('Debe regresar el estado inicial', () => {

    const { result } = renderHook( () => useFetchGifs( category ) )
    const { images, isLoading } = result.current

    expect( images.length ).toBe(0)
    expect( isLoading ).toBeTruthy()

  })

  test('Debe de retornar un arreglo de images y el isLoading en false', async () => {

    const { result } = renderHook( () => useFetchGifs( category ) )

    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan(0),
      {
        timeout: 1000
      }
    )

    /*El waitFor ayuda a esperar un resultado de, sirver mas que todo
    cuando se espera el resultado de una re-renderizacion en un hook
    ya que puede cambiar de estado
    Tiene dos argumentos el callback que debe retornar un valor booleano
    y el otro, es por si la LO QUE QUEIRAMOS QUE PASE no paso, se detenga
    la espera al tiempo que queramos y da un error */

    const { images, isLoading } = result.current

    expect( images.length ).toBeGreaterThan(0)
    expect( isLoading ).toBeFalsy()

  })
})