import { Link } from 'react-router-dom';
import './Details.scss';
import { Helmet } from "react-helmet";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import ReaLife from './ReaLife/ReaLife';

export default function Details() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div ref={containerRef} className="details-page">
            <Helmet>
                <title>Real Life Projects | Portfolio</title>
                <meta name="description" content="Explore my real-life professional projects and their detailed implementations." />
            </Helmet>

            {/* Animated Background */}
            <motion.div
                className="animated-background"
                style={{ y: backgroundY }}
            >
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
                <div className="floating-shapes">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="floating-shape"
                            animate={{
                                y: [0, -30, 0],
                                x: [0, 10, 0],
                                rotate: [0, 180, 360],
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
                                animationDelay: `${i * 0.1}s`,
                            }}
                        />
                    ))}
                </div>
            </motion.div>

            {/* Hero Section */}
            <motion.section
                className="hero-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <motion.h1
                            className="hero-title"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            Real Life Projects
                        </motion.h1>
                        <motion.p
                            className="hero-subtitle"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            Discover the stories behind my professional real-world projects
                        </motion.p>
                    </motion.div>

                    <motion.nav
                        className="breadcrumb-nav"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <Link to="/" className="breadcrumb-link">
                            <i className="fas fa-home"></i>
                            <span>Home</span>
                        </Link>
                        <motion.div
                            className="separator"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                            /
                        </motion.div>
                        <span className="current">Real Life Projects</span>
                    </motion.nav>
                </div>
            </motion.section>

            {/* Project Section */}
            <main className="details-content">
                <motion.section
                    id="real-life"
                    className="project-section real-life-section"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 50
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="section-header">
                        <motion.div
                            className="section-icon"
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3,
                                type: "spring",
                                stiffness: 200
                            }}
                            viewport={{ once: true }}
                        >
                            🚀
                        </motion.div>
                        <motion.h2
                            className="section-title"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Real Life Projects
                        </motion.h2>
                        <motion.div
                            className="section-divider"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            viewport={{ once: true }}
                            style={{ backgroundColor: '#FF6B6B' }}
                        />
                    </div>

                    <motion.div
                        className="section-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        viewport={{ once: true }}
                    >
                        <ReaLife />
                    </motion.div>
                </motion.section>
            </main>

            {/* Floating Action Button */}
            <motion.button
                className="floating-action-btn"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    boxShadow: "0 20px 40px rgba(62, 155, 219, 0.4)"
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 2,
                    type: "spring",
                    stiffness: 200
                }}
            >
                <motion.i
                    className="fas fa-arrow-up"
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.button>

            {/* Mouse Follower */}
            <motion.div
                className="mouse-follower"
                animate={{
                    x: mousePosition.x - 10,
                    y: mousePosition.y - 10,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
        </div>
    );
}
