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

export function Landing({}) {
	const dispatch = useDispatch()

	return (
		<>
			<h1>Type the name of your streamer and go watch it</h1>
			<Formik
				initialValues={{
					streamerName: '',
				}}
				onSubmit={async (values, { resetForm }) => {
					const { streamerName } = values
					dispatch(addStreamer(streamerName))
					Router.push('/twitch')
				}}
			>
				<Form>
					<label htmlFor="streamerName">Streamer</label>
					<Field id="streamerName" name="streamerName" placeholder="Twitch channel" autocomplete="off" />

					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</>
	)
}
