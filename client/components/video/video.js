import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import _ from 'lodash'
import ReactPlayer from 'react-player'

/* ====================================================== */
/*                         Hooks                          */
/* ====================================================== */

import { useDispatch } from 'react-redux'

/* ====================================================== */
/*                   Actions / Selectors                  */
/* ====================================================== */

import { removeStreamer } from 'Redux/actions'

/* ====================================================== */
/*                       Components                       */
/* ====================================================== */

import closeIcon from 'Images/closeIcon.png'

/* ====================================================== */
/*                         Styles                         */
/* ====================================================== */

import styles from 'Styles/video/Video.module.css'

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

export function VideoStream({ streamerName, qty }) {
	//todo: Add tooltip to the closeIcon
	//todo: Make the close icon change size relative to the stream
	const dispatch = useDispatch()
	const [showCloseIcon, setShowCloseIcon] = React.useState(false)

	const handleMouseEnterVideoPlayer = () => {
		setShowCloseIcon(true)
	}

	const handleMouseLeaveVideoPlayer = () => {
		setShowCloseIcon(false)
	}

	return (
		<div
			// className={styles.streamItem}
			// style={{ width: qty > 6 ? '33%' : qty > 3 ? '50%' : '100%' }}
			onMouseEnter={handleMouseEnterVideoPlayer}
			onMouseLeave={handleMouseLeaveVideoPlayer}
		>
			<ReactPlayer
				key={streamerName}
				// wrapper={VideoWrapper}
				url={`https://www.twitch.tv/${streamerName}`}
				controls
				playing
				width="100%"
				height="100%"
			/>

			{showCloseIcon && (
				<div
					className={styles.closeButton}
					onClick={() => {
						dispatch(removeStreamer(streamerName))
					}}
				>
					<Image src={closeIcon} alt="close Icon" width={20} height={20} />
				</div>
			)}
		</div>
	)
}

/* ====================================================== */
/*                       Helpers                          */
/* ====================================================== */

const VideoWrapper = ({ children }) => <div>{children}</div>
