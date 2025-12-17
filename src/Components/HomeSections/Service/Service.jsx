import { Services } from './SercieFile';
import './Service.scss';
import ServiceType from './Services/ServiceType';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Service() {
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

    return (
        <motion.section
            className='Service'
            id='Service'
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={InView && "visible"}
        >
            {/* Service Background Elements */}
            <motion.div
                className="service-background"
                style={{ y }}
                aria-hidden="true"
            >
                <div className="bg-orb orb-1"></div>
                <div className="bg-orb orb-2"></div>
                <div className="bg-orb orb-3"></div>
                <div className="floating-particles">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="particle"
                            animate={{
                                y: [0, -100, 0],
                                x: [0, Math.random() * 50 - 25, 0],
                                opacity: [0.2, 0.7, 0.2],
                                scale: [0.4, 1, 0.4],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 7 + i * 0.4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.3,
                            }}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                        >
                            {['💼', '🎨', '⚡', '🚀', '✨', '🔧', '💡', '🎯', '🌟', '💎', '🔥', '🎪'][i % 12]}
                        </motion.div>
                    ))}
                </div>
                <div className="grid-overlay"></div>
            </motion.div>

            <div className="container">
                <motion.div
                    className="service-hero"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={InView && { opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: "spring", stiffness: 50 }}
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
                            Services & Solutions
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
                        className="service-intro"
                    >
                        Whether you need a sleek portfolio website, an engaging web application,
                        or customized web development services tailored to your unique requirements,
                        I'm here to turn your vision into reality. Let's collaborate and bring your ideas to real life!
                    </motion.p>
                </motion.div>

                <div className="Services">
                    {Services.map((Ser, index) => (
                        <ServiceType
                            key={index}
                            Description={Ser.Desc}
                            Title={Ser.Title}
                            Icons={Ser.Icon}
                            Delay={Ser.Delay}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
