/**
 * @format
 * @jsxImportSource theme-ui
 */

import { Container, Heading, Text } from 'theme-ui';

const Intro = ({ ...props }) => {
  return (
    <Container sx={{ textAlign: 'center' }} {...props}>
      <Heading sx={{ variant: 'subt' }}>may the force be with you</Heading>
      <Heading sx={{ variant: 'heading', color: 'red' }}>
        <span sx={{ variant: 'wavy' }}>Welcome </span>
      </Heading>
      <p sx={{ variant: 'para', mt: [3, 4] }}>
        The directory is a listing of Hack Clubs in the APAC region, click on a
        Hack Club to explore more about them!
      </p>
    </Container>
  );
};

export default Intro;
