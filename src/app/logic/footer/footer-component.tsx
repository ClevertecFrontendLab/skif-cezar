import React from 'react';
import clsx from 'clsx';

import styles from 'src/app/logic/footer/Footer.module.scss';

/**
 * Footer component
 */
export const Footer: React.FC = () => {
  const FOOTER_STYLES = clsx(styles.footer);
  const COMPANY_STYLES = clsx(styles.company);
  const SOCIAL_STYLES = clsx(styles.social);
  const FACEBOOK_STYLES = clsx(styles.facebook);
  const INSTAGRAM_STYLES = clsx(styles.instagram);
  const VKONTAKTE_STYLES = clsx(styles.vkontakte);
  const LINKEDIN_STYLES = clsx(styles.linkedin);

  return (
    <footer className={FOOTER_STYLES}>
      <div className={COMPANY_STYLES}>
        <span>&copy; 2020-2023 Cleverland. Все права защищены.</span>
      </div>
      <div className={SOCIAL_STYLES}>
        <ul>
          <li>
            <a className={FACEBOOK_STYLES} href='/' aria-label="Facebook" target='_blank' rel='noopener noreferrer'>Facebook</a>
          </li>
          <li>
            <a className={INSTAGRAM_STYLES} href='/' aria-label="Instagram" target='_blank' rel='noopener noreferrer'>Instagram</a>
          </li>
          <li>
            <a className={VKONTAKTE_STYLES} href='/' aria-label="Vkontakte" target='_blank' rel='noopener noreferrer'>Vkontakte</a>
          </li>
          <li>
            <a className={LINKEDIN_STYLES} href='/' aria-label="Linkedin" target='_blank' rel='noopener noreferrer'>Linkedin</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
