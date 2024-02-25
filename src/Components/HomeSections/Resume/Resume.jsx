import Certifications from './Certifactions/Certifications';
import Experience from './Experience/Experience';
import './Resume.scss';
import ResumeEducation from './Resume_Education/ResumeEducation';
import ResumeIntro from './Resume_Intro/ResumeIntro';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Resume() {
    const ref = useRef();
    const InView = useInView(ref, { once: true })

    return (
        <motion.section className="Resume container"
            id='Resume'
            initial={{ opacity: 0, y: 70 }}
            animate={InView && { opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "linear", delay: 0.2 }}
        >
            <div className="Resume_pt1">
                <h1 className='h2' ref={ref}>Resume</h1>
                <p>Fresh React.js developer with a passion for crafting dynamic web experiences.
                    Have the apility in building responsive user interfaces and scalable applications.
                    Dedicated to pushing the boundaries of web development with React.js.
                </p>
            </div>
            <div className="Resume_pt2">
                <div className="Resume_pt2_Summary">
                    <h3>Sumary</h3>
                    <ResumeIntro />
                    <h3>Certfications</h3>
                    <Certifications />
                </div>
                <div className="Resume_pt2_Experience">
                    <h3>Experience</h3>
                    <Experience />
                    <h3>Education</h3>
                    <ResumeEducation />
                </div>
            </div>
        </motion.section>
    );
}

export default Resume;