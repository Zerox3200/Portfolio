import './Intro.scss';
import MainPhoto from './../../../Images/PicsArt_02-25-04.40.35.jpg'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

function Intro() {
    return (
        <section className="Intro" id='Intro'>
            <div className="IntroDesc">
                <motion.h1
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, type: "spring", delay: .6 }}
                >Ziad Ahmed</motion.h1>
                <TypeAnimation
                    sequence={[
                        `I'm React Developer`,
                        1000,
                        `I'm BackEnd Developer`,
                        1000,
                        `I'm Mern Stack Developer`,
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </div>
            <motion.img src={MainPhoto} alt="..." loading='lazy'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "linear" }}
            />
        </section>
    );
}

export default Intro;