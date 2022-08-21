import React from 'react'
import Router from 'next/router'
import Image from 'next/image'

import _ from 'lodash'

/* ====================================================== */
/*                         Styles                         */
/* ====================================================== */

import styles from 'Styles/layout/Layout.module.css'

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<a
				href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				Powered by{' '}
				<span>
					<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
				</span>
			</a>
		</footer>
	)
}
