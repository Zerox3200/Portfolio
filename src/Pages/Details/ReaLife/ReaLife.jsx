import React from 'react'
import { RealLifeProjects } from './ReaLifeFile';
import { motion } from 'framer-motion';
import '../Projects.scss'

export default function ReaLife() {

    return <>
        {RealLifeProjects.map((ECom, index) => <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, type: 'spring' }}
            className="Real-Life row justify-content-center w-100 mt-3 px-2" key={index}>

            <div key={index} className='CoverImage d-flex justify-content-center p-5'>
                <img src={ECom.CoverImage} alt="..." loading='lazy' />
            </div>

            <div className="Real-Life_Desc col-md-8 d-flex flex-column">
                <div className="Details_Card p-4">
                    <h1 className='h3'>Product Information</h1>
                    <hr />
                    <ul className='list-unstyled'>
                        <li><b>Category:</b> {ECom.Category} </li>
                        <li><b>Project URL: </b>
                            <a href={ECom.ProjectLink} rel='noreferrer' target='_blank' className='mx-2'>Project Link</a>
                        </li>
                        <li><b>Date:</b> {ECom.Project_Date}</li>
                    </ul>
                </div>
                <h1 className='h3 mt-3'>{ECom.Title}</h1>
                <p>{ECom.Desc}</p>
            </div>
        </motion.div>)}

    </>
}
