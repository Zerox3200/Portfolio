import './About.scss'
import AboutPhoto from './../../../Images/3d-portrait-businessman.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
function About() {
    const ref = useRef();
    const InView = useInView(ref, { once: true })
    return (
        <section className="About container" id='About'>
            <div className="About_pt1">
                <h2>About</h2>
                <p>Welcome to Ziad Ahmed's Portfolio! I'm a dedicated React and Node.js developer passionate about crafting
                    intuitive web experiences. With a focus on clean code and innovation, I specialize in building modern
                    applications that exceed expectations. Explore my projects to see how I blend creativity with technical
                    expertise. Let's create something remarkable together!
                </p>
            </div>
            <div className="About_pt2">
                <motion.img src={AboutPhoto} alt="..." loading='lazy' initial={{ opacity: 0, x: -5 }}
                    animate={InView && { opacity: 1, x: 0 }}
                    transition={{ duration: .8, ease: "linear", delay: .3 }}
                    ref={ref} />

                <motion.div className="About_pt2_Desc"
                    initial={{ opacity: 0, x: 5 }}
                    animate={InView && { opacity: 1, x: 0 }}
                    transition={{ duration: .8, ease: "linear", delay: .3 }}
                    ref={ref}
                >
                    <h3>Mern Stack Developer</h3>
                    <p>React developer with a flair for crafting seamless user interfaces.
                        With additional expertise in Node.js, I specialize in building efficient backend systems.
                        Explore my work and discover the blend of creativity and functionality that defines my approach to
                        development.
                    </p>
                    <div className="About_pt2_Desc_details">
                        <p><ArrowForwardIosIcon />  <b>Birthday</b> 1 Sep 2002</p>
                        <p><ArrowForwardIosIcon />  <b>Age</b> 21</p>
                        <p><ArrowForwardIosIcon />  <b>Degree</b> Bachelor</p>
                        <p><ArrowForwardIosIcon />  <b>Phone</b> +2 01030602579</p>
                        <p><ArrowForwardIosIcon />  <b>Email</b> ziadahmedsalah222@gmail.com</p>
                        <p><ArrowForwardIosIcon />  <b>Country</b> Egypt</p>
                        <p><ArrowForwardIosIcon />  <b>City</b> Cairo</p>
                        <p><ArrowForwardIosIcon />  <b>Freelance</b> Available</p>
                    </div>
                    <p>Maintainable  code that leverages the power of reusable packages.
                        I believe in the art of simplicity and efficiency, ensuring that every line of code contributes to a
                        seamless user experience. By harnessing the capabilities of various packages, I enhance productivity
                        without compromising on quality. Whether it's optimizing frontend interfaces or architecting robust
                        backend systems with Node.js, I adhere to best practices to deliver scalable solutions. Explore my
                        portfolio to witness how I combine the principles of clean code with the versatility of packages to
                        create exceptional digital experiences.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default About;