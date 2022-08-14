import Link from 'next/link';
import ReactPlayer from "react-player"

export default function TwitchExample() {
  return (
  <>
    <h2>
      <Link href="/">Back to home</Link>
    </h2> 
    <div>
      <ReactPlayer
        url="https://www.twitch.tv/alexelcapo"
        controls
        playing
      />
    </div>
  </>
  )
}