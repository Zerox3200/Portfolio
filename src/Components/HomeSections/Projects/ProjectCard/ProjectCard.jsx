import './ProjectCard.scss'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import ProjectList from '../ProjectList/ProjectList';
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function ProjectCard({ Source }) {
    const [List, setList] = useState(false)
    const ref = useRef();
    const InView = useInView(ref, { once: true });
    return <>
        {List && <>
            <motion.div className="Backdrop" initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0 }}
            >
                <IoCloseOutline onClick={() => setList(List ? false : true)} className='CloseButton' />
                <ProjectList />
            </motion.div>
        </>}
        <motion.div className='ProjectCard' ref={ref}
            style={{ backgroundImage: `url(${Source})` }}
            initial={{ opacity: 0 }}
            animate={InView && { opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
        >
            <div className="CardZoomOrDetails">
                <ZoomOutMapIcon onClick={() => setList(List ? false : true)} />
                <Link to='/Details'><AttachFileIcon /></Link>
            </div>
        </motion.div>
    </>

}
