import TelegramIcon from '../assets/images/telegram.png';
import GithubIcon from '../assets/images/github.png';
import '../assets/styles/Footer.css';

const Footer = () => {
    const telegramLink = 'https://t.me/tuckerntodd';
    const githubLink = 'https://github.com/gushchina-alena';

    return (
        <>
            <footer>
                <p className='footer__heading'>Contacts</p> 
                <div footer__icons>
                    <a href={telegramLink}><img className='footer__icon' src={TelegramIcon} alt="" /></a>
                    <a href={githubLink}><img className='footer__icon' src={GithubIcon} alt="" /></a>
                </div>
                <p className='footer__copyright'>Copyright © 2021 To Do App. All rights reserved</p>
            </footer>
        </>
    );
}

export default Footer; 