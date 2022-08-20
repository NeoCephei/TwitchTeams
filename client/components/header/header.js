import React from "react";

import Link from "next/link";

import { Formik, Field, Form } from "formik";
import _ from "lodash";

/* ====================================================== */
/*                         Hooks                          */
/* ====================================================== */

import { useSelector, useDispatch } from "react-redux";

/* ====================================================== */
/*                   Actions / Selectors                  */
/* ====================================================== */

import { addStreamer } from "Redux/actions";

/* ====================================================== */
/*                         Styles                         */
/* ====================================================== */

import styles from "Styles/Home.module.css";

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

export default function Header() {
  const dispatch = useDispatch();
  const streamers = useSelector((state) => state.streamers);

  return (
    <header className={styles.header}>
      <h1>
        Watch <Link href="/twitch">twitch</Link> page
      </h1>
      <Formik
        initialValues={{
          streamerName: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          console.log(">>>>> resetForm:", resetForm);
          const { streamerName } = values;
          dispatch(addStreamer(streamerName));
        }}
      >
        <Form>
          <label htmlFor="streamerName">Streamer</label>
          <Field
            id="streamerName"
            name="streamerName"
            placeholder="Twitch channel"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </header>
  );
}
