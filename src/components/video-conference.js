import React from "react"
import VideoIcon from "../icons/video.svg"
import "../styles/_video-conference.sass"

const VideoConference = ({ color }) => (
  <a href="https://hey.llamame.online/" className={`conference-link ${color}`}>
    <VideoIcon />
    Inicia una Conferencia
  </a>
)

export default VideoConference
