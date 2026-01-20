/* eslint-disable no-unused-vars */
import React from 'react'
import ImageCard from '../components/ImageCard'
import { motion } from 'motion/react'

function Gallery() {

  const galleryImages = [
    {
      src: '/1.jpg',
      title: 'image-1',
    },
    {
      src: '/2.jpg',
      title: 'image-2',
    },
    {
      src: '/3.jpg',
      title: 'image-3',
    },
    {
      src: '/4.jpg',
      title: 'image-4',
    },
    {
      src: '/5.jpg',
      title: 'image-5',
    },
    {
      src: '/6.jpg',
      title: 'image-6',
    },
    {
      src: '/7.jpg',
      title: 'image-7',
    },
    {
      src: '/8.jpg',
      title: 'image-8',
    },
    {
      src: '/9.jpg',
      title: 'image-9',
    },
    {
      src: '/10.jpg',
      title: 'image-10',
    },
    {
      src: '/11.jpg',
      title: 'image-11',
    },
    {
      src: '/12.jpg',
      title: 'image-12',
    },
    {
      src: '/13.jpg',
      title: 'image-13',
    },
    {
      src: '/14.jpg',
      title: 'image-14',
    },
    {
      src: '/15.jpg',
      title: 'image-15',
    },
    {
      src: '/16.jpg',
      title: 'image-16',
    },
    {
      src: '/17.jpg',
      title: 'image-17',
    },
    {
      src: '/18.jpg',
      title: 'image-18',
    },
    {
      src: '/19.jpg',
      title: 'image-19',
    },
    {
      src: '/20.jpg',
      title: 'image-20',
    },
  ]

  return (
    <motion.div 
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 0.8,
        ease: 'easeInOut',
      }}
      className='w-full p-6'
    >
      <ImageCard images={galleryImages} />
    </motion.div>
  )
}

export default Gallery