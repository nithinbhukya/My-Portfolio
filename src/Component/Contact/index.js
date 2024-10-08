import './index.css';

const Contact = () => {
    return (
        <div className='main-container'>
            <div className="card">
                <p className='desc'>Phone No:</p>
                <p>7075400918</p>
            </div>
            <div className="card">
                <p className='desc'>Email:</p>
                <p>bhukyanithin1367@gmail.com</p>
            </div>
            <div className="card">
                <p className='desc'>LinkedIn:</p>
                <p>
                    <a className="link" href="https://linkedin.com/in/nithin-bhukya-982700251" target='_blank' rel="noopener noreferrer">
                        Nithin Bhukya
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Contact;
