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
                <div className='leading-9 text-[1.2rem]'>
                Read a lot.com is Queensburgh High School’s online library of free electronic books or eBooks, which you can download or read online. 
The mission of Read a lot.com is to: 
<ul>
    <li>- promote literacy and a love of reading by offering access to free books and literature.</li>
    <li>- promote personal development and growth. </li>
    <li>- foster a sense of community and collaboration among users.</li>
    <li>- bridge the digital divide by providing open access, regardless of one’s geographical location. </li>
</ul>	
With this in mind, we have created the convenience of carrying a library in your pocket. It allows for portability, meaning that you can take your collection along with you, wherever you go. 
So go ahead, dive into the world of words and experience new places and people. 
‘Our job is to read things that are not yet on the page’ - Steve Jobs

                </div>
            </motion.div>
        </div>
    )
}