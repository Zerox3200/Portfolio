import SkillLoader from './SkillLoaders/SkilLoaders';
import './Skills.scss';
import { AllSkills } from './SkillsFile';


function Skills() {
    return (
        <section className="Skills">
            <div className="Skiils_pt1 container">
                <h2>Skills</h2>
                <p>Welcome to the Skills section! Here, I'm excited to showcase the expertise and proficiency I bring to the table.
                    As a React developer, I've honed my abilities across various domains to craft seamless, scalable,
                    and innovative solutions. Below, you'll find a snapshot of the skills I've cultivated along my journey:
                </p>
                <div className="Skills_Statics">
                    {AllSkills.map((skill, index) =>
                        <SkillLoader key={index} Precentage={skill.Precentage} Title={skill.Title} />)}
                </div>
            </div>
        </section>
    );
}

export default Skills;