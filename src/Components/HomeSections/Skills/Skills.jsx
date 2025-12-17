import './Skills.scss';
import { AllSkills } from './SkillsFile';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiFirebase } from "react-icons/di";
import { GiJesterHat } from "react-icons/gi";
import { FaNodeJs } from "react-icons/fa6";

function Skills() {
    const ref = useRef();
    const InView = useInView(ref, { once: true });
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                staggerChildren: 0.15,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                type: "spring",
                stiffness: 50,
                damping: 15
            }
        }
    };

    // Skill icons mapping with React Icons
    const skillIcons = {
        'React': FaReact,
        'Java Script': FaNodeJs,
        'Html': FaHtml5,
        'CSS': FaCss3Alt,
        'Node js': FaNodeJs,
        'Mongo DB': DiMongodb,
        'Express Js': SiExpress,
        'Git and Git hub': FaGithub,
        'Type Script': SiTypescript,
        'Next js': SiNextdotjs,
        'Redux': SiRedux,
        'Sass': FaSass,
        'Bootstrap': FaBootstrap,
        'Firebase': DiFirebase,
        'Jest': GiJesterHat
    };

    return (
        <motion.section
            className="Skills"
            id='Skills'
            variants={containerVariants}
            initial="hidden"
            animate={InView && "visible"}
            ref={ref}
        >
            {/* Skills Background Elements */}
            <motion.div
                className="skills-background"
                style={{ y }}
            >
                <div className="bg-orb orb-1"></div>
                <div className="bg-orb orb-2"></div>
                <div className="bg-orb orb-3"></div>
                <div className="floating-particles">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="particle"
                            animate={{
                                y: [0, -120, 0],
                                x: [0, Math.random() * 60 - 30, 0],
                                opacity: [0.2, 0.8, 0.2],
                                scale: [0.4, 1.1, 0.4],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 8 + i * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.4,
                            }}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                        >
                            {['⚡', '💻', '🚀', '🎯', '✨', '🔥', '💡', '🎨', '🔧', '⚙️', '🎪', '🎭', '🔮', '🌟', '💎'][i % 15]}
                        </motion.div>
                    ))}
                </div>
                <div className="grid-overlay"></div>
            </motion.div>

            <div className="container">
                <motion.div
                    className="Skiils_pt1"
                    variants={itemVariants}
                >
                    <motion.div
                        className="title-container"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={InView && { opacity: 1, scale: 1 }}
                        transition={{ duration: 1, type: "spring", stiffness: 50 }}
                    >
                        <motion.h2
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            Skills & Expertise
                        </motion.h2>
                        <motion.div
                            className="title-underline"
                            initial={{ scaleX: 0 }}
                            animate={InView && { scaleX: 1 }}
                            transition={{ duration: 1.2, delay: 0.6 }}
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={InView && { opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="skills-intro"
                    >
                        Welcome to the Skills section! Here, I'm excited to showcase the expertise and proficiency I bring to the table.
                        As a React developer, I've honed my abilities across various domains to craft seamless, scalable,
                        and innovative solutions. Below, you'll find a snapshot of the skills I've cultivated along my journey:
                    </motion.p>

                    <motion.div
                        className="Skills_Statics"
                        variants={itemVariants}
                    >
                        {AllSkills.map((skill, index) => {
                            const IconComponent = skillIcons[skill.Title];
                            return (
                                <motion.div
                                    key={index}
                                    className="skill-icon-card"
                                    variants={itemVariants}
                                    whileHover={{
                                        scale: 1.1,
                                        y: -10,
                                        rotateY: 10,
                                        transition: { duration: 0.4, ease: "easeOut" }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <motion.div
                                        className="icon-container"
                                        animate={{
                                            y: [0, -5, 0],
                                            rotate: [0, 5, -5, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.2,
                                        }}
                                    >
                                        {IconComponent ? (
                                            <IconComponent className="skill-icon mx-auto" />
                                        ) : (
                                            <div className="skill-icon fallback-icon">💻</div>
                                        )}
                                    </motion.div>
                                    <motion.div
                                        className="skill-info"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={InView && { opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                                    >
                                        <h3>{skill.Title}</h3>
                                        <span className="skill-level">{skill.Precentage}</span>
                                    </motion.div>
                                    <motion.div
                                        className="skill-glow"
                                        animate={{
                                            opacity: [0.3, 0.8, 0.3],
                                            scale: [0.8, 1.2, 0.8],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.1,
                                        }}
                                    />
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <motion.div
                        className="skills-summary"
                        initial={{ opacity: 0, y: 30 }}
                        animate={InView && { opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <motion.div
                            className="summary-card"
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 20px 60px rgba(102, 126, 234, 0.3)"
                            }}
                        >
                            <h3>Continuous Learning</h3>
                            <p>
                                I believe in staying ahead of the curve by continuously learning and adapting to new technologies.
                                My skill set is constantly evolving as I explore emerging trends and best practices in web development.
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Skills;