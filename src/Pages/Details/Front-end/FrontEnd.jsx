import './../Projects.scss';
import Slider from "react-slick";
import { FrontEndProjects } from './FrontEndFile';
import { motion } from 'framer-motion';

export default function FrontEnd() {
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
        {FrontEndProjects.map((Project, index) => <motion.div className='FrontEnd p-3 row mt-3'
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, type: 'spring' }}
            key={index}>
            <Slider {...settings} className='col-md-7 FrontEnd_Slider' >
                {Project.CoverImage.map((ele, index) => <div key={index}><img src={ele} alt="" srcSet="" /></div>)}
            </Slider>
            <div className="FrontEnd_Desc col-md-5 d-flex flex-column">
                <div className="Details_Card p-4">
                    <h1 className='h3'>Project Infromation</h1>
                    <hr />
                    <ul className='list-unstyled'>
                        <li><b>Category:</b> {Project.Category} </li>
                        <li><b>Repository URL:</b>
                            <a href={Project.Link} rel='noreferrer' target='_blank' className='mx-2'>Repository Link</a>
                        </li>
                        <li><b>Project URL:</b>
                            <a href={Project.Project_Link} rel='noreferrer' target='_blank' className='mx-2'>
                                Project Link</a>
                        </li>
                        <li><b>Date:</b> {Project.Project_Date} </li>

                    </ul>
                </div>
                <h1 className='h3 mt-3'>{Project.Title}</h1>
                <p>{Project.Desc}
                </p>
            </div>
        </motion.div>

        )}

    </>
}
