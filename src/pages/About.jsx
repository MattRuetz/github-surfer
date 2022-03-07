import React from 'react';

function About() {
    return (
        <>
            <h1 className="text-6xl mb-4">Github Explorer</h1>
            <p className="mb-4 text-2xl font-light">
                A React app which uses the Github API to search for users, and
                display a summary of their profile and contributions.
            </p>
            <p className="text-lg text-gray-400">
                Version <span className="text-white">1.0.0</span>
            </p>
            <p className="text-lg text-gray-400">
                By:
                <a className="text-white" href="https://github.com/MattRuetz">
                    &nbsp;Matt Ruetz
                </a>
            </p>
        </>
    );
}

export default About;
