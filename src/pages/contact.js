import React from "react"
import SEO from "../components/SEO"
import styled from "styled-components"
import Button from "../components/Button"
import Banner from "../components/Banner"

const Form = styled.div`
  margin: calc(var(--spacing) * 2) 0;

  @media (min-width: 1200px) {
    margin: calc(var(--spacing) * 4) 0;
  }
`

const FormLabel = styled.label`
  font-family: var(--serif);
  font-size: var(--h5);
  margin-bottom: var(--spacing);
  display: inline-block;
`

const FormInput = styled.input`
  height: 50px;
  width: 100%;
  margin-bottom: calc(var(--spacing) * 1.5);
  font-size: var(--para);
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.25);
`

const FormTextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  margin-bottom: calc(var(--spacing) * 1.5);
  font-size: var(--para);
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.25);
`

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Get in touch"
        description="Here's how to send me a message"
      />
      <Banner content="The door / inbox is always open" />
      <p>
        I have an <a href="/open-offer-to-help">open offer of help</a>, if you'd like to have a conversation about anything, please try a slot on my <a href="https://calendar.app.google/v6TX9oapZeCeBSuF9">open calendar</a>.
      </p>
      <br />
      <p>
        Alternatively, if you prefer, please free to email me on <em>this is suraj rai @ gmail . com</em>.
      </p>
      <p>
        I'm also reachable on <a href="https://www.linkedin.com/in/surajrai">LinkedIn here</a> however email is preferred.{" "}
      </p>
      <br />
      <p>
        👐{" "}
      </p>
    </>
  )
}

export default ContactPage
