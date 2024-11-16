import './homepage.css';

const Homepage = () => {
    return (
        <div>
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
                <button>start project</button>
            </section>
            <section className='projects'>
                <h1>What's happening on NeighbourhoodNuture</h1>
                <div className='projects-container'>
                    <article>
                        <h3>project title</h3>
                        <p>project description</p>
                        <p>link to project</p>
                    </article>
                    <article>
                        <h3>project title</h3>
                        <p>project description</p>
                        <p>link to project</p>
                    </article>
                    <article>
                        <h3>project title</h3>
                        <p>project description</p>
                        <p>link to project</p>
                    </article>
                </div>
                <div className='view'>
                    <p>View more projects</p>
                    <button>{`-->`}</button>
                </div>
            </section>
        </div>
    );
};
export default Homepage;
