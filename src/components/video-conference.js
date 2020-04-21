import React from "react"
import VideoIcon from "../icons/video.svg"
import "../styles/_video-conference.sass"

const VideoConference = ({ color }) => (
  <a href="#0" className={`conference-link ${color}`}>
    <VideoIcon />
    Inicia una Conferencia
  </a>
)

export default VideoConference
