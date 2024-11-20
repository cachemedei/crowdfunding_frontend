import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import useProjects from '../hooks/use-projects';
import './HomePage.css';

const HomePage = () => {
    const { projects, isLoading } = useProjects();

    if (isLoading) {
        return (<p className='loader'>Loading ...</p>)
    }

    return (
        <div>
            {/* Hero Section */}
            <section className='hero'>
                <h1 className='title'>
                    Start your own project here at{' '}
                    <span className='name'>NeighbourhoodNuture</span>
                </h1>
                <p>
                    Community connection, raising funds to support clean-up and
                    improvement projects across the City of Melville. Fostering
                    a cleaner, greener and more vibrant local community all
                    starts here, with you.
                </p>
                <button>Create Project</button>
            </section>

            {/* Projects Section */}
            <section className='projects'>
                <h1>What's happening on NeighbourhoodNuture</h1>
                <div className='projects-container'>
                    {projects.map((projectData, i) => {
                        return (
                            <ProjectCard key={i} projectData={projectData} />
                        );
                    })}
                </div>
            </section>
        </div>
    );
};
export default HomePage;
