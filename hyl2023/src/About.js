import React from 'react';
import Typed from 'typed.js';

function About() {
    const el = React.useRef(null);
  
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Hi, we are Team Nori Elite.", 'Welcome to our Hack Your Learning 2023 Project!', 'An informative waste tracker.'],
            typeSpeed: 30,
        });
        
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };

    }, []);
    
    return (
        <>
            <div id="about">
                <h1><span ref={el} /></h1>
            </div>
        </>
        
    );
}

export default About;