/* ====================================================== */
/*                       Components                       */
/* ====================================================== */

import Header from 'Components/header/header'
import Footer from 'Components/footer/footer'

/* ====================================================== */
/*                         Styles                         */
/* ====================================================== */

import styles from 'Styles/Home.module.css'

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

export default function Layout({ children }) {
	return (
		<div>
			<Header />
			<div className={styles.main}>{children}</div>
			<Footer />
		</div>
	)
}
