/* eslint-disable no-unused-vars */
import { motion } from 'motion/react'

function ImageDisplay({images}){

  const containerVariants = {
    hidden: {
      opacity: 0,
      blur: '10px',
    },
    visible: {
      opacity: 1,
      blur: '0px',
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'linear',
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      className="
        h-full w-full
        m-auto
        shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]
        relative
      "
    >
      {images.map((arr, idx) => (
        <motion.img 
          src={arr.src} 
          key={arr.title || idx}
          variants={cardVariants}
          style={{
            zIndex: idx
          }} 
          className="w-full h-full object-cover absolute inset-0" 
        />
      ))}
    </motion.div>
  )
}

export default ImageDisplay;