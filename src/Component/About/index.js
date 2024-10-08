import './index.css';

const About = () => {
    return (
        <div>
            <div className="upper-container">
                <img 
                    src="https://e7.pngegg.com/pngimages/758/371/png-clipart-web-development-web-service-web-developer-digital-marketing-develop-trademark-logo.png" 
                    alt="photo" 
                    className='avatar'
                />
                <div className="about-content">
                    <h1 className="about-title">Hello, my name is</h1>
                    <h1 className="about-name">Bhukya Nithin</h1>
                    <p className="about-description">
                        I am a passionate web developer specializing in dynamic and responsive web applications. With expertise in both front-end and back-end technologies, I focus on creating user-friendly and visually appealing experiences. Proficient in modern frameworks and languages, including HTML, CSS, JavaScript, and the MERN stack, I aim to leverage my skills to contribute to innovative projects. I am committed to continuously expanding my knowledge in the ever-evolving field of web development.
                    </p>
                </div>
            </div>
            <div>
                <h1 className='skills-head'>Skills</h1>
                <div className='skills'>
                    <div className='skills-container'>
                        <h2 className='skills-heading'>Front end</h2>
                        <ul className="skills-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React JS</li>
                        </ul>
                    </div>
                    <div className='skills-container'>
                        <h2 className='skills-heading'>Back end</h2>
                        <ul className="skills-list">
                            <li>Python</li>
                            <li>Node JS</li>
                            <li>Express JS</li>
                        </ul>
                    </div>
                    <div className='skills-container'>
                        <h2 className='skills-heading'>Others</h2>
                        <ul className="skills-list">
                            <li>DSA using C++</li>
                            <li>Java</li>
                            <li>SQLite</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
