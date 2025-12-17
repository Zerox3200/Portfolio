import './Intro.scss';
import MainPhoto from './../../../Images/beautiful-office-space-cartoon-style.jpg'
import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll, useTransform } from 'framer-motion';

function Intro() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <section className="Intro" id='Intro'>
            {/* Animated Background Elements */}
            <motion.div
                className="intro-background"
                style={{ y }}
            >
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
                <div className="code-particles">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="code-particle"
                            animate={{
                                y: [0, -30, 0],
                                x: [0, 10, 0],
                                opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                                duration: 3 + i * 0.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.1,
                            }}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                        >
                            {['<', '/', '>', '{', '}', ';', '=', '(', ')', '['][i % 10]}
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className="IntroDesc">
                <motion.div
                    className="intro-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, type: "spring", delay: 0.3 }}
                >
                    <motion.div
                        className="name-badge"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, type: "spring", delay: 0.5 }}
                    >
                        <span>👨‍💻 Software Engineer</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, type: "spring", delay: 0.6 }}
                        className="intro-name"
                    >
                        Ziad Ahmed
                    </motion.h1>

                    <motion.div
                        className="typing-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <TypeAnimation
                            sequence={[
                                `I'm React Developer`,
                                1000,
                                `I'm Front-End Developer`,
                                1000,
                                `I'm UI/UX Enthusiast`,
                                1000,
                                `I'm Mern Stack Developer`,
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            className="typing-text"
                            repeat={Infinity}
                        />
                    </motion.div>

                    <motion.p
                        className="intro-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        Crafting pixel-perfect user interfaces and seamless web experiences.
                        Passionate about clean code, modern design, and creating digital solutions that users love.
                    </motion.p>

                    <motion.div
                        className="tech-stack"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                    >
                        <span className="tech-label">Tech Stack:</span>
                        <div className="tech-icons">
                            <motion.div
                                className="tech-icon"
                                whileHover={{ scale: 1.2, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <i className="fab fa-react"></i>
                                <span>React</span>
                            </motion.div>
                            <motion.div
                                className="tech-icon"
                                whileHover={{ scale: 1.2, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <i className="fab fa-js-square"></i>
                                <span>JavaScript</span>
                            </motion.div>
                            <motion.div
                                className="tech-icon"
                                whileHover={{ scale: 1.2, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <i className="fas fa-server"></i>
                                <span>Next.js</span>
                            </motion.div>
                            <motion.div
                                className="tech-icon"
                                whileHover={{ scale: 1.2, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <i className="fab fa-node-js"></i>
                                <span>Node.js</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="image-container"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, type: "spring", delay: 0.4 }}
            >
                <motion.img
                    src={MainPhoto}
                    alt="Front-End Developer Workspace"
                    loading='eager'
                    className="intro-image"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                />
                <div className="image-glow"></div>
                <div className="floating-elements">
                    <motion.div
                        className="floating-element"
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <i className="fas fa-code"></i>
                    </motion.div>
                    <motion.div
                        className="floating-element"
                        animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        <i className="fas fa-palette"></i>
                    </motion.div>
                    <motion.div
                        className="floating-element"
                        animate={{ y: [0, -25, 0], rotate: [0, 3, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    >
                        <i className="fas fa-mobile-alt"></i>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

export default Intro;