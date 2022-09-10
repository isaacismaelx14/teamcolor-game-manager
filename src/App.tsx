import { useEffect, useState } from 'react'
import styles from 'styles/app.module.scss'
import LogoIcon from './components/Logo';
import config from './config/config.json';

const App: React.FC = () => {
  const [route, setRoute] = useState<string>();

  useEffect(() => {
    setRoute(config.route.minecraft);
  }, []);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <button className={styles.buttonSetting}>Settings</button>
      </header>

      <div className={styles.LogoArea}>
        <LogoIcon width="210px" />
      </div>

      <div className={styles.buttonSection}>
        <button className={styles.button}>
          <span className={styles.buttonText}>Empezar</span>
        </button>

        {route && <p>{route}</p>}
      </div>

      <footer className={styles.footer}>v0.0.1-alpha</footer>
    </div>
  );
}

export default App
