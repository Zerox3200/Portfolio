import './SkilLoaders.scss';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function SkillLoader({ Title, Precentage, index }) {
    const ref = useRef();
    const InView = useInView(ref, { once: true, threshold: 0.3 });

    return (
        <motion.div
            className="Skill_Loader"
            initial={{ y: 50, opacity: 0, scale: 0.8 }}
            animate={InView && { y: 0, opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: index * 0.1
            }}
            ref={ref}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
            }}
        >
            <div className="Skill_Loader_pt1">
                <motion.span
                    className="skill-title"
                    initial={{ opacity: 0, x: -20 }}
                    animate={InView && { opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                    {Title}
                </motion.span>
                <motion.span
                    className="skill-percentage"
                    initial={{ opacity: 0, x: 20 }}
                    animate={InView && { opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                    {Precentage}
                </motion.span>
            </div>
            <div className="Skill_Loader_pt2">
                <motion.div
                    className="progress-track"
                    initial={{ opacity: 0 }}
                    animate={InView && { opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                >
                    <motion.span
                        className='Loading'
                        initial={{ width: 0 }}
                        animate={InView && { width: `${Precentage}` }}
                        transition={{
                            duration: 1.5,
                            ease: 'easeOut',
                            delay: index * 0.1 + 0.6
                        }}
                    >
                        <motion.div
                            className="progress-glow"
                            animate={{
                                opacity: [0.3, 0.8, 0.3],
                                scale: [0.8, 1.1, 0.8]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.1
                            }}
                        />
                    </motion.span>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default SkillLoader;