import './../Projects.scss';
import Slider from "react-slick";
import { motion } from 'framer-motion';
import { FrontEndProjects } from './ECommerceFile';

export default function ECommerce() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows: false,
        autoplay: true
    };
    return <>
        {FrontEndProjects.map((ECom, index) => <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, type: 'spring' }}
            className="E_Commerce row justify-content-center w-100 mt-3 px-2" key={index}>
            <Slider {...settings} className='col-md-8 E_Commerce_Slider' >
                {ECom.CoverImage.map((imgages, index) => <div key={index}><img src={imgages} alt="..." loading='lazy' /></div>)}
            </Slider>
            <div className="E_Commerce_Desc col-md-8 d-flex flex-column">
                <div className="Details_Card p-4">
                    <h1 className='h3'>Project Infromation</h1>
                    <hr />
                    <ul className='list-unstyled'>
                        <li><b>Category:</b> {ECom.Category} </li>
                        <li><b>Project URL: </b>
                            <a href={ECom.ProjectLink} rel='noreferrer' target='_blank' className='mx-2'>Project Link</a>
                        </li>
                        <li><b>Project URL: </b>
                            <a href={ECom.Link} rel='noreferrer' target='_blank' className='mx-2'>Repository Link</a>
                        </li>
                        <li><b>Date:</b> {ECom.Project_Date}</li>
                    </ul>
                </div>
                <h1 className='h3 mt-3'>{ECom.Title}</h1>
                <p>{ECom.Desc}</p>
                <h1 className='h4 mt-3'>Over View:</h1>
                <p>{ECom.OverView}</p>
                <h1 className='h4 mt-3'>Technologies</h1>
                <ul>
                    {ECom.TechnologiesUsed.map((tech, index) => <li key={index}><b>{tech.Key}</b>: {tech.TechDesc}</li>)}
                </ul>
            </div>
        </motion.div>)}

    </>
}
