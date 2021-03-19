import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

import { Navbar } from '../components/Navbar';
import { Info } from '../components/Info';
import { About } from '../components/About';
import { Portfolio } from '../components/Portfolio';
import { Experiments } from '../components/Experiments';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

function App() {
	return (
		<div className={ `${styles.homeContainer}` }>
			<Head>
				<title>Mateus Neri | Home</title>
			</Head>

			<Navbar />
			
			<Info />
			<About />
			<Portfolio />
			<Experiments />
			<Contact />

			<Footer />
		</div>
	);
}

export default App;