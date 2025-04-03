import React, { useEffect } from "react"
import SEO from "../components/SEO"

const GuestbookPage = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', 'dogoodbenice/bonneville')
    script.setAttribute('data-repo-id', 'MDEwOlJlcG9zaXRvcnkzMjk0NTY1NTA=')
    script.setAttribute('data-category', 'General')
    script.setAttribute('data-category-id', 'DIC_kwDOE6Mbps4CovN6')
    script.setAttribute('data-mapping', 'pathname')
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'top')
    script.setAttribute('data-theme', 'noborder_light')
    script.setAttribute('data-lang', 'en')
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    const container = document.querySelector('.giscus-container')
    if (container) {
      container.appendChild(script)
    }

    return () => {
      if (container) {
        container.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <SEO title="Guestbook" />
      <h1>Sign my guestbook</h1>
      <p>Thanks for visiting. Please leave a message below, I read every message with love. Alternatively you might like to <a href="/contact">contact me</a>.</p>
      <br />

      <div className="giscus-container" />
    </>
  )
}

export default GuestbookPage
