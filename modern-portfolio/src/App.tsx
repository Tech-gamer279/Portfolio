import React from 'react';
import AnimatedSection from './components/AnimatedSection';
import './styles/animations.css';

const App: React.FC = () => {
    return (
        <div>
            <h1>My Modern Portfolio</h1>
            <AnimatedSection />
            {/* Add more sections or components as needed */}
        </div>
    );
};

export default App;