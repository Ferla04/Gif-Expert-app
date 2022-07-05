import React from 'react'

export const GifGrid = ({ category }) => {


  getGifs(category)


  return (
    <>
      <h3>{ category }</h3>
    </>
  )
}


const getGifs = async () => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=k0WUNnR1P5buYYsugmhELhe7uPLW7L17&q=${category}&limit=20`
  const resp = await fetch(url)
  const { data = [] } = await resp.json()

  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return gifs
}