import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = (props) => {
    const { projectData } = props;
    const projectLink = `project/${projectData.id}`;

    return (
        <article className='project-card'>
            <Link to={projectLink}>
                <img src={projectData.image} />
                <h3>{projectData.title}</h3>
            </Link>
        </article>
    );
};
export default ProjectCard;
