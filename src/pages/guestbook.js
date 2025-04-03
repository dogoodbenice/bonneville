import React from "react"
import SEO from "../components/SEO"

const GuestbookPage = () => (
  <>
    <SEO title="Guestbook" />
    <h1>Sign my guestbook</h1>
    <p>Thanks for visiting. Please leave a message below, I read every message with love. Alternatively you might like to <a href="/contact">contact me</a>.</p>
    <br />

    <div className="giscus-container">
      <script
        src="https://giscus.app/client.js"
        data-repo="dogoodbenice/bonneville"
        data-repo-id="MDEwOlJlcG9zaXRvcnkzMjk0NTY1NTA="
        data-category="General"
        data-category-id="DIC_kwDOE6Mbps4CovN6"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="noborder_light"
        data-lang="en"
        crossOrigin="anonymous"
        async
      />
    </div>
  </>
)

export default GuestbookPage
