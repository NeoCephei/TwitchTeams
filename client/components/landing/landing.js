import React from 'react'

import Router from 'next/router'

import { Formik, Field, Form } from 'formik'
import _ from 'lodash'

/* ====================================================== */
/*                         Hooks                          */
/* ====================================================== */

import { useDispatch } from 'react-redux'

/* ====================================================== */
/*                   Actions / Selectors                  */
/* ====================================================== */

import { addStreamer } from 'Redux/actions'

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

import { useRouter } from 'next/router'

export function Landing() {
	const router = useRouter()

	return (
		<div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-gray-900 to-purple-900 text-white">
			<div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
				{/* Hero Section */}
				<div className="text-center mb-16">
					<h1 className="text-5xl sm:text-6xl font-bold mb-6">
						Watch Multiple Twitch Streams
						<span className="block text-purple-400 mt-2">At The Same Time</span>
					</h1>
					<p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
						Never miss a moment. Watch all your favorite streamers simultaneously in one organized grid.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<div className="text-gray-400">
							👆 Start by adding a streamer above
						</div>
					</div>
				</div>

				{/* Features */}
				<div className="grid md:grid-cols-3 gap-8 mb-16">
					<div className="bg-purple-800/30 backdrop-blur rounded-lg p-6 border border-purple-700/50">
						<div className="text-4xl mb-4">📺</div>
						<h3 className="text-xl font-semibold mb-2">Multi-View Grid</h3>
						<p className="text-gray-300">
							Automatically arranges streams in an optimal grid layout. Add as many as you want!
						</p>
					</div>

					<div className="bg-purple-800/30 backdrop-blur rounded-lg p-6 border border-purple-700/50">
						<div className="text-4xl mb-4">⚡</div>
						<h3 className="text-xl font-semibold mb-2">Real-Time Streaming</h3>
						<p className="text-gray-300">
							All streams play live with full Twitch chat and controls available.
						</p>
					</div>

					<div className="bg-purple-800/30 backdrop-blur rounded-lg p-6 border border-purple-700/50">
						<div className="text-4xl mb-4">🎮</div>
						<h3 className="text-xl font-semibold mb-3">Easy Management</h3>
						<p className="text-gray-300">
							Hover over any stream to remove it. Simple and intuitive controls.
						</p>
					</div>
				</div>

				{/* How it works */}
				<div className="bg-gray-800/50 backdrop-blur rounded-lg p-8 border border-gray-700">
					<h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
					<div className="grid md:grid-cols-3 gap-6 text-center">
						<div>
							<div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
								1
							</div>
							<h4 className="font-semibold mb-2">Add Streamers</h4>
							<p className="text-gray-400 text-sm">
								Type the Twitch channel name in the header and hit "Add"
							</p>
						</div>
						<div>
							<div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
								2
							</div>
							<h4 className="font-semibold mb-2">Watch Together</h4>
							<p className="text-gray-400 text-sm">
								All streams appear in a perfectly organized grid
							</p>
						</div>
						<div>
							<div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
								3
							</div>
							<h4 className="font-semibold mb-2">Manage Easily</h4>
							<p className="text-gray-400 text-sm">
								Hover and click the × to remove any stream you want
							</p>
						</div>
					</div>
				</div>

				{/* Use Cases */}
				<div className="mt-16 text-center">
					<h3 className="text-2xl font-semibold mb-6">Perfect For</h3>
					<div className="flex flex-wrap justify-center gap-4">
						<span className="bg-purple-700/50 px-4 py-2 rounded-full text-sm">
							Tournament Watching
						</span>
						<span className="bg-purple-700/50 px-4 py-2 rounded-full text-sm">
							Multi-POV Gaming
						</span>
						<span className="bg-purple-700/50 px-4 py-2 rounded-full text-sm">
							Friend Groups
						</span>
						<span className="bg-purple-700/50 px-4 py-2 rounded-full text-sm">
							Esports Events
						</span>
						<span className="bg-purple-700/50 px-4 py-2 rounded-full text-sm">
							Content Creation
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
