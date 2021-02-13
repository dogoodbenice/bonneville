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
        If you'd like to get in touch you can reach me on <em>suraj.rai@my.com</em>. I aim to reply as soon as I can.
      </p>
      <p>
        Alternatively please free to use a social platform to send me a message.{" "}
      </p>
    </>
  )
}

export default ContactPage
