import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import styled, { createGlobalStyle } from "styled-components";

// https://twitter.com/shl/status/1164326064249643008?s=19

// ACT LIKE IT

const colors = {
  text: "#001011",
  primary: "#63E2C6",
  background: "#FFFFFC",
  secondary: "#6EF9F5"
};

const Global = createGlobalStyle`
    *,*::after,*::before{
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    /* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Poppins Regular'), local('Poppins-Regular'), url(https://fonts.gstatic.com/s/poppins/v8/pxiEyp8kv8JHgFVrJJbecnFHGPezSQ.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Poppins Regular'), local('Poppins-Regular'), url(https://fonts.gstatic.com/s/poppins/v8/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Poppins Regular'), local('Poppins-Regular'), url(https://fonts.gstatic.com/s/poppins/v8/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Poppins Bold'), local('Poppins-Bold'), url(https://fonts.gstatic.com/s/poppins/v8/pxiByp8kv8JHgFVrLCz7Z11lFd2JQEl8qw.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Poppins Bold'), local('Poppins-Bold'), url(https://fonts.gstatic.com/s/poppins/v8/pxiByp8kv8JHgFVrLCz7Z1JlFd2JQEl8qw.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Poppins Bold'), local('Poppins-Bold'), url(https://fonts.gstatic.com/s/poppins/v8/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`;

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.background};
  color: ${colors.text};
  padding: 4rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  font-size: 4rem;
  font-weight: bold;
  border-bottom: 4px solid ${colors.primary};
  margin-left: 2rem;
  max-width: 50vw;
`;

const Text = styled.h1`
  padding: 2rem 0;
  margin: 0;
  font-size: 4rem;
  white-space: pre-wrap;

  display: flex;
  flex-wrap: wrap;
`;

const Advice = styled(Text)`
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  max-width: 500px;
  margin: 2rem 0;
  border: 4px solid ${colors.primary};
  box-shadow: 0 5px 10px 0 rgba(110, 249, 245, 0.4);
  transform: scale(0.98);
  transition: all 0.2s ease;
  border-radius: 4px;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  font-weight: bold;

  &:hover {
    box-shadow: 0 15px 15px 0 rgba(110, 249, 245, 0.4);
    transform: scale(1.1);
    cursor: pointer;
  }
`;

function Home(props) {
  const router = useRouter();
  const [dream, giveAdvice] = useState(props.dream);

  useEffect(() => {
    router.replace(dream ? `/?d=${dream}` : "/");
  }, [dream]);

  const submit = event => {
    event.preventDefault();

    const d = event.target.elements.dream.value;

    giveAdvice(d);
  };

  return (
    <Wrapper>
      <NextSeo
        title={`Act Like It! ${dream ? `- ${dream}` : ""}`}
        description="Get premium advice that is going to give you a completely new perspective on life."
        openGraph={{
          url: "https://advice.now.sh",
          title: "Act Like It!",
          description:
            "Get premium advice that is going to give you a completely new perspective on life.",
          images: [
            {
              url:
                "https://files-7cadzoip4.now.sh/Screen%20Shot%202019-08-22%20at%202.39.58%20PM.png",
              width: 232,
              height: 122,
              alt: "get some advice"
            }
          ]
        }}
        twitter={{
          handle: "@zealigan",
          site: "@zealigan",
          cardType: "summary_large_image",
          image: {
            url:
              "https://files-7cadzoip4.now.sh/Screen%20Shot%202019-08-22%20at%202.39.58%20PM.png",
            width: 232,
            height: 122,
            alt: "get some advice"
          }
        }}
      />
      <Global />
      {!dream ? (
        <Form onSubmit={submit}>
          <Text>
            I want to - <Input type="text" name="dream" />
          </Text>
          <Button>Get Advice</Button>
        </Form>
      ) : (
        <Advice>
          You want to {dream}? Act Like It!
          <Button onClick={() => giveAdvice(null)}>Get More Advice</Button>
        </Advice>
      )}
    </Wrapper>
  );
}

Home.getInitialProps = ctx => ({ dream: ctx.query.d });

export default Home;
