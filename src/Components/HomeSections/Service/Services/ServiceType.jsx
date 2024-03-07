import './ServiceType.scss'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ServiceType({ Icons, Title, Description, Delay }) {
    const ref = useRef();
    const InView = useInView(ref, { once: true })

    return (
        <motion.div className='ServiceType'
            ref={ref}
            initial={{ opacity: 0 }}
            animate={InView && { opacity: 1 }}
            transition={{ duration: 0.8, ease: "linear", delay: Delay }}
        >
            <div className="ServiceType_Icon">
                {Icons}
            </div>
            <div className="ServiceType_Paragraphs">
                <h1 className='h5'>{Title}</h1>
                <p>{Description}
                </p>
            </div>
        </motion.div>
    )
}
