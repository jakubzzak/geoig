import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ImageGallery from 'react-image-gallery/src/ImageGallery'

const Gallery = () => {

  const items = [
    {
      original: 'https://source.unsplash.com/random',
      thumbnail: 'https://source.unsplash.com/random/250/150/',
    },
    {
      original: 'https://source.unsplash.com/random',
      thumbnail: 'https://source.unsplash.com/random/250/150/',
    },
    {
      original: 'https://source.unsplash.com/random',
      thumbnail: 'https://source.unsplash.com/random/250/150/',
    },
  ]

  return (
    <div id="gallery" className="p-lg">
      <div className="uppercase text-white text-center p-sm rounded-lg bg-red-400"
           style={{ width: '150px', left: '-40px', position: 'relative' }}>
        galeria
      </div>
      {/*<ImageGallery items={items} autoPlay={true} disableSwipe={true} infinite={true} lazyLoad={true} />*/}
      {/*<Carousel>*/}
      {/*  {items.map(item => {*/}
      {/*    return (*/}
      {/*      <Carousel.Item>*/}
      {/*        <img src={item.src} alt={item.alt}/>*/}
      {/*        <Carousel.Caption>*/}
      {/*          <h3>{item.header}</h3>*/}
      {/*          <p>{item.desc}</p>*/}
      {/*        </Carousel.Caption>*/}
      {/*      </Carousel.Item>*/}
      {/*    )*/}
      {/*  })}*/}
      {/*</Carousel>*/}
    </div>
  )
}

export default Gallery
