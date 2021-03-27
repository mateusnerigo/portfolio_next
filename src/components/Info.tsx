import styles from '../styles/components/Info.module.css';

export function Info() {
  return (
    <div id="home" className={ `container ${styles.infoContainer}` }>
      <span>Hey!</span>
      <span>Welcome to my site.</span>
      <span>Scroll and discover more.</span>
    </div>
  )
}
