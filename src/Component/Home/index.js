


import './index.css';

const Home = () => {
    return (
        <div className='container'>
            <div className='description-container'>
                <h1 className='welcome-heading'>WELCOME!</h1>
                <h1 className='developer-heading'>I Am Web Developer</h1>
                <p>I'm a passionate web developer specializing in creating dynamic, responsive websites using modern web technologies. With a focus on delivering clean, efficient code, I aim to build user-friendly and visually appealing applications.</p>
                <div>
                    <button>
                        <a href="/RESUME.pdf" target="_blank">MY RESUME</a>
                    </button>
                </div>
            </div>
            <div className='image-container'>
                <img src="https://static.vecteezy.com/system/resources/previews/011/153/368/original/3d-website-developer-working-on-laptop-illustration-png.png" alt="developer" className='developer-image' />
            </div>
        </div>
    );
}

export default Home;
