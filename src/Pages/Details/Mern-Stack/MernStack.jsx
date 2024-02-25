import Slider from 'react-slick';
import './../Projects.scss';
import { MernStackProjects } from './MernStackFile';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
export default function MernStack() {
    const ref = useRef()
    const InView = useInView(ref, { once: true })
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
        <span ref={ref}></span>
        {MernStackProjects.map((Mern, index) => <motion.div key={index}
            className='FrontEnd p-3 row mt-3' initial={{ opacity: 0 }} animate={InView && { opacity: 1 }}
            transition={{ duration: 0.5, ease: 'linear' }}>
            <div className="FrontEnd_Desc col-md-5 d-flex flex-column">
                <div className="Details_Card p-4">
                    <h1 className='h3'>Project Infromation</h1>
                    <hr />
                    <ul className='list-unstyled'>
                        <li><b>Category:</b> {Mern.Category}  </li>
                        <li><b>Front-End URL:</b>
                            <a href={Mern.Link} rel='noreferrer' target='_blank' className='mx-2'>Repository Link</a>
                        </li>
                        <li><b>Back-End URL:</b>
                            <a href={Mern.BackEnd} rel='noreferrer' target='_blank' className='mx-2'>
                                Back-End URL</a>
                        </li>
                        <li><b>Date: {Mern.date}</b> </li>

                    </ul>
                </div>
                <h1 className='h3 mt-3'>{Mern.Title}</h1>
                <p>
                    {Mern.Desc}
                </p>
            </div>
            {Mern.Slides ? <Slider {...settings} className='col-md-7 h-100 FrontEnd_Slider' >
                {Mern.CoverImages.map((Img, index) => <div key={index}><img src={Img} alt="" srcSet="" /></div>)}
            </Slider> : <img className='col-md-7' src={Mern.CoverImage} alt="" srcSet="" />}
        </motion.div>)}

    </>
}
