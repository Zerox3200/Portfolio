import Certifications from './Certifactions/Certifications';
import Experience from './Experience/Experience';
import './Resume.scss';
import ResumeEducation from './Resume_Education/ResumeEducation';
import ResumeIntro from './Resume_Intro/ResumeIntro';
import { useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Experiences } from './Experience/ExperienceFile';

function Resume() {
    const ref = useRef();
    const InView = useInView(ref, { once: true });

    const highlightStats = useMemo(() => ([
        {
            label: 'Projects',
            value: '20+',
            desc: 'Real-world builds focused on usability and performance.',
            emoji: '🚀'
        },
        {
            label: 'Stack',
            value: 'MERN / Next.js',
            desc: 'Product-grade delivery with modern tooling.',
            emoji: '🛠️'
        },
        {
            label: 'Mindset',
            value: 'Craft + Impact',
            desc: 'Detail-oriented, user-first, ship with confidence.',
            emoji: '🎯'
        }
    ]), []);

    return (
        <motion.section
            className="Resume"
            id='Resume'
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={InView && { opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        >
            <motion.div
                className="resume-background"
                aria-hidden="true"
            >
                <div className="bg-orb orb-1" />
                <div className="bg-orb orb-2" />
                <div className="bg-orb orb-3" />
                <div className="grid-overlay" />
            </motion.div>

            <div className="container">
                <motion.div
                    className="resume-hero"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={InView && { opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, type: "spring", stiffness: 60 }}
                >
                    <div className="hero-eyebrow">
                        <span className="pill pill-primary">Resume</span>
                        <span className="pill pill-ghost">Dark mode crafted</span>
                    </div>
                    <h1>Experience & Growth</h1>
                    <p>
                        Fresh React.js developer focused on polished, performant interfaces.
                        I design and ship responsive products with modern tooling, thoughtful motion,
                        and a strong eye for usability across the stack.
                    </p>

                    <div className="hero-meta">
                        {highlightStats.map((item, index) => (
                            <motion.div
                                key={item.label}
                                className="meta-card"
                                initial={{ opacity: 0, y: 10 }}
                                animate={InView && { opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            >
                                <div className="meta-emoji">{item.emoji}</div>
                                <div>
                                    <h4>{item.value}</h4>
                                    <span>{item.label}</span>
                                    <p>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="resume-grid"
                    initial={{ opacity: 0, y: 30 }}
                    animate={InView && { opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                >
                    <motion.div
                        className="resume-card summary-card"
                        whileHover={{ translateY: -6 }}
                        transition={{ type: "spring", stiffness: 80, damping: 14 }}
                    >
                        <div className="card-header">
                            <span className="pill pill-secondary">Profile</span>
                            <div>
                                <h3>Summary & Credentials</h3>
                                <p>Focused on user-first delivery, code quality, and continuous learning.</p>
                            </div>
                        </div>

                        <div className="card-body">
                            <ResumeIntro />

                            <div className="card-divider" />

                            <div className="card-section">
                                <div className="section-title">
                                    <span className="dot" />
                                    <h4>Certifications</h4>
                                </div>
                                <Certifications />
                            </div>

                            <div className="card-section">
                                <div className="section-title">
                                    <span className="dot" />
                                    <h4>Education</h4>
                                </div>
                                <ResumeEducation />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="resume-card experience-card"
                        whileHover={{ translateY: -6 }}
                        transition={{ type: "spring", stiffness: 80, damping: 14 }}
                    >
                        <div className="card-header">
                            <span className="pill pill-accent">Experience</span>
                            <div>
                                <h3>Professional Journey</h3>
                                <p>Hands-on delivery across products with measurable outcomes.</p>
                            </div>
                        </div>

                        <div className="Experience_Border">
                            {Experiences?.map((ele, index) => (
                                <motion.div
                                    key={index}
                                    className="experience-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={InView && { opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 + index * 0.12 }}
                                >
                                    <div className="timeline">
                                        <span className="timeline-dot" />
                                        {index !== Experiences.length - 1 && <span className="timeline-line" />}
                                    </div>
                                    <div className="experience-content">
                                        <Experience
                                            date={ele.date}
                                            descriptions={ele.descriptions}
                                            link={ele.link}
                                            title={ele.title}
                                            type={ele.type}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Resume;