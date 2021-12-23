import '../assets/styles/About.css';
import planning from '../assets/images/planning.jpg';

const About = () => {
    return (
        <div className="about">
            <div className="about__flex-container">
                <section className="about__text">
                    <h1 className='about__header'>Achieve your goals and keep track of everything</h1>
                    <p>Lorem ipsum dolozr sit amet consectetur adipisicing elit. Perferendis autem animi ipsa velit maxime impedit minus aliquid, neque tempora laudantium odit ipsum ad, quo repudiandae vitae iusto in temporibus ex at modi ipsam, architecto unde error.</p>
                </section>
                <section className="about__img">
                    <img src={planning} alt="To do list" />
                </section>
            </div>
        </div>
    );
}

export default About; 