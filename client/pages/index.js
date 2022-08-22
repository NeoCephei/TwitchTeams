import React from 'react'

import Head from 'next/head'

import _ from 'lodash'

/* ====================================================== */
/*                       Components                       */
/* ====================================================== */

import Layout from 'Components/layout/layout'

import { Landing } from 'Components/landing/landing'

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

export default function Home() {
	return (
		<>
			<Head>
				<title>Twitch Teams</title>
				<meta name="description" content="Watch all your streamers at the same time in one tab!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
			<Layout>
				<Landing />
			</Layout>
		</>
	)
}
