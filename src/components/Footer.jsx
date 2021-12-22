import TelegramIcon from '../assets/images/telegram.png';
import GithubIcon from '../assets/images/github.png';
import CvIcon from '../assets/images/cv.png';
import '../assets/styles/Footer.css';

const Footer = () => {
    const telegramLink = 'https://t.me/tuckerntodd';
    const githubLink = 'https://github.com/gushchina-alena';
    const hhLink = 'https://hh.ru/resume/fbed559fff053cd32e0039ed1f5a3949706772';

    return (
        <>
            <footer>
                <p className='footer__heading'>Contacts</p> 
                <div className='footer__icons'>
                    <a href={telegramLink}><img className='footer__icon' src={TelegramIcon} alt='Telegram icon' /></a>
                    <a href={githubLink}><img className='footer__icon' src={GithubIcon} alt='Github icon' /></a>
                    <a href={hhLink}><img className='footer__icon icon__cv' src={CvIcon} alt='Cv icon' /></a>
                </div>
                <p className='footer__copyright'>Copyright © 2021 To Do App. All rights reserved</p>
            </footer>
        </>
    );
}

export default Footer; 