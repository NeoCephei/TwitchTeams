/* ====================================================== */
/*                       Components                       */
/* ====================================================== */

import Header from 'Components/layout/header/header'
import Footer from 'Components/layout/footer/footer'

/* ====================================================== */
/*                         Styles                         */
/* ====================================================== */

import styles from 'Styles/layout/Layout.module.css'

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

export default function Layout({ children }) {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	)
}
