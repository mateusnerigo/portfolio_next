import styles from '../styles/components/Footer.module.css';

export function Footer() {
  return (
    <div className={ styles.footerContainer }>
      <div className={ styles.footerLinks }>
        <a href="https://github.com/mateusnerigo">Github</a>
        <a href="https://www.linkedin.com/in/mateus-neri-b9130615b/">Linkedin</a>
      </div>
    </div>
  );
}
