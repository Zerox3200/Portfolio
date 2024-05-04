import './ProjectList.scss'
import { motion } from 'framer-motion'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProjectsCards } from '../ProjectFile';
import { FaSquareGithub } from "react-icons/fa6";

export default function ProjectList() {

    return (
        <motion.div className='ProjectList'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            <Swiper modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop
            >
                {ProjectsCards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="card">
                            <img src={card.Img} className="card-img-top" alt="..." loading='lazy' />
                            <div className="card-body">
                                <h1 className="card-title h4">{card.Title}</h1>
                                <p className='card-text'>{card.Desc}</p>
                                <div className='gitHub card-footer'>
                                    <a href={card.Link} rel='noreferrer' target='_blank'>
                                        <FaSquareGithub />GitHub Repositories
                                    </a>
                                    {card.BackEnd && <>
                                        <a href={card.BackEnd} rel='noreferrer' target='_blank'>
                                            <FaSquareGithub />GitHub Repositories BackEnd</a>
                                    </>
                                    }
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </motion.div>
    );
}
