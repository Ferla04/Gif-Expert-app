import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

  const [ data, setData ] = useState({
    images: [],
    isLoading: true
  })

  useEffect(() => {
    
    getGifs(category)
      .then( newImages => {

        setData({
          images: newImages,
          isLoading: false
        })

      })
  }, [])

  return data

}
