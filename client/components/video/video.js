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
			className="relative w-full h-full min-h-[400px]"
			onMouseEnter={handleMouseEnterVideoPlayer}
			onMouseLeave={handleMouseLeaveVideoPlayer}
		>
			<ReactPlayer
				key={streamerName}
				url={`https://www.twitch.tv/${streamerName}`}
				controls
				playing
				width="100%"
				height="100%"
			/>

			{showCloseIcon && (
				<button
					className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 rounded-full p-2 cursor-pointer transition-colors z-10"
					onClick={() => {
						dispatch(removeStreamer(streamerName))
					}}
					aria-label={`Remove ${streamerName}`}
				>
					<Image src={closeIcon} alt="close Icon" width={20} height={20} />
				</button>
			)}
		</div>
	)
}
