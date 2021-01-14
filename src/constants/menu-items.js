import React from "react"
import { DiGithubBadge } from "react-icons/di"
import { FaTwitter, FaLinkedin } from "react-icons/fa"

export const mainMenuItems = [
  {
    path: "/",
    title: "home",
  },
  {
    path: "/about",
    title: "about",
  },
  {
    path: "/journal",
    title: "journal",
  },
  {
    path: "/projects",
    title: "projects",
  },
]

export const socialMenuItems = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/surajrai",
    name: "LinkedIn",
  },
  {
    icon: <FaTwitter />,
    url: "https://www.twitter.com",
    name: "Twitter",
  },
  {
    icon: <DiGithubBadge />,
    url: "https://github.com/bagseye",
    name: "GitHub",
  },
]

export const footerMenuItems = [

]
