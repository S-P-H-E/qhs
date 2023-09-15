"use client"
import {motion} from 'framer-motion'
import Image from 'next/image'

export default function About(){
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

    return(
        <div className="flex justify-center items-center p-8">
            <motion.div className="shadow-xl border border-[--highlight] p-8 rounded-2xl w-[800px]"
                custom={1}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                once: true,
                }}
            >
                <h1 className="font-clash text-3xl w-full text-center mb-2">About Us</h1>
                <p className='leading-9 text-[1.2rem]'>
                Read a lot.com is Queensburgh High School&apos;s Digital Bookshelf.<br />
                Our aim is to recommit ourselves to the cause of literacy, so that its transformative power
                may be accessible to everyone.
                With this in mind, we have created the convenience of carrying an entire library in your
                pocket. It allows for portability, meaning you can take your entire collection with you,
                wherever you go.
                You may be an avid reader looking to connect with others who share your passion or you
                may be someone looking to improve your English language skills; in reading, listening,
                speaking and writing.
                Whether you prefer adventure or mystery, romance or biographies, there will surely be
                something you will enjoy.
                So go ahead, dive into the world of words and experience new places and people.
                </p>
            </motion.div>
        </div>
    )
}