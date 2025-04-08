import React, { useEffect } from "react"
import SEO from "../components/SEO"
import styled from "styled-components"

const FormContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`

const NewsletterPage = () => {
  useEffect(() => {
    // Load the external script
    const script = document.createElement('script')
    script.src = "https://eocampaign1.com/form/612a5b24-1467-11f0-9fc2-35c57a1f5070.js"
    script.async = true
    script.dataset.form = "612a5b24-1467-11f0-9fc2-35c57a1f5070"
    document.body.appendChild(script)

    // Cleanup
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <SEO title="Newsletter" />
      <h1>Short letters from Suraj</h1>
      <p>I write a short letter every month about what I'm thinking about, learning and making.</p>
      <p>If you'd like to receive these letters, please sign up below. Or use <a href="https://surajr.eo.page/hello">this direct link to sign up</a>.</p>
      <br />
      <FormContainer>
        <div id="form-612a5b24-1467-11f0-9fc2-35c57a1f5070"></div>
      </FormContainer>
      <br />
      <br />
    </>
  )
}

export default NewsletterPage