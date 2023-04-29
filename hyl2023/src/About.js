import React from 'react';
import Typed from 'typed.js';

function About() {
    const el = React.useRef(null);
  
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['The EcoHelp Initiative'],
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

                <div className="about-team-name">
                    <h2>
                        <h1 className="text-border"><span ref={el} /></h1>
                    </h2>
                </div>

                <div className='about-us-text'>
                    <h2 className='about-us-h2 section-header'>
                        About Us
                    </h2>
                    <div>
                        <img 
                            src="https://static.vecteezy.com/system/resources/previews/001/839/727/original/young-woman-hugging-world-planet-earth-free-vector.jpg" 
                            alt="Picture of personal holding a globe"
                            className="picture" 
                            width="400" 
                            height="400"
                        />
                        <p>
                            The EcoHelp Initiative aims to promote waste management, minimize waste production, 
                            and increase recycling and composting efforts through a comprehensive survey-based program based off your history. 
                            This data-driven approach will allow us to create targeted educational and incentive-based programs that cater 
                            to the specific needs of individuals, communities, schools, and businesses, ultimately fostering a more 
                            environmentally sustainable society.
                        </p>
                    </div>
                </div>

                <div className="about-contact-info">
                    
                </div>

            </div>
        </>
        
    );
}

export default About;