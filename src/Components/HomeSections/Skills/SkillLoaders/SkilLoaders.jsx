import './SkilLoaders.scss';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
function SkillLoader({ Title, Precentage }) {
    const ref = useRef();
    const InView = useInView(ref, { once: true })
    return (
        <motion.div className="Skill_Loader"
            initial={{ y: 100, opacity: 0 }}
            animate={InView && { y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            ref={ref}
        >
            <div className="Skill_Loader_pt1">
                <span>{Title}</span>
                <span>{Precentage}</span>
            </div>
            <div className="Skill_Loader_pt2">
                <motion.span className='Loading'
                    initial={{ width: 0 }}
                    animate={InView && { width: `${Precentage}` }}
                    transition={{ duration: 1, ease: 'linear', delay: 0.2 }}
                >

                </motion.span>
            </div>
        </motion.div>
    )
}

export default SkillLoader;