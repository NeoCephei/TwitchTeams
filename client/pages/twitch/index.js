import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import _ from 'lodash'
import ReactPlayer from 'react-player'

/* ====================================================== */
/*                         Hooks                          */
/* ====================================================== */

import { useSelector, useDispatch } from 'react-redux'

/* ====================================================== */
/*                   Actions / Selectors                  */
/* ====================================================== */

import { removeStreamer } from 'Redux/actions'

/* ====================================================== */
/*                       Components                       */
/* ====================================================== */

import Layout from 'Components/layout/layout'

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

export default function TwitchExample() {
	const dispatch = useDispatch()
	const streamers = useSelector((state) => state.streamers)

	const streamings = _.map(streamers, (streamerName) => {
		return (
			<div>
				<ReactPlayer key={streamerName} url={`https://www.twitch.tv/${streamerName}`} controls playing />

				<h1
					onClick={() => {
						dispatch(removeStreamer(streamerName))
					}}
				>
					Remove <span className="hover:cursor-pointer">{`${streamerName}`}</span>
				</h1>
			</div>
		)
	})

	if (_.isEmpty(streamers)) {
		return <Layout>This has to be an empty view</Layout>
	}

	return <Layout>{streamings}</Layout>
}
