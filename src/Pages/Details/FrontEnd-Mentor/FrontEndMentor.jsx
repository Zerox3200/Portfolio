import './../Projects.scss';
import { Mentors } from './MentorFile';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
export default function FrontEndMentor() {
    const ref = useRef()
    const InView = useInView(ref, { once: true })
    return <>
        <span ref={ref}></span>
        {Mentors.map((MenTor, index) => <motion.div key={index} className='FrontEnd p-3 row mt-3'
            initial={{ opacity: 0 }} animate={InView && { opacity: 1 }}
            transition={{ duration: 0.5, ease: 'linear' }}>
            <img className='col-md-5' src={MenTor.Img} alt="" srcSet="" />
            <div className="FrontEnd_Desc col-md-7 d-flex flex-column">
                <div className="Details_Card p-4">
                    <h1 className='h3'>Project Infromation</h1>
                    <hr />
                    <ul className='list-unstyled'>
                        <li><b>Category:</b> {MenTor.Category}  </li>
                        <li><b>Task URL:</b>
                            <a href={MenTor.Link} rel='noreferrer' target='_blank' className='mx-2'>Repository Link</a>
                        </li>
                        <li><b>Date: </b>{MenTor.date} </li>

                    </ul>
                </div>
                <h1 className='h3 mt-3'>{MenTor.Title}</h1>
                <p>
                    {MenTor.Desc}
                </p>
            </div>
        </motion.div>)}

    </>
}
