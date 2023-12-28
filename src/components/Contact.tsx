import styles from '../styles/components/Contact.module.css';

export function Contact() {
  function sendForm() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {
      e.preventDefault()

      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const message = (document.getElementById('message') as HTMLInputElement).value;

      form.style.display = "none";

      const loadingMail = document.getElementById('loadingMail');
      const successfulMail = document.getElementById('successfulMail');
      loadingMail.style.display = "block";

      fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      }).then((response) => {
        loadingMail.style.display = "none";
        successfulMail.style.display = "block";
      }).catch((err) => {
        if (err) {
          alert("An error just occurred. \nSorry about that... \nCould you please try again later? \n\n\nYou can send me an email too, if you want it. \nThe address is mateuslimaneri@gmail.com ")
        }
      })
    });
  }

  return (
    <div
      id="contact"
      className={ `container ${styles.contactContainer}` }
    >

      <h1 className="sectionTitle">Contact</h1>

      <form id="contactForm" className={ styles.contactForm }>
        <div className={ styles.contactFormField }>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="How can I call you?"
            autoComplete="off"
            required
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

        <button type="submit" onClick={() => sendForm()}>
          Send!
        </button>
      </form>

      <div id="loadingMail" className={ styles.loadingMail }>
        <p>loading...</p>
      </div>

      <div id="successfulMail" className={ styles.successfulMail }>
        <img src="img/done.svg" alt="✓"/>
        <p>Email successfully sent!</p>
        <p>Thank you so much for your contact.</p>
      </div>
    </div>
  );
}
