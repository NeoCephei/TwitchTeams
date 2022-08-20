import React from 'react'

import Link from 'next/link'

import { Formik, Field, Form } from 'formik'
import _ from 'lodash'

/* ====================================================== */
/*                         Hooks                          */
/* ====================================================== */

import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'

/* ====================================================== */
/*                   Actions / Selectors                  */
/* ====================================================== */

import { addStreamer, resetList } from 'Redux/actions'

/* ====================================================== */
/*                         Styles                         */
/* ====================================================== */

import styles from 'Styles/Home.module.css'

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

export default function Header() {
	const dispatch = useDispatch()
	const streamers = useSelector((state) => state.streamers)
	const router = useRouter()

	return (
		<header className={styles.header}>
			<GoBackOption />
			<Formik
				initialValues={{
					streamerName: '',
				}}
				onSubmit={async (values, { resetForm }) => {
					const { streamerName } = values
					resetForm()
					dispatch(addStreamer(streamerName))
					router.pathname === '/' && router.push('/twitch')
				}}
			>
				<Form>
					<label htmlFor="streamerName">Streamer</label>
					<Field id="streamerName" name="streamerName" placeholder="Twitch channel" />

					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</header>
	)
}

/* ====================================================== */
/*                       Helpers                          */
/* ====================================================== */

const GoBackOption = () => {
	const dispatch = useDispatch()
	const router = useRouter()

	const handleRemoveAllStreamers = () => {
		dispatch(resetList())
		router.push(router.pathname === '/' ? '/twitch' : '/')
	}

	return (
		<div>
			<h2 onClick={handleRemoveAllStreamers}>
				{router.pathname === '/' ? 'Go to Twitch Page' : 'Back to home'}
			</h2>
		</div>
	)
}
