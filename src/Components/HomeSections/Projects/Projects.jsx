import { useState } from 'react';
import './Projects.scss';
import ProjectCard from './ProjectCard/ProjectCard';
import { ProjectsCards } from './ProjectFile';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Projects() {
    const [All, setAll] = useState(true);
    const [FrontEnd, setFrontEnd] = useState(false);
    const [MernStack, setMernStack] = useState(false);
    const [FrontEndMenter, setFrontEndMenter] = useState(false);
    const [Projects, setProjects] = useState(ProjectsCards);
    const projectsFilters = useRef();
    const InView2 = useInView(projectsFilters, { once: true });


    const ProjectsFilters = (Type) => {
        if (Type === "All") {
            setProjects(ProjectsCards);
            return;
        };

        const FilteredData = ProjectsCards.filter((project) => {
            console.log(Type)
            return project.Category === Type;
        })
        setProjects(FilteredData);
    }

    const ActivationHandler = (Sing) => {
        const filters = {
            "All": { all: true, frontEnd: false, mernStack: false, frontEndMentor: false },
            "FrontEnd": { all: false, frontEnd: true, mernStack: false, frontEndMentor: false },
            "MernStack": { all: false, frontEnd: false, mernStack: true, frontEndMentor: false },
            "FrontEndMentor": { all: false, frontEnd: false, mernStack: false, frontEndMentor: true }
        };

        const { all, frontEnd, mernStack, frontEndMentor } = filters[Sing];

        setAll(all);
        setFrontEnd(frontEnd);
        setMernStack(mernStack);
        setFrontEndMenter(frontEndMentor);
        ProjectsFilters(Sing);
    }

    return (
        <section className='Projects' id='Projects'>
            <div className="Projects_pt1 container">
                <h1 className='h3'>Projects</h1>
                <p>Dive into a curated collection of my React projects,
                    where every line of code reflects a journey of innovation and craftsmanship.
                    From dynamic web applications to interactive user interfaces, each project embodies
                    my passion for creating impactful digital experiences. Whether it's leveraging the
                    latest libraries or pushing the boundaries of design, these projects showcase the
                    intersection of technology and creativity. Explore the depths of my work and witness
                    how React has been the cornerstone of bringing ideas to life, one component at a time.
                </p>
            </div>
            <div className="Projects_pt2 container">
                <motion.div className="Fliters"
                    ref={projectsFilters}
                    initial={{ opacity: 0, y: 50 }}
                    animate={InView2 && { opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'linear' }}
                >
                    <span className={All ? "Active" : ""} onClick={() => ActivationHandler("All")}>All</span>
                    <span className={FrontEnd ? "Active" : ""} onClick={() => ActivationHandler("FrontEnd")}>Front-End</span>
                    <span className={MernStack ? "Active" : ""} onClick={() => ActivationHandler("MernStack")}>Mern Stack</span>
                    <span className={FrontEndMenter ? "Active" : ""} onClick={() => ActivationHandler("FrontEndMentor")}>Front-End Menter</span>
                </motion.div>
                <div className="ProjectsFilters">
                    <AnimatePresence>
                        {Projects.map((card, index) => <ProjectCard key={index} Source={card.Img} />)}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
