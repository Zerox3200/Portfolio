import './About.scss'
import AboutPhoto from './../../../Images/3d-portrait-businessman.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion } from 'framer-motion';

function About() {
    return (
        <section
            className="About"
            id='About'
        >
            {/* Cool Background Elements */}
            <div className="about-background">
                <div className="bg-orb orb-1"></div>
                <div className="bg-orb orb-2"></div>
                <div className="bg-orb orb-3"></div>
                <div className="floating-particles">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="particle"
                            animate={{
                                y: [0, -100, 0],
                                x: [0, Math.random() * 50 - 25, 0],
                                opacity: [0.3, 0.8, 0.3],
                                scale: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 4 + i * 0.3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.2,
                            }}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                        >
                            {['⚡', '💻', '🚀', '🎯', '✨', '🔥', '💡', '🎨'][i % 8]}
                        </motion.div>
                    ))}
                </div>
                <div className="grid-overlay"></div>
            </div>

            <div className="container">
                <motion.div
                    className="About_pt1"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="title-container">
                        <motion.h2
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            About Me
                        </motion.h2>
                        <motion.div
                            className="title-underline"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                        />
                    </div>

                    <p className="intro-text">
                        Welcome to Ziad Ahmed's Portfolio! I'm a dedicated React and Node.js developer passionate about crafting
                        intuitive web experiences. With a focus on clean code and innovation, I specialize in building modern
                        applications that exceed expectations. Explore my projects to see how I blend creativity with technical
                        expertise. Let's create something remarkable together!
                    </p>
                </motion.div>

                <div className="About_pt2">
                    <motion.div
                        className="image-container"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <motion.img
                            src={AboutPhoto}
                            alt="Ziad Ahmed - Software Engineer"
                            loading='lazy'
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        />
                        <div className="image-glow"></div>
                        <div className="image-border"></div>
                        <motion.div
                            className="floating-badges"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="badge badge-1">React</div>
                            <div className="badge badge-2">Node.js</div>
                            <div className="badge badge-3">Full-Stack</div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="About_pt2_Desc"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{
                            rotateY: -2,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <h3 className="role-title">
                            <motion.span
                                animate={{
                                    textShadow: [
                                        "0 0 20px rgba(102, 126, 234, 0.5)",
                                        "0 0 40px rgba(102, 126, 234, 0.8)",
                                        "0 0 20px rgba(102, 126, 234, 0.5)"
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Software Engineer
                            </motion.span>
                        </h3>

                        <p className="main-description">
                            React developer with a flair for crafting seamless user interfaces.
                            With additional expertise in Node.js, I specialize in building efficient backend systems.
                            Explore my work and discover the blend of creativity and functionality that defines my approach to
                            development.
                        </p>

                        <div className="About_pt2_Desc_details">
                            {[
                                { label: "Birthday", value: "1 Sep 2002", icon: "🎂" },
                                { label: "Age", value: "21", icon: "🎯" },
                                { label: "Degree", value: "Bachelor", icon: "🎓" },
                                { label: "Phone", value: "+2 01030602579", icon: "📞" },
                                { label: "Email", value: "ziadahmedsalah222@gmail.com", icon: "📧" },
                                { label: "Country", value: "Egypt", icon: "🇪🇬" },
                                { label: "City", value: "Cairo", icon: "🏙️" },
                                { label: "Freelance", value: "Available", icon: "✅", special: true }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="detail-item"
                                    whileHover={{
                                        scale: 1.05,
                                        x: 10,
                                        boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        duration: 0.5,
                                        delay: index * 0.1
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div
                                        className="detail-icon"
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                    >
                                        {item.icon}
                                    </motion.div>
                                    <ArrowForwardIosIcon className="arrow-icon" />
                                    <div className="detail-content">
                                        <b>{item.label}</b>
                                        <span className={item.special ? "available" : ""}>{item.value}</span>
                                    </div>
                                    <motion.div
                                        className="detail-glow"
                                        animate={{
                                            opacity: [0.3, 0.8, 0.3],
                                            scale: [0.8, 1.2, 0.8]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        <p className="final-description">
                            Maintainable code that leverages the power of reusable packages.
                            I believe in the art of simplicity and efficiency, ensuring that every line of code contributes to a
                            seamless user experience. By harnessing the capabilities of various packages, I enhance productivity
                            without compromising on quality. Whether it's optimizing frontend interfaces or architecting robust
                            backend systems with Node.js, I adhere to best practices to deliver scalable solutions. Explore my
                            portfolio to witness how I combine the principles of clean code with the versatility of packages to
                            create exceptional digital experiences.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;