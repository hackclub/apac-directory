/**
 * @format
 * @jsxImportSource theme-ui
 */

import { Container, Box, Grid } from 'theme-ui';
import Link from 'next/link';
import { findIndex } from 'ramda';

const find_rank = (obj, dictionary) => {
  let rank = -1;

  dictionary.forEach(({ name }, idx) => {
    if (name === obj.name) rank = idx + 1;
  });
  return rank;
};

const Leaderboard = ({ data, original_data, ...props }) => {
  return (
    <Container
      {...props}
      sx={{
        bg: 'transparent',
        px: [2, 'initial'],
      }}
    >
      <Grid sx={{ py: [4], justifyItems: 'center' }} columns={[1, 1, 2, 3]}>
        {data.map(({ ...props }, index) => {
          return (
            <Card
              rank={find_rank(props, original_data)}
              key={index}
              {...props}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

const Card = ({ name, points, logo, path, ...props }) => {
  return (
    <Link href={`/club/${path}`} passHref>
      <Box
        as="a"
        sx={{
          textAlign: 'center',
          position: 'relative',
          boxShadow: '0px 1px 8px rgb(0 0 0 / 50%)',
          boxShadow: '0 4px 8px rgb(0 0 0 / 13%)',
          bg: 'black',
          pt: [2],
          pb: [4],
          borderRadius: [10],
          minWidth: [290],
          textDecoration: 'none',
          color: 'text',

          transition: '0.2s',
          '@media (pointer:fine)': {
            ':hover': {
              transform: 'scale(1.1)',
            },
          },

          // ":before":
          //   rank == 1
          //     ? {
          //         content: `""`,
          //         display: "block",
          //         width: [64],
          //         height: [64],
          //         backgroundImage:
          //           "url(https://cloud-hagknt1c6-hack-club-bot.vercel.app/0image.png)",
          //         backgroundRepeat: "no-repeat",
          //         backgroundSize: "contain",

          //         position: "absolute",
          //         right: [2],
          //         top: [-3],
          //         transform: "rotate(10deg)",
          //       }
          //     : null,
        }}
        {...props}
      >
        <p>
          <b> {name} </b>{' '}
        </p>
        <img
          src={logo}
          sx={{
            height: [64],
            width: [64],
            borderRadius: 'circle',
            //bg: "smoke",
            objectFit: 'cover',
          }}
        />
        <h4 sx={{ my: [0] }}>POINTS</h4>
      </Box>
    </Link>
  );
};

export default Leaderboard;
