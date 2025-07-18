import React from 'react';
import './animations.css';

const AnimatedSection: React.FC = () => {
    return (
        <section className="animated-section">
            <h2 className="fade-in">Welcome to My Portfolio</h2>
            <p className="slide-in">Here you will find my projects and skills showcased with modern animations.</p>
        </section>
    );
};

export default AnimatedSection;