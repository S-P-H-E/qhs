"use client"
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Home(){

  const fadeInAnimationVariants = { // for framer motion  
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    })
  }

  const scaleInAnimationVariants = { // for framer motion  
    initial: {
        opacity: 0,
    },
    animate: (index: number) => ({
        opacity: 1,

        transition: {
            delay: 0.1 * index,
        }
    })
  }

  return(
    <div className="flex flex-col p-12 items-center">
      <motion.h1 className="text-9xl font-clash w-[700px] text-center"
        custom={1}
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >Read A Lot</motion.h1>
      <motion.p className="text-[#4B5A6C] text-2xl my-4 text-center"
        custom={2}
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
        once: true,
        }}
      >A reader lives a thousand lives before he dies.<br /> The man who never reads lives only one.</motion.p>
      <motion.div
        custom={3}
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <Link href={'/resources'}>
          <button className='contact-us'>
            Get Reading
          </button>
        </Link>
      </motion.div>

      <motion.div
        custom={4}
        variants={scaleInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <Image src={'/svg/reading.svg'} alt='Reading' width={300} height={0} className='absolute bottom-0 left-0 m-10'/>
      </motion.div>

      <motion.div
        custom={5}
        variants={scaleInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <Image src={'/svg/bookshelf.svg'} alt='Reading' width={300} height={0} className='absolute bottom-0 right-0 m-10'/>
      </motion.div>
    </div>
  )
}