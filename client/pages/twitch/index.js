import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import _ from 'lodash'
import ReactPlayer from 'react-player'

/* ====================================================== */
/*                         Hooks                          */
/* ====================================================== */

import { useSelector } from 'react-redux'

/* ====================================================== */
/*                       Components                       */
/* ====================================================== */

import Layout from 'Components/layout/layout'

import { VideoStream } from 'Components/video/video'

/* ====================================================== */
/*                         Styles                         */
/* ====================================================== */

import styles from 'Styles/player/Player.module.css'

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

export default function Streamings() {
	const streamers = useSelector((state) => state.streamers)

	// const [showExpandIcon, setShowExpandIcon] = React.useState(false)

	// const handleMouseEnterVideoPlayer = () => {
	// 	setShowExpandIcon(true)
	// }

	// const handleMouseLeaveVideoPlayer = () => {
	// 	setShowExpandIcon(false)
	// }

	const streamings = _.map(streamers, (streamerName) => {
		const numberOfStreamings = _.size(streamers)
		return <VideoStream streamerName={streamerName} qty={numberOfStreamings} />
	})

	if (_.isEmpty(streamers)) {
		return <Layout>Seems you haven't select any streamer yet</Layout>
	}

	return (
		<Layout>
			<div className={styles.container}>
				<div className={styles.streamingsContainer}>{streamings}</div>
				{/* <section className={styles.options}>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path
							fillRule="evenodd"
							d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
							clipRule="evenodd"
						/>
					</svg>
				</section> */}
			</div>
		</Layout>
	)
}
