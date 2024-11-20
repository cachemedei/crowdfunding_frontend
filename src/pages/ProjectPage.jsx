import './ProjectPage.css';
import { useParams } from 'react-router-dom';
import useProject from '../hooks/use-project';

const ProjectPage = () => {
    // useParams() from react router is a hook to get the id from the url
    const { id } = useParams();
    // useProject() returns 3 pieces of info, so we need to grab them all here
    const { project, isLoading, error } = useProject(id);

    if (isLoading) {
        return <p>Loading ...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    const isoDate = project.date_created;
    const date = new Date(isoDate);
    const options = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    };
    const formattedDate = new Intl.DateTimeFormat('en-AU', options).format(
        date
    );

    return (
        <section className='project-page'>
            <h2>{project.title}</h2>
            <img src={project.image} />
            <h3>{formattedDate}</h3>
            <p>{project.description}</p>
            <h3>Pledges:</h3>
            <ul>
                {project.pledges.map((pledgeData, i) => {
                    return (
                        <li key={i}>
                            {pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    );
                })}
            </ul>
            {project.is_open ? (
                <p>This project is currently active</p>
            ) : (
                <p>This project is no longer active</p>
            )}
        </section>
    );
};
export default ProjectPage;
