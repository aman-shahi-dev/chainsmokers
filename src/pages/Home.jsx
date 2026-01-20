import React from 'react'
import ImageDisplay from '../components/ImageDisplay'

function Home() {

  const imagesArray = [
    {
      src: '/chainsmokers/1.jpg',
      title: 'image-1',
    },
    {
      src: '/chainsmokers/2.jpg',
      title: 'image-2',
    },
    {
      src: '/chainsmokers/3.jpg',
      title: 'image-3',
    },
    {
      src: '/chainsmokers/4.jpg',
      title: 'image-4',
    },
    {
      src: '/chainsmokers/5.jpg',
      title: 'image-5',
    },
    {
      src: '/chainsmokers/6.jpg',
      title: 'image-6',
    },
    {
      src: '/chainsmokers/7.jpg',
      title: 'image-7',
    },
    {
      src: '/chainsmokers/8.jpg',
      title: 'image-8',
    },
    {
      src: '/chainsmokers/9.jpg',
      title: 'image-9',
    },
    {
      src: '/chainsmokers/10.jpg',
      title: 'image-10',
    },
    {
      src: '/chainsmokers/11.jpg',
      title: 'image-11',
    },
    {
      src: '/chainsmokers/12.jpg',
      title: 'image-12',
    },
    {
      src: '/chainsmokers/13.jpg',
      title: 'image-13',
    },
    {
      src: '/chainsmokers/14.jpg',
      title: 'image-14',
    },
    {
      src: '/chainsmokers/15.jpg',
      title: 'image-15',
    },
    {
      src: '/chainsmokers/16.jpg',
      title: 'image-16',
    },
    {
      src: '/chainsmokers/17.jpg',
      title: 'image-17',
    },
    {
      src: '/chainsmokers/18.jpg',
      title: 'image-18',
    },
    {
      src: '/chainsmokers/19.jpg',
      title: 'image-19',
    },
    {
      src: '/chainsmokers/20.jpg',
      title: 'image-20',
    },
  ]

  return (
    <div className='w-full flex items-center justify-center'>
      <ImageDisplay images={imagesArray} />
    </div>
  )
}

export default Home