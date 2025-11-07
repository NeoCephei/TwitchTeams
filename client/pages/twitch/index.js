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

	const totalStreams = streamers.length
	
	// Calculamos el número de columnas y filas para un grid balanceado
	const cols = Math.ceil(Math.sqrt(totalStreams))
	const rows = Math.ceil(totalStreams / cols)

	const streamings = streamers.map((streamerName) => {
		return <VideoStream key={streamerName} streamerName={streamerName} qty={totalStreams} />
	})

	if (streamers.length === 0) {
		return <Layout>Seems you haven't select any streamer yet</Layout>
	}

	return (
		<Layout>
			<div 
				className="gap-2 bg-gray-900 min-w-full min-h-screen p-2"
				style={{
					display: 'grid',
					gridTemplateColumns: `repeat(${cols}, 1fr)`,
					gridTemplateRows: `repeat(${rows}, 1fr)`,
				}}
			>
				{streamings}
			</div>
		</Layout>
	)
}
