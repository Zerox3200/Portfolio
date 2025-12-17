import './ServiceType.scss'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ServiceType({ Icons, Title, Description, Delay, index }) {
    const ref = useRef();
    const InView = useInView(ref, { once: true });

    const itemVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                type: "spring",
                stiffness: 50,
                damping: 15,
                delay: Delay
            }
        }
    };

    return (
        <motion.div
            className='ServiceType'
            ref={ref}
            variants={itemVariants}
            initial="hidden"
            animate={InView && "visible"}
            whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.4, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
        >
            <motion.div
                className="ServiceType_Icon"
                animate={{
                    y: [0, -8, 0],
                    rotate: [0, 5, -5, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                }}
            >
                {Icons}
            </motion.div>
            <div className="ServiceType_Paragraphs">
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={InView && { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: Delay + 0.2 }}
                >
                    {Title}
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={InView && { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: Delay + 0.3 }}
                >
                    {Description}
                </motion.p>
            </div>
            <motion.div
                className="service-glow"
                animate={{
                    opacity: [0.3, 0.7, 0.3],
                    scale: [0.9, 1.3, 0.9],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.15,
                }}
            />
        </motion.div>
    )
}
