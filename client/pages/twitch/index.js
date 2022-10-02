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

	const streamings = _.map(streamers, (streamerName) => {
		const numberOfStreamings = _.size(streamers)
		return <VideoStream streamerName={streamerName} qty={numberOfStreamings} />
	})

	const totalStreams = _.size(streamers)
	const shape = _.round(Math.sqrt(totalStreams))
	const result = `grid-cols-${shape} grid-rows-${shape}`

	if (_.isEmpty(streamers)) {
		return <Layout>Seems you haven't select any streamer yet</Layout>
	}

	return (
		<Layout>
			<div className={`grid grid-flow-col ${result} gap-10 bg-gray-200 min-w-full`}>{streamings}</div>
		</Layout>
	)
}
