import { useState } from 'react'

import { Formik, Field, Form } from 'formik'
import _ from 'lodash'

/* ====================================================== */
/*                         Hooks                          */
/* ====================================================== */

import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

/* ====================================================== */
/*                   Actions / Selectors                  */
/* ====================================================== */

import { addStreamer } from 'Redux/actions'


/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */


export default function Header() {
	const dispatch = useDispatch()
	const router = useRouter()
	const [streamerName, setStreamerName] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		
		if (streamerName.trim()) {
			dispatch(addStreamer(streamerName.trim()))
			setStreamerName('')
			
			if (router.pathname === '/') {
				router.push('/twitch')
			}
		}
	}

	const handleLogoClick = () => {
		router.push('/')
	}

	return (
		<header className="bg-purple-900 shadow-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo / Nombre del proyecto */}
					<div 
						className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
						onClick={handleLogoClick}
					>
						<h1 className="text-2xl font-bold text-white">
							Twitch <span className="text-purple-300">Teams</span>
						</h1>
					</div>

					{/* Formulario de búsqueda */}
					<form onSubmit={handleSubmit} className="flex items-center gap-2">
						<label htmlFor="streamerName" className="sr-only">
							Streamer name
						</label>
						<input
							id="streamerName"
							type="text"
							value={streamerName}
							onChange={(e) => setStreamerName(e.target.value)}
							placeholder="Add Twitch channel"
							autoComplete="off"
							className="px-4 py-2 rounded-lg border-2 border-purple-700 bg-purple-800 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400 transition-all"
						/>
						<button
							type="submit"
							className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-900"
						>
							Add
						</button>
					</form>
				</div>
			</div>
		</header>
	)
}
