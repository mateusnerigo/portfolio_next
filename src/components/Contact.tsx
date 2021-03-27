import styles from '../styles/components/Contact.module.css';

export function Contact() {
  return (
    <div
      id="contact"
      className={ `container ${styles.contactContainer}` }
    >
      <h1 className="sectionTitle">Contact</h1>

      <form className={ styles.contactForm }>
        <div className={ styles.contactFormField }>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="How can I call you?"
            autoComplete="off"
          />
        </div>

        <div className={ styles.contactFormField }>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="ex: its@me.com"
            required
          />
        </div>

        <div className={ styles.contactFormField }>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Let 's talk a little!"
            rows={5}
            required
          />
        </div>

        <button type="submit">
          Send!
        </button>
      </form>
    </div>
  );
}
