import Head from 'next/head';

import { Navbar } from '../components/Navbar';

import styles from '../styles/pages/Home.module.css';

function App() {
	return (
		<div className={ styles.container }>
			<Head>
				<title>Home | Mateus Neri</title>
			</Head>

			<Navbar />
		</div>
	);
}

export default App;