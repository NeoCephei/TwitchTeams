/* ====================================================== */
/*                       Components                       */
/* ====================================================== */

import Header from 'Components/header/header'
import Footer from 'Components/footer/footer'

/* ====================================================== */
/*                         Styles                         */
/* ====================================================== */

export default function Layout({ children }) {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
