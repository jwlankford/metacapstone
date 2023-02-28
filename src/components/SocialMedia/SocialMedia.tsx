import socialmedia from '../../data/socialmedia';
import './SocialMedia.css';

export const SocialMedia = () => {
  return (
    <section id="SocialMedia">
      <ul role="navigation">
        {socialmedia.map(({ id, name, href, title, icon }) => {
          return (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              title={title}
            >
              <li role="button">
                <img className="SocialIcon" src={icon} alt={name} />
              </li>
            </a>
          );
        })}
      </ul>
    </section>
  );
};
