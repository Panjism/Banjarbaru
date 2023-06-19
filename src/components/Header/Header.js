import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import Container from '@components/Container';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">
            Peta Kelompok 1
          </Link>
        </p>
        <ul className={styles.headerLinks}>
          <li>
            <a href="https://github.com/panjism" rel="noreferrer">
              <FaGithub />
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
