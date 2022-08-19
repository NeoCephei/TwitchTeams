import Link from "next/link";

import ReactPlayer from "react-player";
import _ from "lodash";

/* ====================================================== */
/*                         Hooks                          */
/* ====================================================== */

import { useSelector, useDispatch } from "react-redux";

/* ====================================================== */
/*                   Actions / Selectors                  */
/* ====================================================== */

import { addStreamer, removeStreamer, resetList } from "Redux/actions";

export default function TwitchExample() {
  const dispatch = useDispatch();
  const streamers = useSelector((state) => state.streamers);
  const streaming = _.map(streamers, (streamerName) => {
    return (
      <ReactPlayer
        key={streamerName}
        url={`https://www.twitch.tv/${streamerName}`}
        controls
        playing
      />
    );
  });

  const handleGoBack = () => {
    dispatch(resetList());
  };

  if (_.isEmpty(streamers)) {
    return (
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    );
  }
  return (
    <>
      <h2>
        <Link href="/" onClick={handleGoBack}>
          Back to home
        </Link>
      </h2>
      <div>{streaming}</div>
    </>
  );
}
