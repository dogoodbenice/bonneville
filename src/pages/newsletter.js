import React, { useEffect } from "react"
import SEO from "../components/SEO"
import styled from "styled-components"

const FormContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`

const NewsletterPage = () => {
  useEffect(() => {
    // Create and append the script
    const script = document.createElement("script")
    script.src = "https://eocampaign1.com/form/612a5b24-1467-11f0-9fc2-35c57a1f5070.js"
    script.async = true
    script.dataset.form = "612a5b24-1467-11f0-9fc2-35c57a1f5070"
    
    // Append to the form container instead of body
    const formContainer = document.getElementById("form-container")
    if (formContainer) {
      formContainer.appendChild(script)
    }

    // Cleanup
    return () => {
      if (formContainer && script.parentNode) {
        formContainer.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <SEO title="Newsletter" />
      <h1>Short letters from Suraj</h1>
      <p>I write a short letter every month about what I'm thinking about, learning and making.</p>
      <p>If you'd like to receive these letters, please sign up below. Or use <a href="https://surajr.eo.page/hello">this direct link to sign up</a>.</p>
      <br />
      <FormContainer id="form-container">
        {/* The script will render the form here */}
      </FormContainer>
      <br />
      <br />
    </>
  )
}

export default NewsletterPage