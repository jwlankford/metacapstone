import { SocialMedia } from '../SocialMedia/SocialMedia';

import { Link, useNavigate } from 'react-router-dom';
import navigation from '../../data/navigation.json';

import './Footer.css';

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer role="region" aria-label="Footer Section">
    <div
      className='logo'
      onClick={() => navigate('/')}
      style={{ height: 60, width: 281 }}
      role="banner"
    >
      <img  src="https://ik.imagekit.io/zenius/Coursera/html-css/Asset_14_4x_d1Yk7QBPiW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674426270880" 
            alt="Little Lemon - Logo"
            title="Little Lemon - Home" />
    </div>

      <section className="FooterMenu">
        <h4>
          Menu
        </h4>
        <nav>
          <ul>
            {navigation.map(({ id, title, link }) => {
                return (
                    <li key={id}>
                    <Link to={link}>{title}</Link>
                    </li>
                );
            })}
            <li></li>
          </ul>
        </nav>
      </section>

      <section className="FooterContact">
        <h4>
          Contact
        </h4>
        <article>
          <p>1234 Chili Street, Cincinnati, Ohio, 45201</p>
          <p>513-444-1212</p>
          <p>contact@littlelemon.com</p>
        </article>
      </section>

      <section className="FooterSocial">
        <h4>
          Social Media
        </h4>
        <nav className="Navigation FooterNavigation">
          <SocialMedia />
        </nav>
      </section>
    </footer>
  );
};