import React, { useEffect } from "react"
import SEO from "../components/SEO"
import styled from "styled-components"

const IframeContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  iframe {
    width: 100%;
    border: none;
  }
`

const NewsletterPage = () => {
  useEffect(() => {
    const handleIframeMessage = (event) => {
      if (event.data && event.data.type === 'iframeHeight') {
        const iframe = document.querySelector('iframe');
        if (iframe) {
          iframe.style.height = `${event.data.height}px`;
        }
      }
    };

    window.addEventListener('message', handleIframeMessage);
    return () => window.removeEventListener('message', handleIframeMessage);
  }, []);

  return (
    <>
      <SEO title="Newsletter" />
      <h1>Short letters from Suraj</h1>
      <p>I write a short letter every week about what I'm thinking about, learning and making.</p>
      <p>If you'd like to receive these letters, please sign up below.</p>
      <br />
      <IframeContainer>
        <iframe 
          src="https://surajr.eo.page/hello" 
          title="short letters from Suraj"
          onLoad={() => {
            const iframe = document.querySelector('iframe');
            if (iframe) {
              iframe.contentWindow.postMessage('getHeight', '*');
            }
          }}
        />
      </IframeContainer>
    </>
  )
}

export default NewsletterPage
