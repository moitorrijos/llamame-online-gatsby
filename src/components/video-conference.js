import React from "react"
import VideoIcon from "../icons/video.svg"
import "../styles/_video-conference.sass"

const VideoConference = ({ color, mobileView }) => (
  <a
    href="https://hey.llamame.online/"
    className={`conference-link ${color} ${mobileView}`}
  >
    <VideoIcon />
    Inicia una Conferencia
  </a>
)

export default VideoConference
