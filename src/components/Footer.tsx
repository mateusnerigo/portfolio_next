import styles from '../styles/components/Footer.module.css';

export function Footer() {
  return (
    <div className={ styles.footerContainer }>
      <div className={ styles.footerLinks }>
        <a href="#">fb</a>
        <a href="#">wpp</a>
        <a href="#">li</a>
      </div>
    </div>
  );
}
