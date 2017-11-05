import React from 'react';
import Head from 'next/head';
import { Amp } from 'react-amphtml';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Heading = styled.h1`
  font-family: serif;
`;

const Link = ({ className, children }) => (
  <a
    className={className}
    href="/link1">
    {children}
  </a>
)

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const defaultHeading = {
  text: 'Skill Sheet',
};

export default () => (
  <Container>
    <Head>
      <title>hrfmmymt</title>
    </Head>

    <Amp.State id="heading">{defaultHeading}</Amp.State>
    <Amp.Bind text="heading.text">
      <Heading>{defaultHeading.text}</Heading>
    </Amp.Bind>

    <StyledLink>link1</StyledLink>
  </Container>
);
